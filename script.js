let ru = document.getElementById('ru');
let en = document.getElementById('en');
let h1 = document.getElementById('h1');
let p = document.getElementById('p');

ruText = (`
// создание объекта и вызов по ключам
let userInfo = {
    name: 'Bob',
    age: 15,
    'in party': true,
}

    // к ключам из одного слова можно обратиться через 
    //точку или как на 9 строке
console.log(userInfo.name); // Bob
console.log(userInfo.age); // 15

// к ключам из 2ух и более слов только так
console.log(userInfo['in party']);

    // перезапись и создание новых ключей
userInfo.age = 20 // перезапись
userInfo.lastName = 'Bobovich' // создание нового ключа

    // добавление ключа из переменной
let Name = 'friends'
let friends = {
    firstFriend: 'Anna',
    secondFriend: 'Alex',
}
let person = {
    name: 'Vanya',
    [Name]: friends, // ключ взяли из переменной, а 
                     // значение из другого объекта
}
console.log(person) // {name: 'Vanya', friends: {
                    // firstFriend: 'Anna', 
                    // secondFriend: 'Alex'
                    // }}
console.log(person[Name]) // обратились к ключу 
                          // который получили из 
                          // переменной, console.log(
                          // person.Name) выдаст ошибку
`);

enText = (`
// creating an object and calling by keys
let userInfo = {
    name: 'Bob',
    age: 15,
    'in party': true,
}

    // single-word keys can be accessed via
    // dot or as on line 9
console.log(userInfo.name); // Bob
console.log(userInfo.age); // 15

// to keys of 2 or more words only
console.log(userInfo['in party']);

    // overwriting and creating new keys
userInfo.age = 20 // overwriting
userInfo.lastName = 'Bobovich' // creating new key

    // adding a key from a variable
let Name = 'friends'
let friends = {
    firstFriend: 'Anna',
    secondFriend: 'Alex',
}
let person = {
    name: 'Vanya',
    [Name]: friends, // this key was taken from the variable, and 
                     // value from another object
}
console.log(person) // {name: 'Vanya', friends: {
                    // firstFriend: 'Anna', 
                    // secondFriend: 'Alex'
                    // }}
console.log(person[Name]) // turned to the key
                          // which received from
                          // variable, console.log
                          // person.Name) will throw an error
`);

p.append(enText);   

ru.addEventListener('click', ruPage);
function ruPage() {
    h1.innerHTML = `Объекты в <span id="JS">JavaScript</span>`
    p.innerHTML = ''
    p.append(ruText)
    hljs.highlightAll();
}
en.addEventListener('click', enPage);
function enPage() {
    h1.innerHTML = `Object in <span id="JS">JavaScript</span>`
    p.innerHTML = ''
    p.append(enText)
    hljs.highlightAll();
}


