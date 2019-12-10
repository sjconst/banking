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
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate : {
                len: [6]
            }
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    });
    return UserDetails;
};