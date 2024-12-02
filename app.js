document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/200', price: '€20' },
        { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/200', price: '€30' },
        { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/200', price: '€40' }
    ];

    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        productGrid.appendChild(productCard);
    });

    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    const closePopup = document.getElementById('close-popup');
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
