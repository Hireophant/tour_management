// Silder Tour Detail
var swiper = new Swiper(".imagesThumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  // watchSlidesProgress: true,
});
var swiper2 = new Swiper(".imagesMain", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: imagesThumb,
  },
});

// End Silder Tour Detail

// Carts
//1. Nếu chưa có thì tạo 1 cart rỗng

const cart = localStorage.getItem("cart");
if (!cart) {
  localStorage.setItem("cart", JSON.stringify([]));
}

const alertAddCartSuccess = () => {
  const elementAlert = document.querySelector("[alert-add-cart-success]");
  if (elementAlert) {
    elementAlert.classList.remove("alert-hidden");
  }
  setTimeout(() => {
    elementAlert.classList.add("alert-hidden");
  }, 3000);
  const closeAlert = elementAlert.querySelector("[close-alert]");
  closeAlert.addEventListener("click", () => {
    elementAlert.classList.add("alert-hidden");
  });
};

// Hiển thị thêm số lượng tour trong giỏ hàng mini-cart
const showMiniCart = () => {
  const miniCart = document.querySelector("[mini-cart]");
  if (miniCart) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    miniCart.innerHTML = totalQuantity;
  }
};

showMiniCart();

// 2. Thêm tour vào cart
const formAddToCart = document.querySelector("[form-add-to-cart]");

if (formAddToCart) {
  formAddToCart.addEventListener("submit", (event) => {
    event.preventDefault();
    const quantity = parseInt(event.target.elements.quantity.value);
    const tourId = parseInt(formAddToCart.getAttribute("tour-id"));
    if (quantity > 0 && tourId) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const index = cart.findIndex((item) => item.tourId === tourId);
      if (index !== -1) {
        cart[index].quantity += quantity;
      } else {
        cart.push({ tourId: tourId, quantity: quantity });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    alertAddCartSuccess();
  });
}

// End Carts
