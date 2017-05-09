import { ToastOptions } from 'ng2-toastr';
export class ToastrCustomOption extends ToastOptions {
  animate = 'fade'; // fade flyLeft flyRight
  newestOnTop = false;
  showCloseButton = true;
  dismiss = 'auto'; // auto click controlled
  toastLife = 3000; // 3秒后自动消失

}
