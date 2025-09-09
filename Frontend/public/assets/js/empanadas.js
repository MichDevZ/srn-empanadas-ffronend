const API_URL = 'http://localhost:3000/api'; 

async function loadEmpanadas() {
    try {
        const response = await fetch(`${API_URL}/empanadas`);
        if (!response.ok) throw new Error('Error al cargar');
        const data = await response.json();
        const tbody = document.querySelector('#empanadasTable tbody');
        tbody.innerHTML = '';
        data.forEach(emp => {
            const row = `
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.type}</td>
                    <td>${emp.filling || ''}</td>
                    <td>${emp.price || ''}</td>
                    <td>${emp.isSoldOut ? 'Sí' : 'No'}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editEmpanada(${emp.id})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteEmpanada(${emp.id})">Eliminar</button>
                    </td>
                </tr>`;
            tbody.innerHTML += row;
        });
    } catch (error) {
        alert(error.message);
    }
}

async function saveEmpanada() {
    const id = document.getElementById('id').value;
    const data = {
        name: document.getElementById('name').value,
        type: document.getElementById('type').value,
        filling: document.getElementById('filling').value,
        price: parseFloat(document.getElementById('price').value),
        isSoldOut: !!parseInt(document.getElementById('is_sold_out').value),
    };



    if (!data.name || !data.type || !data.price) {
        alert('Campos requeridos');
        return;
    }

    try {
        const method = id ? 'PUT' : 'POST';
        const url = id ? `${API_URL}/empanada/${id}` : `${API_URL}/empanada`;
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Error al guardar');
        loadEmpanadas();
        bootstrap.Modal.getInstance(document.getElementById('addModal')).hide();
        
    } catch (error) {
        alert(error.message);
    }
}

async function editEmpanada(id) {
    try {
        const response = await fetch(`${API_URL}/empanadas`);
        const data = await response.json();
        const emp = data.find(e => e.id === id);
        if (emp) {
            document.getElementById('id').value = emp.id;
            document.getElementById('name').value = emp.name;
            document.getElementById('type').value = emp.type;
            document.getElementById('filling').value = emp.filling || '';
            document.getElementById('price').value = emp.price || '';
            document.getElementById('is_sold_out').value = emp.isSoldOut ? '1' : '0';
            document.querySelector('#addModal .modal-title').textContent = 'Editar Empanada';
            new bootstrap.Modal(document.getElementById('addModal')).show();
        }
    } catch (error) {
        alert(error.message);
    }
}

async function deleteEmpanada(id) {
    if (confirm('¿Eliminar?')) {
        try {
            const response = await fetch(`${API_URL}/empanada/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Error al eliminar');
            loadEmpanadas();
        } catch (error) {
            alert(error.message);
        }
    }
}

function openAddModal() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('type').value = '';
    document.getElementById('filling').value = '';
    document.getElementById('price').value = '';
    document.getElementById('is_sold_out').value = '0';
    document.querySelector('#addModal .modal-title').textContent = 'Agregar Empanada';

    new bootstrap.Modal(document.getElementById('addModal')).show();
}

document.getElementById('empanadaForm').addEventListener('submit', (e) => {
    e.preventDefault();
    saveEmpanada();
});

document.addEventListener('DOMContentLoaded', loadEmpanadas);