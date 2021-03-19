function urlValidator(url) {
    console.log( url);
    let regexp =  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    if(regexp.test(url)){
        return true;
    }else{
        return false;
    }
 }


export {urlValidator}