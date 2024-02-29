import { initializeApp } from "firebase/app";
import {
  deleteUser,
  EmailAuthProvider,
  getAuth,
  GoogleAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { getDatabase, ref, remove, update } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpI1JsQA3TtGusA_LpkxFPw89o-tgyCQE",
  authDomain: "procard-17c8a.firebaseapp.com",
  projectId: "procard-17c8a",
  storageBucket: "procard-17c8a.appspot.com",
  messagingSenderId: "661705346590",
  appId: "1:661705346590:web:bbebad2c20cf37c41b280f",
  measurementId: "G-03VG2Y7GFV",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

console.log(auth);

const deleteSignedUser = async (afterdel) => {
  const userId = auth?.currentUser?.uid;
  let provider = localStorage.getItem("provider");
  if (provider == "emailpass") {
    const credential = EmailAuthProvider.credential(
      // auth.currentUser.email,
      localStorage.getItem("email"),
      localStorage.getItem("pass")
    );

    const result = await reauthenticateWithCredential(
      auth.currentUser,
      credential
    );

    // Pass result.user
    update(ref(db, "User/" + userId), {
      email: "",
      username: "",
    });
    //
    await deleteUser(result.user)
      .then(() => {
        afterdel();
        localStorage.removeItem("email");
        localStorage.removeItem("pass");
        localStorage.removeItem("provider");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    remove(ref(db, "User/" + userId));

    afterdel();
  }
  // console.log("success in deleting")
};

export { auth, provider, db, app, storage, deleteSignedUser };
