<script>
    document.getElementById('loginform')addEventListner('submit',function(event){
        event.preventDefault();
    
      var  username = document.getElementById("username").value;
      var password = document.getElementById("password").value;     

        if (username === "user" && password === "password") {
        alert("Login successful!");        
          }           
          else 
          {
        alert("Incorrect username or password.");
      }
    }
  </script>
