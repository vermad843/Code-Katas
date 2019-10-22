//customers : [] of integers  
// Each integer represents a customer, 
// and its value is the amount of time 
// they require to check out.
//n : no of tills 

function queueTime(customers, n) {
    let totalTime = 0;
    let tills = Array(n).fill(0);
    
    while (customers.length || tills.some(till => till > 0)) {
      let tillIndex = tills.indexOf(0);
      while (tillIndex !== -1) {
        const currentCustomer = customers.shift();
        tills[tillIndex] = currentCustomer;
        tillIndex = tills.indexOf(0);
      }
      
      totalTime += 1;
      tills.forEach((till, index) => {
        if (till > 0) {
          tills[index] -= 1;
        }
      });
    }
  
    return totalTime;
  }
  
  console.log(queueTime([], 1), 0);
  console.log(queueTime([1,2,3,4], 1), 10);
  console.log(queueTime([2,2,3,3,4,4], 2), 9);
  console.log(queueTime([1,2,3,4,5], 100), 5);