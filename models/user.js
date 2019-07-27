
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user_data", {
     user_name:{
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
     },
     business_name:{
       type:DataTypes.STRING,
       allowNull:false
     },
     site_street:{
        type:DataTypes.STRING,
        allowNull:false
     },
     site_city_state_zip:{
       type:DataTypes.STRING,
       allowNull:false
     },
     business_hq_street:{
       type:DataTypes.STRING,
       allowNull:false
     },business_city_state_zip:{
      type:DataTypes.STRING,
      allowNull:false
    }

  
    },{
      timestamps:false
    });
    return user;
};