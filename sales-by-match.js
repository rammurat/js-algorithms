// input 
// n = 9
// array = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// return 3

// Find pair of socks 
function sockMerchant(n, ar) {
    let newArr = {}
    let count = 0;
    for(let i=0;i<n;i++) {
        const t = ar[i]
        const b = t.toString()
        if(!newArr[b]) {
                newArr[t] = 1;
        } else {
             newArr[t] = newArr[t] + 1;
        }
    }
    for (const property in newArr) {
        const val = Math.floor(newArr[property]/2)
        count = val >= 1 ? (val + count) : count
    }
    return count;
}