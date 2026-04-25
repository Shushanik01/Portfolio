import axios from 'axios';
import fs, { readFile } from 'fs/promises';

const endpoint = `${process.env.GEMINI_BASE_URL}?key=${process.env.GEMINI_API_KEY}`;

const createCvInfo = async ()=>{
    try{
        const prompt = await readFile('src/api/prompt.txt', 'utf-8')
        const res = await axios.post(endpoint,{
            contents: [{parts: [{text: prompt}]}]
        })

    const text = res.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No content';
        await fs.writeFile('src/api/cv.md', text)
    } catch(err){
        console.log(err.message);
        console.log(err.response?.data);
    }
}
 createCvInfo();