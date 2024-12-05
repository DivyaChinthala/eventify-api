"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    "Ticket",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      ticket_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      purchase_date: {
        type: DataTypes.TIMESTAMP,
        default: NOW(),
      },
    },
    {}
  );
  Ticket.associate = function (models) {
    // associations can be defined here
  };
  return Ticket;
};
