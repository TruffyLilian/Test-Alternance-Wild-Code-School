const client = require('../database');

const dataMapper = {

  async getAllCrewMembers() {
    const sql = 'SELECT * FROM crew_members ORDER BY name';
    const result = await client.query(sql);
    console.log(result.rows);
    return result.rows;
  },
};

module.exports = dataMapper;
