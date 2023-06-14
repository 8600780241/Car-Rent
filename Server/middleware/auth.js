const jwt = require("jsonwebtoken")


module.exports = (req, res, next) => {
    console.log("Auth middleware reached")
    try{
        if(!req.headers.authorization){
            res.send("Not Found")
        }
        const token = req.headers.authorization;
        const verifiedToken = jwt.verify(token, "10X_ACADEMY", (err,payload) => {
            if(err) {
                res.json({message : "You must log in"})
            }
            req.AdminId = payload.id
        })
        next();
    }
    catch{
        res.json({
            message : "Authorization failed"
        })
    }
}
