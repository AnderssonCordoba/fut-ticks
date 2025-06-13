export const buscarEncuentroPorURL = async (url) => {
  const baseUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${baseUrl}estadisticas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    });

    if (!response.ok) {
      throw new Error('Error al obtener datos del servidor.');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error('No se pudieron obtener datos: ' + error.message);
  }  
};
