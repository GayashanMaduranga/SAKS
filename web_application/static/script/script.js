(function () {


    var fullname = document.getElementById("full-name");
    var email = document.getElementById("email-address");
    var username = document.getElementById("user-name");
    var phonenumber = document.getElementById("phone-number");
    var presentaddress = document.getElementById("present-address");
    var permanentaddress = document.getElementById("permanent-address");
    var nidnumber = document.getElementById("nid-number");
      
      document.getElementById('registration-form').addEventListener('submit', function(evt){
        evt.preventDefault();
        var valid = true;
        
        if(checkemptyfields(fullname) | checkemptyfields(email) | checkemptyfields(username)|checkemptyfields(phonenumber)|
        checkemptyfields(presentaddress)|checkemptyfields(permanentaddress) | checkemptyfields(nidnumber)){
          valid = false;
        }

        
        if(!validateNid(nidnumber))
        valid = false;

        if(!validatePhoneNumber(phonenumber))
        valid = false;

        if (valid)
          document.getElementById('registration-form').submit();
      })
    })();

    //returns true if empty
    function checkemptyfields(element) {
      if (element.value.trim() == ""){
          // console.log("OK");
          msg = 'please fill out this field'
          element.classList.add('is-invalid');
          element.nextElementSibling.classList.add('invalid-feedback');
          element.nextElementSibling.innerHTML= msg;
          element.parentElement.classList.remove('was-validated')
          // fullname.nextSibling.innerHTML;(".nextSibling.innerHTML;")
          return true;
        }else{
          element.parentElement.classList.add('was-validated');
          element.nextElementSibling.classList.remove('invalid-feedback');
          element.nextElementSibling.classList.remove('valid-feedback');
          element.nextElementSibling.innerHTML= '';
          
        }
        return false;
    }

    //return true for valid nid
    function validateNid(element) {
      
          var nid = element.value.trim();
          
          msg = 'please enter valid nid eg:- 000000000V';
          nidregx = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;

          if(element.value.trim() == "")
          return false;
          
          if(!nidregx.test(nid)){
          element.classList.add('is-invalid');
          element.nextElementSibling.classList.add('invalid-feedback');
          element.nextElementSibling.innerHTML= msg;
          element.parentElement.classList.remove('was-validated')
          // fullname.nextSibling.innerHTML;(".nextSibling.innerHTML;")
          return false;
        }
        return true;
    }

    function validatePhoneNumber(element){
      var phoneno = element.value.trim();
      var phonenoregx = /^\d{10}$/;

      msg = 'please enter valid phone number eg:-  0112667765';

      if(element.value.trim() == "")
          return false;

      if(!phonenoregx.test(phoneno)){
          element.classList.add('is-invalid');
          element.nextElementSibling.classList.add('invalid-feedback');
          element.nextElementSibling.innerHTML= msg;
          element.parentElement.classList.remove('was-validated')
          // fullname.nextSibling.innerHTML;(".nextSibling.innerHTML;")
          return false;
        }
        return true;
    }