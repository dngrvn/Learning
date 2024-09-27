import { useContext } from "react";
import { ThemeContext } from "../../App";
import classes from "./Profile.module.css";

export default function Profile() {
  const theme = useContext(ThemeContext);
  return (
    <section
      className={theme === "light" ? `${classes.light}` : `${classes.dark}`}
    >
      <h2>Profile</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore
        necessitatibus. Vero voluptates non ipsa maxime commodi vitae molestiae
        nemo.
      </p>
    </section>
  );
}
