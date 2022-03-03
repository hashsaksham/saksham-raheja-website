import { toast } from "react-toastify";

export const successToastOptions = {
  position: "top-right",
  autoClose: 50000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};
export const errorToastOptions = {
  position: "top-right",
  autoClose: 10000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const successToast = message => {
  toast.success(message ? message : "Success!", successToastOptions);
};
export const errorToast = message => {
  toast.error(
    message ? message : "Oops! Some Error Occurred",
    errorToastOptions
  );
};
