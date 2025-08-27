'use client';

import Usuario from '../components/Usuario';

export default function Home() {
  const usuarios = [
    { nombre: 'Aly Santiago', edad: 31, ciudad: 'Medellín' },
    { nombre: 'Steve Tredford', edad: 30, ciudad: 'Phoenix' },
    { nombre: 'María López', edad: 28, ciudad: 'Medellín' },
  ];

  const saludar = (nombre) => {
    alert(`¡Hola, ${nombre}!`);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
      {usuarios.map((usuario, index) => (
        <Usuario key={index} usuario={usuario} saludar={saludar} />
      ))}
    </main>
  );
}