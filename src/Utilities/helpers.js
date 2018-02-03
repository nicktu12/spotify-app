export const authCodeCleaner = (url) => {
  return url.split('code=')[1].split('&state')[0];
};

export const getAccessToken = (authCode) => {
  return fetch(`http://localhost:4000/top-artists`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({authCode}),
  }).then(res => res.json())
    .then(res => res.body)
    .catch(error => alert(error));
};

// const accessTokenCleaner = (response) => {
//   console.log(response.body)
//   return response.body;
// };

// export const getUserInfo = (token) => {
//   return fetch(
//     `https://galvanize-cors-proxy.herokuapp.com/` + 
//     `https://api.spotify.com/v1/me/`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     }).then(res => res.json())
//     .then(jsonRes => cleanUserRes(jsonRes))
//     .catch(error => alert(error));
// };

// const cleanUserRes = (json) => {
//   return Object.assign(
//     {}, 
//     {
//       name: json.display_name, 
//       email: json.email, 
//       image: json.images[0].url,
//       id: json.id,
//       followers: json.followers.total,
//       plan: json.product,
//     },
//   );
// };

// export const getTopArtists = (token) => {
//   return fetch(
//     `https://galvanize-cors-proxy.herokuapp.com/` + 
//     `https://api.spotify.com/v1/me/top/artists?limit=100`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     }).then(res => res.json())
//     .then(jsonRes => cleanArtistRes(jsonRes))
//     .catch(error => alert(error));
// };

// const cleanArtistRes = (json)  => {
//   return json.items.map(item => 
//     Object.assign({}, {
//       name: item.name, 
//       photo: item.images[0], 
//       followers: item.followers.total.toLocaleString(), 
//       popularity: item.popularity,
//       genres: cleanStringArray(item.genres)
//     })  
//   );
// };

export const getTopSongs = (token) => {
  return fetch(`http://localhost:4000/top-songs`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({token}),
  }).then(res => res.json())
    .then(res => res)
    .catch(error => alert(error));
};

// export const getTopSongs = (token) => {
//   return fetch(
//     `https://galvanize-cors-proxy.herokuapp.com/` + 
//     `https://api.spotify.com/v1/me/top/tracks?limit=40`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     }).then(res => res.json())
//     .then(jsonRes => cleanSongRes(jsonRes))
//     .catch(error => alert(error));
// };

// export const getTopSongsShortTerm = (token) => {
//   return fetch(
//     `https://galvanize-cors-proxy.herokuapp.com/` + 
//     `https://api.spotify.com/v1/me/top/tracks?limit=40&time_range=short_term`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     }).then(res => res.json())
//     .then(jsonRes => cleanSongRes(jsonRes))
//     .catch(error => alert(error));
// };

// export const getTopSongsAllTime = (token) => {
//   return fetch(
//     `https://galvanize-cors-proxy.herokuapp.com/` + 
//     `https://api.spotify.com/v1/me/top/tracks?limit=40&time_range=long_term`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     }).then(res => res.json())
//     .then(jsonRes => cleanSongRes(jsonRes))
//     .catch(error => alert(error));
// };

// const cleanSongRes = (json) => {
//   return json.items.map(song => 
//     Object.assign({}, {
//       title: song.name, 
//       artists: cleanSongArtist(song.artists),
//       album: song.album.name,
//       image: song.album.images[0].url,
//       popularity: song.popularity,
//       uri: song.uri,
//     })
//   );
// };

// const cleanSongArtist = (array) => {
//   return cleanStringArray(array.map(artist => artist.name));
// };

// const cleanStringArray = (array) => array.join(', ');

// export const getRecentlyPlayed = (token) => {
//   return fetch(
//     `https://galvanize-cors-proxy.herokuapp.com/` + 
//     `https://api.spotify.com/v1/me/player/recently-played`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     }).then(res => res.json())
//     .then(jsonRes => recentlyPlayedCleaner(jsonRes))
//     .catch(error => alert(error));
// };

// const recentlyPlayedCleaner = (json) => {
//   return json.items.map(song =>
//     Object.assign({}, {
//       title: song.track.name,
//       artists: cleanSongArtist(song.track.artists)
//     },
//     )
//   );
// };

export const createPlaylist = actionPayload => {
  return fetch(
    `https://api.spotify.com/v1/users/${actionPayload.id}/playlists`, 
    {
      body: JSON.stringify({
        name: `${actionPayload.id}'s Top 40 ${actionPayload.message}`,
        description: 
        `Your Top 40 tracks ${actionPayload.message}. Brought to you by Statify.`,
      }),
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${actionPayload.token}`,
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(res=>res.json())
    .then(res=>res.id)
    .catch(error => alert(error));
};

export const addTracksToPlaylist = (playlistId, action) => {
  return fetch(
    `https://api.spotify.com/v1/users/` + 
    `${action.id}/playlists/${playlistId}/tracks`, 
    {
      body: JSON.stringify({
        uris: action.array,
      }),
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${action.token}`,
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(res=>res.json())
    .then(res=>res.id)
    .catch(error => alert(error));
};
