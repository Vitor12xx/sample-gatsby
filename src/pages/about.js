import React from 'react'
import Layout from '../components/layout'

import SEO from '../components/seo';

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About Us"/>
            <h1>About our loved Demons</h1>
            <ul>
                <li>Baphomet</li>
                <li>Mephistopheles</li>
                <li>Behemot</li>
            </ul>
        </Layout>
    )
}

export default AboutPage
