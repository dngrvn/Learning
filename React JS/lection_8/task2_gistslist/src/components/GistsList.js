import React, { useEffect, useState, useCallback } from "react";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { CircularProgress } from "@mui/material";

export const API_URL_PUBLIC = "https://api.github.com/gists/public";

export const GistsList = () => {
  // Объявление state-переменных
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const requestGists = async () => {
    try {
      setLoading(true); // Устанавливаем loading в true перед началом запроса
      const response = await fetch(API_URL_PUBLIC);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const result = await response.json();
      setGists(result);
    } catch (error) {
      setError(true); // Устанавливаем error в true, если произошла ошибка
      console.warn("Error:", error);
    } finally {
      setLoading(false); // Устанавливаем loading в false после завершения запроса
    }
  };

  // Вызываем requestGists при монтировании компонента
  useEffect(() => {
    requestGists();
  }, []);
  // формируем элементы списка, которые передаем потом в ul
  const renderGist = useCallback(
    (gist) => (
      <div key={gist.id}>
        <h3>{gist.description || "Без описания"}</h3>
        <p>{gist.owner.login}</p>
        <pre>{JSON.stringify(gist.files, null, 2)}</pre>
      </div>
    ),
    []
  );

  // Обработка различных состояний
  if (loading) return <CircularProgress />;
  if (error)
    return (
      <div>
        <h3>Error fetching gists.</h3>
        <button onClick={requestGists}>Давай еще раз!</button>
      </div>
    );
  if (gists.length === 0) return <p>No gists available.</p>;

  return <ul>{gists.map(renderGist)}</ul>;
};

export default GistsList;
