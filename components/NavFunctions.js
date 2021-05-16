import cookies from 'js-cookie';
import Router from 'next/router'

export function openNav() {
    const x = document.getElementById("mylinks");
    if (x.style.display === "flex") {
        if(document.body.clientWidth > 600) {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    } else {
      x.style.display = "flex";
    }
    if (typeof window !== "undefined") {
        window.addEventListener("resize", function(event) {
            if(document.body.clientWidth > 600) {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        })
    }
}
export function openSubNav(id) {
    const x = document.getElementById(id);
    if (x.style.display === "flex") {
        if(document.body.clientWidth < 600) {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    } else {
      x.style.display = "flex";
    }
    if (typeof window !== "undefined") {
        window.addEventListener("resize", function(event) {
            if(document.body.clientWidth < 600) {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        })
    }
}
export function closeNav(id) {
    openSubNav(id);
    openNav();
}

export function loggout() {
    cookies.remove('auth');
    Router.push('/');
}

export function ifUserExists(temp) {
    if (typeof temp !== 'undefined') {
        if(temp.error) {
            return false;
        }
        return true;
    }
    return false;
}
export function ifUserAdmin(temp) {
    if (ifUserExists(temp)) {
        if (temp.role_id === 3) {
            return true;
        }
        return false;
    }
}
