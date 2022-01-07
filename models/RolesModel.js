const db = require('./conn');

class RolesModel {
    constructor(id, role, role_description) {
        this.id = id;
        this.role = role;
        this.role_description = role_description;
    }

    static async getAllRoles() {
        try {
            const query = `SELECT count(*), json_agg(jsonb_build_object('id', roles.id, 'name', roles.role, 'description', roles.role_description)) as results FROM roles;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getRoleById(role_id) {
        try {
            const query = `SELECT roles.id, roles.role, roles.role_description, jsonb_build_object('count', count(*), 'list', json_agg(heroes.hero_name)) AS heroes FROM roles INNER JOIN heroes ON heroes.role_id = roles.id WHERE roles.id = ${role_id} GROUP BY roles.id;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getRoleByName(role_name) {
        try {
            const query = `SELECT roles.id, roles.role, roles.role_description, jsonb_build_object('count', count(*), 'list', json_agg(heroes.hero_name)) AS heroes FROM roles INNER JOIN heroes ON heroes.role_id = roles.id WHERE roles.role = '${role_name}' GROUP BY roles.id;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = RolesModel;