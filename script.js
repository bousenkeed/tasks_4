
//                           Задача: Управление библиотекой

const books = [
    { id: 1, title: "Война и мир", author: "Лев Толстой", isAvailable: true },
    { id: 2, title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", isAvailable: false },
    { id: 3, title: "Улисс", author: "Джеймс Джойс", isAvailable: true }
];
const requests = [
    { userId: 101, bookId: 1 },
    { userId: 102, bookId: 2 },
    { userId: 103, bookId: 3 }
];

//1 - Проверка наличия книги
function isHasBook(bookId) {

    for (i = 0; i < books.length; i++) {
        if (books[i].id === bookId) {
            return books[i].isAvailable;
        }
    }
}
console.log(isHasBook(1));

//2 - Поиск книги по автору
function findBooksByAuthor(author) {
    let authorBooks = [];
    for (i = 0; i < books.length; i++) {
        if (books[i].author === author) {
            authorBooks.push(books[i].title);
            return authorBooks;
        }
    }
}

console.log(findBooksByAuthor("Лев Толстой"));

//3 - Обработка запросов на выдачу книг
function processRequests(books, requests) {
    for (i = 0; i < requests.length; i++) {
        if (isHasBook(requests[i].bookId)) {
            books[i].isAvailable = false;
            console.log(`Книга выдана пользователю: Id${requests[i].userId}`)
        } else {
            console.log(`Книга ${books[i].title} автора ${books[i].author} - уже выдана!`)
        }
    }
}

processRequests(books, requests);

//4 - Возврат книги
function returnBook(id) {
    for (i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books[i].isAvailable = true;
        }
    }
}

returnBook(1); //возвращаем первую книгу
console.log(isHasBook(1));






//                     Задача: Система управления заказами в ресторане

const ingredients = [
    { id: 1, name: "Томаты", quantity: 10 },
    { id: 2, name: "Моцарелла", quantity: 5 },
    { id: 3, name: "Базилик", quantity: 8 }
];

const dishes = [
    { id: 1, name: "Маргарита", ingredients: [1, 2, 3] },
];

const orders = [
    { orderId: 1, dishId: 1, status: "новый" }
];

// 1 Проверка возможности приготовления блюда

function checkDishes(dishId) {
    let isHasIngredient = true;
    for (let i = 0; i < dishes[dishId - 1].ingredients.length; i++) {
        if (ingredients[dishes[dishId - 1].ingredients[i] - 1].quantity <= 0) {
            isHasIngredient = false;
        }
    }
    return isHasIngredient;
}

console.log(checkDishes(1));
