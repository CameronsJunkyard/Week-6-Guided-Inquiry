let arr = [];

const getAvarage = arr => {
    let total; 
    for (let num of arr) {
        total += num
    }
    return total / arr.length 
}


