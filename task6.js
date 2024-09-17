function longest(array){
    let firstString = array[0];

    for (let i = 0; i < array.length; i++){
        if (array[i].length > firstString.length){
            firstString = array[i];
        }
    }
    return firstString;
}

module.exports ={ longest };