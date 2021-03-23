module.exports = `
<form class="step_user" id="datos">

    <div class="form-group">
        <label for="exampleFormControlSelect1"> <i> Actividad principal o giro: </i></label>    
    </div>    

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Sector</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>México</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">Subsector</label>
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
                <label for="exampleFormControlSelect1">Rama</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>GM</option>
                    <option>AO</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
            <label for="exampleFormControlSelect1">Subrama</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>SA</option>
                <option>SO</option>
            </select>
            </div>        
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Años de experiencia comprobables en la actividad: </label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoNombre">* Número de empleados administrativos: </label>
                <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
                <small class="form-text text-muted"></small>
            </div>
        </div>
    </div> 
    
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="primerNombre">* Número de empleados operativos: </label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>     
        </div>
        <div class="col-md-6">
        </div>
    </div>     

    <div class="form-group">
        <label for="exampleFormControlSelect1"> <i> Zona de Influencia: </i></label>    
    </div>    

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Entidad</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Antena</option>
                    <option>USA</option>
                </select>
            </div>    
        </div>
        <div class="col-md-6">
            <div class="form-group">
                    <label for="exampleFormControlSelect1">Ciudad</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Estrella</option>
                        <option>Tamaulipas</option>
                    </select>
            </div>            
        </div>
    </div>

    <button type="submit" class="btn btn-primary">Guardar</button>
    
</form>`;