module.exports = (sequelize, DataTypes) => {
    let Saving3 = sequelize.define("Checking", {
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
    Saving3.associate = models => {
        // A checking account should belong to a user
        Saving3.belongsTo(models.UserDetails, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Saving3;
};