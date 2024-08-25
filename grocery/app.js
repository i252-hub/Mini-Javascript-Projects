// ****** SELECT ITEMS **********
const submit = document.querySelector('.submit-btn');
const clearallBtn = document.querySelector('.clear-btn');
const input = document.querySelector('input');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const alert = document.querySelector(".alert");



// ****** FUNCTIONS **********
const add = () => {
    const itemText = grocery.value;
    if (itemText !== '' && !editFlag) {
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);

        const li = document.createElement('li');
        li.innerHTML = `
          ${itemText}
          <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
        `;
        list.appendChild(li);
        displayAlert("item added to the list", "success");


        if (!container.classList.contains('show-container')) {
            container.classList.add('show-container');
        }

        input.value = '';

        saveItems();
    }
};

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function () {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`);
    }, 1000);
  }

const clearAll = () => {
    list.innerHTML = '';
    localStorage.removeItem('items');
    container.classList.remove('show-container');
    displayAlert("empty list", "danger");
};




const deleteItem = (e) => {
    if (e.target.classList.contains('delete-btn') || e.target.parentElement.classList.contains('delete-btn')) {
        const itemToDelete = e.target.closest('li');
        if (itemToDelete) {
            itemToDelete.remove();
            saveItems(); 
            displayAlert("item removed", "danger");

        }
    }
};



// ****** LOCAL STORAGE **********
const saveItems = () => {
    const items = [];
    document.querySelectorAll('.grocery-list li').forEach(li => {
        items.push(li.innerHTML);
    });
    localStorage.setItem('items', JSON.stringify(items));
};

// Load items from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedItems = JSON.parse(localStorage.getItem('items')) || [];
    savedItems.forEach(itemHTML => {
        const li = document.createElement('li');
        li.innerHTML = itemHTML;
        list.appendChild(li);
    });
    if (list.children.length > 0) {
        container.classList.add('show-container');
    }
});

// ****** EVENT LISTENERS **********
submit.addEventListener("click", (e) => {
    e.preventDefault();
    add();
});

clearallBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearAll();
});

list.addEventListener('click', (e) => {
    deleteItem(e);
});
