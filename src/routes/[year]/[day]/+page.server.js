import path from 'path'
import { BASE_URL } from '$env/static/private'

export async function load({ params }) {
    console.log(!isNaN(parseInt(params)))
    if (!isNaN(parseInt(params.year))) { // not for /solutions/2023-01.txt (in the static folder)

        const filePath = `${BASE_URL}solutions/${params.year}-${params.day}.txt`;
        let fileData = ""
        fileData = await fetch(filePath)
        fileData = await fileData.text()
        return {
            code: fileData,
            year: params.year,
            day: params.day,
        }
    }
}
