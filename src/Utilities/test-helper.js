export const fetchSwapi = (url) => (
  fetch(url)
    .then(res => res.json())
    .then(JSONres => JSONres)
    .catch(()=>console.log('FUCK'))
)
