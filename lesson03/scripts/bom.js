// Target DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length -1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}






// Target DOM elements
// const button = document.getElementById('button');
// const unordered = document.querySelector('#list');
// const newItemInput = document.getElementById('fav-chap');

// let chaptersArray = getChapterList() || [];

// chaptersArray.forEach(chapter => {
//   displayList(chapter)
// });


// // Listen out for a button "submit" action and fire/trigger the function
// button.addEventListener('click', () => {
//   // Remove pre and trailing whitespace from the string values
//   const newItemValue = newItemInput.value.trim();
//   // Ensure variable is not empty
//   if (newItemValue !== '') {
//     displayList(newItemValue)
//     chaptersArray.push(newItemValue);
//     setChapterList();
//     newItemInput.value = '';
//     newItemInput.focus();
//   }
// });
// function displayList(item) {
//   const newItem = document.createElement('li');

//   newItem.className = 'item';
  
//   const itemText = document.createElement('span');
//   itemText.textContent = item;
//   // Append delete button to the list element
//   newItem.appendChild(itemText);
//   // Create delete button an
//   const deleteBtn = document.createElement('button');
//   deleteBtn.className = 'delete-btn';
//   deleteBtn.textContent = '❌';
//   // Append delete button to the list element as well
//   newItem.appendChild(deleteBtn);
//   unordered.appendChild(newItem);
//   // Defines a string value that explain the emoji '❌'.
//   // document.querySelector('.delete-btn').setAttribute('aria-label', 'Delete Button');
//   // Define the delete function and within the event listener
//   deleteBtn.addEventListener('click', function() {
//     unordered.removeChild(newItem);
//     deleteChapter(itemText.textContent);
//     // In situation where lists container is empty
//     if (list.children.length === 0) {
//       message.textContent = 'No items yet.';
//       newItemInput.focus();
//     }
//   });
//   newItemInput.focus();
// }
// function setChapterList() {
//   localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
// }

// function getChapterList() {
//   return JSON.parse(localStorage.getItem('myFavBOMList'));
// }

// function deleteChapter(chapter) {
//   chapter = chapter.slice(0, chapter.length -1);
//   chaptersArray = chaptersArray.filter(item => item !== chapter);
//   setChapterList();
// }