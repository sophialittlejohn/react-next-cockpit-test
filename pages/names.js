import Layout from "../components/Layout";
import React from 'react'
import Link from 'next/link'

class Names extends React.Component {
    // what ever getInitialProps returns populates props
    static getInitialProps ({req, res}) {
        // req is only defined if the page gets reloaded i.e if there's a request coming in. Just switching between pages doesn't trigger a request
        if (req) {
            // Runs only in the server
            const faker = require('faker')
            const name = faker.name.findName()
            return {name}
        }

        // Runs only in the client
        return {name: 'Arunoda'}
    }

    render () {
        const {name} = this.props
        return (
            <Layout>
                <h1>Home Page</h1>
                <p>Welcome, {name}</p>
                <div>
                    <Link href='/about'><a>About Page</a></Link>
                </div>
            </Layout>
        )
    }
}

export default Names