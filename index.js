function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        Input.value="";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Enter atleast six letters";
        return false;
    }else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your password";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits";
        return false;
    }
    else if(document.Formfill.cPassword.value==""){
        document.getElementById("result").innerHTML="Enter confirm password";
        return false;
    }
    else if(document.Formfill.cPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password doesn't matched";
        return false;
    }
    else if(document.Formfill.cPassword.value == document.Formfill.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }

}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide");
    let inp=document.querySelector('.inp');
    inp.value='';
    let inp1=document.querySelector('.inp1');
    inp1.value='';
    let inp2=document.querySelector('.inp2');
    inp2.value='';
    let inp3=document.querySelector('.inp3');
    inp3.value='';
    let inp4=document.querySelector('.inp4');
    inp4.value='';
}