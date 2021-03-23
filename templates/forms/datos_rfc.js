module.exports = `
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
`;