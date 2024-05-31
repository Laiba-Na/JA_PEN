function sendMail()
{
        let param ={ 
            first_name : document.getElementById("FN").value,
            last_name : document.getElementById("LN").value,
                email : document.getElementById("EM").value,
                Phone_no : document.getElementById("PH").value,
                message : document.getElementById("PH").value,
                };

         emailjs.send("service_xww2uwl","template_o1d8e74",param).then(alert("Thank you, Your Message has been sent."));


}