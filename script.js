let guests = [];
let attended = [];

function addGuest(){

let name =
document.getElementById("name").value;

let phone =
document.getElementById("phone").value;

if(name === "" || phone === ""){
alert("Please fill all fields");
return;
}

guests.push({
name:name,
phone:phone,
status:"Invited"
});

displayGuests();

document.getElementById("name").value="";
document.getElementById("phone").value="";
}

function displayGuests(){

let table =
document.getElementById("guestList");

table.innerHTML="";

guests.forEach(guest=>{

table.innerHTML += `
<tr>
<td>${guest.name}</td>
<td>${guest.phone}</td>
<td>${guest.status}</td>
</tr>
`;
});

}

function markAttendance(){

let attendee =
document.getElementById("attendee").value;

if(attendee===""){
alert("Enter guest name");
return;
}

let found =
guests.find(
g=>g.name.toLowerCase() ===
attendee.toLowerCase()
);

if(found){

found.status = "Present";

attended.push(attendee);

displayGuests();

let list =
document.getElementById("attendanceList");

let li =
document.createElement("li");

li.textContent =
attendee + " attended the function";

list.appendChild(li);

document.getElementById("attendee").value="";

}else{
alert("Guest not found");
}

}