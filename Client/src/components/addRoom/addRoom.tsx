import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import { Alert, AlertTitle, Container } from "@mui/material";

const AddRoom = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <div>Add</div>
      ) : (
        <Container sx={{ py: 5 }}>
          <Alert
            severity="warning"
            variant="outlined"
            icon={<NoAccountsIcon />}
          >
            <AlertTitle sx={{ fontWeight: 700 }}>Forbidden Access</AlertTitle>
            Please login/register to access this page.
          </Alert>
        </Container>
      )}
    </>
  );
};
export default AddRoom;
