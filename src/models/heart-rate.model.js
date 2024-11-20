"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HeartRate extends Model {
    static associate(models) {
    }
  }

  HeartRate.init(
    {
      low: {
        type: DataTypes.FLOAT,
      },
      high: {
        type: DataTypes.FLOAT,
      },
      patient_id: {
        type: DataTypes.STRING,
      },
      from_date: {
        type: DataTypes.DATE,
      },
      to_date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "heart_rates",
      timestamps: false,
      underscored: true,
    }
  );
  return HeartRate;
};
