
if (window.location.href.indexOf("consulta") < 0)  { 
    $(".op1").addClass("selected");
} 

if (window.location.href.indexOf("consulta") > 0)  { 
    $(".op2").addClass("selected");
} 


$(".lala span").click(function() {

  $(this).closest("div").toggleClass("selected");

});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  })()

  
  