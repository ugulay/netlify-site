import Link from 'next/link'

const Header = ()  => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">

                    <Link href="/">
                        <a className="navbar-brand">Uğur Gülay</a>
                    </Link>

                    <ul className="navbar-nav ml-auto col-xs-12">
                        <Link href="/posts" className="nav-item">
                            <a className="nav-link">Posts</a>
                        </Link>
                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default Header