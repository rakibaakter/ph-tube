// https://github.com/programming-hero-web-course1/b8a6-build-phtube-rakibaakter
// insidious-cellar.surge.sh

// tabsContainer tab for categories
const categoriesTypeHandler =async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const categoriesList = await res.json();
    const categoriesTypeContainer = document.getElementById('categories-type-container');
    console.log(categoriesList.data)
    const categories = categoriesList.data;
    categories.forEach(category=> {
        const listTab = document.createElement('a');
        // listTab.classList = "tab";
        listTab.innerHTML = `
        <button class="btn btn-active btn-ghost text-black px-6">${category.category}</button></a> 
        `

        categoriesTypeContainer.appendChild(listTab);
    });

}
categoriesTypeHandler()

