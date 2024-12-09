// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map();

export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

export function createTodo(userid, description) {
    if(description == ""){
        throw new Error("Description cannot be empty");
    }
	const todos = db.get(userid);

    console.log("todos", todos)
    console.log("description", description)
    if(todos.find((todo)=> todo.description === description)){
        throw new Error("Description already exists");
    }

    const todo = {
		id: crypto.randomUUID(),
		description,
		done: false
	}
	todos.push(todo);
    return {id : todo.id}
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}

