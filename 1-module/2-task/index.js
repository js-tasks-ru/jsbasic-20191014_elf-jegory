// By Egor Nazarovich
function print(text) {
}
function isValid(name) {
  if(name && name.length >= 4 && /^\S*$/.test(name)) { 
   return true
  }  
  return false
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello('user');