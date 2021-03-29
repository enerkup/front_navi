/*
if (window.location.href.indexOf("consulta") < 0)  { 
    $(".op1").addClass("selected");
} 
*/

$(".op1").click(function() {
  $("ul li.selected").removeClass("selected");
  $(this).addClass("selected");
  $("form.date_range").show();
  $("form.search_box").hide();
});

$(".op2").click(function() {
  $("ul li.selected").removeClass("selected");
  $(this).addClass("selected");
  $("form.date_range").hide();
  $("form.search_box").show();
});


$("#tipo_personas").change(function() {

  $(".logic_person").addClass("d-none");

  $(".p_show_"+this.value+"").removeClass("d-none");
  
});


function valida_forma() {
  var sol = `
  <tr>
    <td><a href="./detalle_solicitud.html">Juan Carlos Martinez Gonzales</a></td>
    <td>12/02/2021</td>
    <td>En proceso / Enviada</td>
  </tr>`;

  $("tbody#add_user").append(sol);

  $('#exampleModal').modal('hide');

}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

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
  