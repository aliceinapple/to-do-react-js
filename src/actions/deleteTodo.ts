export const deleteTodo = (id: string) => {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      console.log('deleted');
    })
    .catch((error) => console.error("Error deleting todo:", error));
}