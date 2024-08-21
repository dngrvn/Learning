import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../favoritesSlice";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div>
      {favorites.length === 0 ? (
        <Typography variant="body1">No favorites selected.</Typography>
      ) : (
        favorites.map((favorite) => (
          <Card key={favorite.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5">{favorite.name}</Typography>
              <Typography variant="body1">{favorite.description}</Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${favorite.price}
              </Typography>
              <Button onClick={() => handleRemoveFromFavorites(favorite.id)}>
                Remove from Favorites
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
