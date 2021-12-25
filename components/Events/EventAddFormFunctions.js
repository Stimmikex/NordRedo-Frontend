export const showSignup = () => {
    const signupCheck = document.getElementById('signup');
    const timeDiv = document.getElementById('timeDiv')
    if(signupCheck.checked) {
        timeDiv.style.display = 'flex';
        timeDiv.style.flexDirection = 'column'
    } else {
        timeDiv.style.display = 'none';
    }
}

export function toDateTime(date) {
    var str = '';
    var year, month, day, hour, min;
    year = date.getFullYear();
    month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    day = date.getDate();
    day = day < 10 ? '0' + day : day;
    hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    min = date.getMinutes();
    min = min < 10 ? '0' + min : min;
    
    str += year + '-' + month + '-' + day;
    str += ' ' + hour + ':' + min;
    return str;
}