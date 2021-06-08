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


// const add = (num1, num2) => {
//     return num1 + num2
// }

// const result = add(1,2);

// const addAsync = async (num1, num2, callback) => {
//     fetch('http://www.example.com', {
//         method: 'POST',
//         // GET POST PUT DELETE, etc
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: {
//             num1: num1,
//             num2: num2
//         }
//     });
//     return callback;
// }

// addAsync(1,2, success => {
//     const result = success; // you get result = 3 here
// })


let resultA, resultB, resultC;

// const add = (num1, num2) => {
//     return num1 + num2
// }
// const numbers = {
//     num1: 1,
//     num2: 2
// }
// resultA = add(numbers.num1, numbers.num2); // 3
// resultB = add(resultA, 3) // 6
// resultC = add(resultB, 4); // 10

// console.log(`total = ${resultC}`);

// console.log(resultA, resultB, resultC)

// const addAsync = (num1, num2) => {
//     // use ES6 Fetch API which a promise
//     // what is .json()? developer mozilla
//     return fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
//         .then(result => result.json());
// }

// addAsync(1,2)
//     .then(success => {
//         resultA = success;
//         return resultA
//     })
//     .then(success => {
//         addAsync(success, 3)
//     })
//     .then(success => {
//         resultB = success
//         return resultB;
//     })
//     .then(success => {
//         addAsync(success, 4)
//     })
//     .then(success => {
//         resultC = success
//         return resultC
//     })
//     .then(success => {
//         console.log(`total: ${success}`);
//         console.log(resultA, resultB, resultC)
//     })
//     .catch(err => {
//         console.log('Something went wrong!', err)
//     })

// function first () {
//     console.log(1);
// }
// function second (callback) {
//     setTimeout(() => {
//         console.log(2);
//         // execute the callback function
//         callback();
//     }, 0);
// }
// function third () {
//     console.log(3);
// }

// first();
// second(third);
// function fn () {
//     console.log('just a function')
// }

// function higherOrderFunction (callback) {
//     callback();
// }

// higherOrderFunction(fn)

// function pymaridOfDoom () {
//     setTimeout(() => {
//         console.log(1)
//         setTimeout(() => {
//             console.log(2)
//             setTimeout(() => {
//                 console.log(3)
//             }, 500)
//         }, 2000)
//     }, 1000)
// }

// pymaridOfDoom();

// function asynchronousRequest(args, callback) {
//     if(!args) {
//         return callback(new Error('Whoa! Something went wrong!'))
//     } else {
//         return setTimeout(() => {
//             callback(null, {body: `${args} ${Math.random() * 10}`})
//         }, 500)
//     }
// }

// function callbackHell () {
//     asynchronousRequest('First', function first(error, response) {
//         if(error) {
//             console.log(error)
//             return
//         }
//         console.log(response.body);
//         asynchronousRequest('Second', function second(error, response) {
//             if(error) {
//                 console.log(error)
//                 return
//             }
//             console.log(response.body); 
//             asynchronousRequest(null, function third(error, response) {
//                 if(error) {
//                     console.log(error)
//                     return
//                 }
//                 console.log(response.body)
//             })
//         })
//     })
// }

// callbackHell();

// .then()
// .catch()
// .finally()

fetch('https://api.github.com/users/sotopro')
    .then((response) => {
        console.log('response', response)
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })