import { spotifySecret, spotifyClientId } from './apiKey';

export const fetchSwapi = (url) => (
  fetch(url)
    .then(res => res)
    .then(res => console.log(res))
    .catch((e)=>console.log(e, url, 'FUCK'))
)

export const authCodeCleaner = (url) => {
	return url.split('code=')[1].split('&state')[0]
}

export const getAccessToken = (authCode) => {
	const formData = {
			'grant_type': 'authorization_code',
			'code': authCode,
			'redirect_uri': 'http://localhost:3000/',
			'client_id': spotifyClientId,
			'client_secret': spotifySecret
		}
	let formBody = [];
	for (let property in formData) {
		let encodedKey = encodeURIComponent(property);
		let encodedValue = encodeURIComponent(formData[property]);
		formBody.push(encodedKey + '=' + encodedValue)
	}
	formBody = formBody.join('&');
	return fetch('https://galvanize-cors-proxy.herokuapp.com/https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Accept': 'application/json'
		},
		body: formBody
	}).then(res => res.json()).then(jsonRes => jsonRes)
}
