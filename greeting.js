

 
 const loginForm = document.querySelector("#login-form");
 const loginInput = document.querySelector("#login-form input");
 const greeting = document.querySelector("#greeting")
 
 const HIDDEN_CLASSNAME = "hidden";
 const USERNAME_KEY = "username"; 




 function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
  
    localStorage.setItem(USERNAME_KEY, username);
    afterLog(username);

   }

 function   afterLog(username) {
   greeting.innerText =  `HELLO ${username} good`;
   greeting.classList.remove(HIDDEN_CLASSNAME);    
   }

 
 
loginForm.addEventListener("submit", onLoginSubmit);
 
 const savedUsername = localStorage.getItem(USERNAME_KEY);

 if (savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
 } else{
   afterLog(savedUsername);
   
 }


