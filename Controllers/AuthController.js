const DBConnectivity = require("../Utils/UtilMethod")

exports.  login = async(req,res) => {
    var client = DBConnectivity.getDBConnection();
    try{
        var result= await client.query('SELECT * FROM USERDETAILS');
        res.send(result.rows)

    }
    catch{

    }
    finally{
        client.end();
    }
}

exports.signup = async (req,res) => {
    //var client=DBConnectivity.getDBConnection();
    try{
        res.send("sign up page")
    }
    catch{

    }
}