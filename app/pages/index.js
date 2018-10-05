import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'
import Link from 'next/link'
import {token} from "../helpers/constants";


const Index = (props) => (
    <Layout menu={props.entries}>
        <div>
            <h1>Welcome to BitzPrice!</h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
            <div>
                Click{' '}
                <Link scroll={false} href="/about" replace>
                    <a>here</a>
                </Link>{' '}
                to read more
            </div>
        </div>
    </Layout>
)


Index.getInitialProps = async function () {
    const result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await result.json()

    const entries = await fetch(`http://172.16.1.74:8080/api/collections/get/homepage?token=${token}`)
    const entry = await entries.json()
    console.log('entries from index', entry.entries)
    return {
        entries: entry.entries,
        bpi: data.bpi
    }
}

export default Index