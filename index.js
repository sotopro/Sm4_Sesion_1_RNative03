let myPromise = new Promise((resolve, reject) => {
    let data;
    setTimeout(() => {
        data = 'Some payload';
        error = 'There was an error'
        if (data) {
            resolve(data);
        } else {
            reject(error);
        }
    })
});

// myPromise.then(data => {
//     if(data.error) {
//         console.log(data.error);
//     }
//     console.log(`Received: ${data}`);
// }).catch((err) => {
//     console.log(err);
// })

// myPromise.then(data => {
//     console.log(`Received: ${data}`);
//     let moreData = "Another payload"
//     return moreData
// }).then(data => {
//     console.log(data)
// }).catch(() => {
//     console.log('There was an error')
// })


let isMomHappy = true;

// Promise
// Part 1:
const willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy) {
        let phone = {
            brand: 'iPhone 12',
            color: 'red'
        };
        resolve(phone); // fulfilled
    } else {
        let reason = new Error('mom is not happy!');
        reject(reason) // reject
    }
});

// Part 2

const askMon = () => {
    willGetNewPhone.then((fulfilled) => {
        // yay, you got a new phone
        console.log(fulfilled);
    }).catch((error) => {
        console.log(error.message)
    })
}

askMon();