const isLogged = true;

const firstPromise = (info) => {
    return new Promise((resolve, reject) => {
        if (info){
            resolve(Math.random());
        } else{
            reject("Log in error.");
        }
    })
}

const secondPromise = (nbr) => {
    return new Promise((resolve, reject) => {
        if(nbr > 0.5){
            resolve('{name: "John", age: 24}');
        }else {
            reject('Tiny number error.')
        }
    })
}


firstPromise(isLogged)
    .then((val) => secondPromise(val))
    .then((val) => console.log(val))
    .catch((err) => console.log(err))