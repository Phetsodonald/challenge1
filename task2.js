function hasThree(num1,num2){
    let sum = num1 + num2;
    if(num1 === 3 || num2 === 3){
        return true;
    }else if(sum === 3){
        return true;
    }else{
        return false;
    }
};

module.exports = {hasThree};