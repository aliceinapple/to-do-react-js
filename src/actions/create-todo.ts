export const createTodo = async (newTodo: string) => {
  try {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newTodo, completed: false }),
    });

    if (!response.ok) {
      throw new Error('Error adding todo');
    }
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};
