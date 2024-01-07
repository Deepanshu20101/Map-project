import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../../../context/contextProvider";

const AddDetails = () => {
  const [details, setDetails] = useState({
    title: "",
    description: "",
    price: 0,
  });

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
      <Box sx={{ display: "flex" }}>
        <TextField
          required
          label="Title"
          name="title"
          onChange={handleChange}
          value={details.title}
          sx={{ flexGrow: 1, pr: 2 }}
        />
        <TextField
          type="number"
          label="Price"
          name="price"
          inputProps={{ min: 0 }}
          onChange={handleChange}
          value={details.price}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          sx={{ width: "12ch" }}
        />
      </Box>
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
