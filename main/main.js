module.exports = function main(inputs) {
    if (inputs == null) return null;
    if (inputs.distance == null) return null;
    if (inputs.distance == 0)return null;

    price1 = runPrice(inputs.distance);
    price2 = 0;

    if (inputs.parkTime != null && inputs.parkTime != 0){
        price2 = parkPrice(inputs.parkTime);
    }

    price = Math.round(price1+price2);
    console.log(price1+" "+price2+" "+price);
    return price;
};

function runPrice(distance) {
    if (distance <= 2){
        return 6;
    }
    else if (distance <= 8) {
        return 6+(distance-2)*0.8;
    }else {
        return 10.8+(distance-8)*1.2;
    }
}

function parkPrice(min) {
    return 0.25*min;
}
