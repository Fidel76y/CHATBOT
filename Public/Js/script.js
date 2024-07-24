const { text } = require("express");

var sendBtn = document.getElementById('sendBtn');
var textbox =document.getElementById('textbox');
var chatContainer= document.getElementById('chatContainer');
var user={message:""};


function userMessage(userMessage){ 
   var messageElement= document.createElement('div');
   messageElement.style.textAlign="right";
   messageElement.style.margin="10px"
   messageElement.innerHTML="<span>You: </span>"+
                             "<span>+userMessage+</span>";
    chatContainer.appendChild('messageElement')
;
}



sendBtn.addEventListener('click',function(e){
      var userText = textvalue.value
    if (userText==""){
        alert('please type something')
    }else{

        let userMessageText= userMessage.trim();
            user.message=userMessageText;
            textbox.value="";
            sendMessage(userMessageText);
    }






})