export const fetchSwapi = (url) => (

  fetch(url)
    .then(res => res.json())
    .then(JSONres => console.log(JSONres, url))
    .catch((e)=>console.log(e, url, 'FUCK'))
)
