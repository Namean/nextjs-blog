// skelify.snippet.js

const elementArray = document.getElementsByClassName('chakra-heading css-r6b02g e1k4it830');
const textString = elementArray[0].innerText.split('\n')[0].split('&').map(x => x.trim()).toLowerCase()


arr = document.getElementsByClassName('chakra-heading css-r6b02g e1k4it830')[0].innerText.split('\n')[0].split('&').map((x) => x.trim()).toLowerCase())

// skelify(arr[0]) + '-' + skelify(arr[1])

arr.map(x => skelify(x)).join('-');



const xhr = ({url}) => {
    let xhr = XMLHttpRequest();
    xhr.open('GET', url, true);
}
