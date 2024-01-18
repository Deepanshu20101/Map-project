import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UploadFile from "../../../firebase/uploadFile";
import { Context } from "../../../context/contextProvider";

interface ImageListItemProp {
  file: File;
}

const ImageListItem: React.FC<ImageListItemProp> = ({ file }) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { currentUser, dispatch } = useContext(Context);

  useEffect(() => {
    const uploadImage = async () => {
      const imgName = uuidv4() + "." + file.name.split(".").pop();
      try {
        const url = await UploadFile(file, `hotels/${currentUser.id}`, imgName);
        dispatch({ type: "UPDATE_IMAGES", payload: url });
        setImageURL(url as string);
      } catch (error) {
        alert(`Error: ${error}`);
      }
    };
    uploadImage();
  }, [file]);

  return (
    <div>
      {imageURL ? <img src={imageURL} alt="Uploaded" /> : "Uploading..."}
    </div>
  );
};

export default ImageListItem;
