
module.exports = function (sequelize, DataTypes) {
  var Resort = sequelize.define("Resort", {
    ResortName: DataTypes.STRING,
    Continent: DataTypes.STRING,
    Country: DataTypes.STRING,
    State: DataTypes.STRING,
    Url: DataTypes.STRING,
    Altitude: DataTypes.INTEGER,
    Easy: {
      type: DataTypes.DECIMAL(5, 2)
    },
    Intermediate: {
      type: DataTypes.DECIMAL(5, 2)
    },
    Difficult: {
      type: DataTypes.DECIMAL(5, 2)
    },
    AdultPrice: {
      type: DataTypes.DECIMAL(7, 2)
    },
    YouthPrice: {
      type: DataTypes.DECIMAL(7, 2)
    },
    ChildPrice: {
      type: DataTypes.DECIMAL(7, 2)
    },
    ResortSize: {
      type: DataTypes.DECIMAL(7, 2)
    },
    VarietyOfRuns: {
      type: DataTypes.DECIMAL(7, 2),
      defaultValue: 0.0
    },
    LiftsAndCableCars: {
      type: DataTypes.DECIMAL(7, 2)
    }
  },
  {
    timestamps: false
  });


  return Resort;
};
