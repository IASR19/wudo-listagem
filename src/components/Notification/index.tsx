import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const displaySuccessMessage = (message: string) => {
  toast.success(message);
};

export const displayErrorMessage = (message: string) => {
    toast.error(message);
};

export const displayInfoMessage = (message: string) => {
    toast.info(message);
};

const ToastEvent = () => <ToastContainer />;

export default ToastEvent;