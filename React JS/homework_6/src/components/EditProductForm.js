import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../reducers/productsSlice";
import { Button, TextField, FormControl, FormGroup, Grid } from "@mui/material";

const EditProductForm = ({ product, onSave }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price.toString());
  const [available, setAvailable] = useState(product.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: product.id,
        changes: {
          name,
          description,
          price: parseFloat(price),
          available,
        },
      })
    );
    onSave(); // вызываем функцию onSave для закрытия режима редактирования
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
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
          <FormGroup>
            <FormControl>
              <Button
                variant="contained"
                color={available ? "secondary" : "primary"}
                onClick={() => setAvailable(!available)}
              >
                {available ? "Доступен" : "Недоступен"}
              </Button>
            </FormControl>
          </FormGroup>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button type="submit" variant="contained" color="primary">
            Сохранить изменения
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditProductForm;
