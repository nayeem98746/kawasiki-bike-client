import { initializeApp } from "firebase/app";
import firebaseConfig from './FireBase.config';
const initializeaFirebase = () => {
    initializeApp(firebaseConfig);

}
export default initializeaFirebase;