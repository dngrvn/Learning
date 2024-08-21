import "./App.css";
import ParentCounter from "./components/Parent";
import InputForm from "./components/form";
import Nav from "./components/header";
import HoverRating from "./components/rating";
import Menu from "./components/menu";
import BasicList from "./components/listSuper";
import Student from "./components/propType";

function App() {
  return (
    <div>
      <Menu />
      <HoverRating />
      <Nav />
      <ParentCounter />
      <InputForm />
      <BasicList />
      <Student name={"Katya"} age={30} isStudent={true} />
    </div>
  );
}

export default App;
