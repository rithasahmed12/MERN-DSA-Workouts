const fs = require('fs');
let content = new Date().toString()

// 1.Write current date and time to a file using FS module
fs.writeFile(
    'sample.txt',
    content,
    (err)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("file written successfullt");
        }
    }
)

// 2. get status and info about a file
fs.stat('sample.txt',(err,stat)=>{
    if(err){
        console.log(err.message);
    }
    console.log(stat);
});

// 3- fs: getting list of files in a directory
fs.readdir('../Node',(err,files)=>{
    if(err){
        console.log(err);
    }
    console.log(files);
})

// 4.Delete  contents of a file
// fs.truncate('./sample.txt',0,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// 5. Read from a file and write to another file
fs.readFile('./sample.txt','utf-8',(err,content)=>{
    if(err){
        console.log(err);
    }
    console.log('File read successfully');
    fs.writeFile('right.txt',content,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file read and written succesfully");
    })
})

