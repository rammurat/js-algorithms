function reduce(list, cb, initial) {
    let _content = initial;

    for(let i=0;i<list.length;i++){
        if(i === 0 && _content === undefined) {
            _content = list[i];
        } else {
            _content = cb(list[i], _content);
        }
    }
    return _content;
}

const arrList = [1,2,3,4,5];
console.log(reduce(arrList, (item, sum)=> {
    return item + sum;
}, 0))