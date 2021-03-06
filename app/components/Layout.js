import Navbar from './Navbar'
import Head from 'next/head'


const Layout = (props) => (
    <div>
        <Head>
            <title>BlitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css" />
        </Head>
        <Navbar menu={props.menu}/>
        <div className="container">
            {props.children}
        </div>

    </div>
)

export default Layout