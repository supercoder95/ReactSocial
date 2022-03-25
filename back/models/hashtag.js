module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    'Hashtag',
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // mysql 한글에러방지
      collate: 'utf8mb4_general_ci', // mysql 한글,이모티콘 저장
    }
  );
  Hashtag.asscoiate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
};
