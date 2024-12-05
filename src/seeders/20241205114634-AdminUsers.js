const crypto = require("crypto");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("Users", [
      {
        name: "Super Admin",
        email: process.env.SUPER_ADMIN_EMAIL,
        password: crypto
          .createHash("md5")
          .update(process.env.SUPER_ADMIN_PASSWORD)
          .digest("hex"),
        role: "SUPER_ADMIN",
        organization_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {}),
};
