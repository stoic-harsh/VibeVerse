import { NextResponse } from "next/server";
const qs = require('qs');

export async function POST(req){
    try{

        const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
        const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
        const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');
        
        
        const getToken = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth_token}`,
                'Content-Type': 'application/x-www-form-urlencoded' 
            },
            body: qs.stringify({'grant_type': 'client_credentials'})
        });

        if(getToken.ok){
            
            const { access_token } = await getToken.json();
            
            const { sentence } = await req.json();

            var index = sentence.indexOf("seem");
            
            if(index === -1)
            throw new Error("no emotion detected");

            const emotion = sentence.substring(index+5, sentence.indexOf('.'));

            const url = `https://api.spotify.com/v1/search?q=${emotion}&type=playlist&market=IN&limit=20`;

            const response = await fetch(url,{
                headers:{
                    "Authorization": `Bearer ${access_token}`
                }
            });
            
            if(response.ok){

                const spotifyData = await response.json();
                return NextResponse.json({
                    playlists: spotifyData.playlists.items
                })

            }else{
                throw new Error("App has exceeded rate limits or expired token");
            }
        }

        else{
            throw new Error("Failed to generate auth_token");
        }
        
}
    catch(err){
        throw new Error(err.message);
    }
}