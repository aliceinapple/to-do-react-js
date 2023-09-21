type CreateTodoFunction = (
    newTodo: string,
) => void;

export const createTodo: CreateTodoFunction = (newTodo) => {
    fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newTodo, completed: false }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            
        })
        .catch((error) => console.error("Error adding todo:", error));
};