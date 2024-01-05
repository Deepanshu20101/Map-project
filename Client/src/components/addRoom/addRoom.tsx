import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
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

const AddRoom = () => {
  const [activeStep, setActiveStep] = useState(0);
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

  const { currentUser } = useContext(AuthContext);

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
          <Box>
            {
              {
                0: <AddDetails />,
                1: <AddImages />,
              }[activeStep]
            }
            <Stack
              direction="row"
              sx={{ pt: 2, justifyContent: "space-around" }}
            >
              <Button
                color="inherit"
                disabled={!activeStep}
                onClick={() => setActiveStep((activeStep) => activeStep - 1)}
              >
                Back
              </Button>
              <Button disabled={checkDisabled()} onClick={handleNext}>
                Next
              </Button>
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
