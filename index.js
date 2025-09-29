const express=require('express');
const app=express();
const {serverConfig,logger}=require('./src/config/index');

const apiRoutes=require('./src/routes');

app.use('/api',apiRoutes);

app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running in port : ${serverConfig.PORT}`);
    //logger.info('successfuly started server' ,{})
})