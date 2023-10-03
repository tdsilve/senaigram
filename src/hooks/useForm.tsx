import React from "react";

const useForm = (values) => {
  const [form, setForm] = React.useState(values);

  const onChangeHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid = React.useMemo(() => {
    const isValid = Object.values(form).every(
      (val) => val !== undefined && val !== ""
    );
    return isValid;
  }, [form]);

  return [form, onChangeHandler, isFormValid];
};

export default useForm;
