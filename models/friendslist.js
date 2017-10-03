'use strict';
module.exports = (sequelize, DataTypes) => {
  var FriendsList = sequelize.define('FriendsList', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        FriendsList.belongsTo(models.Users);
      }
    }
  });
  return FriendsList;
};
