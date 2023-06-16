// Получаем ссылки на элементы формы
let modalContainer = document.getElementById('modal-container');
let promptForm = document.getElementById('prompt-form');
let inputField = promptForm.querySelector('input[name="text"]');
let okButton = promptForm.querySelector('input[type="submit"]');
let cancelButton = promptForm.querySelector('input[name="cancel"]');

// Функция для открытия модального окна
function openModal() {
  modalContainer.style.display = 'flex';
  inputField.focus();
}

// Функция для закрытия модального окна
function closeModal() {
  modalContainer.style.display = 'none';
}

// Обработчик события отправки формы
promptForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let value = inputField.value;
  closeModal();
  // Вызываем callback-функцию, передавая значение поля
  callback(value);
});

// Обработчик события нажатия кнопки "Отмена"
cancelButton.addEventListener('click', function() {
  closeModal();
  // Вызываем callback-функцию с значением null
  callback(null);
});

// Пример использования:
showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
  alert(value);
});
