const arr = [4,5,6,7,0,1,2];

const arrSearch = (arr,value) => {
    for (let index of arr) {
        if(arr[index] == value) {
            console.log("Index:",index)
            return index
        }
    }
    return -1 
}


arrSearch(arr,0)