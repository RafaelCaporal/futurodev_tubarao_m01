import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');

  const addUser = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && age.trim() !== '' && department.trim() !== '') {
      const newUser = {
        id: Date.now(),
        name: name,
        age: age,
        department: department,
      };
      setUsers([...users, newUser]);

      setName('');
      setAge('');
      setDepartment('');
    }
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <hr />
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>
              <strong>Idade:</strong> {user.age}
            </p>
            <p>
              <strong>Setor:</strong> {user.department}
            </p>
            <hr />
          </div>
        ))}
      </div>

      <form onSubmit={addUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Idade"
          required
        />
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Setor"
          required
        />
        <div className="btn-user">
          <button type="submit">Adicionar Usuário</button>
        </div>
      </form>
    </div>
  );
}

export default UserList;
