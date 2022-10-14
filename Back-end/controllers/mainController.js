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
};

module.exports = mainController;
