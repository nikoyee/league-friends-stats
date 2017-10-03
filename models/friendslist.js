'use strict';
module.exports = (sequelize, DataTypes) => {
  var FriendsList = sequelize.define('FriendsList', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        FriendsList.hasMany(models.Users);
      }
    }
  });
  return FriendsList;
};
