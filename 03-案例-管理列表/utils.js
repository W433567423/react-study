function formatName(name) {
    return `《${name}》`
}

function formatPrice(price) {
    if (typeof price === 'number')
        return `￥${price.toFixed(2)}`
    else if (typeof price === 'string')
        return `￥${(Number(price) || 0).toFixed(2)}`
}

