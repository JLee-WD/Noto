import NavButton from "../components/NavButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import Context from "../context/context";
import { useNavigate } from "react-router-dom";
import "../styles/login_register.css";

const LoginPage = () => {
  const { setUser, setJwt, notes } = useContext(Context);
  const initialFormState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormState);

  const onLoginSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: event.target.email.value,
          password: event.target.password.value,
        },
      }),
    };
    const loginResponse = await fetch("/api/users/sign_in", options);
    const loginJson = await loginResponse.json();
    const newJwt = loginResponse.headers.get("authorization");
    if (loginJson.message === "You are logged in.") {
      await getUser(event.target.email.value, newJwt);
      await setJwt(newJwt);
      navigate("/");
    }
  };

  const getUser = async (email, newJwt) => {
    const options = {
      method: "POST",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: newJwt,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    };
    const userResponse = await fetch("/api/current_users", options);
    const userJson = await userResponse.json();
    setUser(userJson);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div id="loginRegisterBackground"></div>
      <form onSubmit={onLoginSubmit}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={4}
          sx={{ mt: 20 }}
        >
          <Typography sx={{ color: "#858585", fontSize: 36 }}>Login</Typography>

          <TextField
            id="1"
            sx={{ width: 300 }}
            label="Email"
            variant="filled"
            onChange={handleChange}
            name="email"
          />
          <TextField
            id="2"
            sx={{ width: 300 }}
            label="Password"
            type="password"
            variant="filled"
            onChange={handleChange}
            name="password"
          />
          <Stack direction="row">
            <Button
              variant="contained"
              type="submit"
              sx={{ mx: "1rem", my: "1rem" }}
              size="large"
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default LoginPage;
