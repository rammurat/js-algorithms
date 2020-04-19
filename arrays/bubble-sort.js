//Reference - https://codepen.io/btholt/pen/KdYPqa?editors=001

const bubbleSort = (data) => {
    for(let i=0; i < data.length; i++) {
        let current = data[i];
        for(let j=i; j < data.length; j++) {
            if(data[i] > data[j]) {
                const temp = data[j];
                data[j] = data[i];
                data[i] = temp;
            }
        }
    }
    return data;
  };

console.log(bubbleSort([1,22,3]))