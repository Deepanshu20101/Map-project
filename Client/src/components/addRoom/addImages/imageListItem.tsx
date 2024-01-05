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
    const imgName = uuidv4() + "." + file.name.split(".").pop();
    const uploadImage = async () => {
      try {
        const url = await UploadFile(file, `${currentUser.id}`, imgName);
        setImageURL(null);
      } catch (error) {
        console.log("upload error ", error);
      }
    };
    setImageURL(URL.createObjectURL(file));
    uploadImage();
  }, [file, currentUser.id]);

  return (
    <div>
      {imageURL ? <img src={imageURL} alt="Uploaded" /> : "Uploading..."}
    </div>
  );
};

export default ImageListItem;
