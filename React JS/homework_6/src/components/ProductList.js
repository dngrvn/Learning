import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Switch,
} from "@mui/material";
import {
  removeProduct,
  toggleProductAvailability,
  selectAllProducts,
} from "../reducers/productsSlice";
import EditProductForm from "./EditProductForm";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [editProductId, setEditProductId] = useState(null);

  const handleDelete = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleAvailabilityToggle = (productId) => {
    dispatch(toggleProductAvailability(productId));
  };

  const handleEdit = (productId) => {
    setEditProductId(productId);
  };

  const handleEditCancel = () => {
    setEditProductId(null);
  };

  const handleSaveChanges = () => {
    setEditProductId(null); // закрываем режим редактирования после сохранения изменений
  };

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {editProductId === product.id ? (
              <CardContent>
                <EditProductForm product={product} onSave={handleSaveChanges} />
                <Button onClick={handleEditCancel} variant="contained">
                  Закрыть
                </Button>
              </CardContent>
            ) : (
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {product.name}
                </Typography>
                <Typography color="text.secondary" variant="body1" gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Цена: {product.price} РУБ.
                </Typography>
                <CardActions
                  sx={{
                    marginTop: "auto",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(product.id)}
                      sx={{ marginRight: 1, marginLeft: -1 }}
                    >
                      Удалить
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(product.id)}
                      sx={{ marginRight: 1 }}
                    >
                      Редактировать
                    </Button>
                  </div>
                  <Switch
                    checked={product.available}
                    onChange={() => handleAvailabilityToggle(product.id)}
                    color="primary"
                    inputProps={{ "aria-label": "toggle availability" }}
                    sx={{ marginLeft: 0 }}
                  />
                  <Typography variant="body2">
                    {product.available ? "Доступен" : "Не доступен"}
                  </Typography>
                </CardActions>
              </CardContent>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
