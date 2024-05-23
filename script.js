// mapbox token
mapboxgl.accessToken = "pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA";

// initialise jQuery script
$(document).ready(function () {

    // jquery functions here
    // $("p").css("color", "white"); // jquery test
});

// clothing array 
const clothingItems = [{
        id: 6,
        name: "Frog Hat",
        price: "$12.99",
        category: "Accessories",
        color: ["Green", "Pink"],
        sizes: "ONE SIZE",
        image: ["https://i.etsystatic.com/23931016/r/il/9ca001/2918979529/il_1140xN.2918979529_fhlu.jpg", "https://i.etsystatic.com/28947382/r/il/dddb8b/3037038704/il_1588xN.3037038704_dccf.jpg"],
    },
    {
        id: 7,
        name: "Pink Jeans",
        price: "$24.99",
        category: "Bottoms",
        color: "Pink",
        sizes: ["S", "M", "L"],
        image: ["https://www.wholesalejeans.to/wp-content/uploads/2021/11/16364203131.png", "https://i.pinimg.com/originals/ca/bb/86/cabb869a9de508beae891e17c60fc44f.png"],
    },
    {
        id: 3,
        name: "Blue Knitted Sweater",
        price: "$21.99",
        category: "Tops",
        color: "Blue",
        sizes: ["M", "L", "XL"],
        image: ["imgs/blue-sweater-1.jpg", "imgs/blue-sweater-2.jpg"],
    },
    {
        id: 5,
        name: "Cherry T-Shirt",
        price: "$18.99",
        category: "Tops",
        color: "Mixed",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: ["imgs/cherry-tee1.jpg", "imgs/cherry-tee2.jpg"],
    },
    {
        id: 8,
        name: "Pattern Denim Jacket",
        price: "$24.99",
        category: "Jacket",
        color: "Blue",
        sizes: ["M", "L"],
        image: ["imgs/pattern-denim-jacket1.jpg", "imgs/pattern-denim-jacket2.jpg"],
    },
    {
        id: 2,
        name: "Black Cat Bag",
        price: "$23.99",
        category: "Accessories",
        color: "Mixed",
        sizes: "ONE SIZE",
        image: ["https://i.pinimg.com/originals/99/7c/b6/997cb6ce95bf4f05f78c2d3d313ea375.jpg", "https://i.pinimg.com/originals/5b/58/fa/5b58fa650c08314c363f79da3368f8e7.jpg"],
    },
    {
        id: 1,
        name: "Baseball Jacket",
        price: "$30.99",
        category: "Jackets",
        color: ["Blue", "Mixed"],
        sizes: ["XS", "S", "M", "L"],
        image: ["imgs/bear-baseball-jacket1.jpg", "imgs/bear-baseball-jacket2.jpg"],
    },
    {
        id: 4,
        name: "Cat T-Shirt",
        price: "$18.99",
        category: "Tops",
        color: "Black",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: ["imgs/cat-black-tee1.jpg", "imgs/cat-black-tee2.jpg"],
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
// filter on click - clothing type
clothingTypeFilter.addEventListener("change", function() {
    filterAndPopulateCardContainer();
    console.log("type filter click is working");
})

// filter on click - clothing size
clothingSizeFilter.addEventListener("change", function() {
    filterAndPopulateCardContainer();
    console.log("size filter click is working");
})

// filter on click - clothing color
clothingColorFilter.addEventListener("change", function() {
    filterAndPopulateCardContainer();
    console.log("color filter click is working");
})



// on click function - sorting buttons
// sort on click - alphabet sort button
alphabeticalSortButton.addEventListener("click", function () {

    // getting the filtered array first
    const filteredClothingItems = filterClothingItems();

    // running the sorting function on the filtered array
    const sortedClothingItems = sortClothingItemsAlphabetical(filteredClothingItems);

    // then populate the cards with the filtered and sorted array
    populateCardContainer(sortedClothingItems);

    console.log("alphabet sort btn working");
})

// sort on click - price low to high button
lowToHighSortButton.addEventListener("click", function () {

    // getting the filtered array first
    const filteredClothingItems = filterClothingItems();

    // running the sorting function on the filtered array
    const sortedClothingItems = sortClothingItemsLowToHigh(filteredClothingItems);

    // then populate the cards with the filtered and sorted array
    populateCardContainer(sortedClothingItems);

    console.log("low to high sort btn working");
})

// sort on click - price high to low button
highToLowSortButton.addEventListener("click", function () {

    // getting the filtered array first
    const filteredClothingItems = filterClothingItems();

    // running the sorting function on the filtered array
    const sortedClothingItems = sortClothingItemsHighToLow(filteredClothingItems);

    // then populate the cards with the filtered and sorted array
    populateCardContainer(sortedClothingItems);

    console.log("high to low sort btn working");
})


function filterClothingItems() {
    const filteredClothingItems = clothingItems.filter(clothingItem => {
        // clothing item value and property
        const clothingItemType = clothingItem.category.toLowerCase();
        const clothingTypeFilterValue = clothingTypeFilter.value.toLowerCase();

        // clothing item size value and property
        const clothingItemSize = clothingItem.sizes;
        const clothingSizeFilterValue = clothingSizeFilter.value.toUpperCase();

        // clothing item color value and property
        const clothingItemColor = clothingItem.color;
        const clothingColorFilterValue = clothingColorFilter.value.toLowerCase();

        // if statements - if clothing detail and filter values DON'T MATCH

        // if the clothing item type DOESN'T include the filter value - do not add to the array
        if (clothingTypeFilterValue && !clothingItemType.includes(clothingTypeFilterValue)) {
            return false;
        }

        // if the item size doesn't include the filter value - do not add to the array
        if (clothingSizeFilterValue) {
            if (Array.isArray(clothingItemSize)) {
                if (!clothingItemSize.includes(clothingSizeFilterValue)) {
                    return false;
                }
            } else {
                if (clothingItemSize !== clothingSizeFilterValue) {
                    return false;
                }
            }
        }

        // if the item color doesn't match the filter value  - do not add to the array
        if (clothingColorFilterValue) {
            if (Array.isArray(clothingItemColor)) {
                if (!clothingItemColor.map(c => c.toLowerCase()).includes(clothingColorFilterValue)) {
                    return false;
                }
            } else {
                if (clothingItemColor.toLowerCase() !== clothingColorFilterValue) {
                    return false;
                }
            }
        }

        // if all of item properties match the filter value
        return true;
    });

    // return the filtered array
    return filteredClothingItems;
}


// sorting functions
// sorting alphabetically
function sortClothingItemsAlphabetical(clothingItems) {
    return clothingItems.sort((a, b) => {
        const itemNameA = a.name.toLowerCase();
        const itemNameB = b.name.toLowerCase();

        return itemNameA.localeCompare(itemNameB);
    })
}

// sort price low to high
function sortClothingItemsLowToHigh(clothingItems) {
    return clothingItems.sort((a, b) => {

        // turning the item price into an integer and removing the dollar sign and decimal
        const itemPriceA = parseFloat(a.price.replace(/\$/g, ""));
        const itemPriceB = parseFloat(b.price.replace(/\$/g, ""));

        return itemPriceA - itemPriceB;
    })
}

// sort price high to low
function sortClothingItemsHighToLow(clothingItems) {
    return clothingItems.sort((a, b) => {

        // turning the item price into an integer and removing the dollar sign and decimal
        const itemPriceA = parseFloat(a.price.replace(/\$/g, ""));
        const itemPriceB = parseFloat(b.price.replace(/\$/g, ""));

        return itemPriceB - itemPriceA;
    })
}

// FILTER AND POPULATE PRODUCT CARD CONTAINER
function filterAndPopulateCardContainer() {
    const filteredClothingItems = filterClothingItems();
    populateCardContainer(filteredClothingItems);
}


// initial population of cards
function populateCardContainer(clothingItems) {

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

// mapbox initialisation
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
    center: [-122.170031285158, 37.70496989833294], // starting position [lng, lat]
    zoom: 15,
});

// getting the map marker
const customMarker = document.getElementById('custom-marker-1');

// setting up the mapbox marker
new mapboxgl.Marker(customMarker)
    .setLngLat([-122.170031285158, 37.70496989833294]) // Specify the coordinates of the marker

    // setting a pop-up on the marker
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML("<h1>AdoreEco Clothing Store</h1><p>1922 Republic Ave, San Leandro, CA 94577, USA</p>"))
    .addTo(map);

    