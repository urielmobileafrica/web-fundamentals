//changetxt()

//function changetxt(button){
    //console.log("button clicked!");
  //  button.
//};

function changetxt(button) {
    console.log("Mouse Over!");
    //original solution using onmouseover
    button.textContent = 'Logout'; // Changes the text of the button

    //post review test updates after viewing solution
    /*
    
    if(button.textContent == "Login"){
        button.textContent="Logout";
    }
    else{
        button.textContent="Login";
    }
    */

};

function changeback(button) {
    console.log("Mouse Out!");
    button.textContent = 'Login'; // Changes the text of the button

};

function disappear(button){
    console.log("Vanish now!");
    button.remove();
};