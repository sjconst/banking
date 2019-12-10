module.exports = (sequelize, DataTypes) => {
    let Saving1 = sequelize.define("Checking", {
        AccountNumber: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Balance: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    });
    Saving1.associate = models => {
        // A checking account should belong to a user
        Saving1.belongsTo(models.UserDetails, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Saving1;
};