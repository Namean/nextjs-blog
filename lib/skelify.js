// skelatize.js


const skelify = (inputString) => {
    let str = inputString;

    while (str.indexOf(' ') != -1) {
        str = str.replace(' ', '-');
    }

    return str;
}

export default skelify;