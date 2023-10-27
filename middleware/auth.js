const jwt=require('jsonwebtoken')
const secret_key="Prince";

const auth=(req,res,next)=>{

    const BearerToken=req.headers["authorization"]
    if(BearerToken){
        const token=BearerToken.split(" ")[1];
        const validate=jwt.verify(token,secret_key)
        if(validate){
            next()
        }
        // res.send({msg:"user not authorized"})
    
    }
return res.send({msg : "user not allowed"})

// console.log(token, "token")

}

module.exports=auth;

// const BearerToken=req.headers["authorization"]
// if(BearerToken){
//     const token=BearerToken.split(" ")[1];
//     const validate=jwt.verify(token,secret_key)
//     if(validate){
//         next()
//     }
//     res.send({msg :"unauthorized user"})
// }
// return res.send({msg:"user not allowed"})
