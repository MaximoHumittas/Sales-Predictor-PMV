// src/pages/Home.tsx
import React from 'react';
import './Home.css';
import Footer from '../components/Footer';
import Card from '../components/Card';
import fotoIA1 from "../assets/fotoIA1.jpg";
import fotoIA7 from "../assets/fotoIA7.jpg";
import fotoIA9 from "../assets/fotoIA9.jpg";
import fotoIA10 from "../assets/fotoIA10.jpg";

const Home: React.FC = () => {
  const menuItems = [
    {
      imageUrl: fotoIA1,
      title: 'Dashboard',
      text: 'Accede a tu panel de control',
      buttonText: 'Ir',
      buttonLink: '/dashboard'
    },
    {
      imageUrl: fotoIA7,
      title: 'Sobre Nosotros',
      text: 'Conoce nuestra empresa',
      buttonText: 'Ir',
      buttonLink: '/about'
    },
    {
      imageUrl: fotoIA9,
      title: 'Perfil',
      text: 'Ve tu información de usuario',
      buttonText: 'Ir',
      buttonLink: '/profile'
    },
    {
      imageUrl: fotoIA10,
      title: 'Ingresar',
      text: 'Inicia sesión en tu cuenta',
      buttonText: 'Login',
      buttonLink: '/login'
    }
  ];

  return (
    <>
      <main className="home">
        <section className="home__menu cards-grid">
          {menuItems.map((item, idx) => (
            <Card
              key={idx}
              imageUrl={item.imageUrl}
              title={item.title}
              text={item.text}
              buttonText={item.buttonText}
              buttonLink={item.buttonLink}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
