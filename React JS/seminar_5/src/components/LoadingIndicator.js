/*
Задание 2 (тайминг 25 минут)
Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для
оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который
определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого
компонента должен отображаться загрузочный индикатор.
1. Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый
компонент, который показывает либо индикатор загрузки, либо содержимое оригинального
компонента в зависимости от пропса isLoading.
2. Можно использовать простой текстовый индикатор или любой спиннер из доступных
библиотек.
*/

import React from "react";

// Пример простого текстового индикатора загрузки
const LoadingIndicator = () => <p>Loading...</p>;

const withLoadingIndicator = (WrappedComponent) => {
  return function WithLoadingIndicator({ isLoading, ...props }) {
    if (isLoading) {
      return <LoadingIndicator />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };
};

export default withLoadingIndicator;
