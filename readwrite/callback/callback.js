console.log("Writing into a file");
// const { isUtf8 } = require('buffer');
const file = require('fs')

// infor.txt is a file
file.writeFile(
    'infor.txt',
    'Heyy Sidd, Welcome to Sydney',
    'utf-8',
    (err) => {
        if (err){
            return console.error(err);
        }
        // If no error, the code will execute
        file.readFile('infor.txt', 'utf-8',(err, data) => {
            if (err){
                console.error(err);
                return;
            }
            console.log(data);
            console.log("Finished Writing");
            console.log("Reading the data that's written");
        });
    }
);
