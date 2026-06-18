let apiCall = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "User data"
    })

});

apiCall.then(function (response) {
    console.log("Success:", response.status);
})
    .catch(function (error) {
        console.log("ERROR:", error.status,error.body);

    });


// .then() runs ONLY when the promise resolves successfully.