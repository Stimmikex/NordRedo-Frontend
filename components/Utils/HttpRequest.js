/**
 * HttpRequest
 * @param {http request method (get, post, patch, delete)} method 
 * @param {Api url link} link 
 * @param {data from the user} data 
 */
const HttpRequest = async (method, link, data) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const res = await fetch(link, options)

    console.log(res)

    await res.json();
}

export default HttpRequest
