const businessRules = (sequelize, DataTypes) => {
  const BusinessRules = sequelize.define(
    "businessRules",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      practice_id: {
        type: DataTypes.STRING,
      },
      filename_title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      version: {
        type: DataTypes.STRING,
      },
      filename: {
        type: DataTypes.STRING,
      },
      filepath: {
        type: DataTypes.STRING,
      },
    },

    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  BusinessRules.sync();
  return BusinessRules;
};

export default businessRules;
