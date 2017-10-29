export const fetchSwapi = (url) => (
  fetch(url)
    .then(res => res)
    .then(res => console.log(res))
    .catch((e)=>console.log(e, url, 'FUCK'))
)

export const accessTokenCleaner = (url) => {
	return url.split('code=')[1].split('&state')[0]
}
