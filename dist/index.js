"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Kupić kwiaty"), new todoItem_1.TodoItem(2, "Odebrać buty"),
    new todoItem_1.TodoItem(3, "Zamówić bilety"), new todoItem_1.TodoItem(4, "Zadzwonić do Janka", true)
];
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`Lista ${collection.userName}a`);
let newId = collection.addTodo('Isc pobiegac');
let todoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
todoItem.printDetails();
collection.addTodo(todoItem);
