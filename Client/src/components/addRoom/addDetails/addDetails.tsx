import { Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../../../context/contextProvider";

const AddDetails = () => {
  const [details, setDetails] = useState({ title: "", description: "" });

  const { dispatch } = useContext(Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    dispatch({
      type: "UPDATE_DETAILS",
      payload: { [e.target.name]: e.target.value },
    });
  };
  return (
    <Stack
      spacing={2}
      sx={{ maxWidth: 500, ml: "auto", mr: "auto", width: "100%" }}
    >
      <TextField
        required
        label="Title"
        name="title"
        onChange={handleChange}
        value={details.title}
      />
      <TextField
        required
        multiline
        rows={4}
        label="Description"
        name="description"
        onChange={handleChange}
        value={details.description}
      />
    </Stack>
  );
};
export default AddDetails;
