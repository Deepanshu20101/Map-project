import {
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import "./topbar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const help = () => {
    navigate("/map");
  };

  return (
    <div>
      <AppBar sx={{ background: "#392467" }}>
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
          <Button sx={{ color: "#FFD1E3", textTransform: "capitalize" }}>
            <Typography variant="h6">Login</Typography>
            <LoginIcon sx={{ ml: 1 }} />
          </Button>
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
                onClick={() => help()}
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
