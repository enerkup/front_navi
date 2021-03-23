module.exports = `
<form class="step_user" id="datos">  

    <div class="row">
        <div class="col-md-4">
            <div class="form-group">
            <span>Tipo de unidades: </span>
            <div class="">
                <label class="checkbox-inline">
                  <input type="checkbox" value=""> Nuevas
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value=""> Seminuevas
                </label>
                </div>                                                                                    
        </div>
    </div>

        <div class="col-md-4">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Catidad</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>


        <div class="col-md-4">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Tipo</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Heavy</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>

    </div> 
    
    <div class="row">

        <div class="col-md-4">
            <div class="form-group">
                <span wfd-id="142">¿Requiere equipo Aliado?</span>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck2">
                    <label class="custom-control-label" for="customCheck2"> Si </label>
                </div>                                                                                    
            </div>
        </div>

        <div class="col-md-4">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Catidad</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>


        <div class="col-md-4">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Tipo</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Heavy</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
    </div>


        
    <div class="row">

        <div class="col-md-4">
        <div class="form-group">
        <span wfd-id="142">¿Requiere equipo Especializado?</span>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2">
                <label class="custom-control-label" for="customCheck2"> Si </label>
            </div>                                                                                    
        </div>
        </div>


        <div class="col-md-4">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Catidad</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>


        <div class="col-md-4">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Tipo</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Heavy</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
    </div>


    <div class="form-group">
        <label for="exampleFormControlSelect1"> <i> Nùmero de unidades destinadas a renovación / ampliación: </i></label>    
    </div>    


    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Renovación: </label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">* Ampliación: </label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                <small class="form-text text-muted"></small>
            </div>
        </div>
    </div> 
    

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* % Pago Inicial: </label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">* Plazo solicitado en meses: </label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                <small class="form-text text-muted"></small>
            </div>
        </div>
    </div> 




    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Seguro</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>AXA</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">El seguro será pagado</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Efectivo</option>
                        <option>Tamaulipas</option>
                    </select>
            </div>            
        </div>
    </div>



    <button type="submit" class="btn btn-primary">Guardar</button>
    
</form>`;