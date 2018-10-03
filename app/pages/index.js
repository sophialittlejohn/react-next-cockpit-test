import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'
import Link from 'next/link'


const Index = (props) => (
    <Layout>
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

    return {
        bpi: data.bpi
    }
}

export default Index