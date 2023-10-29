const categories = document.getElementById("categories");

const categoryItem = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItem.length}`);

categoryItem.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});
