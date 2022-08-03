import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";


let todos: TodoItem[] = [
    new TodoItem(1, "Kupić kwiaty"), new TodoItem(2, "Odebrać buty"),
    new TodoItem(3, "Zamówić bilety"), new TodoItem(4, "Zadzwonić do Janka", true)];

let collection: TodoCollection = new TodoCollection ("Adam", todos);

console.clear();
console.log(`Lista ${collection.userName}a`);

let newId: number = collection.addTodo('Isc pobiegac');
let todoItem: TodoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
todoItem.printDetails();

collection.addTodo(todoItem);


