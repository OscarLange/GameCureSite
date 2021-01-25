function addEmail(){
    const email = document.getElementById("email").value;

    fetch('/addEmail/' + email, {
        method: 'POST',
        headers: {

        },
        body: {
            
        }
    })
}