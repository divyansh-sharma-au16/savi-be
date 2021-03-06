const practice = (sequelize, DataTypes) => {
  const Practice = sequelize.define(
    "practice",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      practice_logo: {
        type: DataTypes.STRING,
      },
      practice_name: {
        type: DataTypes.STRING,
      },
      client_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      postal_code: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      created_by: {
        type: DataTypes.STRING,
      },
    },

    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  Practice.sync();
  return Practice;
};

export default practice;
