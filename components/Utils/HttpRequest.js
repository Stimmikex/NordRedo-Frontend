import Router from 'next/router'
/**
 * HttpRequest
 * @param {http request method (get, post, patch, delete)} method 
 * @param {Api url link} link 
 * @param {data from the user} data 
 */
const HttpRequest = async (method, link, data, router) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const res = await fetch(link, options)

    console.log(res)

    const result = await res.json();
    console.log(result)
    Router.push(router)
}

export default HttpRequest
