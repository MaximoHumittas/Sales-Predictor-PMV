// src/pages/Profile.tsx
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import './Profile.css';

interface User {
  name: string;
  email: string;
  company: string;
  phone: string;
  photoUrl: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simular fetch de usuario
    const fetchedUser: User = {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      company: 'Ventas S.A.',
      phone: '+56 9 1234 5678',
      photoUrl: 'https://i.pravatar.cc/150?img=3'
    };
    setUser(fetchedUser);
  }, []);

  const handleEditProfile = () => {
    alert('Aquí iría la lógica de edición');
  };

  if (!user) {
    return (
      <main className="profile-page">
        <p className="profile-loading">Cargando perfil…</p>
        <Footer />
      </main>
    );
  }

  return (
    <>
      <main className="profile-page">
        {/* Header con degradado y avatar */}
        <header className="profile-header">
          <img
            src={user.photoUrl}
            alt="Avatar"
            className="profile-avatar"
          />
        </header>

        {/* Nombre y empresa */}
        <div className="profile-hero">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-company">{user.company}</p>
        </div>

        {/* Datos personales */}
        <section className="profile-info">
          <div className="info-item">
            <label>Correo</label>
            <span>{user.email}</span>
          </div>
          <div className="info-item">
            <label>Teléfono</label>
            <span>{user.phone}</span>
          </div>
        </section>

        {/* Acción */}
        <div className="profile-actions">
          <button
            className="btn btn--primario"
            onClick={handleEditProfile}
          >
            Editar Perfil
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Profile;
