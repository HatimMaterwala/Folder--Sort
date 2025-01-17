// Let's Do it

// const fs = require('fs');
// const path = require('path');

// const Folder = `Folder`

// const getFiles = (Folder) => {
//     let diffFiles = [];
//     let sameFiles = [];
//     let files = fs.readdirSync(Folder);
//     let extNames = [];

//     for (let file of files) {
//         let ext = file.split('.')[1];
//         if(ext && !extNames.includes(ext)){
//             extNames.push(ext);
//         }
//     }

//     for(let extName of extNames){
//         fs.mkdirSync(`./${Folder}/${extName}`);
//     }

//     for(let i = 0 ; i < extNames.length; i++){
//         for(let file of files){
//             if(file.split('.')[1]==extNames[i]){
//                 sameFiles.push(file);
//                 fs.renameSync(path.join(Folder, file), path.join(`./Folder/${extNames[i]}/`, file));
//             }
//         }
//         diffFiles.push(sameFiles);
//         sameFiles = [];
//     }

//     console.log('Files sorted into separate folders based on their extensions:', diffFiles);
// }

// getFiles(Folder);

//Harry Bhai Ka code

// import fs from "fs/promises"
// import fsn from "fs"
// import path from "path"

// const basepath = "C:\\Users\\hatim\\Desktop\\Downloads"

// let files = await fs.readdir(basepath)

// console.log(files)

// for (const item of files) {
//     console.log("running for ", item)
//     let ext = item.split(".")[item.split(".").length - 1]
//     if (ext != "js" && ext != "json" && item.split(".").length > 1) {


//         if (fsn.existsSync(path.join(basepath, ext))) {
//             // Move the file to this directory if its not a js or json file
//             fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
//         }
//         else {
//             fs.mkdir(`${basepath}/${ext}`)
//             fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
//         }
//     }

// }

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "C:\\Users\\hatim\\Downloads";

try {
    let files = await fs.readdir(basepath);
    console.log(files);

    for (const item of files) {
        console.log("Running for:", item);
        
        let ext = path.extname(item).slice(1); 
        
        if (ext !== "js" && ext !== "json" && ext) {
            const targetDir = path.join(basepath, ext);

            if (!fsn.existsSync(targetDir)) {
                fsn.mkdirSync(targetDir, { recursive: true });
            }

            await fs.rename(path.join(basepath, item), path.join(targetDir, item));
            console.log(`Moved ${item} to ${targetDir}`);
        }
    }
} catch (error) {
    console.error("Error processing files:", error);
}
