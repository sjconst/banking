module.exports = (sequelize, DataTypes) => {
    let UserDetails = sequelize.define("UserDetails", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        First_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Last_Name: {
            type: DataTypes.STRING,
            allowNull: false         
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,          
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate : {
                len: [6]
            }
        },
        Checking_Balance: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Saving_Balance: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
    return UserDetails;
};