<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Gestión de Empanadas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/styles.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Empanadas para Fiestas Patrias</h1>
        <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addModal">Agregar Empanada</button>
        <table class="table table-striped" id="empanadasTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Relleno</th>
                    <th>Precio</th>
                    <th>Agotada</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <div class="modal fade" id="addModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Agregar Empanada</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="empanadaForm">
                        <input type="hidden" id="id">
                        <div class="mb-3">
                            <label>Nombre</label>
                            <input type="text" id="name" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label>Tipo</label>
                            <input type="text" id="type" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label>Relleno</label>
                            <textarea id="filling" class="form-control"></textarea>
                        </div>
                        <div class="mb-3">
                            <label>Precio</label>
                            <input type="number" id="price" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label>Agotada</label>
                            <select id="is_sold_out" class="form-control">
                                <option value="0">No</option>
                                <option value="1">Sí</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-success">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/empanadas.js"></script>
</body>
</html>