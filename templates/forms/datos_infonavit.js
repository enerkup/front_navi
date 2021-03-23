
module.exports = `

<div class="form-group">
<span wfd-id="142">¿Cuenta con la siguiente información de INFONAVIT?</span>
<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2"> Si </label>
</div>                                                                                    
</div>

<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label class="flotante" for="primerNombre">* 
                Monto total de aportaciones patronales: 
            </label>
            <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
        </div>     
    </div>
</div>

<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label class="flotante" for="primerNombre">* En caso de presentar atraso en día de pago, indique el número: </label>
            <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
        </div>     
    </div>
</div>

<div class="form-group">
<span wfd-id="142">¿Cuenta con información de retención laboral?</span>
<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2"> Si </label>
</div>                                                                                    
</div>


<table class="table table-bordered">
    <thead>
        <tr>
        <th scope="col">Antiguedad</th>
        <th scope="col">Año</th>
        <th scope="col">Número de empleados al inicio del año</th>
        <th scope="col">Número de empleados al fin de año</th>        
        </tr>
    </thead>
    <tbody id="add_user">
        <tr>
            <td>Año más reciente</td>
            <td>
            <div class="form-group">
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </div>             
            </td>
            <td>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </td>
            <td>
                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </td>
        </tr>
        <tr>
            <td>Año más reciente</td>
            <td>                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </td>
            <td>                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </td>
            <td>                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </td>
        </tr>
        <tr>
            <td>Año más reciente</td>
            <td>                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </td>
            <td>                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </td>
            <td>                <input type="email" class="form-control" id="primerNombre" aria-describedby="emailHelp">
            </td>
        </tr>        
    </tbody>
</table>
`;