
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user_data", {
     name:{
       type:DataTypes.STRING,
       allowNull:false,
       primaryKey:true,
       validate:{
         len:[1,30]
       }
     },
     password:{
       type:DataTypes.STRING,
       allowNull:false,
       len:[8,16]
     }
  
    },{
      timestamps:false
    });
    return user;
};