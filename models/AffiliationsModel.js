const db = require('./conn');

class AffiliationsModel {
    constructor(id, affiliation, affiliation_description) {
        this.id = id;
        this.affiliation = affiliation;
        this.affiliation_description = affiliation_description;
    }

    static async getAllAffiliations() {
        try {
            const query = `SELECT count(*), json_agg(jsonb_build_object('id', affiliations.id, 'name', affiliations.affiliation)) as results FROM affiliations;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAffiliationByName(affiliation_name) {
        try {
            const query = `SELECT affiliations.id, affiliations.affiliation, affiliations.affiliation_description, jsonb_build_object('count', count(*), 'list', json_agg(heroes.hero_name)) AS affiliates FROM affiliations INNER JOIN heroes_affiliations ON affiliations.id = heroes_affiliations.affiliation_id INNER JOIN heroes ON heroes.id = heroes_affiliations.hero_id WHERE affiliations.affiliation = '${affiliation_name}' GROUP BY affiliations.id;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAffiliationById(affiliation_id) {
        try {
            const query = `SELECT affiliations.id, affiliations.affiliation, affiliations.affiliation_description, jsonb_build_object('count', count(*), 'list', json_agg(heroes.hero_name)) AS affiliates FROM affiliations INNER JOIN heroes_affiliations ON affiliations.id = heroes_affiliations.affiliation_id INNER JOIN heroes ON heroes.id = heroes_affiliations.hero_id WHERE affiliations.id = ${affiliation_id} GROUP BY affiliations.id`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = AffiliationsModel;