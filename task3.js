function isSixtyFive(num1,num2){
    const sum = num1 + num2;
    if (num1 === 65 || num2 === 65){
        return true;
    }else if(sum === 65){
        return true;
    }else{
        return false;
    }
};

module.exports = {isSixtyFive};