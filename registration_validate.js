// первичная проверка идет на стороне HTML-кода, атрибуты required
// для поля ввода e-mail указан соответствующий тип
// соответственно, ошибки заполнения контролируются броузером, 
// сообщения об ошибках зависят от броузера

// вывод содержимого полей в консоль

let login_field = document.getElementById('login_field');
let password_field = document.getElementById('password_field');
let e_mail_field = document.getElementById('email_field');
let form = document.querySelector('.registration_form')

form.onsubmit = function(evt) {
  evt.preventDefault();  
  console.log(`логин: ${login_field.value}
пароль: ${password_field.value}
e-mail: ${e_mail_field.value}`);
};
