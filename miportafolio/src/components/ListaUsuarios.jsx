// Importamos React y dos hooks: useState para manejar estado y useEffect para manejar efectos secundarios
import React, { useState, useEffect } from 'react';

function ListaUsuarios() {
  // Creamos un estado llamado usuarios, inicialmente es un array vacío
  const [usuarios, setUsuarios] = useState([]);

  // useEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // Usamos fetch para hacer una petición GET a la API pública
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json()) // Convertimos la respuesta a JSON
      .then((data) => setUsuarios(data)) // Guardamos los datos en el estado
      .catch((error) => console.error('Error al cargar usuarios:', error)); // Mostramos error si falla la petición
  }, []); // El array vacío [] hace que esto se ejecute solo una vez (al montar el componente)

  return (
    <div>
      {/* Título de la sección */}
      <h2>Lista de Usuarios</h2>

      {/* Lista con clase Bootstrap para estilos */}
      <ul className="list-group">
        {/* Recorremos cada usuario del estado y renderizamos un <li> con nombre y correo */}
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="list-group-item">
            <strong>{usuario.name}</strong> - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exportamos el componente para usarlo en otras partes de la app
export default ListaUsuarios;
