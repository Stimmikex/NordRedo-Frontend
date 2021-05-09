const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

export const SigninUser = async (router, event, user, cookie) => {
    const data = {
        user_id: user.user.id,
    };

    const options = {
        method: 'POST',
        headers: {
            cookie,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    try {
        const res = await fetch(`${apiUrl}/event/sign-in/${event.id}`, options)
        const result = await res.json()
        if (res.status < 300) {
            router.replace(router.asPath);   
        }
        return result;
    } catch (e) {
        console.error(e);
    }

}

export const SignoutUser = async (router, event, user, cookie) => {
    const data = {
        user_id: user.user.id,
    };

    const options = {
        method: 'POST',
        headers: {
            cookie,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }

    const res = await fetch(`${apiUrl}/event/sign-out/${event.id}`, options)

    const result = await res.json()
    if (res.status < 300) {
        router.replace(router.asPath);   
    }
    return result;
}

export const validRegisterByTime = (event) => {
    const start = Date.parse(event.startdate) - Date.parse(new Date().toISOString()) <= 0
    console.log(start)
    const end = Date.parse(event.enddate) - Date.parse(new Date().toISOString()) >= 0
    if ((start && end)) {
        return true;
    }
    return false;
}