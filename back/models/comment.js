module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // mysql 한글에러방지
      collate: 'utf8mb4-general_ci', // mysql 한글저장
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
  };
  return Comment;
};
