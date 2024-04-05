import { FirebaseApp, initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { firebaseConfig } from "../firebaseConfig";
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  initializeFirestore,
  setDoc,
} from "firebase/firestore";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collections } from "./collections";

export class FirebaseStore {
  firebaseApp: FirebaseApp;
  firebaseStorage: FirebaseStorage;
  dbService: Firestore;
  authService: Auth;
  constructor() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.authService = getAuth(this.firebaseApp);
    this.firebaseStorage = getStorage(this.firebaseApp);
    this.dbService = initializeFirestore(this.firebaseApp, { ignoreUndefinedProperties: true });
  }

  // login user
  userLogin = (email: string, password: string) =>
    signInWithEmailAndPassword(this.authService, email, password);

  // signout user
  userSignOut = () => signOut(this.authService);

  // createUser
  createUserWithEmailAndPassword = (email: string, password: string) => {
    return createUserWithEmailAndPassword(this.authService, email, password);
  };

  //authStatus
  onAuthStatusChange = (next: any, fallback: any) => {
    return onAuthStateChanged(this.authService, (auth) => {
      if (!!auth) {
        next(true);
      } else {
        fallback(false);
      }
    });
  };

  // updateUser
  updateUser = (uid: string, data: any) =>
    setDoc(this.getDocumentRef(collections.users, uid), data, { merge: true });

  addDocument = (path: string, data: any) => addDoc(collection(this.dbService, path), data);
  addDocumentWithId = (path: string, id: string, data: any) =>
    setDoc(this.getDocumentRef(path, id), data, { merge: true });
  getDocumentRef = (collectionPath: string, docId: string) =>
    doc(collection(this.dbService, collectionPath), docId);
  getDocument = (collectionPath: string, docId: string) =>
    getDoc(this.getDocumentRef(collectionPath, docId));

  getCollectionRef = (collectionPath: string) => collection(this.dbService, collectionPath);
}
