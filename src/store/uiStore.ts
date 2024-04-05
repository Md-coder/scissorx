import { AlertColor } from '@mui/material';
import { makeAutoObservable, observable } from 'mobx';

export class UiStore {
  @observable loading: boolean = false;
  @observable snackBarOpen: boolean = false;
  @observable snackBarProperties: { severity: AlertColor; msg: string } = {
    severity: 'info',
    msg: '',
  };
  constructor() {
    makeAutoObservable(this);
  }

  showLoading = () => {
    this.loading = true;
  };

  hideLoading = () => {
    this.loading = false;
  };

  success = (message: string) => {
    this.snackBarOpen = true;
    this.snackBarProperties = { severity: 'success', msg: message };
  };

  error = (message: string) => {
    this.snackBarOpen = true;
    this.snackBarProperties = { severity: 'error', msg: message };
  };

  closeSnackBar = () => {
    this.snackBarOpen = false;
  };

  goTo(path: string) {
    window.location.href = path;
  }
}
