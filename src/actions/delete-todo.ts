export const deleteTodo = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting todo');
    }
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
