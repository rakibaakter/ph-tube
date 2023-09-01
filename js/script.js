// https://github.com/programming-hero-web-course1/b8a6-build-phtube-rakibaakter
// insidious-cellar.surge.sh

// tabsContainer tab for categories
const categoriesTypeHandler =async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const categoriesTitleList = await res.json();
    const categoriesTitle = categoriesTitleList.data;

    displayCategoriesTitle(categoriesTitle);
}
const displayCategoriesTitle = (categoriesTitle) =>{
    const categoriesTitleContainer = document.getElementById('categories-type-container');
    categoriesTitle.forEach(categoryTitle=> {
        const listTab = document.createElement('a');
        // listTab.classList = "tab";
        listTab.innerHTML = `
        <button onclick = "showCard('${categoryTitle.category_id}')" class="btn btn-active btn-ghost text-black px-6">${categoryTitle.category}</button></a> 
        `
        categoriesTitleContainer.appendChild(listTab);
    });
}

const showCard = async(id ='1000') =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    const categories = data.data;
    console.log(categories);
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
    categories.forEach(category =>{
        const cardItem = document.createElement('div');
        cardItem.classList = 'card bg-base-100 shadow-xl';
        cardItem.innerHTML = `
        <figure><img src="${category.thumbnail}" alt=" " /></figure>
        <div class="card-body">
            <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full">
                    <img src="${category.authors[0]?.profile_picture? category.authors[0].profile_picture :"profile unavailaible"}" alt="" class="w-full rounded-full">
                </div>
                <div class="flex-1">
                    <h2 class="card-title">${category.title? category.title : "title not availaible"}</h2>
                    <div>
                        <p>${category.authors[0]?.profile_name? category.authors[0].profile_name:"no author found"}</p>
                        <img src="" alt="" class=" rounded-full">
                    </div>
                    <p><span>${category.others?.views? category.others?.views : "no"} </span>views</p>
                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(cardItem);
    })
}
categoriesTypeHandler();
showCard()

