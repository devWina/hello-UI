// const mainContainer = document.querySelector('.hello');
// const nameDiv = document.querySelector('.add__name');

// let form;
// let inputName;
// let btnAddName;

// // exact inner HTML for the original form (matches index.html)
// const initialFormHTML = `
//   <form>
//     <input type="text" placeholder="Add name" class="name__input" />
//     <button type="submit" title="add name" class="btn__add--name"><i class='bx bx-plus'></i></button>
//     <!-- <p>Add name</p> -->
//   </form>
// `;

// const displayName = function (name) {
//   // replace the contents of the name container with the displayed name
//   const html = `
//     <div class="name-container">
//       <h1 class="name text">${name}</h1>
//       <button title="delete name" class="btn__delete--name "><i class='bx bxs-trash'></i></button>
//     </div>
//   `;

//   nameDiv.innerHTML = html;
// };

// const onAddNameClick = function (e) {
//   e.preventDefault();
//   const username = inputName.value.trim();
//   if (username === '') console.log('No text entered.');
//   else displayName(username);

//   inputName.value = '';
//   inputName.blur();
// };

// const initFormListeners = function () {
//   // update the current form reference (form may be recreated)
//   form = nameDiv.querySelector('form');
//   if (!form) return;

//   inputName = form.querySelector('.name__input');
//   btnAddName = form.querySelector('.btn__add--name');
//   if (btnAddName) btnAddName.addEventListener('click', onAddNameClick);
// };

// // attach listeners for the initial page load (if markup already present)
// // ensure the container has the original form if it's missing
// if (!nameDiv.querySelector('form')) {
//   nameDiv.innerHTML = initialFormHTML;
// }
// // make sure the container uses flex layout for input + button
// nameDiv.style.display = 'flex';
// initFormListeners();

// // use delegation on the persistent container so clicks survive DOM replacement
// nameDiv.addEventListener('click', function (e) {
//   // only intercept delete clicks
//   if (e.target.closest('.btn__delete--name')) {
//     // restore the original form HTML so the input can be used again
//     nameDiv.innerHTML = initialFormHTML;
//     // ensure flex layout
//     nameDiv.style.display = 'flex';
//     // reattach listeners to the newly-created input/button
//     initFormListeners();
//   }
// });
