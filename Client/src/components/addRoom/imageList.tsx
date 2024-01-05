import ImageListItem from "./imageListItem";

interface ImageListProp {
  files: File[];
}

const ImageList: React.FC<ImageListProp> = ({ files }) => {
  return (
    <>
      {files.map((file, index) => (
        <ImageListItem file={file} key={index} />
      ))}
    </>
  );
};

export default ImageList;
