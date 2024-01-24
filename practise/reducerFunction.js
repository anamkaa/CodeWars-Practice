const arr = [1,22,35,7,9,5,8];

const oddEvenReducer = (evenOddObj,num) => num%2==0 ? {...evenOddObj, even: evenOddObj.even+num} : {...evenOddObj, odd: evenOddObj.odd+num};

const oddEven = {even:0, odd:0};

arr.reduce(oddEvenReducer,oddEven);
