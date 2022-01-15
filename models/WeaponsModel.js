const db = require('./conn');

class WeaponsModel{
    constructor(id, weapon_name, weapon_description, weapon_type, damage) {
        this.id = id;
        this.weapon_name = weapon_name;
        this.weapon_description = weapon_description;
        this.weapon_type = weapon_type;
        this.damage = damage;
    }

    static async getAllWeapons() {
        try {
            const query = `SELECT count(*), json_agg(jsonb_build_object('id', weapons.id, 'name', weapons.weapon_name)) as results FROM weapons;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getWeaponByName(weapon_name) {
        try {
            const query = `SELECT * FROM weapons WHERE weapon_name = '${weapon_name}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getWeaponById(weapon_id) {
        try {
            const query = `SELECT * FROM weapons WHERE id = '${weapon_id}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = WeaponsModel