'use strict';



((num)=>{
  const arr = [1,2,3,4,5];
return console.log (arr.reduce((acc, el)=>acc+el*num, 0))
})(5);


const myFunc =()=>{
  const getName = ()=>'Sergey';
  const getLastName = ()=>'Booms';
  return {
    getName,
    getLastName
  };
    
};


const myFuncMethods = myFunc()
console.log(myFuncMethods.getName())

console.log(myFunc().getName());
 
