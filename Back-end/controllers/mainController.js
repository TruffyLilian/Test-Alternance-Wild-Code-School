const dataMapper = require('../dataMapper/dataMapper');

const mainController = {

  async homePage(req, res) {
    try {
      const crewMembers = await dataMapper.getAllCrewMembers();
      res.json(crewMembers);
    } catch (error) {
      console.log(error);
    }
  },

  async addCrewMate(req, res) {
    try {
      const { name, id } = req.body;
      console.log(req.body.name);
      const addMembers = await dataMapper.addNewCrewMate(id, name);
      res.status(201).json(addMembers);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = mainController;
