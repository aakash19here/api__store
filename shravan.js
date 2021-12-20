const products = document.querySelector('.products');
const renderProducts = (json) =>{
    const html = `
       <div class="app__products">
            <img src="${json.image}" class="product__image"></img>
            <div class="product__title">
                ${json.title}
            </div>
            <div class="product__info">
                <div>Price : $${json.price}</div>
                <div>Rating : ${json.rating.rate}/5</div>
                <button onclick="myFunction()" class="notification">Add to Cart</button>
            </div>
       </div> 
    `;
    products.insertAdjacentHTML('beforeend',html);
}
function myFunction() {
    alert('Item added to cart')
}
const getProducts = ()=> {
    for(let i=1;i<=20;i++){
        fetch(`https://fakestoreapi.com/products/${i}`)
        .then((response) => {
        return response.json()
        })
        .then((json) =>{
            console.log(json);
            renderProducts(json);
        })
    }
}

getProducts();