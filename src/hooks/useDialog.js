import { useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";

export const useDialog = () => {
  const { setType, setMessage, setOpen } = useContext(DialogContext);

  const showDialog = (msg = "Alert message!", type = "error") => {
    setType(type);
    setMessage(msg);
    setOpen(true);
  };

  return showDialog;
};
