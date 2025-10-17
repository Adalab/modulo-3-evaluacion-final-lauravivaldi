import "react"
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
    return (
        <div>
            <h1>Página no encontrada</h1>
            <Link to="/" className="back-button">Volver al inicio</Link>
        </div>
    )
}

export default NotFoundPage;