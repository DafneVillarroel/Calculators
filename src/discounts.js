const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');

ham.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
});

function calculateDiscountPrice(price, discount) {
    const PercentageDiscountPrice = 100 - discount;
    const priceWithDiscount = (price * PercentageDiscountPrice) / 100;


    return priceWithDiscount;
}

function calculateDiscountPriceCoupon(price, discount, coupon) {
    const PercentageDiscountPrice = 100 - discount;
    const priceWithDiscount = (price * PercentageDiscountPrice) / 100;
    const priceWithDiscountCoupon = priceWithDiscount - coupon;

    return priceWithDiscountCoupon;
}


function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscound");
    const discountValue = inputDiscount.value;


    const priceWithDiscount = calculateDiscountPrice(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "The discounted price are: $" + priceWithDiscount;

}

function onclickButtonPriceCupon() {
    const inputPrice1 = document.getElementById("InputPrice");
    const priceValue1 = inputPrice1.value;


    const inputDiscount1 = document.getElementById("InputDiscound");
    const discountValue1 = inputDiscount1.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
          {
              name: "CODE10",
              discount: 10,
          },
          {
              name: "CODE20",
              discount: 20,
          },
          {
              name: "CODE30",
              discount: 30,
          },
      ];

      const isCouponValueValid = function(coupons){
      return coupons.name === couponValue;
    }

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon){
      alert("The coupon " + couponValue + "is not valid");
    } else {
        const priceWithDiscountCoupon = calculateDiscountPriceCoupon(priceValue1, discountValue1, userCoupon.discount);

        const ResultPC = document.getElementById("ResultPC");
        ResultPC.innerText = "The total price with COUPON is: $" + priceWithDiscountCoupon;
    }

}