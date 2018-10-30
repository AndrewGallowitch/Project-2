module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // grab user login from somewhere and this is their name
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resort_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
