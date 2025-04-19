// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtMq6_QrvRQ6QkoWzMq8khHYM4ETWvZtU",
  authDomain: "nextdivakar-2d86d.firebaseapp.com",
  projectId: "nextdivakar-2d86d",
  appId: "1:935339853682:web:32e127a773b75bbea7ffeb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
