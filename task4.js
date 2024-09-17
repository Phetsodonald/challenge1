function square (num){
    for (let i = 0; i < num; i++){
        console.log("#".repeat(num));
    }
}
module.exports = { square };