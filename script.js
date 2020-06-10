
$('#submit').click(function(){

  var username = $('#username').val();
  var password = $('#password').val();


  var status=validateusername(username,password);
  if(status){
    alert ("Login successfully");
    redirectfunction();
  }
  else{
    alert("Invalid username or password");
  }
});

function redirectfunction(){
  window.location.replace("main.html");
}
function validateusername(username,password){
  if(username=="admin" && password=="1234"){
   return true;
  }
  else{
    return false;
  }
}

// function validate(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if ( username == "admin" && password == "1234" ){
//     alert ("Login successfully");
//       }
//       else{
//         alert("Invalid username or password");
//         }
//       return false;
//       }
//       validate(username,password,callback);
    
//     function callback(){
//         console.log("callback");
//         window.location.href("main.html");
//         // return true}
//     }