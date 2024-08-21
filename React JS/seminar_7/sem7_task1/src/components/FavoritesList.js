import { useDispatch, useSelector } from "react-redux";
import { deleteFav } from "../reducers/favoritesSlice";

function FavoritesList() {
  const favorites = useSelector((state) => state.favList.array);
  const dispatch = useDispatch();
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h2>Favorites</h2>
      {favorites.map((favItem) => (
        <div key={favItem.id} style={{ display: "flex", gap: "20px" }}>
          <p>id: {favItem.id}</p>
          <p>Name: {favItem.name}</p>
          <p>Description: {favItem.description}</p>
          <p>Price: {favItem.price}</p>
          <button onClick={() => dispatch(deleteFav(favItem))}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default FavoritesList;
