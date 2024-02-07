// Target DOM elements
const form = document.getElementById('form');
// const container = document.getElementById('container');
const message = document.getElementById('message');
const unordered = document.querySelector('#list');

// Listen out for a button "submit" action and fire/trigger the function
form.addEventListener('submit', function(event) {
    // Prevent execution that are not specified
    event.preventDefault();
    const newItemInput = document.getElementById('fav-chap');
    // Remove pre and trailing whitespace from the string values
    const newItemValue = newItemInput.value.trim();
    // Ensure variable is not empty
    if (newItemValue !== '') {
        // const newItem = document.createElement('div');
        // newItem.className = 'item';

        const newItem = document.createElement('li');
        newItem.className = 'item';
        
        const itemText = document.createElement('span');
        itemText.textContent = newItemValue;
        // Append delete button to the list element
        newItem.appendChild(itemText);
        // Create delete button an
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '❌';
        // Define the delete function and within the event listener
        deleteBtn.addEventListener('click', function() {
            unordered.removeChild(newItem);
            // In situation where lists container is empty
            if (list.children.length === 0) {
                message.textContent = 'No items yet.';
            }
        });
        // Append delete button to the list element as well
        newItem.appendChild(deleteBtn);
        
        unordered.appendChild(newItem);
        newItemInput.value = '';
        message.textContent = '';
    }
});