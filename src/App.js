import { Box, Button, Dialog } from "@mui/material";
import AlertDialog from "./components/DiaLog";
import { Layout } from "./components/Layout";
import { useToast } from "./hooks";
import { useDialog } from "./hooks/useDialog";

function App() {
  const showToast = useToast();
  const showDialog = useDialog();

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Button
          variant="contained"
          onClick={() => {
            showToast("Hello toast");
          }}
        >
          Toggle toast
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            showDialog("hihi");
          }}
        >
          hoho
        </Button>
      </Box>
    </Layout>
  );
}

export default App;
