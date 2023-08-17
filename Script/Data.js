const cardBox = document.querySelector(".cardBoxContainer");
const search = document.querySelector("#search");
let productName = [];
let products = [];
axios.get("https://fakestoreapi.com/products").then((res) => {
  products = res.data;
  showData();
});
showData = () => {
  products.forEach((product) => {
    cardBox.innerHTML += `
    <div data-aos="flip-left" data-aos-duration="1000" class="myCard">
    <div class="imgBox">
      <img src="${product.image}" />
    </div>
    <p class="productName">${product.title}</p>
    <p class="productCost">$ ${product.price}</p>
    <button>خرید</button>
  </div>
    `;
    productName.push(product.title);
  });
};

