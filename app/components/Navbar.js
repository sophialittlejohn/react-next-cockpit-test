import Link from 'next/link'

const Navbar = (props) => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">BitzPrice</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {props.menu
                        ? props.menu.map(item => {
                            return (
                                <li className="nav-item">
                                    <Link href={`/${item.Heading1}`} as={`${item.Heading1}`}><a className="nav-link">{item.Heading1}</a></Link>
                                </li>
                            )
                        })
                        : null}
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
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