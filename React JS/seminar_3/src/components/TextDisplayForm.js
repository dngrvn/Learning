import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

function TextDisplayForm() {
  const [text, setText] = useState("");
  const [printedText, setPrintedText] = useState("");

  const handleText = (event) => {
    event.preventDefault();
    setPrintedText(text);
    setText("");
  };
  return (
    <div>
      <TextField
        label="Введите текст"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleText}
        style={{ marginBottom: 20 }}
      >
        Отобразить текст
      </Button>
      <h4>{printedText}</h4>
    </div>
  );
}

export default TextDisplayForm;
