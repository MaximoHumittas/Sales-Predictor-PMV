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
    // Simulando datos del usuario
    const fetchedUser = {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      company: 'Ventas S.A.',
      phone: '+56 9 1234 5678',
      photoUrl: 'https://i.pravatar.cc/150?img=3' // Foto de perfil simulada
    };
    setUser(fetchedUser);
  }, []);

  const handleEditProfile = () => {
    alert('Editando perfil...');
  };

  return (
    <>

      <main className="profile">
        <h1 className="profile__title">Mi Perfil</h1>
        {user ? (
          <div className="profile__card">
            <img src={user.photoUrl} alt="Foto de perfil" className="profile__photo" />
            <div className="profile__info">
              <p><strong>Nombre:</strong> {user.name}</p>
              <p><strong>Correo:</strong> {user.email}</p>
              <p><strong>Empresa:</strong> {user.company}</p>
              <p><strong>Teléfono:</strong> {user.phone}</p>
            </div>
            <button className="profile__button" onClick={handleEditProfile}>
              Editar Perfil
            </button>
          </div>
        ) : (
          <p className="profile__loading">Cargando perfil...</p>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Profile;