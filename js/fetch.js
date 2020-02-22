/*
 A Fetch, introduzida pelo Ecma6, tem o mesmo objetivo da xmlHttpRequest só que trabalha de um
diferente.
*/
fetch('/data.json').then(responseStream => {
    responseStream.json().then(data => {
        console.log(data);
    });
});