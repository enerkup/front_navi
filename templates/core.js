
var form_datosCrediticios = `

<section> 

<h5 class="expand">Persona Física <span class="material-icons">expand_more</span> </h5>

<form class="step_user" id="datos">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Primer Nombre</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">Segundo Nombre</label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                <small class="form-text text-muted"></small>
            </div>
        </div>
    </div> 


    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Primer Apellido</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">* Segundo Apellido</label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
            </div>
        </div>
    </div> 


    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="exampleInputEmail1">* CURP</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
        </div>
        <div class="col-md-6">
        <div class="form-group">
            <label class="flotante" for="segundoApellido">* Correo Electrónico</label>
            <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">                                        
        </div> 
        </div>
    </div>
 

    <div class="row">
        <div class="col-md-6">
        <div class="form-group">
        <label for="exampleFormControlSelect1">* Género</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>M</option>
            <option>F</option>
        </select>
    </div>    
    </div>
    
    <div class="col-md-6">
        <div class="form-group">
            <label for="exampleFormControlSelect1">* Estado Civil</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>Soltero</option>
                <option>Casado</option>
            </select>
        </div>  
    </div>
    </div>      

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">* País de Nacimiento</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>México</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">* Estado de Nacimiento</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Aguascalientes</option>
                        <option>Tamaulipas</option>
                    </select>
            </div>            
        </div>
    </div>


    <div class="form-group">
    <label for="exampleFormControlSelect1">* Regimen</label>
        <select class="form-control" id="exampleFormControlSelect1">
        <option>A930</option>
        <option>A223</option>
        <option>B35S</option>
        <option>B4X3</option>
        <option>CA15</option>
        </select>
    </div>  


    <div class="form-group">
        <span>¿Has padecido alguna enfermedad?</span>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck2">
            <label class="custom-control-label" for="customCheck2"> Si </label>
        </div>                                                                                    
    </div>


    <div class="form-group">
        <label class="flotante" for="segundoApellido">¿Cual?</label>
        <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">                                        
    </div>      


    <div class="form-group">
        <span>Firma Electronica (FIEL)?</span>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck2">
            <label class="custom-control-label" for="customCheck2"> Si </label>
        </div>                                                                                    
    </div>

    <button type="submit" class="btn btn-primary">Guardar</button>
    
</form>

</section>

`;



var form_datosConyuge = `
<section> 
<h5 class="expand">Datos Conyuge <span class="material-icons">expand_more</span> </h5>
<form class="step_user" id="datos">

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Primer Nombre</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">Segundo Nombre</label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                <small class="form-text text-muted"></small>
            </div>
        </div>
    </div> 

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Primer Apellido</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">* Segundo Apellido</label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
            </div>
        </div>
    </div> 

    <div class="form-group">
    <span>¿Vive en el mismo domicilio?</span>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck2">
            <label class="custom-control-label" for="customCheck2"> Si </label>
        </div>                                                                                    
    </div>

    <div class="form-group">
        <label class="flotante" for="exampleInputEmail1">Calle</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">No. Exterior</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">No. Interior</label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
            </div>
        </div>
    </div> 
    
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">País</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>México</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">Entidad</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Aguascalientes</option>
                        <option>Tamaulipas</option>
                    </select>
            </div>            
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Colonia</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>G.A.M</option>
                    <option>A.O</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group standard">
                <label for="primerNombre">C.P</label>
                <input type="text" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>        
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Localidad</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Antena</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">Colonia</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Estrella</option>
                        <option>Tamaulipas</option>
                    </select>
            </div>            
        </div>
    </div>

    <button type="submit" class="btn btn-primary">Guardar</button>
    
</form>

</section>
`;




var form_datosDependiente = `

<section class="section_user"> 
    <h5 class="expand">Dependientes económicos<span class="material-icons">expand_more</span> </h5>
    <main class="step_user">
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Domicilio</th>
            </tr>
        </thead>
        <tbody id="add_user">
            <tr>
            <td><span class="material-icons" data-toggle="modal" data-target="#exampleModal">manage_accounts</span></td>
            <td>Juan Carlos Martinez Gonzales</td>
            <td>Vive en el mismo domicilio</td>
            </tr>
        </tbody>
        </table>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Agregar Dependiente
        </button>
    </main>
</section>
`;



var modal_basic = `
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Agregar Dependiente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    

      <form action="javascript:void(0)">

      <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label class="flotante" for="primerNombre">* Primer Nombre</label>
                  <input type="email" class="form-control" id="d_primerNombre" aria-describedby="emailHelp">
              </div>     
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <label class="flotante" for="segundoNombre">Segundo Nombre</label>
                  <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                  <small class="form-text text-muted"></small>
              </div>
          </div>
      </div> 
  
      <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label class="flotante" for="primerNombre">* Primer Apellido</label>
                  <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
              </div>     
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <label class="flotante" for="segundoNombre">* Segundo Apellido</label>
                  <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
              </div>
          </div>
      </div> 
  
      <div class="form-group">
      <span>¿Vive en el mismo domicilio?</span>
          <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck2">
              <label class="custom-control-label" for="customCheck2"> Si </label>
          </div>                                                                                    
      </div>
  
      <div class="form-group">
          <label class="flotante" for="exampleInputEmail1">Calle</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
  
      <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label class="flotante" for="primerNombre">No. Exterior</label>
                  <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
              </div>     
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <label class="flotante" for="segundoNombre">No. Interior</label>
                  <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
              </div>
          </div>
      </div> 
      
      <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label for="exampleFormControlSelect1">País</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                      <option>México</option>
                      <option>USA</option>
                  </select>
              </div>    
          </div>
          <div class="col-md-6">
              <div class="form-group">
                      <label for="exampleFormControlSelect1">Entidad</label>
                      <select class="form-control" id="exampleFormControlSelect1">
                          <option>Aguascalientes</option>
                          <option>Tamaulipas</option>
                      </select>
              </div>            
          </div>
      </div>
  
      <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label for="exampleFormControlSelect1">Colonia</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                      <option>G.A.M</option>
                      <option>A.O</option>
                  </select>
              </div>    
          </div>
          <div class="col-md-6">
              <div class="form-group standard">
                  <label for="primerNombre">C.P</label>
                  <input type="text" class="form-control" id="primerNombre" aria-describedby="emailHelp">
              </div>        
          </div>
      </div>
  
      <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label for="exampleFormControlSelect1">Localidad</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                      <option>Antena</option>
                      <option>USA</option>
                  </select>
              </div>    
          </div>
          <div class="col-md-6">
              <div class="form-group">
                      <label for="exampleFormControlSelect1">Colonia</label>
                      <select class="form-control" id="exampleFormControlSelect1">
                          <option>Estrella</option>
                          <option>Tamaulipas</option>
                      </select>
              </div>            
          </div>
      </div>
  
      <button onClick="agregaUsuario()" type="submit" class="btn btn-primary">+ Agregar </button>
      
  </form>      

      </div>
    </div>
  </div>
</div>`; 




var form_rfc = `
<section> 
<h5 class="expand">RFC <span class="material-icons">expand_more</span> </h5>
<form class="step_user" id="datos">

    <div class="row">

        <div class="col-md-6">
            <div class="form-group">
            <span wfd-id="142">¿Cuenta con RFC?</span>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck2">
                    <label class="custom-control-label" for="customCheck2"> Si </label>
                </div>                                                                                    
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">

                <label class="flotante" for="primerNombre">* R.F.C</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
         
           </div>     
        </div>
    </div> 

    <div class="row">

        <div class="col-md-6"> </div>
        <div class="col-md-6">
            <div class="form-group">

        <label for="exampleFormControlSelect1">Colonia</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>Estrella</option>
            <option>Tamaulipas</option>
        </select>
        
        </div>
        </div>
    </div>

    <button type="submit" class="btn btn-primary">Guardar</button>
    
</form>

</section>
`;



var form_domicilio = `
<section> 
<h5 class="expand">Domicilio <span class="material-icons">expand_more</span> </h5>
<form class="step_user" id="datos">


    <div class="form-group">
        <label class="flotante" for="exampleInputEmail1">Calle</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">No. Exterior</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">No. Interior</label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
            </div>
        </div>
    </div> 
    
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">País</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>México</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">Entidad</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Aguascalientes</option>
                        <option>Tamaulipas</option>
                    </select>
            </div>            
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Colonia</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>G.A.M</option>
                    <option>A.O</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group standard">
                <label for="primerNombre">C.P</label>
                <input type="text" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>        
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Localidad</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Antena</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">Colonia</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Estrella</option>
                        <option>Tamaulipas</option>
                    </select>
            </div>            
        </div>
    </div>


    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Teléfono fijo</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">Extensión</label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                <small class="form-text text-muted"></small>
            </div>
        </div>
    </div> 



    <button type="submit" class="btn btn-primary">Guardar</button>
    
</form>

</section>
`;


var inicio_form = `

<section> 
<h5 class="expand">Inicio <span class="material-icons">expand_more</span> </h5>

<form class="step_user d-block" id="inicio" action="javascript:void(0)">
                                    
    <div class="row">
        <div class="col-md-12 form-group">
            <label for="">* Tipo de solicitante</label>
            <ul class="list-group list-group-horizontal-md filter_list">                                             
                <li class="list-group-item">
                    <label>
                        <p>Persona Fisica</p>
                        <input type="radio" name="optradio">                                                         
                    </label>
                </li>
                <li class="list-divider">-</li>
                <li class="list-group-item">
                    <label>
                        <p>Persona Moral</p>
                        <input type="radio" name="optradio">                                                         
                    </label>
                </li>
                </ul>
        </div>
    </div>
    <div class="to_show">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="flotante" for="primerNombre">* Primer Nombre</label>
                    <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
                </div>     
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="flotante" for="segundoNombre">Segundo Nombre</label>
                    <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                    <small class="form-text text-muted">(En caso de tenerlo)</small>
                </div>
            </div>
        </div>                            
        
        <div class="form-group">
            <label class="flotante" for="primerApellido">* Primer Apellido</label>
            <input type="email" class="form-control" id="primerApellido" aria-describedby="emailHelp">
        </div> 

        <div class="form-group">
            <label class="flotante" for="segundoApellido">* Segundo Apellido</label>
            <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
        </div>                                     


        <div class="form-group">
            <label class="flotante" for="exampleInputEmail1">Correo Electronico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small class="form-text text-muted">(El correo donde te mandaremos notificaciones)</small>
        </div>

        <div class="form-group">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2">
                <label class="custom-control-label" for="customCheck2"> Acepto <a href="#">Aviso de Privacidad</a></label>
            </div>                                                                                    
        </div>

        <button type="submit" onclick="valida_forma()" class="btn btn-primary">Iniciar Solicitud</button>
        
    </div>
</form>

</section>
`;






var consulta_solicitud = `

<section class="section_user"> 
    <h5 class="expand">Tus solicitudes<span class="material-icons">expand_more</span> </h5>
    <main class="step_user d-block">
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha Inicio</th>
            </tr>
        </thead>
        <tbody id="add_user">
            <tr>
            <td>
                <a href="./detalle_consulta.html"><span class="material-icons">preview</a></span>
            </td>
            <td>Juan Carlos Martinez Gonzales</td>
            <td>12/02/2021</td>
            </tr>
        </tbody>
        </table>
    </main>
</section>
`;



