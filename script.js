const mainContainer = document.querySelector('.hello');
const nameDiv = document.querySelector('.add__name');

// const inputName = document.querySelector('.name__input');
// const btnAddName = document.querySelector('.btn__add--name');

let form;
let inputName;
let btnAddName;

const initialFormHTML = `<form>
        <input type="text" placeholder="Add name" class="name__input" />
        <button type="submit" title="add name" class="btn__add--name"><i class='bx bx-plus'></i></button>
        <!-- <p>Add name</p> -->
      </form>`;

const displayName = function (name) {
  const html = `
    <div class="name-container add_name">
      <h1 class="name text">${name}</h1>
      <button title="delete name" class="btn__delete-name "><i class='bx bxs-trash'></i></button>
    </div>`;

  // nameDiv.insertAdjacentHTML('afterbegin', html); // absolutely unnecessary (learn to know when use it)
  nameDiv.innerHTML = html;
};

const onAddNameClick = function (e) {
  e.preventDefault();
  const username = inputName.value.trim();
  // console.log(username);
  if (username === '') console.log('No text entered.');
  else displayName(username);

  inputName.value = '';
  inputName.blur();
};

const initFormListeners = function () {
  form = nameDiv.querySelector('form');
  if (!form) return;

  inputName = form.querySelector('.name__input');
  btnAddName = form.querySelector('.btn__add--name');

  if (btnAddName) btnAddName.addEventListener('click', onAddNameClick);
};

initFormListeners();

nameDiv.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.closest('.btn__delete-name')) {
    nameDiv.innerHTML = initialFormHTML;

    nameDiv.style.display = 'flex';
    // reattach listeners to the newly-created input/button
    initFormListeners();
  }
});
