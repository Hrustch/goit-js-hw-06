const categoriesArr = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: `,categoriesArr.length);

categoriesArr.forEach(elem => {
    const categoryName = elem.querySelector("h2").textContent;
    const categoryElemAmmount = elem.querySelectorAll("ul li").length;
    console.log("----------------------");
    console.log(`Category:`,categoryName);
    console.log(`Elements:`,categoryElemAmmount);
});