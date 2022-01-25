const db = require('./conn');

class HeroesModel {
    constructor(id, hero_name, role_id) {
        this.id = id;
        this.hero_name = hero_name;
        this.role_id = role_id;
    }

    static async getAllHeroes() {
        try {
            const query = `SELECT count(*), json_agg(jsonb_build_object('id', heroes.id, 'name', heroes.hero_name)) as results FROM heroes;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getHeroByHeroName(hero_name) {
        try {
            const query = `SELECT heroes.id, heroes.hero_name, heroes.hero_bio, roles.role, 
            json_agg(DISTINCT jsonb_build_object('affiliation', json_build_object('name', affiliations.affiliation, 'description', affiliations.affiliation_description))) as affiliations, 
            json_agg(DISTINCT jsonb_build_object('weapon', jsonb_build_object('name', weapons.weapon_name, 'description', weapons.weapon_description))) as weapons, 
            json_agg(DISTINCT jsonb_build_object('ability', jsonb_build_object('name', abilities.ability_name, 'type', abilities.ability_type, 'description', abilities.ability_description, 'cooldown', abilities.cooldown, 'duration', abilities.duration, 'effect', abilities.effect, 'damage', abilities.damage))) as abilities 
            FROM heroes 
            JOIN roles ON heroes.role_id = roles.id 
            INNER JOIN heroes_affiliations ON heroes.id = heroes_affiliations.hero_id 
            INNER JOIN affiliations ON affiliations.id = heroes_affiliations.affiliation_id 
            INNER JOIN heroes_weapons ON heroes.id = heroes_weapons.hero_id 
            INNER JOIN weapons ON weapons.id = heroes_weapons.weapon_id 
            INNER JOIN heroes_abilities ON heroes.id = heroes_abilities.hero_id 
            INNER JOIN abilities ON abilities.id = heroes_abilities.ability_id  
            WHERE heroes.hero_name = '${hero_name}' GROUP BY heroes.id, heroes.hero_name, roles.role;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getHeroByHeroId(hero_id) {
        try {
            const query = `SELECT heroes.id, heroes.hero_name, roles.role, 
            json_agg(DISTINCT jsonb_build_object('affiliation', json_build_object('name', affiliations.affiliation, 'description', affiliations.affiliation_description))) as affiliations, 
            json_agg(DISTINCT jsonb_build_object('weapon', jsonb_build_object('name', weapons.weapon_name, 'description', weapons.weapon_description))) as weapons, 
            json_agg(DISTINCT jsonb_build_object('ability', jsonb_build_object('name', abilities.ability_name, 'type', abilities.ability_type, 'description', abilities.ability_description, 'cooldown', abilities.cooldown, 'duration', abilities.duration, 'effect', abilities.effect, 'damage', abilities.damage))) as abilities 
            FROM heroes 
            JOIN roles ON heroes.role_id = roles.id 
            INNER JOIN heroes_affiliations ON heroes.id = heroes_affiliations.hero_id 
            INNER JOIN affiliations ON affiliations.id = heroes_affiliations.affiliation_id 
            INNER JOIN heroes_weapons ON heroes.id = heroes_weapons.hero_id 
            INNER JOIN weapons ON weapons.id = heroes_weapons.weapon_id 
            INNER JOIN heroes_abilities ON heroes.id = heroes_abilities.hero_id 
            INNER JOIN abilities ON abilities.id = heroes_abilities.ability_id  
            WHERE heroes.id = ${hero_id} GROUP BY heroes.id, heroes.hero_name, roles.role;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    //change response to only return id, name, bio?
    static async getHeroesByRole(role) {
        try {
            const query = `SELECT count(*), json_agg(jsonb_build_object('id', heroes.id, 'name', heroes.hero_name)) as results FROM heroes INNER JOIN roles ON heroes.role_id = roles.id WHERE roles.role = '${role}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports =  HeroesModel;