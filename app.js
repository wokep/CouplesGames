import {
db,
ref,
set,
get,
push,
onValue,
onChildAdded
} from "./firebase.js";

let room = "";
let user = "";

/* NAV */
function show(id){
document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

/* CREATE ROOM */
document.getElementById("create").onclick = async () => {

user = document.getElementById("name").value || "Player";

room = Math.random().toString(36).slice(2,7).toUpperCase();

/* create room */
await set(ref(db,"rooms/"+room),{
host:user,
joined:false
});

document.getElementById("roomCode").innerText = room;

show("wait");

/* wait for join */
onValue(ref(db,"rooms/"+room+"/joined"), snap => {
if(snap.val() === true){
startHub();
}
});

};

/* JOIN ROOM */
document.getElementById("join").onclick = async () => {

user = document.getElementById("name").value || "Player";

room = document.getElementById("joinCode").value.toUpperCase();

/* mark joined */
await set(ref(db,"rooms/"+room+"/joined"),true);

startHub();

};

/* START HUB */
function startHub(){

show("hub");

/* chat listener */
const chatRef = ref(db,"rooms/"+room+"/chat");

onChildAdded(chatRef, snap => {

const v = snap.val();

const div = document.createElement("div");

div.className =
"msg " +
(v.user === user ? "mine" : "other");

div.innerText = v.msg;

document.body.appendChild(div);

});

}

/* expose for games.js */
window.room = () => room;
window.user = () => user;
window.dbRef = ref;
window.dbPush = push;
window.db = db;
