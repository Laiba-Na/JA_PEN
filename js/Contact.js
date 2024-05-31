function sendMail()
{
        let param ={ 
            first_name: document.getElementById("first_name").value,
            last_name: document.getElementById("last_name").value,
            email: document.getElementById("email").value,
                Phone_no: document.getElementById("Phone_no").value,
                message: document.getElementById("message").value,
                };

         emailjs.send("service_bx5ngoo","template_xdjztsc",param).then(alert("Thank you, Your Message has been sent."));


}