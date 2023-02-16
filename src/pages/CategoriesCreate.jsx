import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

export default function BasicTextFields({ afterSubmit }) {
  const [name, setName] = React.useState("");

  const submit = () => {
    axios
      .post("http://localhost:3000/categories", { name })
      .then((res) => {
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>;
        afterSubmit(res.data);
      })
      .catch((err) => {
        console.log(err);
        <Alert severity="error">This is a success alert — check it out!</Alert>;
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
      />

      <Stack spacing={2} direction="row">
        <Button
          size="small"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
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
