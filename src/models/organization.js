"use strict";
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    "Organization",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {}
  );
  Organization.associate = function (models) {
    // associations can be defined here
  };
  return Organization;
};
