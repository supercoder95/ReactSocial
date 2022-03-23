module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: 'utf8', // mysql 한글에러방지
      collate: 'utf8-general_ci', // mysql 한글저장
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.post);
    db.User.hasMany(db.Comment);
  };
  return User;
};
