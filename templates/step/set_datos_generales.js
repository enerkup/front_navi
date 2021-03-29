var unidad = "set_datos_generales";

module.exports =  `

<div class="accordion" id="${unidad}">

  ${template("datos_fisica","Persona Física")}
  ${template("datos_moral","Persona Moral")}
  ${template("datos_conyuge","Datos Conyuge")}
  ${template("datos_dependientes_economicos","Dependientes Económicos")}

</div>`;



function template (seccion,titulo) {
  return  `
  <div class="card">
  <div class="card-header" id="card_${seccion}">
    <h2 class="mb-0">
      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse_${seccion}" aria-expanded="true" aria-controls="collapse_${seccion}">
          ${titulo}
      </button>
    </h2>
  </div>
  <div id="collapse_${seccion}" class="collapse" aria-labelledby="card_${seccion}" data-parent="#${unidad}">
    <div class="card-body">
     
      {{>${seccion}}}

    </div>
  </div>
</div>`;
}

