export const addTodoApi = async (task) => {
    const response = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: task,
        completed: false,
        userId: 5, // Replace with dynamic userId if needed
      })
    });
  
    if (response.status !== 201) {
      throw new Error('Failed to add task');
    }
    // Read and return the response body as JSON
    const responseBody = await response.json();
    return responseBody;
};
