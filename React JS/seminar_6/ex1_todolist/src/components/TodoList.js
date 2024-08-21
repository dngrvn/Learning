import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todoActions";
import { FilterContext } from "../contexts/FilterContext";
import withFilter from "../hoc/withFilter";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  // Получаем список задач из Redux хранилища
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { filter } = useContext(FilterContext);

  // Применяем фильтр к задачам
  const filteredTodos = withFilter(todos, filter);

  const handleToggleTodo = (id) => {
    // Отправляем действие для изменения статуса задачи
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <h2>Список задач</h2>
      <List>
        {filteredTodos.map((todo) => (
          <ListItem
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
