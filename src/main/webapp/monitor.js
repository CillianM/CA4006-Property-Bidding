function updateRoomDetails(json) {
    var roomDetails = JSON.parse(json);
    handleRoomUpdate(roomDetails);
}


function handleRoomUpdate(roomDetails) {
    var roomId = roomDetails.room;
    var occupation = roomDetails.occupation;

    var roomCell = document.getElementById("room" + roomId);
    roomCell.innerHTML = occupation;

    document.getElementById("message").innerHTML = roomDetails;
}
