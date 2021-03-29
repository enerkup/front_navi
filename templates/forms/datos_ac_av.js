module.exports = `

<form id="datos">

    <div class="row">
        <div class="col-md-6">
        <div class="form-group">
        <label for="exampleFormControlSelect1">* Estado</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>A223</option>
                <option>B35S</option>
                <option>B4X3</option>
                <option>CA15</option>
            </select>
        </div>    
    </div>
    
    <div class="col-md-6">
        <div class="form-group">
            <label for="exampleFormControlSelect1">* Localidad</label>
            <select class="form-control" id="exampleFormControlSelect1">
            <option>B35S</option>
            <option>B4X3</option>
            <option>CA15</option>
            </select>
        </div>  
    </div>
    </div>  
    

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="flotante" for="segundoApellido">*Nùmero de escritura</label>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">                                        
            </div>
        </div>
        <div class="col-md-6">
        <div class="form-group">
        <label class="flotante" for="segundoApellido">*Fecha de escritura</label>
        <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">                                        
        </div>
        </div>
    </div>


    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="exampleFormControlSelect1">* Tipo de persona</label>
                <select class="form-control" id="tipo_personas">
                    <option value="0">Seleccionar</option>
                    <option value="1">Física</option>
                    <option value="2">Moral</option>
                </select>
            </div>    
        </div>
    </div>    

    <hr>



<div class="p_show_1 d-none logic_person"> 

    <div class="form-group">
        <label for="exampleFormControlSelect1"> <i> <b> Persona Física </b> </i></label>    
    </div>    


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
        <label for="exampleFormControlSelect1">* Género</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>M</option>
            <option>F</option>
        </select>
    </div>    
</div>
<div class="col-md-6">
<div class="form-group">
    <label class="flotante" for="segundoNombre">* Fecha Nacimiento</label>
    <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
</div>
</div>
</div>   

</div>




<div class="p_show_2 d-none logic_person"> 

<div class="form-group">
<label for="exampleFormControlSelect1"> <i> <b> Persona Moral </b> </i></label>    
</div>    


<div class="row">
<div class="col-md-6">
    <div class="form-group">
        <label class="flotante" for="primerNombre">* Razón Social</label>
        <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
    </div>     
</div>
<div class="col-md-6">
    <div class="form-group">
        <label class="flotante" for="segundoNombre">Fecha de Constitución</label>
        <input type="email" class="form-control" id="segundoNombre" aria-describedby="emailHelp">
        <small class="form-text text-muted"></small>
    </div>
</div>
</div> 

<div class="form-group">
<label for="exampleFormControlSelect1"> <i> - Representante Legal:  </i></label>    
</div>    






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
        <label class="flotante" for="segundoApellido">*Nùmero de escritura</label>
        <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">                                        
    </div>
</div>
<div class="col-md-6">
<div class="form-group">
<label class="flotante" for="segundoApellido">*Fecha de escritura</label>
<input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">                                        
</div>
</div>
</div>


<div class="row">
<div class="col-md-6">
    <div class="form-group">
        <label class="flotante" for="segundoApellido">Participación accionaria: </label>
        <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">                                        
    </div>
</div>
<div class="col-md-6">
<div class="form-group">
<label class="flotante" for="segundoApellido">R.F.C</label>
<input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">                                        
</div>
</div>
</div>

</div>


    <button type="submit" class="btn btn-primary">Guardar</button>
    
</form>`;