
function map(list, cb) {
    let _list = []

    for(let i=0;i<list.length;i++){
        _list.push(cb(list[i],i,list))
    }
    return _list
}

const arrList = [{id:1,name:'John'}, {id:2,name:'Brian'}];
console.log(map(arrList, (item)=> {
    return item;
}))