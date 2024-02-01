const fs = require('fs');
//creating a folder
fs.mkdir('./myFolder', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Folder created successfully');
    }
})
//writeFile()
const data = "Hare Krishna krishna bandu"
// fs.writeFile('./myFolder/text.txt', data, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     } else{
//         console.log("Written to the file successfully")
//     }
// })
//In case you don't want the previous data to get deleted everytime you run it.
fs.writeFile('./myFolder/myFile.txt', data, {flag: 'a'}, (err) => {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Writen to file successfully!');
    }
})
//readFile

