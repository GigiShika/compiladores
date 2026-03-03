// pages/GenericPage.jsx
import React from 'react';

const GenericPage = ({ pageName }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow fade-in">
      <h2 className="text-2xl font-bold mb-4 text-[#6b2132]">{pageName}</h2>
      <p className="text-gray-600">
        El contenido de esta sección ({pageName}) es editable y se actualizará según 
        la información proporcionada por la profesora.
      </p>
      <div className="h-64 bg-gray-100 rounded mt-6 flex items-center justify-center border-2 border-dashed border-gray-300">
        <span className="text-gray-400">
          Espacio para contenido dinámico / PDF Viewer / Imágenes
        </span>
      </div>
    </div>
  );
};

export default GenericPage;