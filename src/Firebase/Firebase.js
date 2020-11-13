import firebase from "./Firebase-config";
import "firebase/firestore";

var db = firebase.firestore();

export const getProducts = async () =>  { 
    db.collection('Products').get().then(snapshot=>{
        snapshot.docs.forEach(doc=>{
            console.log("data",doc.data())
        })
    })
  const snapshot = await db.collection('Products').get();
  console
  return snapshot.docs;
};