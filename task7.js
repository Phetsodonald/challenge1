function combine(array1,array2){
    const combinedList = [...array1,...array2];
    return combinedList.sort();
}

module.exports = {combine};