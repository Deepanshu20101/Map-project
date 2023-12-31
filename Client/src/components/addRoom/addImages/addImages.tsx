import { Paper } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageList from "./imageList";

const AddImages = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 700,
          ml: "auto",
          mr: "auto",
          width: "100%",
          cursor: "pointer",
          background: "#fafafa",
          color: "#bdbdbd",
          "&:hover": { border: "1px solid #ccc" },
        }}
      >
        <div style={{ padding: "16px" }} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p style={{ color: "green" }}>Drop the files here...</p>
          ) : (
            <p>Drag 'n' Drop some files here, or click to select files</p>
          )}
          <em>
            (images with a *.jpeg, *.png, *.jpg extension will be accepted)
          </em>
        </div>
      </Paper>
      <ImageList files={files} />
    </>
  );
};
export default AddImages;
