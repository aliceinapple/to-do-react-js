export const editTodo = (id: string, newText: string) => {
    fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('updated', data);

        })
        .catch((error) => console.error("Error editing todo:", error));
};
