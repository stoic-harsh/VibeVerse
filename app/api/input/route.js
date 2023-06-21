import { NextResponse } from "next/server";

const generatePrompt = require('./prompt');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.CHATGPT_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req){
    try{
        const data = await req.json();
        const prompt = generatePrompt(data.prompt);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 1,
            max_tokens: 60,
        });
        
        if(response){
            return NextResponse.json({
                result: response.data.choices[0] 
            });
        }

    }catch(err){
        return NextResponse.json({
            message: err.message
        });
    }
}