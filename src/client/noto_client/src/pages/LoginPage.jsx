import CustomButton from "../components/CustomButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import "../styles/login_register.css";

const LoginPage = () => {
  return (
    <>
      <div id="loginRegisterBackground"></div>
      <Stack direction="column" alignItems="center" spacing={4} sx={{ mt: 20 }}>
        <Typography sx={{ color: "#858585", fontSize: 36 }}>Login</Typography>
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
          type="password"
          variant="filled"
        />
        <Stack direction="row">
          <CustomButton
            // path="/register"
            text="Login"
            variant="contained"
            size="large"
          />
        </Stack>
      </Stack>
    </>
  );
};

export default LoginPage;
