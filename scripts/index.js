
    // Find the helloBtn
    //let helloBtn = document.getElementById("helloBtn");
 
    // Let helloBtn's onclick know there is a function
    // called onHelloBtnClicked that should be called when
    // the button is clicked
    //helloBtn.onclick = onHelloBtnClicked; 

 
    // Find the clearBtn
    //let clearBtn = document.getElementById("clearBtn");
 
    // Let clearBtn's onclick know there is a function
    // called onClearBtnClicked that should be called when
    // the button is clicked
    //clearBtn.onclick = onClearBtnClicked; 

 
 
 
 function onHelloBtnClicked() {
    // Find the messageDiv
    let messageDiv = document.getElementById("messageDiv");
 
 
    // Clear the contents of the div
    messageDiv.innerHTML = "Hello Hi";
 }

 function onClearBtnClicked() {
    // Find the messageDiv
    let messageDiv = document.getElementById("messageDiv");
 
 
    // Clear the contents of the div
    messageDiv.innerHTML = "";
 }