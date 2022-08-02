import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";


let todos = [
    new TodoItem(1, "Kupić kwiaty"), new TodoItem(2, "Odebrać buty"),
    new TodoItem(3, "Zamówić bilety"), new TodoItem(4, "Zadzwonić do Janka", true)];

let collection = new TodoCollection ("Adam", todos);

console.clear();
console.log('Lista ${collection.userName}a');

let newId = collection.addTodo('Isc pobiegac');
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));

