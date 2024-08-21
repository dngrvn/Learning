import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { UserContext, ThemeContext } from "./contexts/task1";

import withLoadingIndicator from "./components/LoadingIndicator";

import store from "./configs/store";
import Counter from "./components/Counter";
import { Provider } from "react-redux";

import storeProfile from "./configs/task4";
import ProfileUpdateForm from "./components/ProfileUpdateForm";

import "./App.css";

// task 1
const initialUser = { userName: "Гость" };
const initialTheme = "white";

// task 2
// Пример компонента, который нужно обернуть
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Пример загрузки данных
    setTimeout(() => {
      setData("Loaded data");
    }, 2000);
  }, []);

  return (
    <div>
      <h3>My Component</h3>
      <p>{data}</p>
    </div>
  );
};

// Оборачиваем MyComponent с помощью HOC withLoadingIndicator
const MyComponentWithLoadingIndicator = withLoadingIndicator(MyComponent);

const App = () => {
  // task 1
  const [user, setUser] = useState(initialUser);
  const [theme, setTheme] = useState(initialTheme);

  const changeUsername = (newUsername) => {
    setUser({ username: newUsername });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "white" ? "dark" : "white"));
  };

  // task 2
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    // task 1
    <UserContext.Provider value={{ user, changeUsername }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`App ${theme}`}>
          <Header />
          <Profile />
          <Footer />

          {/* task 2 */}
          <div>
            <h2>Task 2</h2>
            <MyComponentWithLoadingIndicator isLoading={isLoading} />
          </div>
        </div>

        {/* task 3 */}
        <Provider store={store}>
          <div className="App">
            <h2>Task 3</h2>
            <Counter />
          </div>
        </Provider>

        <Provider store={storeProfile}>
          <div className="App">
            <h2>Task 4. User Profile Update</h2>
            <ProfileUpdateForm />
          </div>
        </Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
