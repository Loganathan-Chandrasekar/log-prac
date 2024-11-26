/*const { readFileSync ,readFile,createReadStream,writeFile,writeFileSync} = require('fs');
const http = require('http');
const server=http.createServer((rq,rs)=>{
    writeFile('user.txt','lllll',()=>{console.log('writed')
        readFile('user.txt','utf-8',(err,data)=>{if(err){console.log(err);
        }
        console.log("File content:", data)})
    })});
server.listen(3000,'127.0.0.1',()=>{console.log('server started');
 })
write the file Async to read the file
*/