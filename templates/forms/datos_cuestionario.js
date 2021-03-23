module.exports = `
<form class="step_user" id="datos">  

    <div class="row">

        <div class="col-md-4">
        <div class="form-group">
        <span wfd-id="142">¿Desempeña o ha desempeñado funciones publicas?</span>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2">
                <label class="custom-control-label" for="customCheck2"> Si </label>
            </div>                                                                                    
        </div>
        </div>


        <div class="col-md-4">
            <div class="form-group">
                <label class="flotante" for="primerNombre">¿Cuáles y en dónde?</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>

    </div>




    <div class="row">

        <div class="col-md-4">
        <div class="form-group">
        <span wfd-id="142">Parientes desempeñan o han desempeñado funciones políticas</span>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2">
                <label class="custom-control-label" for="customCheck2"> Si </label>
            </div>                                                                                    
        </div>
        </div>

        <div class="col-md-4">
            <div class="form-group">
                <label class="flotante" for="primerNombre">¿Cuáles y en dónde?</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>

    </div>



   <div class="row">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Los recursos para el pago son:</label>
    <select class="form-control" id="exampleFormControlSelect1">
        <option>INT</option>
        <option>STR</option>
    </select>
    </div>    
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Primer Nombre: </label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">* Segundo Nombre: </label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                <small class="form-text text-muted"></small>
            </div>
        </div>
    </div> 


    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Primer Apellido: </label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">* Segundo Apellido: </label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                <small class="form-text text-muted"></small>
            </div>
        </div>
    </div> 

    <div class="form-group">
    <hr>
    </div>    


    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Tipo de relación</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>AXA</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">Procedencia de los ingresos</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Efectivo</option>
                        <option>Tamaulipas</option>
                    </select>
            </div>            
        </div>
    </div>


    <div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label class="flotante" for="primerNombre"> Cual?: </label>
            <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
        </div>     
    </div>
</div> 



    <button type="submit" class="btn btn-primary">Guardar</button>
    
</form>`;