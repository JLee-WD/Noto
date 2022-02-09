import CustomButton from "../components/CustomButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import "../styles/login_register.css";

const RegisterPage = () => {
  return (
    <>
      <div id="loginRegisterBackground"></div>
      <Stack direction="column" alignItems="center" spacing={4} sx={{ mt: 20 }}>
        <Typography sx={{ color: "#858585", fontSize: 36 }}>
          Register
        </Typography>
        <TextField
          sx={{ width: 300 }}
          id="outlined-basic"
          label="First Name"
          variant="filled"
        />
        <TextField
          sx={{ width: 300 }}
          id="outlined-basic"
          label="Last Name"
          variant="filled"
        />
        <TextField
          sx={{ width: 300 }}
          id="outlined-basic"
          label="Email"
          variant="filled"
        />
        <TextField
          sx={{ width: 300 }}
          id="outlined-basic"
          label="Password"
          variant="filled"
        />
        <Stack direction="row">
          <CustomButton
            // path="/register"
            text="Register"
            variant="contained"
            size="large"
          />
        </Stack>
      </Stack>
    </>
  );
};

export default RegisterPage;
