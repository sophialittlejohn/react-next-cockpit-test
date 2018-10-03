import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Entries from "../components/Entries";
import {token} from '../helpers/constants'


const Cockpit = (props) => (
    <Layout>
        <div>
            <h1>Cockpit Testing Page</h1>
            <div>
                <h4>Data from Cockpit CMS</h4>
                <Entries data={props.entries}/>
            </div>
        </div>
    </Layout>
)

Cockpit.getInitialProps = async () => {
    const result = await fetch(`http://172.16.1.74:8080/api/collections/get/col1?token=${token}`)
    const data = await result.json()
    return {
        entries: data.entries
    }
}

export default Cockpit