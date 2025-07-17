import React, { useState, useEffect } from 'react';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error('Error al cargar usuarios:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul className="list-group">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="list-group-item">
            <strong>{usuario.name}</strong> - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
