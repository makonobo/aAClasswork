export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo
});

export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    todo
});
