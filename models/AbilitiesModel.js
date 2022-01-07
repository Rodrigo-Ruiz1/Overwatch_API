const db = require('./conn');

class AbilitiesModel {
    constructor(id, ability_name, ability_type, ability_description, cooldown, duration, effect, damage) {
        this.id = id;
        this.ability_name = ability_name;
        this.ability_type = ability_type;
        this.ability_description = ability_description;
        this.cooldown = cooldown;
        this.duration = duration;
        this.effect = effect;
        this.damage = damage;
    }

    static async getAllAbilities() {
        try {
            const query = `SELECT count(*), json_agg(jsonb_build_object('id', id, 'name', ability_name, 'type', ability_type, 'description', ability_description, 'cooldown', cooldown, 'duration', duration, 'effect', effect, 'damage', damage)) as results FROM abilities;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAbilityById(ability_id) {
        try {
            const query = `SELECT * FROM abilities WHERE id = ${ability_id};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAbilityByName(ability_name) {
        try {
            const query = `SELECT * FROM abilities WHERE ability_name = '${ability_name}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = AbilitiesModel;