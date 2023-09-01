// https://github.com/programming-hero-web-course1/b8a6-build-phtube-rakibaakter
// insidious-cellar.surge.sh

// tabsContainer tab for categories
const categoriesTypeHandler =async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const categoriesList = await res.json();
    const categories = categoriesList.data;

    displayCategoriesTitle(categories);
}
const displayCategoriesTitle = (categories) =>{
    const categoriesTypeContainer = document.getElementById('categories-type-container');
    categories.forEach(category=> {
        const listTab = document.createElement('a');
        // listTab.classList = "tab";
        listTab.innerHTML = `
        <button onclick = "showCard('${category.category_id}')" class="btn btn-active btn-ghost text-black px-6">${category.category}</button></a> 
        `
        categoriesTypeContainer.appendChild(listTab);
    });
}

const showCard = async(id ='1000') =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    console.log(data.data);
}
categoriesTypeHandler();
showCard()

