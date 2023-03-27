document.getElementById('apply-btn').addEventListener('click', function () {
    // console.log('connected');
    const mainPrice = document.getElementById('main-price');
    const mainPricestring = mainPrice.innerText;
    const mainPricegiven = parseFloat(mainPricestring);

    const discount = mainPricegiven * 30 / 100;
    const priceToPay = mainPricegiven - discount;

    const discountPrice = document.getElementById('discounted-price');
    discountPrice.innerText = priceToPay;
})