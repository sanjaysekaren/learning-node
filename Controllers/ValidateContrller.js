 const DBconnectivity= require("../Utils/UtilMethod")
 
 exports.validate_length = async(req,res) => {
     var client=DBconnectivity.getDBConnection()
     try{
        var result= await client.query("SELECT * FROM USERDETAILS");
        res.send(result.rows[0]);
        
             
         
     }
     finally{
         client.end();
     }
 }