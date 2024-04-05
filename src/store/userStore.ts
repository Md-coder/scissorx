import { action, computed, makeAutoObservable, observable } from "mobx";
import { FirebaseStore } from "./firebaseStore";

export class UserStore {
  listner: any;
  @observable authStatus: boolean = false;
  constructor(private firestore: FirebaseStore) {
    makeAutoObservable(this);
    this.listner = this.firestore.onAuthStatusChange(
      (user: boolean) => {
        this.authStatus = user;
      },
      (user: boolean) => {
        this.authStatus = user;
      }
    );
  }

  //   signOut
  @action
  signOut() {
    this.firestore.userSignOut();
  }

  //   login
  @action
  async login(email: string, password: string) {
    if (!email || !password) return;
    const credentials = await this.firestore.userLogin(email, password);
    if (!credentials.user) {
      const err = { message: "user is not verified" };
      this.signOut();
      throw err;
    }
  }

  //   create user
  @action
  async createUser(userName: string, email: string, password: string) {
    if (!userName || !email || !password) return;
    try {
      const userCred = await this.firestore.createUserWithEmailAndPassword(email, password);

      const userInfo = {
        firstName: userName,
        email: email,
      };

      await this.firestore.updateUser(userCred.user.uid, userInfo);
      this.signOut();
      return Promise.resolve(userCred);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  @computed
  get userIsAuthenticated() {
    return !!this.firestore.authService.currentUser;
  }
}
