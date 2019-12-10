module.exports = (sequelize, DataTypes) => {
    let Checking = sequelize.define("Checking", {
      AccountNumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      dateCreated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    });
    Checking.associate = models => {
      // A checking account should belong to a user
      Checking.belongsTo(models.UserDetails, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Checking;
};