function triangle(num){
    for (let i = 0; i <= num; i++){
        console.log("#".repeat(i));
    }

    if (num < 0){
        const numPositive = num * -1;
        for (let i = numPositive; i >= 0; i--){
            console.log("#".repeat(i));
        }
    }
}

module.exports = {triangle};