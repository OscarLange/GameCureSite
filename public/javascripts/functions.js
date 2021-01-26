function addEmail(){
    const email = document.getElementById("email").value;

    
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat)){
        fetch('/addEmail/' + email, {
            method: 'POST',
            headers: {
    
            },
            body: {
                
            }
        });
    } else {
        document.getElementById("wrongEmail").className = 'normalLabel redText'; 
    }
}