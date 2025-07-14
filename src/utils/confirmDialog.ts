// utils/confirmDialog.ts
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

type ConfirmDialogOptions = {
  title: string;
  text: string;
  confirmText?: string;
  cancelText?: string;
  icon?: 'warning' | 'info' | 'error' | 'success' | 'question';
};

export const confirmDialog = (options: ConfirmDialogOptions): Promise<boolean> => {
  const {
    title,
    text,
    confirmText = 'Yes',
    cancelText = 'Cancel',
    icon = 'warning',
  } = options;

  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    customClass: {
      popup: 'my-swal-sm',
    },
  }).then((result) => result.isConfirmed);
};
