// UserTable.js
import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3001/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = () => {
    const newFilteredUsers = users.filter(
      (user) =>
        user.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedRole === '' || user.IdRol.toString() === selectedRole) &&
        (selectedType === '' || user.IdTipo.toString() === selectedType)
      // Add more fields for advanced search if needed
    );

    setFilteredUsers(newFilteredUsers);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedRole('');
    setSelectedType('');
    setFilteredUsers(users);
  };

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="roleFilter" className="form-label">
            Role Filter:
          </label>
          <select
            className="form-select"
            id="roleFilter"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="1">Role 1</option>
            <option value="2">Role 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="col">
          <label htmlFor="typeFilter" className="form-label">
            Type Filter:
          </label>
          <select
            className="form-select"
            id="typeFilter"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="3">Type 3</option>
            <option value="4">Type 4</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role ID</th>
                <th>Type ID</th>
                <th>Dependency ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.IdUser}>
                  <td>{user.IdUser}</td>
                  <td>{user.Nombre}</td>
                  <td>{user.Correo}</td>
                  <td>{user.Password}</td>
                  <td>{user.IdRol}</td>
                  <td>{user.IdTipo}</td>
                  <td>{user.IdDependencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
