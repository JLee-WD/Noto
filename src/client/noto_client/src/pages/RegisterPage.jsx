import { useState, useEffect, useContext } from "react";
import NavButton from "../components/NavButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Context from "../context/context";
import "../styles/login_register.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { setUser, setJwt, notes } = useContext(Context);
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [firstNameValid, setFirstNameValid] = useState(null);
  const [lastNameValid, setLastNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {}, [firstNameValid]);
  useEffect(() => {}, [lastNameValid]);

  const handleOnBlur = (e) => {
    if (e.target.name === "firstName") {
      if (!e.target.value.match(/^[a-zA-Z]+$/)) {
        setFirstNameValid(false);
        resetField(e.target.name, e.target.value);
      } else {
        setFirstNameValid(true);
        fillFormData(e.target.name, e.target.value);
      }
    }
    if (e.target.name === "lastName") {
      if (!e.target.value.match(/^[a-zA-Z]+$/)) {
        setLastNameValid(false);
        resetField(e.target.name);
      } else {
        setLastNameValid(true);
        fillFormData(e.target.name, e.target.value);
      }
    }
    if (e.target.name === "email") {
      if (
        !e.target.value
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setEmailValid(false);
        resetField(e.target.name);
      } else {
        setEmailValid(true);
        fillFormData(e.target.name, e.target.value);
      }
    }
    if (e.target.name === "password") {
      if (e.target.value.length < 8) {
        setPasswordValid(false);
        resetField(e.target.name);
      } else {
        setPasswordValid(true);
        fillFormData(e.target.name, e.target.value);
      }
    }
  };

  const resetField = (name) => {
    setFormData({
      ...formData,
      [name]: "",
    });
  };

  const fillFormData = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const inputField = (label, name, state) => {
    if (state === false) {
      return (
        <>
          <TextField
            error
            sx={{ width: 300 }}
            id="outlined-basic"
            label={label}
            variant="filled"
            onBlur={handleOnBlur}
            helperText="Oops! Invalid input"
            name={name}
          />
        </>
      );
    } else {
      return (
        <>
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label={label}
            variant="filled"
            onBlur={handleOnBlur}
            helperText=" "
            name={name}
          />
        </>
      );
    }
  };

  const passwordInputField = (state) => {
    if (state === false) {
      return (
        <TextField
          error
          sx={{ width: 300 }}
          id="outlined-basic"
          label="Password"
          variant="filled"
          onBlur={handleOnBlur}
          helperText="Please enter more than 8 characters"
          type="password"
          name="password"
        />
      );
    } else {
      return (
        <TextField
          sx={{ width: 300 }}
          id="outlined-basic"
          label="Password"
          variant="filled"
          onBlur={handleOnBlur}
          helperText=" "
          type="password"
          name="password"
        />
      );
    }
  };

  const onRegisterSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          email: event.target.email.value,
          password: event.target.password.value,
        },
      }),
    };
    const loginResponse = await fetch("/api/users", options);
    const loginJson = await loginResponse.json();
    console.log(loginJson);
    const newJwt = loginResponse.headers.get("authorization");
    setJwt(newJwt);
    if (loginJson.message === "Signed up sucessfully.") {
      setUser(true);
      navigate("/login");
    }
  };

  console.log("formdata", formData);
  return (
    <>
      <div id="loginRegisterBackground"></div>
      <form onSubmit={onRegisterSubmit}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={4}
          sx={{ mt: 20 }}
        >
          <Typography sx={{ color: "#858585", fontSize: 36 }}>
            Register
          </Typography>
          {inputField("First Name", "firstName", firstNameValid)}
          {inputField("Last Name", "lastName", lastNameValid)}
          {inputField("Email", "email", emailValid)}
          {passwordInputField(passwordValid)}
          <Stack direction="row">
            <Button
              variant="contained"
              type="submit"
              sx={{ mx: "1rem", my: "1rem" }}
              size="large"
            >
              Register
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default RegisterPage;
