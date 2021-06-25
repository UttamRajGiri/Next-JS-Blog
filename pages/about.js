import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            
        </Layout>
    )
}