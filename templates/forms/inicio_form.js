module.exports = `

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
`;