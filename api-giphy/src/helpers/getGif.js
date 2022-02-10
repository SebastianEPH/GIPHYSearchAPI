export const getGif = async (word, amount) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(word)}&limit=${amount}&api_key=6iV1aQTJJpIFzStqFP8ZyrvDy617uyMy`;

    const res = await fetch(url)
    //res.ok? console.log('ok'):console.log('error pex')
    const {data} = await res.json()
    // limpiando api
    return  data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
}
