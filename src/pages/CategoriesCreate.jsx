import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useToast } from "../hooks/useToast";

export default function BasicTextFields() {
  const [name, setName] = React.useState("");

  const submit = () => {
    axios
      .post("http://localhost:8000/categories", { name })
      .then((res) => {
        useToast.success("Амжилттай нэмэгдлээ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3"> Add Users</Typography>
      <TextField
        sx={{ display: "block" }}
        id="standard-basic"
        label="First name"
        variant="standard"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <Stack spacing={2} direction="row">
        <Button
          size="small"
          variant="contained"
          onClick={(e) => {
            submit();
          }}
        >
          Save
        </Button>
        <Button size="medium" variant="outlined">
          Reset
        </Button>
        <Button size="large" variant="outlined">
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
