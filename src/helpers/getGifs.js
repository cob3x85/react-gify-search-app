

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=WKSl8KyQ9KtRRehLT4HRn2rBh3b0t5sm`;
    const response = await fetch(url);
    const { data } = await response.json();
    // Extraer la informacion necesaria del json response

    const gifs = data.map(img => {
        // mapper- maps the required data only
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
