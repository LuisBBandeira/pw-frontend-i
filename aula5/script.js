// window.onload = () => {
//     const xhr = new XMLHttpRequest();
//     const url = 'data.json';
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             if(xhr.status === 200){
//                 console.log(JSON.parse(xhr.responseText));
//             }else{
//                 console.error('ERROR:' , xhr.status);
//             }
//         }
//     };
//     xhr.open('GET', url);
//     xhr.send();
// }

// import { json } from "body-parser";

// window.onload = async () => {
//     try {
//         const req = await fetch('data.json');
//         const data = await req.json();
//         console.log(data);
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }


const serveURL = 'http://localhost:3000';
const getData = async () => {
    try {
        const response = await fetch (`${serveURL}/data`);
        const data = await response.json()
        console.log(data);
        displayData(data)
    } catch (error) {
        console.error('Error fetchin data:' , error);
    }
}

const postData = async () => {
    try {
        const newData = {message: "New message"};
        const response = await fetch (`${serveURL}/data`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });
        const result = await response.json();
        console.log('Server response:', result);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

const displayData = (data) => {
    const dataContainer = document.querySelector('#data-container');
    dataContainer.innerHTML = `${JSON.stringify(data, null ,2)}`;
}