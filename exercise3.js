const errorCallback = () => {
    console.log("ERROR!!!")
}
const sucessCallback = (callback, value) => {
    callback()
    console.log(value)
}
const promiseMaker = (someVar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if(someVar > 10) {
               sucessCallback(resolve, true)
           } else {
               reject()
           }
        },500 )
    }).catch( errorCallback )
}
promiseMaker(11 /*Palce A Number Here*/)
