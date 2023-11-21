document.addEventListener('DOMContentLoaded', function () {
    const furnitureData = [
        {
            name: 'Sofa',
            description: 'Comfortable three-seater sofa',
            image: './pictures/pic/360_F_428769739_IzP2vuPUuylzoaZZAq5UBBD7zDtbKpFS.webp',
            price: '$599'
        },
        {
            name: 'Dining Table',
            description: 'Elegant dining table for family gatherings',
            image: './pictures/pic/360_F_371926762_MdmDMtJbXt7DoaDrxFP0dp9Nq1tSFCnR.webp',
            price: '$299'
        },
        {
            name: 'Armchair',
            description: 'Classic armchair with plush cushions',
            image: 'https://asset1.cxnmarksandspencer.com/is/image/mands/__T65_5600B_KC__EC_CHR_EMIL_0?wid=1000&qlt=100&fmt=webp-alpha&bfc=off',
            price: '$199'
        },
        {
            name: 'Bed Frame',
            description: 'Modern queen-size bed frame',
            image: 'https://casper.com/dw/image/v2/BFHV_PRD/on/demandware.static/-/Sites-casper-master/default/dwa90f78b5/product_images/Haven%20Bed%20Frame/haven-bed-frame-heathered-gray-1.jpg?sw=540&sh=333&sm=cut',
            price: '$499'
        },
        {
            name: 'Coffee Table',
            description: 'Glass-top coffee table with wooden legs',
            image: 'https://www.furnitureworld.co.uk/images/products/large/2888_57601.jpg',
            price: '$129'
        },
        {
            name: 'Bookshelf',
            description: 'Tall bookshelf with adjustable shelves',
            image: 'https://i5.walmartimages.com/seo/Homfa-Standard-Bookshelf-Bookcase-6-Tier-Tall-Bookshelf-Display-Shelves-Standing-Cube-Organizer-for-Living-Room-Dark-Oak_10453b7e-f700-4b28-91f5-56eb319f3320.bd58eecd024e9ff8555b6548487c45a5.png',
            price: '$249'
        },
        // Add more furniture items as needed
    ];

    const appContainer = document.getElementById('app');
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search furniture...';

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.onclick = function () {
        const searchTerm = searchInput.value.toLowerCase();
        gridContainer.innerHTML = '';

        for (let i = 0; i < furnitureData.length; i++) {
            const item = furnitureData[i];
            const nameLower = item.name.toLowerCase();
            const descLower = item.description.toLowerCase();

            if (nameLower.indexOf(searchTerm) !== -1 || descLower.indexOf(searchTerm) !== -1) {
                const card = createCard(item);
                gridContainer.appendChild(card);
            }
        }

        // Check if the return button already exists
        const existingReturnButton = document.getElementById('returnButton');
        if (!existingReturnButton) {
            const returnButton = document.createElement('button');
            returnButton.id = 'returnButton';
            returnButton.textContent = 'Return to Main Page';
            returnButton.onclick = resetFurnitureItems;
            appContainer.appendChild(returnButton);
        }
    };

    function resetFurnitureItems() {
        location.reload();
    }

    appContainer.appendChild(searchInput);
    appContainer.appendChild(searchButton);
    appContainer.appendChild(gridContainer);

    function createCard(item) {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = item.image;
        image.style.width = '300px'; // Set the width to 100px
        image.alt = item.name;

        const title = document.createElement('h3');
        title.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price);

        return card;
    }

    // Initial display of furniture items
    for (let i = 0; i < furnitureData.length; i++) {
        const card = createCard(furnitureData[i]);
        gridContainer.appendChild(card);
    }
});