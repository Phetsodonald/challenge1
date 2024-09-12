function multiples(num){
    let sum = 0;

    for(let i = 3; i < num; i += 3){
        sum += i;
    }

    for(let i = 5; i < num; i += 5){
        sum += i;
    }
    return sum
}

module.exports = {multiples};