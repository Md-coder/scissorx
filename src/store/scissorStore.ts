import { makeAutoObservable } from "mobx";
import { FirebaseStore } from "./firebaseStore";
import { IFieldObject } from "../layouts/main/inputSection";
import { collections } from "./collections";
import { getDocs, query, where } from "firebase/firestore";

export class ScissorStore {
  constructor(private firestore: FirebaseStore) {
    makeAutoObservable(this);
  }

  async trim(trimObject: { id: string } & IFieldObject) {
    const uid = this.firestore.authService.currentUser?.uid;
    if (!uid) return;
    await this.firestore.addDocumentWithId(`${collections.scissor}`, uid, trimObject);
  }

  getUrlById = async (id: string) => {
    if (!id) return;
    const collectionRef = this.firestore.getCollectionRef(collections.scissor);
    const q = query(collectionRef, where("id", "==", id));
    const docs = (await getDocs(q)).docs.map((doc) => doc.data() as { id: string } & IFieldObject);
    return docs[0].url;
  };

  getQrCode = async (link: string) => {
    const url = "https://qrcode3.p.rapidapi.com/qrcode/text";
    const data = new FormData();
    data.append("image", "");
    data.append(
      "metadata",
      `{"data":${link},"image":{"modules":true},"style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4},"output":{"filename":"qrcode","format":"svg"}}`
    );

    const options = {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": "0c9d42c06cmsha0c9b28adbcb1e1p1aa661jsncebdaf2c5075",
        "X-RapidAPI-Host": "qrcode3.p.rapidapi.com",
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };
}
