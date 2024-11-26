
const { readFileSync } = require('fs');
const { readFile } = require('fs');
const http=require('http')
const html=readFileSync('product.html','utf-8')
let productpage=readFileSync('index.html','utf-8')
const url=require('url');
const pro=JSON.parse(readFileSync('product.json','utf-8'));


let prodArray=pro.map((p)=>{
    let out=productpage.replace('{{%IMAGE%}}',p.productImage)
    out=out.replace('{{%NAME%}}',p.name)
    out=out.replace('{{%MODELNAME%}}',p.modeName)
    out=out.replace('{{%MODELNO%}}',p.modelNumber)
    out=out.replace('{{%SIZE%}}',p.size)
    out=out.replace('{{%CAMERA%}}',p.camera)
    out=out.replace('{{%PRICE%}}',p.price)
    out=out.replace('{{%COLOR%}}',p.color)
    out=out.replace('{{%ID%}}',p.id)
    return out;})

const server=http.createServer((req,res)=>{
    const {query,pathname:path}=url.parse(req.url,true);
    if(path.toLocaleLowerCase()==='/home')
        {
       res.writeHead(200,{'Content-Type':'text/html','my-header':'hello,world'});
       res.end(html.replace('{{%CONTENT%}}','home page'))

        }
            
        else if(path.toLocaleLowerCase()==='/about')
        {
                res.writeHead(200,{'Content-Type':'text/html','my-header':'helloo,world'});
                res.end(html.replace('{{%CONTENT%}}','yes;'));
                
         }
         else if(path.toLocaleLowerCase()==='/products')
        {
            if(!query.id){
                let respro=html.replace('{{%CONTENT%}}',prodArray.join(','))
                 res.writeHead(200,{'Content-Type':'text/html','my-header':'helloo,world'});
                 res.end(respro);}else{res.end('logger no available in this id'+query.id)};

         }
         else{ res.end(html.replace('{{%CONTENT%}}','hello coder'))}})
    
   

server.listen(8000,'127.0.0.1',()=>{console.log('hello started');
})
// readFile('product.json','utf-8',(err,data)=>{
  //  res.writeHead(200,{'Content-Type':'application/json','my-header':'hello,world'}),