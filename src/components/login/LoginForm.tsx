import {
    TextField,
    IconButton,
    InputAdornment,
    InputLabel,
    FormControl,
    Input,
  } from "@mui/material";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  import Visibility from "@mui/icons-material/Visibility";
  import { ButtonItem } from "../ButtonItem";
  import useForm from "../../hooks/useForm";
  import React from "react";
  
  export const LoginForm = () => {
    const [ form, onChangeHandler, isFormValid ] = useForm({
      email: "",
      password: "",
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          name="email"
          variant="standard"
          onChange={onChangeHandler}
          value={form.email}
        />
        <FormControl variant="standard" className="mb-2">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
            name="password"
            onChange={onChangeHandler}
            value={form.password}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <p className="text-xs text-pink font-semibold">Forgot password?</p>
        <ButtonItem type={"submit"} disabled={!isFormValid}>
          Submit
        </ButtonItem>
      </form>
    );
  };
  