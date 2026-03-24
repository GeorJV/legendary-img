export default async function handler(req, res) {
    // Solo aceptamos peticiones POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        // Esta respuesta le dirá al index.html que puede mostrar la imagen
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Error en la conexión de Sinapsis Lab' });
    }
}
