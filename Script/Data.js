const cardBox = document.querySelector(".cardBoxContainer");
const search = document.querySelector("#search");
const filterContainer = document.querySelector(".filterContainer");
const apiKey = "https://fakestoreapi.com/products";
let products = [];
axios.get(apiKey).then((res) => {
  products = res.data;
  showData();
});
showData = () => {
  products.forEach((product) => {
    let categoryArr = product.category.split(" ");
    let category = categoryArr[0].split("'");
    cardBox.innerHTML += `
    <div class="myCard All ${category[0]}">
    <div class="imgBox">
      <img src="${product.image}" />
    </div>
    <p class="productName">${product.title}</p>
    <p class="productCost">$ ${product.price}</p>
    <button>خرید</button>
  </div>
    `;
  });
  const box = document.querySelectorAll(".myCard");
  let list = document.querySelectorAll(".list li");
  list.forEach((el) => {
    el.addEventListener("click", (e) => {
      list.forEach((el1) => {
        el1.style.color = "#f1f1f1";
      })
      e.target.style.color = "#ecc600"
      box.forEach((el2) => {
        el2.style.display = "none";
      })
      document.querySelectorAll(e.target.dataset.sort).forEach((el3) => {
        console.log(el3);
        el3.style.display = "flex";
      })
    })
  })
};

