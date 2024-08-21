import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const AddTodo = () => {
  // Локальное состояние для текста новой задачи
  const [text, setText] = useState("");
  // Dispatch для отправки действий
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    // Если текст задачи не пустой, добавляем его в список
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <h2>Добавить задачу</h2>
      </Grid>
      <Grid item xs={8}>
        <TextField
          type="text"
          label="Todo"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTodo}
          fullWidth
        >
          Add Todo
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
