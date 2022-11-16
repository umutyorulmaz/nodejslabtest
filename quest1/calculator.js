const multiplyTwoNumbers = (a, b) => {
    if (isNaN(a,b)) {
        return 'Not a Number!';
      }
    return a*b;
    
   
};


const evenDoubler = (a) => {

    if (isNaN(a) === false ){
        return 'Not a Number!';
    }    
    if (a%2 !=0 ){
            return 0;
        }
    
    
    else if (a%2 === 0){
        return a*a;
    }
};




 module.exports={
    multiplyTwoNumbers,
    evenDoubler
 };