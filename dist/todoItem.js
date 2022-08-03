"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // Polecenia nie są wymagane.
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(wykonane)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
