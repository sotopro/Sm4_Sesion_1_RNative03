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

// var askMon = () => {
//     willGetNewPhone.then((fulfilled) => {
//         // yay, you got a new phone
//         console.log(fulfilled);
//     }).catch((error) => {
//         console.log(error.message)
//     })
// }

// askMon();

const showOff = async (phone) => {
    return new Promise((resolve, reject) => {
        let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
        resolve(message)
    })
    // console.log('phone')
    // let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
    // return Promise.resolve(message);
};
const askMon = async () => {
    try {
        let phone = await willGetNewPhone;
        let message = await showOff(phone);
        console.log(message);
        console.log('after asking mom')
    } catch (error) {
        console.log(error.message); 
    }
    // willGetNewPhone
    // .then(showOff)
    // .then(fulfilled => {
    //     // yay, you got a new phone'
    //     console.log(fulfilled)
    // })
    // .catch(error => {
    //     // ops, mom don't buy it'
    //     console.log(error.message);
    // });
}

// askMon();
(async () => {
    await askMon();
})();
