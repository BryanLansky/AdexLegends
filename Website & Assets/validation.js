function validation(){
    var validated = true
    
    // fullname
    var full_Name = document.getElementById("full_Name").value
    var errfullname = document.getElementById("errfullname")
    if(full_Name == ""){
        errfullname.innerHTML = "Full Name can't be empty"
        validated = false
    }else if(full_Name.length < 5){
        errfullname.innerHTML = "Full Name must be at least 5 characters"
        validated = false
    }else{
        errfullname.innerHTML = ""
    }

    // email
    var email = document.getElementById("email").value
    var erremail = document.getElementById("erremail")
    if(email == ""){
        erremail.innerHTML = "Email can't be empty"
        validated = false
    }else if(email.startsWith("@") || email.endsWith(".") || email.startsWith(".") || email.endsWith("@")){
        erremail.innerHTML = "Email can't start or end with @ and ."
        validated = false
    }else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1){
        erremail.innerHTML = "@ and . can't be next to each other"
        validated = false
    }else if(email.indexOf("@") == -1){
        erremail.innerHTML = "Email must contains @"
        validated = false
    }else if(email.indexOf(".com") == -1){
        erremail.innerHTML = "Email must contains .com"
        validated = false
    }else{
        erremail.innerHTML = ""
    }

    // username
    var username = document.getElementById("username").value
    var errusername = document.getElementById("errusername")

    let alphanum = false
    for(let i = 0; i< username.length; i++){
        if(!isNaN(username[i])){
            alphanum = true
            break
        }
    }

    if(username == ""){
        errusername.innerHTML = "Username can't be empty"
        validated = false
    }else if(username.length < 5){
        errusername.innerHTML = "Username must be at least 5 characters"
        validated = false
    }else if(alphanum == false){
        errusername.innerHTML = "Username must be contain at least 1 number"
        validated = false
    }else{
        errusername.innerHTML = ""
    }

    // password and confirm password
    var password = document.getElementById("password").value
    var errpassword = document.getElementById("errpassword")
    var confirm_password = document.getElementById("confirm_password").value
    var errconfirm = document.getElementById("errconfirm")

    alphanum = false
    for(let i = 0; i< password.length; i++){
        if(!isNaN(password[i])){
            alphanum = true
            break
        }
    }

    let checkPassword = false
    for(let i=0; i<password.length; i++){
        if(password[i] == confirm_password[i]){
            checkPassword = true
        }else{
            checkPassword = false
        }
    }

    if(confirm_password.length == ""){
        errconfirm.innerHTML = "Password can't be empty"
        validated = false
    }else if(checkPassword == false || confirm_password.length < 8 || password.length != confirm_password.length){
        errconfirm.innerHTML = "Password doesn't match"
        validated = false
    }else{
        errpassword.innerHTML = ""
        errconfirm.innerHTML = ""
    }

    if(password == ""){
        errpassword.innerHTML = "Password can't be empty"
        validated = false
    }else if(password.length < 8){
        errpassword.innerHTML = "Password must be at least 8 characters"
        validated = false
    }else if(alphanum == false){
        errpassword.innerHTML = "Password must be contain at least 1 number"
        validated = false
    }else if(confirm_password == "" || checkPassword == false){
        errpassword.innerHTML = "Password doesn't match"
        validated = false
    }else if(password.length != confirm_password.length){
        errpassword.innerHTML = "Password doesn't match"
        errconfirm.innerHTML = "Password doesn't match"
        validated = false
    }else{
        errpassword.innerHTML = ""
    }

    // gender
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var errgender = document.getElementById(errgender)

    if(!male.checked && !female.checked){
        alert("Please choose a gender")
        validated = false
    }
    
    // address
    var address = document.getElementById("address").value
    var erraddress = document.getElementById("erraddress")

    if(address == ""){
        erraddress.innerHTML = "Please fill in the address field"
        validated = false
    }else{
        erraddress.innerHTML = ""
    }

    // server
    let server = document.getElementById("server")
    let myServer = server.options[server.selectedIndex].value
    let errserver = document.getAnimations("errserver")

    if(myServer == ""){
        alert("Please choose a server")
        validated = false
    }else{
        errserver.getElementById = ""
    }

    if(validated == true){
        alert("             Hi " + username + "\n" + "Welcome to ADEX Legends " + "[" + myServer + "]")
    }

    return validated
}