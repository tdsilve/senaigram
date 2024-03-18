/* eslint-disable  @typescript-eslint/no-explicit-any */
import { TextField, TextFieldVariants } from "@mui/material";
import { FieldError } from "react-hook-form";

type FormTextFieldProps = {
  error: FieldError | undefined;
  onChange: (...event: any[]) => void;
  value: string;
  label?: string;
  variant?: TextFieldVariants;
  type?: string;
};

export const FormTextField = ({
  variant = "outlined",
  type = "text",
  ...props
}: FormTextFieldProps) => {
  return (
    <TextField
      fullWidth
      helperText={props.error ? props.error.message : null}
      error={!!props.error}
      onChange={props.onChange}
      value={props.value}
      label={props.label || ""}
      variant={variant}
      type={type}
      autoComplete="off"
    />
  );
};
