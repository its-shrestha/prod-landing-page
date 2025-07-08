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
    numItems = document.getElementById("quantity").value;
    if(numItems==="") {
        alert("Please enter a quantity");
    }
    else {
            popup.innerHTML = "";
            popup.innerHTML = `
                
            `;
    }
});