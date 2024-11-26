/*
***********************************
Lecture 1: learn on and readline;
***********************************
const readline =require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout});
    var namer='';
    rl.question(`what is your name :`,(name)=>{namer=name;console.log(`your name is ${name}`),rl.close();})
    rl.on('close',()=>{console.log(`Interface completed by ${namer}`),process.exit(0)}
    )*/

    /*Lecture 2: write the code syncronization;

   const readline =require('readline');
   const fs=require('fs');
   fs.writeFileSync('index.txt','hello guys')
   const log=fs.readFileSync("\index.txt",'utf-8')
   console.log(log);
   fs.readFile('/index.txt','utf-8',(err,data1)=>{console.log(data1);
      fs.readFile(`/${data1}.txt`,'utf-8',(err,data2)=>{console.log(data2);
        fs.readFile(`/append.txt`,'utf-8',(err,data3)=>{console.log(data3);
           fs.writeFile('/final.txt',`${data2}\n\n${data3}`,()=>{console.log('File is written')
        });
        })
   })
   })*/
   
   /*fs.writeFile('log.txt','Output',()=>{
    console.log("sucessed");
   })*/
   //fs.writeFile(`${log}`)
   const readline =require('readline');
   const fs=require('fs');
   fs.writeFile('log.txt', 'Output', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Successfully wrote to log.txt');

        // Read the file after it has been written
        fs.readFile('log.txt', 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
            } else {
                console.log(data)
            }
        });
    }
});