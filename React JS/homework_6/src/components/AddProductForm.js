import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addProduct } from "../reducers/productsSlice";
import {
  Button,
  TextField,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      dispatch(
        addProduct({
          id: nanoid(),
          name,
          description,
          price: parseFloat(price),
          available,
        })
      );
      setName("");
      setDescription("");
      setPrice("");
      setAvailable(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="number"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Switch
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
                color="primary"
              />
            }
            label={available ? "Доступен" : "Недоступен"}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Добавить продукт
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddProductForm;
