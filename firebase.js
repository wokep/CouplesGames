import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
getDatabase,
ref,
set,
get,
push,
onChildAdded,
onValue
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

/* YOUR FIREBASE CONFIG */
const firebaseConfig = {
apiKey: "AIzaSyDgJS40gn_X8IACTCpgA4DT_3kC9T6oNxM",
authDomain: "yoooo-85eb6.firebaseapp.com",
databaseURL: "https://yoooo-85eb6-default-rtdb.firebaseio.com",
projectId: "yoooo-85eb6",
storageBucket: "yoooo-85eb6.appspot.com",
appId: "1:837218315446:web:443d6dc3417e78706b4a17"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

/* helpers */
export {
ref,
set,
get,
push,
onChildAdded,
onValue
};
