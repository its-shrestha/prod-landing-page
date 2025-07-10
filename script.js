const popup = document.getElementById('cart-popup');
const viewCart = document.getElementById('view-cart');

viewCart.addEventListener('click', (e) => {
  popup.style.position = 'absolute';
  popup.style.left = `${e.clientX}px`;
  popup.style.top = `${e.clientY}px`;
  popup.classList.toggle('hidden');
});


const addItem = document.getElementById("add");

addItem.addEventListener('click', () => {
    if(document.getElementById("quantity").value==="") {
        alert("Please enter a quantity");
    }
    else {
            const numItems = document.getElementById("quantity").value;
            popup.innerHTML = "";
            genCart(numItems, popup);
    }
});

function genCart(numItems, popup) {
    
            popup.innerHTML = `
                <div class="container" style="color: black;">
                    <div class="row">
                        <div class="col-4">
                            <img src="https://i.pinimg.com/736x/3d/85/e2/3d85e2ed4efef5733c7d32e400fe797b.jpg"
                            class="img-fluid">
                        </div>

                        <div class="col-8">
                            <h6>Sanrio Hello Kitty Rose Perfume (50 ml)</h6>
                        </div>

                        <div class="col-6">
                            Quantity: 
                        </div>

                        <div class="col-6 d-flex justify-content-center align-items-center gap-2">
                            <button class="btn" id="decrease-btn">-</button>
                            <span id="item-count">${numItems}</span>
                            <button class="btn" id="increase-btn">+</button>
                        </div>

                        <div class="col-6" style="width: 100%;">
                            <button id="proceed">Proceed to Payment</button>

                        </div>
                    </div>
                </div>
            `;


     document.getElementById("increase-btn").addEventListener("click", () => {
        genCart(Number(numItems) + 1, popup);
    });

    document.getElementById("decrease-btn").addEventListener("click", () => {
        if (numItems > 1) genCart(numItems - 1, popup);
    });

    document.getElementById("cart-total").innerHTML = `$ ${12.00*numItems}`;
    document.getElementById("item-nums").innerHTML = numItems;

}


   