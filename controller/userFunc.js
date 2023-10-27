// const array = []
// const bcrypt=require('bcrypt')

// const register =(req,res)=>{
// const data =req.body;
// const details = array.find(item=>{
//    if(item.email===data.email){
//     return item
//    }
// });
// if(details){
//     return res.send({msg : 'user already registered with this data'})
// }
// const hashpassword = bcrypt.hashSync(data.password,10);
// const tempboj={
//     email:data.email,
//     password: hashpassword
// }

// array.push(tempboj)
// console.log(array)
// }

// const login =(req,res)=>{
// const logindata=req.data;
// const logindetails=array.find(item=>{
//     if(item.email === logindata.email){
//         return item
//     }
// });
// if(logindetails){
//     if(logindetails.password === logindata.password){
//         return res.send({msg: 'user logged IN'});
//     }
//     else{
//         return res.send({msg :'password is incorrect'})
//     }
// }

// else{
//     console.log('email is wrong')
// }
// console.log(array)

// console.log("login data",logindata)
// }

// module.exports={register,login}

const array=[] //database
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken') // importing JWT token
const secret_key="Prince";

const register=(req,res)=>{
    const data=req.body;
    const detail=array.find((item)=>{
        if(item.email===data.email){
            return item
        }
    });
    if (detail){
        return res.send ({message:"user already registered"})
    }
    //saltround
    // const saltround=bcrypt.genSaltSync(1)
    // console.log(saltround)
    //hashpassword
    const hashpassword=bcrypt.hashSync(data.password,10)
    // console.log(hashpassword)
    // res.send(hashpassword)
    const temobj={
        email:data.email,
        password:hashpassword
    }
    array.push(temobj) //data saved in DB
    const token=jwt.sign({useremail:data.email}, secret_key,{expiresIn:"360000"}) //for generating the jwt token
    console.log(token)
    res.send({msg:'user registered',token:token});
    // console.log(array)
    // array.push(data)
    // console.log(array)
}
const login=(req,res)=>{
    const logindata=req.body;
    // console.log("login details",logindata)
    const detail=array.find((item)=>{
        if(item.email===logindata.email)
        return item
    })
    // console.log(detail)
    if(detail){
        const validate=bcrypt.compareSync(logindata.password,detail.password)//true or false
        if (validate){
            const token=jwt.sign({useremail:logindata.email}, secret_key,{expiresIn:"360000"}) //for generating the jwt token
            console.log(token)
            res.send({msg:'user login successfully',token:token});

            return res.send('user logged in successfully')
        }
       else{
        return res.send("user password is wrong")
       }
    //         if (detail.password===logindata.password){
    //             return res.send ({message:"user logged IN"})
    //         }
    //         else{
    //            return res.send ({message:"password is wrong"})
    //         }
    // }
    // else{
    //     return res.send ("email is wrong")
    //   }
}
else{
    console.log("email is wrong")
    return res.send("user password is wrong")
   }
}
module.exports={register,login}