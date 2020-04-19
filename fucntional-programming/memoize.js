const memoize = (cb) => {
    let cache = {}

    return (...args) => {
        const params = [...args]
        let cacheId = `${cb.name}${params[0]}`

        if(cacheId in cache) {
            console.log('Found in cache.')
            return cache[cacheId]
        } else {
            let result = cb(...args)
            cache[cacheId] = result

            console.log('Item memoized.')
            return result
        }
    }
}

const sum = (a,b) => {
    return a + b;
}

const _sum = memoize(sum)
console.log(_sum(5,5))
console.log(_sum(5,5))
