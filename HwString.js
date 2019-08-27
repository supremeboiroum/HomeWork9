function WrongError() {
    Error.call(this) ;

    this.message = 'Input params error!';
}

WrongError.prototype = Object.create(Error.prototype);

function NotString() {

    Error.call(this) ;
    this.message = 'Input param in not a string!';
}
NotString.prototype = Object.create(Error.prototype);


const chekSymbol = (str, elem1, elem2) => {
    if (typeof str !== "string") {
        throw new NotString()
    }

    if (typeof elem1 !== "string" || typeof elem2 !== "string") {
        throw new WrongError();
    }

    let el1 = 0;
    let el2 = 0;
    const _elem1 = elem1.toLowerCase();
    const _elem2 = elem2.toLowerCase();
    const _str = str.toLowerCase();

    for (let i = 0; i < _str.length; i++) {
        if (_str.charAt(i) === _elem1) {
            el1++;
        }

        if (_str.charAt(i) === _elem2) {
            el2++;
        }
    }

    return el1 === el2;
}

const truncate = (str, maxLength) => {
    if (!str || typeof str !== 'string' || maxLength < 3 || str.length < maxLength) {
        throw new WrongError();
    }
    
    return `${str.slice(0, maxLength - 3)}...`;
};


const deleteFoundRow = (str1, str2) => {
    if (typeof str1 !== "string" && typeof str2 !== "string") {
        throw new NotString();
    }

    if (str1.includes(str2)) {
        str1 = str1.replace(str2, '');
    } else {
        return str1;
    }

    return deleteFoundRow(str1, str2);;
}

// console.log(deleteFoundRow('snake, snake, snake, snake', 'n'));