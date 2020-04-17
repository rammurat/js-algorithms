function removeDuplicatesApproachA(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        } 
    }
    return newArr;
}

function removeDuplicatesApproachB(arr) {
    let newArr = []
    let temp

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== temp) {
            newArr.push(arr[i])
            temp = arr[i]
        }
    }
    return newArr;
}

function removeDuplicatesApproachC(arr) {
    return [... new Set(arr)]
}

const arr = [1, 3, 5, 6, 6, 3, 2, 1]
console.log(removeDuplicatesApproachA(arr))
console.log(removeDuplicatesApproachB(arr.sort()))
console.log(removeDuplicatesApproachC(arr))