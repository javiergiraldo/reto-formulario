import React, { useState } from 'react';

function FormularioComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = 'El nombre es requerido.';
    if (!email) {
      tempErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'El formato del email no es válido.';
    }
    if (!message) tempErrors.message = 'El mensaje es requerido.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Aquí podrías enviar los datos del formulario
      console.log('Formulario enviado:', { name, email, message });
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setTimeout(() => setSubmitted(false), 3000); // Mostrar mensaje por 3 segundos
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Formulario de Feedback</h2>
      
      {submitted && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
          <div className="flex">
            <div className="py-1">
              <svg className="h-6 w-6 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold">¡Gracias por tu feedback!</p>
              <p className="text-sm">Tu mensaje ha sido enviado correctamente.</p>
            </div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Nombre:</label>
          <input
            type="text"
            id="name"
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Mensaje:</label>
          <textarea
            id="message"
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          <p className="text-gray-500 text-xs text-right mt-1">{message.length}/500 caracteres</p>
        </div>
        
        <div className="flex justify-center">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition hover:scale-105 duration-200 ease-in-out w-full md:w-auto flex items-center justify-center"
            type="submit"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Enviar Feedback
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioComponent;