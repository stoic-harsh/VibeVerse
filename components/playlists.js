import Card from './card';
import { Grid } from '@mui/material';
import { Slackside_One } from 'next/font/google';
import { LibraryMusic } from '@mui/icons-material';

const slackside = Slackside_One({
    subsets: ['latin'],
    weight: '400'
});

const Playlist = ({playlistsData, display}) =>{

    // return (display && <div className="w-screen h-auto">
    //     <div className={`${slackside.className} text-center text-[55px] my-10`}>Recommended Playlists for you <LibraryMusic className="text-[44px] text-green-800 opacity-40 border-2 rounded-md rounded-bl-none border-green-800"/></div>

    //     <Grid container rowSpacing={3} columnSpacing={2} padding={3} className='w-[100vw]'>   
    //         {
    //         playlistsData.map((value)=>{
    //             return <Grid key={value.id} item xs={12} sm={6} md={4} lg={3} xl={3} style={{ display: 'flex' }}>
    //                 <Card name={value.name} owner={value.owner.display_name} desc={value.description} url={value.external_urls.spotify} image={value.images[0].url}/>
    //             </Grid>
    //         })
    //         }
    //     </Grid>
    // </div>)

    const data = [
        {
            collaborative: false,
            description: 'Soulful tunes for the heart that has loved and lost. Cover - Tamasha',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXdFesNN9TzXT'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXdFesNN9TzXT',
            id: '37i9dQZF1DXdFesNN9TzXT',
            images: [ {
                height: null,
                url: '',   
                width: null
              } ],
            name: 'Sad Hindi Melodies',
            owner: {
              display_name: 'Spotify',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTY4NzE0NzkwNCwwMDAwMDAwMGE2OWIxNzcxMGViYWEwZmNjMTIwMWMzZGNjOTk2OTM3',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXdFesNN9TzXT/tracks',
              total: 75
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DXdFesNN9TzXT'
          },
          {
            collaborative: false,
            description: 'Visit my profile for more interesting playlists',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/1MI8VpWOjBg7Jcv5CKensh'
            },
            href: 'https://api.spotify.com/v1/playlists/1MI8VpWOjBg7Jcv5CKensh',
            id: '1MI8VpWOjBg7Jcv5CKensh',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebbad472c272428d0e4694bbeca',   
                width: null
              }],
            name: 'SAD SONGS by Arijit Singh 💔',
            owner: {
              display_name: '×͜× ᴄ͢͢͢ʀɪᴍɪɴᴀʟ★࿐',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31k42kf7usia6qtiihxm3wl3ddzm',
              id: '31k42kf7usia6qtiihxm3wl3ddzm',
              type: 'user',
              uri: 'spotify:user:31k42kf7usia6qtiihxm3wl3ddzm'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MjgsNjExYWRjYmY4OGY5ZDZmMGQyZmE3ODBiZjUzZmM5MWMwODcwMTIzNQ==',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/1MI8VpWOjBg7Jcv5CKensh/tracks',
              total: 233
            },
            type: 'playlist',
            uri: 'spotify:playlist:1MI8VpWOjBg7Jcv5CKensh'
          },
          {
            collaborative: false,
            description: '',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/0VPrITrZqpMpIRGAs33Tmz'
            },
            href: 'https://api.spotify.com/v1/playlists/0VPrITrZqpMpIRGAs33Tmz',
            id: '0VPrITrZqpMpIRGAs33Tmz',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f000000033cb63d4252431dd9c7f6e1d6',   
                width: null
              } ],
            name: 'Sad song 😢😢😢🥺🥺🥺💔💔💔💔😭😭😭😭😭😭',
            owner: {
              display_name: 'Priyanka shaw',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31ebbil2lolvqltmbl3imsyw2oca',
              id: '31ebbil2lolvqltmbl3imsyw2oca',
              type: 'user',
              uri: 'spotify:user:31ebbil2lolvqltmbl3imsyw2oca'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NDUsYzYzZGQyNGJkOGRiMDlkYzYwZGJhZTliNTIxODNiMTY1MTVkZTBjMQ==',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/0VPrITrZqpMpIRGAs33Tmz/tracks',
              total: 32
            },
            type: 'playlist',
            uri: 'spotify:playlist:0VPrITrZqpMpIRGAs33Tmz'
          },
          {
            collaborative: false,
            description: '',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/0z5GPu1ZL2ryEmPbTyH0tB'
            },
            href: 'https://api.spotify.com/v1/playlists/0z5GPu1ZL2ryEmPbTyH0tB',
            id: '0z5GPu1ZL2ryEmPbTyH0tB',
            images: [ {
                height: 640,
                url: 'https://mosaic.scdn.co/640/ab67616d0000b273a2ef89ae0f8d1848081c1449ab67616d0000b273da50894e074ecd5ce61de0a1ab67616d0000b273fb8beb3f9399d900c52bb82aab67616d0000b273ff1cda069aac9352c258f8d1',
                width: 640
              } ],
            name: '',
            owner: {
              display_name: 'Saurabh Suman',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/313qzix3qfjsh2zhbiv2kcyq7dea',
              id: '313qzix3qfjsh2zhbiv2kcyq7dea',
              type: 'user',
              uri: 'spotify:user:313qzix3qfjsh2zhbiv2kcyq7dea'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NTM1LGFlOTY1ZWMwOTU2NDNjZDcyOGZhMTI4NDFjYmU0Mzk0OTEwMzI5YjA=',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/0z5GPu1ZL2ryEmPbTyH0tB/tracks',
              total: 411
            },
            type: 'playlist',
            uri: 'spotify:playlist:0z5GPu1ZL2ryEmPbTyH0tB'
          },
          {
            collaborative: false,
            description: 'Take a Breath and Console your Heart!\nCover : Love Today',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3bcfiyW6qms'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3bcfiyW6qms',
            id: '37i9dQZF1DX3bcfiyW6qms',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f00000003944fe552aa8fd966d80e6f6b',   
                width: null
              } ],
            name: 'Sad Melodies Tamil',
            owner: {
              display_name: 'Spotify',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTY4NjgzNjQ0MywwMDAwMDAwMGQ3NzA5YTgwZjdlYmJkZTkyNDIzZTJjOTI0MmVjYTg5',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3bcfiyW6qms/tracks',
              total: 50
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX3bcfiyW6qms'
          },
          {
            collaborative: false,
            description: 'Music Can Change The World...',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/1jJoJu3y2v0pl2fQb4FpcR'
            },
            href: 'https://api.spotify.com/v1/playlists/1jJoJu3y2v0pl2fQb4FpcR',
            id: '1jJoJu3y2v0pl2fQb4FpcR',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebb5cf9298bfac3b671e2390863',   
                width: null
              } ],
            name: 'Sad Song Hindi - Emotional Songs 💔🚫',
            owner: {
              display_name: 'Divyansh',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31pt36w5e6bkceecditvmi7feucq',
              id: '31pt36w5e6bkceecditvmi7feucq',
              type: 'user',
              uri: 'spotify:user:31pt36w5e6bkceecditvmi7feucq'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTY5LGYzM2ZmMjY3NzA5MWQ5ZTRhMDA3ZjIxZTQxZTUzMjkwZTNlYmE3YjQ=',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/1jJoJu3y2v0pl2fQb4FpcR/tracks',
              total: 152
            },
            type: 'playlist',
            uri: 'spotify:playlist:1jJoJu3y2v0pl2fQb4FpcR'
          },
          {
            collaborative: false,
            description: 'When everything around you is falling apart. ',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX33haVNk7fCy'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX33haVNk7fCy',
            id: '37i9dQZF1DX33haVNk7fCy',
            images: [ {
                height: 640,
                url: 'https://mosaic.scdn.co/640/ab67616d0000b27357c09e86529c01a068ac79e4ab67616d0000b2739be5968255129576cf930f83ab67616d0000b273c09a4e50419a01dcb5a92330ab67616d0000b273cc7fa0b47edba29f263e5987',
                width: 640
              } ],
            name: 'Sad Boi Hours',
            owner: {
              display_name: 'Spotify',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTY4NjkyMTM3NSwwMDAwMDAwMDA0MWRiMzhlMTg0YmZlNjI0ZmRhODExMDk1NzA0NTUx',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX33haVNk7fCy/tracks',
              total: 65
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX33haVNk7fCy'
          },
          {
            collaborative: false,
            description: '',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/1gd8rPLzo3bjk1yyQce0h7'
            },
            href: 'https://api.spotify.com/v1/playlists/1gd8rPLzo3bjk1yyQce0h7',
            id: '1gd8rPLzo3bjk1yyQce0h7',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebb329ea7e0ddb2b20185ef84f3',   
                width: null
              } ],
            name: 'Saddest songs of Bollywood 💔🥺 | Emotional Heartbreak Hits',
            owner: {
              display_name: 'StereoAux IN',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31cryn65a526vxnh2k22vgd5bqny',
              id: '31cryn65a526vxnh2k22vgd5bqny',
              type: 'user',
              uri: 'spotify:user:31cryn65a526vxnh2k22vgd5bqny'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MjYzNCw3ZTE4N2YxY2FjZTgyZjNjODhhMzkyZjY3MmU1YmE1ZGY4Yjg1NjJh',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/1gd8rPLzo3bjk1yyQce0h7/tracks',
              total: 103
            },
            type: 'playlist',
            uri: 'spotify:playlist:1gd8rPLzo3bjk1yyQce0h7'
          },
          {
            collaborative: false,
            description: '[im depressed,sad,alone,broken,ignored!!]',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/51hmVNeZVcZQKaSecPoLs0'
            },
            href: 'https://api.spotify.com/v1/playlists/51hmVNeZVcZQKaSecPoLs0',
            id: '51hmVNeZVcZQKaSecPoLs0',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebb5bc743c3c7ba890ee57ad35d',   
                width: null
              } ],
            name: 'Sad Tamil songs',
            owner: {
              display_name: 'Varsh💫',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/sr2mhrplmh50bkk2p2vc0behx',
              id: 'sr2mhrplmh50bkk2p2vc0behx',
              type: 'user',
              uri: 'spotify:user:sr2mhrplmh50bkk2p2vc0behx'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTk2LDQxMmFjZTM2MTRlYzlhZDk3MTVkMjEwOWM2NjFmNGEzYmRhMjMwMTc=',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/51hmVNeZVcZQKaSecPoLs0/tracks',
              total: 170
            },
            type: 'playlist',
            uri: 'spotify:playlist:51hmVNeZVcZQKaSecPoLs0'
          },
          {
            collaborative: false,
            description: 'Caution! Heartbreak zone ahead',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWWfmbQgZIznF'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWfmbQgZIznF',
            id: '37i9dQZF1DWWfmbQgZIznF',
            images: [ {
                height: 640,
                url: 'https://mosaic.scdn.co/640/ab67616d0000b2731aa5adad8593923dcdf1a7d0ab67616d0000b2736539071e0f1833190a491d4dab67616d0000b2737b93fd8b0ade33ceb9d536deab67616d0000b273b22e21de789378f223e1795f',
                width: 640
              } ],
            name: 'Sad hours: Punjabi',
            owner: {
              display_name: 'Spotify',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTY4NjgzNjQzNywwMDAwMDAwMGM5ZjM1YmVhYmM5NzY0YTk1NjNjMmRmZmEyNWU4NDY5',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWfmbQgZIznF/tracks',
              total: 80
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DWWfmbQgZIznF'
          },
          {
            collaborative: false,
            description: '',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/4iN5Sc0V39aMu3boD5HlKl'
            },
            href: 'https://api.spotify.com/v1/playlists/4iN5Sc0V39aMu3boD5HlKl',
            id: '4iN5Sc0V39aMu3boD5HlKl',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f00000003fd2bf73dc05c8d0a1fd4f282',   
                width: null
              } ],
            name: 'Best Punjabi Sad Songs😥💔',
            owner: {
              display_name: 'Issa jatt',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/6wnji9ldxssypjds8qbv90ss9',
              id: '6wnji9ldxssypjds8qbv90ss9',
              type: 'user',
              uri: 'spotify:user:6wnji9ldxssypjds8qbv90ss9'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NzEyLDNmMWIwODY1MzFkYjNmNzg4MGVhYWE2NzVmNWI3Yjk5OWNhOGRhZjI=',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/4iN5Sc0V39aMu3boD5HlKl/tracks',
              total: 168
            },
            type: 'playlist',
            uri: 'spotify:playlist:4iN5Sc0V39aMu3boD5HlKl'
          },
          {
            collaborative: false,
            description: '',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/07FpdMv0JhZY4eJ1X3AyXt'
            },
            href: 'https://api.spotify.com/v1/playlists/07FpdMv0JhZY4eJ1X3AyXt',
            id: '07FpdMv0JhZY4eJ1X3AyXt',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebb15d46fe54095d148eabfc668',   
                width: null
              } ],
            name: '🥀All Punjabi 😢 sad songs 💔',
            owner: {
              display_name: 'Tegbir_aulakh',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31lvfkq6hcrsgm7yr4u67otz2l7m',
              id: '31lvfkq6hcrsgm7yr4u67otz2l7m',
              type: 'user',
              uri: 'spotify:user:31lvfkq6hcrsgm7yr4u67otz2l7m'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NDk4LGI5YzE2Y2RiZmNmZDdjOTE3ZWQzYzFjNTM0Y2JlZjBjYTA1MmNhMWE=',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/07FpdMv0JhZY4eJ1X3AyXt/tracks',
              total: 206
            },
            type: 'playlist',
            uri: 'spotify:playlist:07FpdMv0JhZY4eJ1X3AyXt'
          },
          {
            collaborative: false,
            description: 'Heart Broken Hits💔 | ig- @stereoaux',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/1RGnDJHV8Std9st4QaG6Cu'
            },
            href: 'https://api.spotify.com/v1/playlists/1RGnDJHV8Std9st4QaG6Cu',
            id: '1RGnDJHV8Std9st4QaG6Cu',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebbe3e0e0579829205187ab4492',   
                width: null
              } ],
            name: 'Sad Lofi Hindi Songs | Heart Broken Songs 🥺💔',
            owner: {
              display_name: 'StereoAux',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31h2heqkhbdprnmmgswxfs3d6gym',
              id: '31h2heqkhbdprnmmgswxfs3d6gym',
              type: 'user',
              uri: 'spotify:user:31h2heqkhbdprnmmgswxfs3d6gym'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTA1MywwOTljYWViMmFlYmRlMGRjYmFiM2Q2YWViMDc2OTVkNWQ2OWQ5Yzhm',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/1RGnDJHV8Std9st4QaG6Cu/tracks',
              total: 90
            },
            type: 'playlist',
            uri: 'spotify:playlist:1RGnDJHV8Std9st4QaG6Cu'
          },
          {
            collaborative: false,
            description: '',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/32n8jCZ9Gna7duk7kEnb4d'
            },
            href: 'https://api.spotify.com/v1/playlists/32n8jCZ9Gna7duk7kEnb4d',
            id: '32n8jCZ9Gna7duk7kEnb4d',
            images: [ {
                height: 640,
                url: 'https://mosaic.scdn.co/640/ab67616d0000b273132a3b67b3eb6668c42cbf93ab67616d0000b273348468c203278d510f0cbc5aab67616d0000b2733b7ae221866b5e81daf4483fab67616d0000b2737d8baa691435a7588fe4ab57',
                width: 640
              }],
            name: '',
            owner: {
              display_name: 'Music World',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31p6s7gyqdeup4pd72unmdqiybaq',
              id: '31p6s7gyqdeup4pd72unmdqiybaq',
              type: 'user',
              uri: 'spotify:user:31p6s7gyqdeup4pd72unmdqiybaq'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NzEsMjkzZTE5MGY4YWU5NDZkZjkwMzhlNDllMDM5OGVlMzdmNzExZmE2MA==',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/32n8jCZ9Gna7duk7kEnb4d/tracks',
              total: 56
            },
            type: 'playlist',
            uri: 'spotify:playlist:32n8jCZ9Gna7duk7kEnb4d'
          },
          {
            collaborative: false,
            description: '',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/07cKOg8bqOupkf5eRFJIY2'
            },
            href: 'https://api.spotify.com/v1/playlists/07cKOg8bqOupkf5eRFJIY2',
            id: '07cKOg8bqOupkf5eRFJIY2',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f000000032397c5fadf59df2dae44df40',   
                width: null
              } ],
            name: 'Sad songs by Arijit Singh 💔',
            owner: {
              display_name: 'IVANS Christian',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31hgfsxoya43aysf6b6fgodt4ytq',
              id: '31hgfsxoya43aysf6b6fgodt4ytq',
              type: 'user',
              uri: 'spotify:user:31hgfsxoya43aysf6b6fgodt4ytq'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NDUsN2ZkMTFiNGVlZTFhZWMxNDUwOGZkOWViNzMzMjNhMmRjY2IyYWIyMA==',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/07cKOg8bqOupkf5eRFJIY2/tracks',
              total: 59
            },
            type: 'playlist',
            uri: 'spotify:playlist:07cKOg8bqOupkf5eRFJIY2'
          },
          {
            collaborative: false,
            description: 'Broken 😔🥹 ,Hindi sad lofi songs , Sad songs ,Breakup 😔' ,
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/5A60QHfJNcPzrqSylYWQHz'
            },
            href: 'https://api.spotify.com/v1/playlists/5A60QHfJNcPzrqSylYWQHz',
            id: '5A60QHfJNcPzrqSylYWQHz',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebb974ecea4a0edbab7166420c4',   
                width: null
              } ],
            name: 'Lofi Sad Songs, breakup lofi songs',
            owner: {
              display_name: 'VARUN DAGAR',
              external_urls: {
                height: 640,
                url: 'https://mosaic.scdn.co/640/ab67616d0000b273072eb50e71dc4c4a04ad727cab67616d0000b2735989c1dd09699834f6d0be72ab67616d0000b2737a4e188a7f97ffc83fcfdb28ab67616d0000b273872577a9e646019e97782fda',
                width: 640
              },
              href: 'https://api.spotify.com/v1/users/31rewo2oawcrvoel6qho7z23efmi',
              id: '31rewo2oawcrvoel6qho7z23efmi',
              type: 'user',
              uri: 'spotify:user:31rewo2oawcrvoel6qho7z23efmi'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NDY3LGVmZmIxYzc5YTFjOTFiNmE5MGIxOTliYWVhMTY3Y2M0MDRlMTc5Nzg=',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/5A60QHfJNcPzrqSylYWQHz/tracks',
              total: 98
            },
            type: 'playlist',
            uri: 'spotify:playlist:5A60QHfJNcPzrqSylYWQHz'
          },
          {
            collaborative: false,
            description: '',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/1au999SJjuuDAXxphTupDK'
            },
            href: 'https://api.spotify.com/v1/playlists/1au999SJjuuDAXxphTupDK',
            id: '1au999SJjuuDAXxphTupDK',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebbd9d1caf8f93f9c16481a679c',   
                width: null
              } ],
            name: 'Sad songs telugu',
            owner: {
              display_name: 'riya',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/31kw4r44ikxlyvy56huxhuwq6eu4',
              id: '31kw4r44ikxlyvy56huxhuwq6eu4',
              type: 'user',
              uri: 'spotify:user:31kw4r44ikxlyvy56huxhuwq6eu4'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NDUsMjFhZTUzMzE0YzFlYjZmMGQ3YThhN2NhNTc4Yzk2NjQ0MDc5NDFjZA==',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/1au999SJjuuDAXxphTupDK/tracks',
              total: 41
            },
            type: 'playlist',
            uri: 'spotify:playlist:1au999SJjuuDAXxphTupDK'
          },
          {
            collaborative: false,
            description: 'pov: a goodbye you’re not ready for &lt;&#x2F;3',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/4YOfhHpjPB0tq29NPpDY3F'
            },
            href: 'https://api.spotify.com/v1/playlists/4YOfhHpjPB0tq29NPpDY3F',
            id: '4YOfhHpjPB0tq29NPpDY3F',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebbddd67fcb8a00b997da37eb46',   
                width: null
              }],
            name: 'Sad Hindi Songs - a little broken 🥺',
            owner: {
              display_name: 'Hitanshi',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/19zon35tbuv3us2rnavxnllv8',
              id: '19zon35tbuv3us2rnavxnllv8',
              type: 'user',
              uri: 'spotify:user:19zon35tbuv3us2rnavxnllv8'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'Mzc1LDBlMTQzNmJlMzhhM2RmMDNkM2I5Y2I2MDAwNDIwNDU3YjEyZDBkZDc=',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/4YOfhHpjPB0tq29NPpDY3F/tracks',
              total: 289
            },
            type: 'playlist',
            uri: 'spotify:playlist:4YOfhHpjPB0tq29NPpDY3F'
          },
          {
            collaborative: false,
            description: 'aweaiwn qjenqeni qenqein qeniqen iqeiqn niqennqen jnqienq neqinqjn iqeninq  iqenq  qninqei  qniqenqke  jonqeikqekiqen qkiqen qeu9qi qejoqeninqek qniqmeplqij qrn Crying and depressing music • The Best Saddest Playlist 🥺❤️ IG: @spaak.records Cover: SHY MARTIN',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/6nxPNnmSE0d5WlplUsa5L3'
            },
            href: 'https://api.spotify.com/v1/playlists/6nxPNnmSE0d5WlplUsa5L3',
            id: '6nxPNnmSE0d5WlplUsa5L3',
            images: [ {
                height: null,
                url: 'https://i.scdn.co/image/ab67706c0000bebb8a9391d6a23e8f099906dcaf',
                width: null
              } ],
            name: 'Sad Songs 🥺',
            owner: {
              display_name: 'Spaak Records',
              external_urls: [Object],
              href: 'https://api.spotify.com/v1/users/adil2k7xbnt8lzx0qxuyccbjy',
              id: 'adil2k7xbnt8lzx0qxuyccbjy',
              type: 'user',
              uri: 'spotify:user:adil2k7xbnt8lzx0qxuyccbjy'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'NzU1OSxiOGU5YTg3NjQ2MTY1N2ZjZGU0OTc1Yjg2NjRkMWFjZmFkODY1YTdk',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/6nxPNnmSE0d5WlplUsa5L3/tracks',
              total: 232
            },
            type: 'playlist',
            uri: 'spotify:playlist:6nxPNnmSE0d5WlplUsa5L3'
          },
    ]
      

    return display && <div className="w-screen h-auto">
         <div className={`${slackside.className} text-center text-[55px] my-10 mx-3`}>Recommended Playlists for you <LibraryMusic className="text-[44px] text-green-800 opacity-40 border-2 rounded-md rounded-bl-none border-green-800"/></div>

        <Grid container rowSpacing={3} columnSpacing={2.5} padding={3} className='w-[100vw]'>   
             {
             playlistsData.map((value)=>{
                 return <Grid key={value.id} item xs={12} sm={6} md={4} lg={3} xl={3} style={{ display: 'flex' }}>
                     <Card name={value.name} owner={value.owner.display_name} desc={value.description} url={value.external_urls.spotify} image={value.images[0].url}/>
                 </Grid>
             })
             }
         </Grid>
     </div>
}

export default Playlist;