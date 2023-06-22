import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';

export default function ResponsiveCard({ name, owner, desc, url, image }) {

  const truncate = (str, limit)=>{
    return (str.length > limit ? str.substring(0, limit) + "..." : str);
  }

  return (
    <Card id="card" className="w-[440px] h-[590px] flex flex-col" >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="playlist">
            { Array.from(owner)[0].toUpperCase() }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name || "Unknown Playlist"}
        subheader={owner || "Anonymous Owner"}
        id="card_header"
      />
      <Link href={url}>
        <CardMedia
          component="img"
          image={image || "https://www.pngitem.com/pimgs/m/148-1487614_spotify-logo-small-spotify-logo-transparent-hd-png.png"}
          alt={image || "spotify_logo"}
          style={{ backgroundSize: 'cover' }}
        />
      </Link>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        {truncate(desc, 170) || "Playlist according to your mood..."}
        </Typography>
      </CardContent>

      <div style={{ flexGrow: 1 }}/>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <div style = {{ flexGrow: 1 }} />
        <Typography variant="subtitle2">
          Click on Image to open Spotify
        </Typography>
      </CardActions>
    </Card>
  );
}
