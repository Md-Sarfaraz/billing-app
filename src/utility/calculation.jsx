

const CalculateSum = (arr, property) => {
    let sum = 0.0;
    if (!Array.isArray(arr)) return 0;
    arr.forEach(element => {
        if (isNaN(element[property])) return 0
        if (element[property].lenght === 0) return 0
        sum = sum + parseFloat(element[property]);
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

export { CalculateSum, CalculateTax, CalculateInvoice };