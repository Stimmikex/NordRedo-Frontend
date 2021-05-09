import Router from 'next/router'

/**
 * HttpRequest api requester
 * @param {(GET, POST, PATCH, DELETE)} method 
 * @param {API url link} link 
 * @param {data send with POST, PATCH} data 
 * @param {redirect to route} router 
 * @param {User auth cookie} cookie 
 * @returns 
 */
const HttpRequest = async (method, link, data, router, cookie) => {
    const options = {
        method: method,
        headers: {
            cookie,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }

    const res = await fetch(link, options)

    console.log(res)

    const result = await res.json();
    console.log(result)
    Router.push(router)
    return result;
}

export default HttpRequest
