import { readFile } from 'fs/promises';

export async function load({ params, fetch }) {
    const filePath = `src/solutions/${params.year}/${params.day}/solution.js`;
    const fileData = readFile(filePath, 'utf8', (err, data) => {
        if (err) console.error(err);
        console.log(data);
        return data
    })
    return {
        code: fileData,
        year: params.year,
        day: params.day,
    }
}