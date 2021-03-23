module.exports = `
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
    
</form>`;