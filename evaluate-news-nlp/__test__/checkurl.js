function urlValidator(uri) {
    console.log( uri);
    let regexp =  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    if(regexp.test(uri)){
        return true;
    }else{
        return false;
    }
 }


export {urlValidator}