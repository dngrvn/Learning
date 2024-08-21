import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../favoritesSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
            <Button onClick={() => handleAddToFavorites(product)}>
              Add to Favorites
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
