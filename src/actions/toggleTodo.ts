export const toggleTodo = (id: string, completed: boolean) => {
    fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !completed }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('toggle', data);
        })
        .catch((error) => console.error("Error toggling todo:", error));

}