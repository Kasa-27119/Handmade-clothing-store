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
        image: ["https://ae01.alicdn.com/kf/HTB1OEDkNVXXXXXQXVXXq6xXFXXXo/Fashion-Autumn-Winter-Long-Sleeve-Harajuku-Women-Basic-Coat-Bomber-baseball-Jacket-Female-Lady-Outerwear-Clothing.jpg", "https://img.shein.com/images/shein.com/201608/86/14703716870467557609.jpg"],
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
        image: ["https://i.pinimg.com/originals/66/cb/3c/66cb3c26977009b3b18c655fa4200083.jpg", "https://i.etsystatic.com/14826524/r/il/4abf10/2701465225/il_1140xN.2701465225_eni1.jpg"],
    },
    {
        id: 4,
        name: "Cat T-Shirt",
        price: "$18.99",
        category: "tops",
        color: "Black",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: ["https://ae01.alicdn.com/kf/HTB1LRSFQFXXXXcTXVXXq6xXFXXXa/Funny-Cat-Tshirt-Harajuku-Cat-Face-Graphic-Tees-Women-T-Shirt-Black-White-Casual-T-shirt.jpg", "https://img1.etsystatic.com/134/1/9196086/il_fullxfull.850402387_ftbg.jpg"],
    },
    {
        id: 5,
        name: "Cherry T-Shirt",
        price: "$18.99",
        category: "tops",
        color: "Mixed",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: ["https://ae01.alicdn.com/kf/HTB1ENRYhNuTBuNkHFNRq6A9qpXar/JKKUCOCO-Tops-Hot-Tees-Cherry-Print-tee-Cotton-t-shirt-Women-Shirt-Short-Sleeve-O-neck.jpg", "https://i.pinimg.com/originals/6b/a5/84/6ba584f5d3e48402ea2c25baaf667a29.jpg"],
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
        name: "Flower Denim Jacket",
        price: "$24.99",
        category: "jacket",
        color: "Blue",
        sizes: ["M", "L"],
        image: ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1hLw37TA_yZS0otbSoRbyQHaHa%26pid%3DApi&f=1&ipt=1b5aef10365e56410501c38f186cd0d4bd654412f4ea0129e597c5e6045fcb2a&ipo=images", "https://www.fashionpumpkin.com/wp-content/uploads/2016/10/embroidered-jacket_svetlana-prodanic_fashion-pumpkin-blog.9jpg-1.jpg"],
    }
]

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