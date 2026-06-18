let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered. Food is ready. ");
    } else {
        reject("Order cancelled because of rain.")
    }
})

order
    .then(result => console.log(result))
    .catch(error => console.log(error));