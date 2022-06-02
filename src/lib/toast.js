import { toast } from 'react-toastify';

const dismiss = () => {
  return toast.dismiss();
};

export const successToaster = (msg) => {
  dismiss();
  return toast.success(msg);
};

export const errorToaster = (msg) => {
  dismiss();
  return toast.error(msg);
};
