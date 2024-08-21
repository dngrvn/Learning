import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Nav() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>Главная</Button>
      <Button>Каталог</Button>
      <Button>Контакты</Button>
    </ButtonGroup>
  );
}
