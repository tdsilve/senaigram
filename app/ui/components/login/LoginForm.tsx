"use client";

import { Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { FormTextField } from "../form/FormTextField";

export const LoginForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit((data) => {
        // TODO apply login, check firebase log in rules for username and password, apply login for username or password
        console.log("data", data);
      })}
    >
      <div className="flex flex-col gap-2 mb-5">
        <Controller
          name="username"
          control={control}
          rules={{ required: "Enter an email or username" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormTextField
              onChange={onChange}
              value={value}
              error={error}
              label="Email or username"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: "Enter a valid password", minLength: 6 }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormTextField
              onChange={onChange}
              value={value}
              error={error}
              label="Password"
              type="password"
            />
          )}
        />
      </div>
      <Button type="submit" variant="contained" className="w-full">
        Log in
      </Button>
    </form>
  );
};
