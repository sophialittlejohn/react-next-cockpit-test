import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">BitzPrice</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" replace><a className="nav-link">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/names"><a className="nav-link">Names</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/cockpit"><a className="nav-link">Cockpit Test</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar