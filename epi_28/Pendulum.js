function pendulum(values) {
 values.sort(function(a,b){
     return a -b ;
 })
 const result = [values[0]];
 values.shift();
 console.log(values);
 let right = true;

 for (let i = 0; i < values.length; i++) {
     const value = values[i];
    if(right) {
        result.push(value)
    }else {
        result.unshift(value);
    }
    right = ! right;
 }
 return result;

}


//result is a array with value at index 0; 




console.log(pendulum([4,10,9]), [10,4,9])
console.log(pendulum([8,7,10,3]), [8,3,7,10])
console.log(pendulum([6,6,8,5,10]), [10,6,5,6,8])
console.log(pendulum([9,4,6,4,10,5]), [9,5,4,4,6,10])
console.log(pendulum([4,6,8,7,5]), [8,6,4,5,7])
console.log(pendulum([10,5,6,10]), [10,5,6,10])