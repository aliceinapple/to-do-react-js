export const toggleTodo = async (id: string, completed: boolean) => {
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    });

    if (!response.ok) {
      throw new Error('Error toggling todo');
    }
  } catch (error) {
    console.error('Error toggling todo:', error);
    throw error;
  }
};
