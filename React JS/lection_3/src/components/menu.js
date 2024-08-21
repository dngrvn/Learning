import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Menu() {
  return (
    <div>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>Главная</Button>
        <Button>Каталог</Button>
        <Button>Контакты</Button>
      </ButtonGroup>
      <Switch {...label} defaultChecked />
    </div>
  );
}
