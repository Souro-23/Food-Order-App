import firebase from "firebase";
import "firebase/firestore";

var db = firebase.firestore();

export const addOrders = ({
  name,
  contactNumber,
  address,
  deliveryTime,
  productCart,
}) => {
  db.settings({
    timestampsInSnapshots: true,
  });
  db.collection("orders")
    .add({
      name: name,
      contactNumber: contactNumber,
      address: address,
      deliveryTime: deliveryTime,
      products: [...productCart],
    })
    .then((orderRef) => {
      console.log("Order Ref:", orderRef);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};
