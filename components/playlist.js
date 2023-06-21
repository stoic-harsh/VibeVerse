import Card from './card';
import { Grid } from '@mui/material';
import { Slackside_One } from 'next/font/google';
import { LibraryMusic } from '@mui/icons-material';

const slackside = Slackside_One({
    subsets: ['latin'],
    weight: '400'
});

const Playlist = () =>{
    const obj = [
        { num: 1},
        { num: 2},
        { num: 3},
        { num: 4},
        { num: 5},
        { num: 6},
        { num: 7},
        { num: 8},
        { num: 9},
        { num: 0},
    ]

    return <div className="w-screen h-auto">
        <div className={`${slackside.className} text-center text-[55px] my-10`}>Recommended Playlists for you <LibraryMusic className="text-[44px] text-green-800 opacity-40 border-2 rounded-md rounded-bl-none border-green-800"/></div>

        <Grid container rowSpacing={3} columnSpacing={2} padding={3} className='w-[100vw]'>   
            {
            obj.map((val)=>{
                return <Grid key={val.num} item xs={12} sm={6} md={4} lg={3} xl={3} style={{ display: 'flex' }}>
                    <Card></Card>    
                </Grid>
            })
            }
        </Grid>
    </div>;
}

export default Playlist;