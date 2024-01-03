var usr = [{username:'user1' , password: 'Password@1'},]
function forget(){
  var username = document.getElementById('usern').value;
  var password = document.getElementById('userp').value;
  for(var i = 0; i <= usr.length ; i++){
    if(usr[i].username == username){
      usr[i].password = password
      alert("updated successfuly");
      console.log(usr);
      return true;
      
    }
    else{
      alert("username not found");
      return false;
    } 
    }
  }
