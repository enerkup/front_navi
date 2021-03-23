module.exports = `

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
