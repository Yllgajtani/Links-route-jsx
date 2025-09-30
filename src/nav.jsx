import { Link } from 'react-router-dom'
import './nav.css'
export default function Nav() {
    return (
        <>
    <div>
            <nav className="nav">
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/about">About</Link>
            </nav>
            </div>
        </>
    )
}