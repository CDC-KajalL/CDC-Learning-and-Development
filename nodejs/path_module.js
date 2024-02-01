const path = require("path")
const myPath = 'CDC-Learning-and-Development/nodejs/os_module.js'
// path.basename(myPath): The basename() function accepts a path and returns the last part of that path. 
// path.dirname(myPath): The dirname() function selects the last part of the path provided to it and returns the path to it's parent's directory.
// path.extname(myPath): This function checks for any extension on the last part of the provided path and it returns the file extension (if it exists), otherwise it returns an empty string: ''.
// path.isAbsolute(myPath): This tells whether the provided path is absolute or not. On Unix-based systems (such as macOS and Linux), an absolute path always starts with the forward slash (/). 
// path.parse(myPath): This function accepts a path and returns an object which contains a detailed breakdown of the path provided to it. Here is what it returns when we provide the myPath variable to it:
// 1. root: The root of the path (in this case, /).
// 2. dir: The directory of the file (in this case, /mnt/c/Desktop/NodeJSTut).
// 3. base: The base file name (in this case, app.js).
// 4. ext: The file extension (in this case, .js).
// 5. name: The base name of the file, without the extension (in this case, app).
const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath)
}
console.log(pathInfo)