const express = require('express'); 
  
 const server = express(); 
  
 server.all('/', (req, res) => { 
   res.send('Hello,world!') 
 }); 
  
 function keepAlive() { 
   server.listen(3000, () => { 
       console.log('server ready!') 
   }); 
 } 
  
 module.exports = keepAlive;
