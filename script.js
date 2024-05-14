document.addEventListener('DOMContentLoaded', function() {
    // Fetch featured products data
    fetch('product-data.json')
        .then(response => response.json())
        .then(data => {
            const featuredContainer = document.querySelector('.featured-container');
            data.featured.forEach(product => {
                const productElement = `
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button>Add to Cart</button>
                    </div>
                `;
                featuredContainer.innerHTML += productElement;
            });
        })
        .catch(error => console.error('Error fetching featured products:', error));

    // Fetch best sellers data
    fetch('product-data.json')
        .then(response => response.json())
        .then(data => {
            const bestSellersContainer = document.querySelector('.best-sellers-container');
            data.bestSellers.forEach(product => {
                const productElement = `
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button>Add to Cart</button>
                    </div>
                `;
                bestSellersContainer.innerHTML += productElement;
            });
        })
        .catch(error => console.error('Error fetching best sellers:', error));
});

<section id="featured">
    <div class="container">
        <h2>Featured Products</h2>
        <div class="featured-container"></div>
    </div>
</section>

<section id="best-sellers">
    <div class="container">
        <h2>Best Sellers</h2>
        <div class="best-sellers-container"></div>
    </div>
</section>
