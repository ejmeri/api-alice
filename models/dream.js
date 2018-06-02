module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Dream", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING(2000),
			allowNull: false
        }
    });
};