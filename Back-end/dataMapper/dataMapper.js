const client = require('../database');

const dataMapper = {

  async getAllCrewMembers() {
    const sql = 'SELECT * FROM crew_members ORDER BY name';
    const result = await client.query(sql);
    return result.rows;
  },

  async addNewCrewMate(id, name) {
    console.log(id, name);
    const sql = {
      text: 'INSERT INTO "crew_members" ("id", "name") VALUES ($1, $2)',
      values: [id, name],
    };
    const result = await client.query(sql);
    return result;
  },

};

module.exports = dataMapper;
