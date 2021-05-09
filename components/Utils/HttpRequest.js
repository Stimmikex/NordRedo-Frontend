import Router from 'next/router'
/**
 * HttpRequest
 * @param {http request method (get, post, patch, delete)} method 
 * @param {Api url link} link 
 * @param {data from the user} data 
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
}

export default HttpRequest
