import React, { Component } from "react";

class PublicGists extends Component {
  state = {
    publicGists: [],
  };

  componentDidMount() {
    // Запрос для получения списка публичных gists
    fetch("https://api.github.com/gists/public")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при получении данных: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Обновляем состояние с полученными данными
        this.setState({ publicGists: data });
      })
      // В случае ошибки, показываем сообщение об ошибке
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }

  render() {
    const { publicGists } = this.state;

    return (
      <div>
        <h2>Список публичных Gists на GitHub:</h2>
        {publicGists.map((gist) => (
          <div key={gist.id}>
            <h3>{gist.description || "Без описания"}</h3>
            <p>URL: {gist.html_url}</p>
            <p>Created by: {gist.owner.login}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PublicGists;
