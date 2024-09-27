import { useContext } from "react";
import { UserContext } from "../App";

export default function Header() {
  const userName = useContext(UserContext);
  return (
    <section>
      <h1>Hello {userName}</h1>
    </section>
  );
}
