const { Menu } = require('../models/Menu');

const resolvers = {
  Query: {
    menuItems: async () => {
      return await Menu.find({})
    },

    menuItem: async (parent, {menuId}) => {
        return await Menu.findOne({_id: menuId})
    }
  }
};

module.exports = resolvers;