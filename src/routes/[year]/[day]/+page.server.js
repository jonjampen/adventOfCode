import { readFile } from 'fs/promises';
import { existsSync } from 'node:fs';


export async function load({ params, fetch }) {
    const filePath = `src/solutions/${params.year}/${params.day}/solution.js`;
    let fileData = ""
    if (existsSync(filePath)) {
        fileData = readFile(filePath, 'utf8', (err, data) => {
            if (!err && data) {
                console.log("hey", data);
                return data
            }
            console.log("hello", err);
        })
    }

    return {
        code: fileData,
        year: params.year,
        day: params.day,
    }
}
