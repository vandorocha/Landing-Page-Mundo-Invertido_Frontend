import {
    addDoc,
    collection,
    getFirestore,
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestorm.js";
  import app from "./firebase/app.js";
  export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, "hellfire-club");
    const docRef = await addDoc(hellfireClubCollection, subscription);
    return docRef.id;
  }