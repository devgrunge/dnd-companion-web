import { toast } from "react-toastify";

export const Notify = (type: string, message: string) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
      break;
  }
};

export const DataValidation = (
  name: string | null,
  email: string | undefined,
  password: string | undefined
) => {
  if (!email || !password || !name) {
    Notify("error", "Wrong credentials");
    throw new Error("Wrong credentials");
  }
};
