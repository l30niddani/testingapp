const mysql = require('./../database/mysql');
const md5 = require('md5');
const  jwt = require('jsonwebtoken');


exports.getUsers =(req,res)=>{

     let username = req.body.username;
     let password = req.body.password;
     let passwordMd5 = md5(password);

     let query = "SELECT `user`.id, `user`.username, `user`.`password` FROM `user` WHERE `user`.username = '"+username+"' AND `user`.`password` = '"+passwordMd5+"'";

     mysql.query(query,(err,result,fields)=>{
         if (error){
             res.status(400).json({
                message : "Query Error"
             });
         };
         if (result[0].id != ''){
             res.status(400).json({
                 message : "User not found"
             });
         }
         let toEncrypt = result[0].id + result[0].username + result[0].password;
         let token = jwt.sign(toEncrypt,"SecretKey");
         res.status(200).json({
             token: token
         });
     });
};

exports.setUsers = (req,res)=>{

    let username = req.body.username;
    let password = req.body.password;
    let passwordMd5 = md5(password);

    let query = "INSERT INTO `testapp`.`user` (`username`, `password`) VALUES('"+username+"','"+passwordMd5+"');";

    mysql.query(query,(err,result)=>{
        if (err) throw err;
        console.log("1 row inserted");

        res.sendStatus(200).json({
            message : "User added Succesfuly"
        })
    });
};