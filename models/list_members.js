module.exports = (sequelize, DataTypes) => {
  const ListMember = sequelize.define('ListMember', {
    name: DataTypes.STRING,
    
  });

  ListMember.associate = (models) => {
    ListMember.hasMany(models.GiftItem, {
      onDelete: 'CASCADE',
    });
  };

  return ListMember;
};