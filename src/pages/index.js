import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Selamat Datang di Pantai Losari</h1>
    <StaticImage
      src="https://thumb.spotlight.id/image/2020/03/18/1bb4a3ccfd34bfdac1de2a82a8af0b38-Pantai-Losari.jpeg"
      width={500}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="pantai losari"
      style={{ marginBottom: `1.45rem` }}
    />
    <p> Pantai Losari adalah sebuah pantai yang terletak di sebelah barat Kota Makassar, Provinsi Sulawesi Selatan, Indonesia. Pantai ini menjadi tempat bagi warga Makassar untuk menghabiskan waktu pada pagi, sore, dan malam hari menikmati pemandangan matahari tenggelam yang sangat indah (Wikipedia)
       </p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
