module.exports = `
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




