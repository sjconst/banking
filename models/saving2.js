module.exports = (sequelize, DataTypes) => {
    let Saving2 = sequelize.define("Checking", {
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
    Saving2.associate = models => {
        // A checking account should belong to a user
        Saving2.belongsTo(models.UserDetails, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return Saving2;
};