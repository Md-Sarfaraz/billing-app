

function CalculateSum(array, property) {
    let sum = 0;
    array.forEach(element => {
        sum = sum + + element[property];
    });
    return sum;
}

export { CalculateSum };