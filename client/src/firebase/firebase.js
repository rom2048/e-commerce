import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBz907DpVQg-NL5UJaNuoGKV24L0iQH7CA",
    authDomain: "shop-db-23a31.firebaseapp.com",
    projectId: "shop-db-23a31",
    storageBucket: "shop-db-23a31.appspot.com",
    messagingSenderId: "413947300804",
    appId: "1:413947300804:web:a30f83c208bb3ece28f291",
    measurementId: "G-8WTKDV9966"
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items 
    };
  });
  /* We passin in initial object (empty object (row52)). The initial object goes into the first new collection.
    And it sets the first value equal to the title but in lower case.
    So the first value is going to be hats. So it will be an empty object with a property of hats
    that's equal to the hats collection. And then it returns that object.
    And it goes into the second object. If the second object is say jackets, then it's going to set
    a new property called jackets and then equal the jackets collection.
    So now you have an object thats has a hats property qual to the hats collection and a jacket's property
    equal to the jackets collection and then so on and so forth until we end up with an object,
    where the titles of all five of the collections objects are the keys and then they equal their respective
    collection object.  */
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); 
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubsctibe = auth.onAuthStateChanged(userAuth => {
      unsubsctibe();
      resolve(userAuth);
    }, reject)
  });
}
export default firebase;