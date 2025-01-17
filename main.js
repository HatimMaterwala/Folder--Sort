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
