module.exports = `
<main class="step_user">
    <table class="table table-bordered">
    <thead>
        <tr>
        <th scope="col"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Domicilio</th>
        </tr>
    </thead>
    <tbody id="add_user">
        <tr>
        <td><span class="material-icons" data-toggle="modal" data-target="#exampleModal">manage_accounts</span></td>
        <td>Juan Carlos Martinez Gonzales</td>
        <td>Vive en el mismo domicilio</td>
        </tr>
    </tbody>
    </table>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Agregar Dependiente
    </button>
</main>
`;