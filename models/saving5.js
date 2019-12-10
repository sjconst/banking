module.exports = (sequelize, DataTypes) => {
    let Saving5 = sequelize.define("Checking", {
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
    Saving5.associate = models => {
        Saving5.belongsTo(models.UserDetails, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return Saving5;
};