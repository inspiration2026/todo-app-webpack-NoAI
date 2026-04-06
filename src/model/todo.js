export class Todo {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
        this.isDone = false;
    }
    update (newTitle, newDescription, newDueDate, newPriority) {
    if (newTitle !== undefined) this.title = newTitle;
    if (newDescription !== undefined) this.description = newDescription;
    if (newDueDate !== undefined) this.dueDate = newDueDate;
    if (newPriority !== undefined) this.priority = newPriority;
    }
}