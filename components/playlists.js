import Card from './card';
import { Grid } from '@mui/material';
import { Slackside_One } from 'next/font/google';
import { LibraryMusic } from '@mui/icons-material';

const slackside = Slackside_One({
    subsets: ['latin'],
    weight: '400'
});

const Playlist = ({playlistsData, display}) =>{


    return display && <div className="w-screen h-auto mb-[120px]">
         <div className={`${slackside.className} text-center text-[55px] my-10 mx-3`}>Recommended Playlists for you <LibraryMusic className="text-[44px] text-green-800 opacity-40 border-2 rounded-md rounded-bl-none border-green-800"/></div>

        <Grid container rowSpacing={3} columnSpacing={2.5} padding={3} className='w-[100vw]'>   
             {
             playlistsData && playlistsData.map((value)=>{
                 return <Grid key={value.id} item xs={12} sm={6} md={4} lg={3} xl={3} style={{ display: 'flex' }}>
                     <Card name={value.name} owner={value.owner.display_name} desc={value.description} url={value.external_urls.spotify} image={value.images[0].url}/>
                 </Grid>
             })
             }
         </Grid>
     </div>
}

export default Playlist;