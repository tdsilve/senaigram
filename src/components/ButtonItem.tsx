import { Button } from "@mui/material";

export const ButtonItem = ({
  children,
  onClick,
  type,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: any;
  disabled?: boolean;
}) => {
  return (
    <Button color="primary" variant="contained" type={type} disabled={disabled}>
      {children}
    </Button>
  );
};
