//  Promises : status possíveis pending, fullfilled e rejected
const doSomethingPromise = () =>
     new Promise((resolve, reject) => {
   // throw Error ('Something went wrong!');
    setTimeout(function() {
        // did something
        resolve('First Data');
    }, 1500);
});

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
    setTimeout(function() {
        // did something
        resolve('Second Data');
    }, 1000);
});

/*
doSomethingPromise
.then(data => console.log(data))
.catch(error => console.log(error));

// Promises podem ser aninhadas
doSomethingPromise
.then(data => { 
    console.log(data);
    return doOtherThingPromise;
})
.then(data2 => console.log(data2))
.catch();
*/

console.log('Promises executadas paralelamente (promise.all).');

// Ptomises em paralelo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
});


Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log('A primeira promise que terminar (promise.race).');
    console.log(data);
});






// Callbacks
function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('First Data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        // did oyher thing
        callback('Second Data');
    }, 1000);
}

// sem o uso de promise
function doAll() {
    
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            
            try {
            doOtherThing(function (data2) {
                var processedData2 = data2.split('');
            
                try {
                    setTimeout(function() {
                    console.log(processedData, processedData2);
                    }, 1000);
                } catch (error) {
                    // Handle error 
                }    
           });
        }   catch (error) {
            // Handle error
        }
});     
} catch (error) {
        // Handle error
}
}

doAll();