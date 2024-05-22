// initialise jQuery script
$(document).ready(function() {

    // jquery functions here
    // $("p").css("color", "white"); // jquery test
});

// clothing array 
const clothingItems = [
    {
        id: 1,
        name: "Baseball Jacket",
        price: "$30.99",
        category: "jackets",
        color: "Blue",
        sizes: ["XS", "S", "M", "L"],
        image: ["imgs/bear-baseball-jacket1.jpg", "imgs/bear-baseball-jacket2.jpg"],
    },
    {
        id: 2,
        name: "Black Cat Bag",
        price: "$23.99",
        category: "accessories",
        color: "Mixed",
        sizes: "ONE SIZE",
        image: ["https://i.pinimg.com/originals/99/7c/b6/997cb6ce95bf4f05f78c2d3d313ea375.jpg", "https://i.pinimg.com/originals/5b/58/fa/5b58fa650c08314c363f79da3368f8e7.jpg"],
    },
    {
        id: 3,
        name: "Blue Knitted Sweater",
        price: "$21.99",
        category: "tops",
        color: "Blue",
        sizes: ["M", "L", "XL"],
        image: ["imgs/blue-sweater-1.jpg", "imgs/blue-sweater-2.jpg"],
    },
    {
        id: 4,
        name: "Cat T-Shirt",
        price: "$18.99",
        category: "tops",
        color: "Black",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: ["imgs/cat-black-tee1.jpg", "imgs/cat-black-tee2.jpg"],
    },
    {
        id: 5,
        name: "Cherry T-Shirt",
        price: "$18.99",
        category: "tops",
        color: "Mixed",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: ["imgs/cherry-tee1.jpg", "imgs/cherry-tee2.jpg"],
    },
    {
        id: 6,
        name: "Frog Hat",
        price: "$12.99",
        category: "accessories",
        color: "Green",
        sizes: "ONE SIZE",
        image: ["https://i.etsystatic.com/23931016/r/il/9ca001/2918979529/il_1140xN.2918979529_fhlu.jpg", "https://i.etsystatic.com/28947382/r/il/dddb8b/3037038704/il_1588xN.3037038704_dccf.jpg"],
    },
    {
        id: 7,
        name: "Pink Jeans",
        price: "$24.99",
        category: "bottoms",
        color: "Pink",
        sizes: ["S", "M", "L"],
        image: ["https://www.wholesalejeans.to/wp-content/uploads/2021/11/16364203131.png", "https://i.pinimg.com/originals/ca/bb/86/cabb869a9de508beae891e17c60fc44f.png"],
    },
    {
        id: 8,
        name: "Pattern Denim Jacket",
        price: "$24.99",
        category: "jacket",
        color: "Blue",
        sizes: ["M", "L"],
        image: ["imgs/pattern-denim-jacket1.jpg", "imgs/pattern-denim-jacket2.jpg"],
    }
]

// getting html elements
// filter select
const clothingTypeFilter = document.getElementById("clothing-type");
const clothingSizeFilter = document.getElementById("size");
const clothingColorFilter = document.getElementById("color");

// sorting buttons
const alphabeticalSortButton = document.getElementById("alphabetical-sort");
const lowToHighSortButton = document.getElementById("price-low-to-high-sort");
const highToLowSortButton = document.getElementById("price-high-to-low-sort");

// on click (change) function - filter selectors
clothingTypeFilter.addEventListener("change", function() {
    console.log("type filter click is working");
    console.dir(clothingTypeFilter.value);
    // filter and then populate the product container div - function goes here
})

clothingSizeFilter.addEventListener("change", function() {
    console.log("size filter click is working");
    console.dir(clothingSizeFilter.value);
    // filter and then populate the product container div - function goes here
})

clothingColorFilter.addEventListener("change", function() {
    console.log("color filter click is working");
    console.dir(clothingColorFilter.value);
    // filter and then populate the product container div - function goes here
})

// filter functions
function filterClothingItems() {

    // return filtered clothing items as an array = filteredClothingItems
    const filteredClothingItems = clothingItems.filter(clothingItem => {

        // main filter - clothing type
        // set both filter value and clothing type to be exactly the same - set to both lowercase first

        // clothing item value and property
        const clothingItemType = clothingItem.category.toLowerCase();
        const clothingTypeFilterValue = clothingTypeFilter.value.toLowerCase();

        // clothing item size value and property
        const clothingItemSize = clothingItem.sizes.toLowerCase();
        const clothingSizeFilterValue = clothingTypeFilter.value.toLowerCase();

        // clothing item color value and property
        const clothingItemColor = clothingItem.color.toLowerCase();
        const clothingColorFilterValue = clothingColorFilter.value.toLowerCase();


        // if statements - if clothing detail and filter values DON't MATCH

        // if the clothing item type DOESN'T include the filter value - do not add to the array
        if (clothingTypeFilterValue && !clothingItemType.includes(clothingTypeFilterValue)) {

            return false;
        }

        // if the item size doesn't include the filter value - do not add to the array
        if (clothingSizeFilterValue && !clothingItemSize.includes(clothingSizeFilterValue)) {
            return false;
        }

        // if the item color doesn't match the filter value  - do not add to the array
        if (clothingColorFilterValue && !clothingItemColor.includes(clothingColorFilterValue)) {
            return false;
        }

        // if all of item properties match the filter value
        return true;
   
    })
    // and add the to filteredProperties array
    return filteredClothingItems;

    
}

// sorting functions
// sorting alphabetically
function sortClothingItemsAlphabetical (clothingItems) {
    return clothingItems.sort((a, b) => {
        const itemNameA = a.name.toLowerCase();
        const itemNameB = b.name.toLowerCase();

        return itemNameA.localCompare(itemNameB);
    })
}

// sort price low to high
function sortClothingItemsLowToHigh (clothingItems) {
    return clothingItems.sort((a, b) => {

        // turning the item price into an integer and removing the dollar sign and decimal
        const itemPriceA = parseFloat(a.price.replace(/\$/g, "").replace(/./g, ""));
        const itemPriceB = parseFloat(b.price.replace(/\$/g, "").replace(/./g, ""));

        return itemPriceA - itemPriceB;
    })
}

// sort price high to low
function sortClothingItemsHighToLow (clothingItems) {
    return clothingItems.sort((a, b) => {

        // turning the item price into an integer and removing the dollar sign and decimal
        const itemPriceA = parseFloat(a.price.replace(/\$/g, "").replace(/./g, ""));
        const itemPriceB = parseFloat(b.price.replace(/\$/g, "").replace(/./g, ""));

        return itemPriceB - itemPriceA;
    })
}











// initial population of cards
function populateCardContainer (clothingItems) {

    // get product card container first
    const productCardContainer = document.getElementById("product-card-container");

    // clear container 
    productCardContainer.innerHTML = "";

    // creating an HTML card for each clothingItem in the clothingItems array
    clothingItems.forEach(clothingItem => {

        const clothingItemCard = `
        <div class="clothing-item-card">
            
            <!-- swiper slider main container -->
            <div class="swiper">

                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                
                    <!-- Slides -->
                    <div class="swiper-slide"><img src="${clothingItem.image[0]}" alt="${clothingItem.name} image 1" class="clothing-item-image"></div>
                    <div class="swiper-slide"><img src="${clothingItem.image[1]}" alt="${clothingItem.name} image 2" class="clothing-item-image"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>

            <!-- clothing item details -->
            <div class="clothing-item-details">

                <h2>${clothingItem.name}</h2>
                <h3>${clothingItem.price}</h3>

                <div class="clothing-item-sizes-color">
                    <p>${clothingItem.sizes}</p>
                    <p>${clothingItem.color}</p>
                </div>
            </div>
        </div>
        `;

        // append clothingItemCard to the parent HTML element "product-card-container"
        productCardContainer.innerHTML += clothingItemCard;

    })

    // re-initialise swiper js
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // enables pagination bullets
        },
    });

}

// CALLBACK TO POPULATE CARDS - FUNCTIONS WILL NOT WORK UNLESS CALLED BACK TO
populateCardContainer(clothingItems);

// swiper js
// initialise swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // enables pagination bullets
    },
});