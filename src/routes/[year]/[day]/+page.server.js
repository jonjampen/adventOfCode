import { readFile } from 'fs/promises';
import { existsSync } from 'node:fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export async function load({ params, fetch }) {
    // const filePath = `../../../solutions/${params.year}/${params.day}/solution.js`;
    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = dirname(__filename)
    // console.log(__dirname)

    const filePath = 'https://advent.jonjampen.ch/solution.txt';
    console.log(filePath);
    let fileData = ""
    console.log(existsSync(filePath))
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
