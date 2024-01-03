var data = [];
function validateSignup(){
    let username = document.getElementById('usern').value;
    let email = document.getElementById('usere').value;
    let password = document.getElementById('userp').value;
    let confirmpassword = document.getElementById('usercp').value;
    if(username && password && email && confirmpassword){
        if(password == confirmpassword){
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*!@#$%^&*()_+=-|).{6,12}$/

            if(regex.test(password)){
                var user = {
                    usern : username,
                     usere : email,
                   userp  : password,
                }
                data.push(user);
                alert("sign up successfully");
            }
            else{
                alert("make a strong password");
            }
        }
        else{
            alert("please enter same password");
        }
    }
}