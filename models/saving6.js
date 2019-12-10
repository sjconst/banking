module.exports = (sequelize, DataTypes) => {
    let Saving6 = sequelize.define("Checking", {
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
    Saving6.associate = models => {
        Saving6.belongsTo(models.UserDetails, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return Saving6;
};