// Messagerie Ikagne

function envoyerMessage(){

    const message = document.getElementById("messageInput").value;

    if(message === ""){
        alert("Écris un message");
        return;
    }

    alert("Message envoyé : " + message);

}
