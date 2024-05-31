function sendMail()
{
        let param ={ 
            first_name : document.getElementById("FN").value,
            last_name : document.getElementById("LN").value,
            email : document.getElementById("EM").value,
                Phone_no : document.getElementById("PH").value,
                message : document.getElementById("MS").value,
                };

         emailjs.send("service_bx5ngoo","template_xdjztsc",param).then(alert("Thank you, Your Message has been sent."));


}