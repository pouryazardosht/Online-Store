const cardBox = document.querySelector(".cardBoxContainer");
let products = [];
axios.get("https://fakestoreapi.com/products").then((res) => {
  products = res.data;
  console.log(products);
  showData();
});
showData = () => {
  products.forEach((product) => {
    console.log(product);
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
  });
};
