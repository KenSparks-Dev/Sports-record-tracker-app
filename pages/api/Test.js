let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    a == 2 ? resolve('success') : reject('Failed')
})

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message);
})

