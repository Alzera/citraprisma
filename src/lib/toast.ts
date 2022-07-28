let toastContainer: HTMLDivElement

export const initToast = () => {
  if(toastContainer) return
  toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';
  document.body.appendChild(toastContainer);
}

export const show = (text: string) => {
  if(!toastContainer) initToast()
  var newToast = document.createElement('div');
  newToast.className = 'toast';
  newToast.innerHTML = text;
  toastContainer.appendChild(newToast);
  setTimeout(() => {
      toastContainer.removeChild(newToast);
  }, 2000);
}