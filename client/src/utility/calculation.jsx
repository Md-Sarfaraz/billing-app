

const CalculateSum = (arr, property) => {
    let sum = 0.0;
    if (!Array.isArray(arr)) return 0;
    arr.forEach((element, index) => {
        // TODO if NaN treat as a 0.0 float
        if (isNaN(element[property])) return sum
        if (element[property].lenght === 0) return sum
        sum = sum + + parseFloat(element[property]);
    });
    if (isNaN(sum)) return parseFloat(0).toFixed(2);
    return parseFloat(sum).toFixed(2);
}

function CalculateTax(amount) {
    return (amount * 0.18).toFixed(2);
}

const CalculateInvoice = (isTaxable, data) => {
    var [subtotal, discount, tax, total] = [0, 0, 0, 0, 0]

    if (isTaxable) {
        discount = CalculateSum(data.products, 'discount')
        subtotal = CalculateSum(data.products, 'subTotal')
        let taxableAmount = (subtotal - discount) + data.shippingCharge;
        tax = CalculateTax(taxableAmount);
        total = taxableAmount + tax

        return {
            subtotal: subtotal,
            discount: discount,
            tax: tax,
            total: total
        }
    } else {
        discount = CalculateSum(data.products, 'discount')
        subtotal = CalculateSum(data.products, 'subTotal')
        total = (subtotal - discount) + data.shippingCharge;
        return {
            subtotal: subtotal,
            discount: discount,
            tax: "",
            total: total
        }
    }

}


function dateFormat(date) {
    if (!date) return ""
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`
}

export { CalculateSum, CalculateTax, CalculateInvoice, dateFormat };