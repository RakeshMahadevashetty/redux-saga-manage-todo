import axios from "axios";

export const loadTodoListApi = async () => await axios.get("http://localhost:5000/todoList");

export const loadPersonApi = async () => await axios.get("http://localhost:5000/person");

export const loadCategoriesApi = async () => await axios.get("http://localhost:5000/category");

export const postTodoApi = async (todo) => await axios.post("http://localhost:5000/todoList", { ...todo });

export const updateTodoApi = async (todo) => await axios.put(`http://localhost:5000/todoList/${todo.id}`, { ...todo });

export const deleteTodoApi = async (id) => await axios.delete(`http://localhost:5000/todoList/${id}`);

export const getTodoApi = async (id) => await axios.get(`http://localhost:5000/todoList/${id}`);
