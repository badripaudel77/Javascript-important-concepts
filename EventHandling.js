function valueOfJs() {

var uname=document.getElementById('uname').value;
var pass=document.getElementById('Userpid').value;
var passConfirm=document.getElementById('Userpid1').value;
var email=document.getElementById('Useremail').value;
var age=document.getElementById('urange').value;
var gen=document.valid.Gender;
var re=document.getElementById('reM');


if (uname=="") {
document.getElementById('unameErr').innerHTML="Empty Userename not allowed";
return false;
}

if (pass=="") {
document.getElementById('passErr').innerHTML="Empty password not allowed";
return false;
}

if (pass!=passConfirm) {
document.getElementById('passErr').innerHTML=" Two Password did not match";
return false;
}

if (email=="") {
document.getElementById('emailErr').innerHTML="Empty email not allowed";
return false;
}

if (uname.length<5) {
    	document.getElementById('unameErr').innerHTML="Userename must be atleast 5 character long";
       return false;
}
if(re.checked==false){
	document.getElementById('MeErr').innerHTML="not checked";
	return false;
}

for(var i=0;i<gen.length;i++){
    if (gen[i].checked==true) 
//if(gen[i].checked.value=="male"){var gender = "male"}
    {
    return true;
}
  }
document.getElementById('genErr').innerHTML="Gender not selected";
return false;

}

function valueClear(){
	alert('Are you sure to Clear the form???');
   return true;

}
