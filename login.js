

function savedata()
{

    var firstName = document.getElementById('firstn').value;
    var lastname = document.getElementById('lastn').value;
    var Email = document.getElementById('em').value;
    var Phone = document.getElementById('ph').value;
    var Password = document.getElementById('pass').value;


    let name = firstName.trim();
    let sname = lastname.trim();
    let mail = Email.trim();
    let Pho = Phone.trim();
    let pass1 = Password.trim();
  
    localStorage.setItem("Username", name);
    localStorage.setItem("Username2", sname);
    localStorage.setItem("Email", mail);
    localStorage.setItem("Password", pass1);
    localStorage.setItem("phoneno", Pho);

    console.log(name,sname,mail,pass1,Pho);



  }

  function sign()
  {

    var firstName = document.getElementById('Sfirstn').value;
    var pass = document.getElementById('Sastn').value;
    var mail = document.getElementById('Sem').value;

    const Name = localStorage.getItem("Username");
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if (firstName == "" && pass == "" && mail == "") {
        alert("Input field has no value");
      } 
      else {
        if (firstName == Name && pass == Password && mail == Email) {

          alert('Login successfull, hi ' + Name );

          
           window.location.href = "html_folders/user-prof.html";

           
         } 
        else {
          alert("Something is wrong");
        }
      }

      //user profile update
      
      
  }

