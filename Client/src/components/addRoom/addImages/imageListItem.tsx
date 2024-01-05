import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UploadFile from "../../../firebase/uploadFile";
import { AuthContext } from "../../../context/authContext";

interface ImageListItemProp {
  file: File;
}

const ImageListItem: React.FC<ImageListItemProp> = ({ file }) => {
  const [imageURL, setImageURL] = useState(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const uploadImage = () => {
      const imgName = uuidv4() + "." + file.name.split(".").pop();
      UploadFile(file, `${currentUser.id}`, imgName);
    };
    uploadImage();
  }, [file]);

  return <div>a</div>;
};

export default ImageListItem;
