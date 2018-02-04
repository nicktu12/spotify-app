export const authCodeCleaner = (url) => {
  return url.split('code=')[1].split('&state')[0];
};

export const getAccessToken = (authCode) => {
  return fetch(`https://statify-be.herokuapp.com/top-artists`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({authCode}),
  }).then(res => res.json())
    .then(res => res.body)
    .catch(error => alert(error));
};

export const getTopSongs = (token) => {
  return fetch(`https://statify-be.herokuapp.com/top-songs`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({token}),
  }).then(res => res.json())
    .then(res => res)
    .catch(error => alert(error));
};

export const createPlaylist = actionPayload => {
  return fetch(`https://statify-be.herokuapp.com/post-playlist`, {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(actionPayload)
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => alert(error));
};