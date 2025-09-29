const info=(req,res)=>{
    return res.json({
        success:true,
        massage:'Api is run',
        error:{},
        data:{}
    })
}


module.exports={
    info
}