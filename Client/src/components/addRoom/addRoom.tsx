import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/contextProvider";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Stack,
  Step,
  StepButton,
  Stepper,
} from "@mui/material";
import AddDetails from "./addDetails/addDetails";
import AddImages from "./addImages/addImages";
import { Send } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);
  const [steps, setSteps] = useState([
    {
      label: "Add details",
      completed: false,
    },
    {
      label: "Upload images",
      completed: false,
    },
  ]);

  const navigate = useNavigate();
  const { currentUser, details, images } = useContext(Context);

  useEffect(() => {
    if (details.title && details.description) {
      if (!steps[0].completed) {
        setComplete(0, true);
      }
    } else if (steps[0].completed) {
      setComplete(0, false);
    }
  }, [details]);

  useEffect(() => {
    if (images.length) {
      if (!steps[1].completed) setComplete(1, true);
    } else {
      if (steps[1].completed) setComplete(1, false);
    }
  }, [images]);

  const setComplete = (idx: number, status: boolean) => {
    setSteps((steps) => {
      steps[idx].completed = status;
      return [...steps];
    });
  };

  const findUnfinished = () => {
    return steps.findIndex((step) => !step.completed);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((activeStep) => activeStep + 1);
    } else {
      const stepIndex = findUnfinished();
      setActiveStep(stepIndex);
    }
  };

  const checkDisabled = () => {
    if (activeStep < steps.length - 1) return false;
    const index = findUnfinished();
    if (index !== -1) return false;
    return true;
  };

  useEffect(() => {
    if (findUnfinished() === -1) {
      if (!showSubmit) setShowSubmit(true);
    } else {
      if (showSubmit) setShowSubmit(false);
    }
  }, [steps]);

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/hotel/createHotel",
        {
          title: details.title,
          description: details.description,
          images: images,
        }
      );
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {currentUser ? (
        <Container sx={{ my: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel nonLinear>
            {steps.map((step, index) => (
              <Step key={step.label} completed={step.completed}>
                <StepButton onClick={() => setActiveStep(index)}>
                  {step.label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ pt: 4 }}>
            {
              {
                0: <AddDetails />,
                1: <AddImages />,
              }[activeStep]
            }
            <Stack
              direction="row"
              sx={{ pt: 3, justifyContent: "space-around" }}
            >
              <Button
                color="inherit"
                disabled={!activeStep}
                onClick={() => setActiveStep((activeStep) => activeStep - 1)}
              >
                Back
              </Button>
              {!showSubmit ? (
                <Button disabled={checkDisabled()} onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  endIcon={<Send />}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              )}
            </Stack>
          </Box>
        </Container>
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
