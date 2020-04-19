// Reference - https://codepen.io/btholt/pen/meYQPd?editors=0010
function insertionSort(list) {
    var len = list.length,
        current;
    
    for ( var i = 1; i < len; i++ ) { 
      current = list[i];
      
      for ( var j = i - 1; j > -1 && list[j] > current; j-- ) {
        list[j+1] = list[j];

        console.log('I=>',i,'J=>',j)
      }
      list[j+1] = current;
    }

    return list;
  }
  
  console.log(insertionSort([5, 2, 3, 1]));