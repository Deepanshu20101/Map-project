import { AppBar, Box, Button, Fab, Toolbar, Typography } from "@mui/material";
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
      <AppBar sx={{ background: "#FFC7C7" }}>
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
              <Typography
                variant="h5"
                sx={{ color: "#8785A2", textTransform: "capitalize" }}
              >
                {currentUser.firstName}
              </Typography>
              <Fab
                onClick={handleLogout}
                variant="extended"
                sx={{ textTransform: "capitalize", height: "36px" }}
              >
                <Typography variant="h6">Logout</Typography>
                <LogoutIcon sx={{ ml: 1 }} />
              </Fab>
            </>
          ) : (
            <Fab
              onClick={() => navigate("/login")}
              variant="extended"
              sx={{ textTransform: "capitalize", height: "36px" }}
            >
              <Typography variant="h6">Login</Typography>
              <LoginIcon sx={{ ml: 1 }} />
            </Fab>
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
            <Typography variant="h4" sx={{ color: "#8785A2" }}>
              Staycation
            </Typography>
          </Button>

          <div className="nav2-button">
            <Box sx={{ "& > :not(style)": { m: 1 }, display: "flex" }}>
              <Button
                onClick={() => navigate("/")}
                sx={{
                  textTransform: "capitalize",
                  color: "#8785A2",
                  bgcolor: "#F6F6F6",
                  boxShadow: 6,
                  borderRadius: 5,
                  width: "6rem",
                }}
              >
                <Typography variant="h6">Home</Typography>
              </Button>
              <Button
                onClick={() => navigate("/map")}
                sx={{
                  textTransform: "capitalize",
                  color: "#8785A2",
                  bgcolor: "#F6F6F6",
                  boxShadow: 6,
                  borderRadius: 5,
                  width: "6rem",
                }}
              >
                <Typography variant="h6">Map</Typography>
              </Button>
              <Button
                onClick={() => {
                  navigate("/addRoom");
                }}
                sx={{
                  textTransform: "capitalize",
                  color: "#8785A2",
                  bgcolor: "#F6F6F6",
                  boxShadow: 6,
                  borderRadius: 5,
                  width: "6rem",
                }}
              >
                <Typography variant="h6">Add</Typography>
              </Button>
            </Box>
          </div>
        </Toolbar>
      </div>
    </div>
  );
};

export default Topbar;
