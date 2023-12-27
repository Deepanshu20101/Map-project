import {
  AppBar,
  Button,
  ButtonGroup,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import "./topbar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Topbar = () => {
  const navigate = useNavigate();

  const { currentUser, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <AppBar sx={{ background: "#392467" }}>
        <CssBaseline />
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "flex-end",
            mr: "auto",
            ml: "auto",
            maxWidth: "75rem",
            width: "100%",
          }}
        >
          {currentUser ? (
            <>
              {/* <Typography variant="h6">{currentUser.firstName}</Typography> */}
              <Typography
                variant="h5"
                sx={{ color: "#FFD1E3", textTransform: "capitalize" }}
              >
                {currentUser.firstName}
              </Typography>
              <Button
                onClick={handleLogout}
                sx={{ color: "#FFD1E3", textTransform: "capitalize" }}
              >
                <Typography variant="h6">Logout</Typography>
                <LogoutIcon sx={{ ml: 1 }} />
              </Button>
            </>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              sx={{ color: "#FFD1E3", textTransform: "capitalize" }}
            >
              <Typography variant="h6">Login</Typography>
              <LoginIcon sx={{ ml: 1 }} />
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <div className="nav2">
        <Toolbar
          sx={{
            mr: "auto",
            ml: "auto",
            maxWidth: "75rem",
            width: "100%",
          }}
        >
          <Button disableRipple sx={{ textTransform: "capitalize", mr: 5 }}>
            <Typography variant="h4" sx={{ color: "#FFD1E3" }}>
              Staycation
            </Typography>
          </Button>

          <div className="nav2-button">
            <ButtonGroup variant="text" size="large">
              <Button
                onClick={() => navigate("/")}
                sx={{
                  display: "block",
                  textTransform: "capitalize",
                  color: "#FFD1E3",
                }}
              >
                <Typography variant="h6">Home</Typography>
              </Button>
              <Button
                onClick={() => navigate("/map")}
                sx={{
                  display: "block",
                  textTransform: "capitalize",
                  color: "#FFD1E3",
                }}
              >
                <Typography variant="h6">Map</Typography>
              </Button>
              <Button
                sx={{
                  display: "block",
                  textTransform: "capitalize",
                  color: "#FFD1E3",
                }}
              >
                <Typography variant="h6">Add</Typography>
              </Button>
            </ButtonGroup>
          </div>
        </Toolbar>
      </div>
    </div>
  );
};

export default Topbar;
