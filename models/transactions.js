module.exports = (sequelize, DataTypes) => {
    let Transaction = sequelize.define("Transaction", {
        TransactionID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        FROM: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        TO: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    });
    Transaction.associate = models => {
        Transaction.belongsTo(models.UserDetails, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return Transaction;
};