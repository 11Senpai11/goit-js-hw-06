const categoriesItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
  const itemName = item.firstElementChild.textContent;
  const itemElements = item.lastElementChild.children.length;
  console.log(`Category:`, itemName);
  console.log(`Elements:`, Number(itemElements));
});
