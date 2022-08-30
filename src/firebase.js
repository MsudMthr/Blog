// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6I82y4jcWBiqNadv5ryWVBHzfW_IlOCg",
  authDomain: "msud-blog.firebaseapp.com",
  projectId: "msud-blog",
  storageBucket: "msud-blog.appspot.com",
  messagingSenderId: "501800221688",
  appId: "1:501800221688:web:143d488672199b08baf40d",
  measurementId: "G-QMN3VQ5X25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage(app);

// upload handler function
export const upload = async (file, currentUser, setLoading) => {
  const fileRef = ref(storage, currentUser.uid + ".png");

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(auth.currentUser, { photoURL });

  setLoading(false);
};
