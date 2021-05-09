/**
 * HttpRequest api requester
 * @param {(GET, POST, PATCH, DELETE)} method 
 * @param {API url link} link 
 * @param {data send with POST, PATCH} data 
 * @param {redirect to route} router 
 * @param {User auth cookie} cookie 
 * @returns 
 */
const HttpRequest = async (method, link, data, cookie) => {
    const options = {
        method: method,
        headers: {
            cookie,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }

    const res = await fetch(link, options)
    const result = await res.json();
    return result;
}

export default HttpRequest
