import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UploadFile from "../../../firebase/uploadFile";
import { AuthContext } from "../../../context/authContext";

interface ImageListItemProp {
  file: File;
}

const ImageListItem: React.FC<ImageListItemProp> = ({ file }) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const uploadImage = async () => {
      const imgName = uuidv4() + "." + file.name.split(".").pop();
      try {
        const url = await UploadFile(file, `hotels/${currentUser.id}`, imgName);
        setImageURL(url as string);
      } catch (error) {
        console.log("upload error ", error);
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
