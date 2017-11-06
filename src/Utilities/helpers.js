import { spotifySecret, spotifyClientId } from './apiKey';

export const authCodeCleaner = (url) => {
  return url.split('code=')[1].split('&state')[0];
};

export const getAccessToken = (authCode) => {
  const formData = {
    'grant_type': 'authorization_code',
    'code': authCode,
    'redirect_uri': 'http://localhost:3000/',
    'client_id': spotifyClientId,
    'client_secret': spotifySecret
  };
  let formBody = [];
  for (let property in formData) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(formData[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  return fetch(
    `https://galvanize-cors-proxy.herokuapp.com/` + 
    `https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: formBody
    }).then(res => res.json())
    .then(jsonRes => accessTokenCleaner(jsonRes))
    .catch(error => alert(error));
};

const accessTokenCleaner = (token) => {
  return token.access_token;
};

export const getTopArtists = (token) => {
  return fetch(
    `https://galvanize-cors-proxy.herokuapp.com/` + 
    `https://api.spotify.com/v1/me/top/artists`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(jsonRes => cleanArtistRes(jsonRes))
    .catch(error => alert(error));
};

const cleanArtistRes = (json)  => {
  return json.items.map(item => 
    Object.assign({}, {
      name: item.name, 
      photo: item.images[0], 
      followers: item.followers.total, 
      popularity: item.popularity,
      genres: cleanStringArray(item.genres)
    })  
  );
};

export const getTopSongs = (token) => {
  return fetch(
    `https://galvanize-cors-proxy.herokuapp.com/` + 
    `https://api.spotify.com/v1/me/top/tracks?limit=40`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(jsonRes => cleanSongRes(jsonRes))
    .catch(error => alert(error));
};

export const getTopSongsShortTerm = (token) => {
  return fetch(
    `https://galvanize-cors-proxy.herokuapp.com/` + 
    `https://api.spotify.com/v1/me/top/tracks?limit=40&time_range=short_term`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(jsonRes => cleanSongRes(jsonRes))
    .catch(error => alert(error));
};

export const getTopSongsAllTime = (token) => {
  return fetch(
    `https://galvanize-cors-proxy.herokuapp.com/` + 
    `https://api.spotify.com/v1/me/top/tracks?limit=40&time_range=long_term`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(jsonRes => cleanSongRes(jsonRes))
    .catch(error => alert(error));
};

const cleanSongRes = (json) => {
  return json.items.map(song => 
    Object.assign({}, {
      title: song.name, 
      artists: cleanSongArtist(song.artists),
    })
  );
};

const cleanSongArtist = (array) => {
  return cleanStringArray(array.map(artist => artist.name));
};

const cleanStringArray = (array) => array.join(', ');

export const getUserInfo = (token) => {
  return fetch(
    `https://galvanize-cors-proxy.herokuapp.com/` + 
    `https://api.spotify.com/v1/me/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(jsonRes => cleanUserRes(jsonRes))
    .catch(error => alert(error));
};

const cleanUserRes = (json) => {
  return Object.assign(
    {}, 
    {name: json.display_name, email: json.email, image: json.images[0].url},
  );
};
