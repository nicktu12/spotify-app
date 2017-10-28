export const fetchSwapi = (url) => (

  fetch(url)
    .then(res => console.log(res))
    .catch((e)=>console.log(e, url, 'FUCK'))
)
