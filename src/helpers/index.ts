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
  