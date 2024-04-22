
console.log("Writing into a file");
const fs = require('fs')
// info.txt is a file
fs.writeFile(
    "info.txt1",
    "Let's write some word in nitesh",'utf8',
    async (err,data)=> {
        if (err) {
            return console.error(err);
        }
        // If no error the remaining code executes
        await console.log(data)
        console.log("Finished Writting");
        console.log("Reading the data that's written");
    }
);

fs.readFile('info.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return 
    }
    console.log(data)
})
