// import { message } from 'antd';
import axios from 'axios';

type Message = {role: 'user' | 'model'; text: string}

export const sendMessage = async(message: Message[]):Promise<string> =>{
    const endpoint = `${import.meta.env.VITE_GEMINI_BASE_URL}?key=${import.meta.env.VITE_GEMINI_API_KEY}`;

    const res = await axios.post(endpoint, {
        contents: message.map(mess =>({
            role: mess.role,
            parts:[{text:mess.text}]
        }))
    });
    return  res.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response'
}