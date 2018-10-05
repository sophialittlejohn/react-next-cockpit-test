import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Entries from "../components/Entries"
import {token} from '../helpers/constants'


const Cockpit = (props) => (
    <Layout>
        <div>
            <h1>Cockpit Testing Page</h1>
            <div>
                <h4>Data from Cockpit CMS</h4>
                <Entries collection={props.collection} entries={props.entries}/>
            </div>
        </div>
    </Layout>
)

Cockpit.getInitialProps = async () => {
    console.log('token', token)
    const collection = await fetch(`http://172.16.1.74:8080/api/collections/collection/homepage?token=${token}`)
    const data = await collection.json()
    console.log('data', data)

    const entries = await fetch(`http://172.16.1.74:8080/api/collections/get/homepage?token=${token}`)
    const entry = await entries.json()
    console.log('entries', entry.entries)
    return {
        collection: data.name,
        entries: entry.entries
    }
}

export default Cockpit