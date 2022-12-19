export const load = () => {
  const fields = [
    { label: "Username", type: "text", name: "username", icon: "" },
    { label: "Email", type: "email", name: "email", icon: "" },
    { label: "Password", type: "password", name: "password", icon: "" },
    {
      label: "Ulangi Password",
      type: "password",
      name: "passwordConfirm",
      icon: "",
    },
  ];

  return { fields };
};
