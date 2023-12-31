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
        <button onclick = "showCardFetch('${categoryTitle.category_id}')" id="${categoryTitle.category_id}" class="btn btn-active btn-ghost text-black px-6">${categoryTitle.category}</button></a> 
        `
        // console.log(categoryTitle.category_id)
        categoriesTitleContainer.appendChild(listTab);
    });
}

const showCardFetch = async(id ='1000') =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    let categories = data.data;
    // console.log(categories);
    // bg change
    // const activeBtn = document.getElementById(activeID);
    // activeBtn.style.backgroundColor = "red";
    // activeBtn.style.color = 'white';
    // console.log(activeBtn)
    // sorting
    const sortId = document.getElementById('sort-id');
    sortId.addEventListener('click', function(){
        // categories.map(category =>{
        //     const value = parseInt(category.others.views);
        //     arr.push(value)
            
        // });
        // const sortCategoryList = arr.sort();
        // console.log(sortCategoryList)
        categories = categories.sort(function(a,b){
            return parseInt(b.others?.views) - parseInt(a.others?.views)
        })
        showCardItem(categories)
        // console.log(categories)
    })
    showCardItem(categories);
    
    
}
const showCardItem = (categories) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10";
    cardContainer.innerText = " ";
    // for no data
    if(categories.length === 0){
        cardContainer.classList = "";
        const cardItem = document.createElement('div');
        cardItem.classList = 'max-h-screen flex justify-center items-canter';
        cardItem.innerHTML = `
            <div class="text-center">
                <img src="./images/Icon.png" alt="" class="mx-auto">
                <h2 class="font-bold text-3xl mt-10">Oops!! Sorry, There is <br> no content here</h2>
            </div>
        `
        cardContainer.appendChild(cardItem);
    }
    // for data

    categories.forEach(category =>{
        const timeInSecondString = category.others?.posted_date;
        const timeInSecond = parseInt(timeInSecondString);
        const timeInHours = Math.floor(timeInSecond / 3600);
        const timeInMinutes = Math.floor((timeInSecond % 3600)/60)
        
        const time = `${timeInHours}hrs ${timeInMinutes} min ago`
        // console.log(typeof timeInSecond, timeInSecond)
        const cardItem = document.createElement('div');
        cardItem.classList = 'card bg-base-100 shadow-xl';
        cardItem.innerHTML = `
        <figure class="max-h-48 relative">
            <img class="w-full" src="${category.thumbnail}" alt=" "/>
            
            <div class="bg-black text-white absolute right-4 bottom-2 rounded-lg">${category.others?.posted_date? this.innerHTML=`<p class="px-2 py-1">${time}</p>` : this.innerHTML=' '}
            
            </div>
        </figure>
        <div class="card-body">
            <div class="flex gap-6">
                <div class="w-12 rounded-full">
                    <img src="${category.authors[0]?.profile_picture? category.authors[0].profile_picture :"profile unavailaible"}" alt="" class="w-full rounded-full">
                </div>
                <div class="">
                    <h2 class="card-title">${category.title? category.title : "title not availaible"}</h2>
                    <div class="">
                        <p class="flex">${category.authors[0]?.profile_name? category.authors[0].profile_name:"no author found"}
                        <span class="mt-1 ml-2">${category.authors[0]?.verified? this.innerHTML = '<img src="./images/verified.png">' : " "}
                        </span> 
                        </p>
                        
                    </div>
                    <p><span>${category.others?.views? category.others.views : "no"} </span>views</p>
                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(cardItem);
        // console.log(parseInt(category.others.views))
    })
    
    
}

categoriesTypeHandler();
showCardFetch()

// const activeBtn = document.getElementById('active-btn');
// activeBtn.addEventListener('click', function(){
//     console.log(activeBtn)
// })



