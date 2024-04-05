import { FirebaseStore } from "./firebaseStore";
import { ScissorStore } from "./scissorStore";
import { UiStore } from "./uiStore";
import { UserStore } from "./userStore";

export class RootStore {
  private firestore: FirebaseStore;
  public userStore: UserStore;
  public uiStore: UiStore;
  public scissorStore: ScissorStore;
  constructor() {
    this.firestore = new FirebaseStore();
    this.userStore = new UserStore(this.firestore);
    this.uiStore = new UiStore();
    this.scissorStore = new ScissorStore(this.firestore);
  }
}

export const rootStore = new RootStore();
