var arr=[{
    usern:"mido",
    userp:"Asd!@12"
}]
function chick(){
   
    nn=document.getElementById('usern').value;
    pp=document.getElementById('userp').value;
  
        if(nn==""&&pp==""){
            alert("plese enter value");
            
        }
        for(var x=0;x<arr.length;x++)
        {
            if(arr[x].usern==nn&&arr[x].userp==pp)
            {
                alert("login succes");
                return true;
            }
            alert("login fail");
            console.log(arr);
        }
    
  
   
    
}