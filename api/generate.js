export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

    const { prompt } = req.body;
    
    // Aquí es donde Vercel usa la llave que guardaste en Settings
    const apiKey = process.env.GOOGLE_API_KEY;

    try {
        // Por ahora, devolvemos un OK para confirmar que el puente funciona
        // En el siguiente paso configuraremos la respuesta visual de la IA
        res.status(200).json({ success: true, prompt: prompt });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor de Sinapsis Lab' });
    }
}
