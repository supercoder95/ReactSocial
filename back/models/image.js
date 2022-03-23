module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      src: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      charset: 'utf8', // mysql 한글에러방지
      collate: 'utf8-general_ci', // mysql 한글,이모티콘 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
