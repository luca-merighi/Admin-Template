import Head from 'next/head'
import Layout from '../components/template/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" href="../../../public/user.svg" type="image/x-icon" />
        <title>Admin Template</title>
      </Head>
      <Layout title="Página Inicial" subtitle="Desenvolvendo um Admin Template">
        Conteúdo
      </Layout>
    </div>
  )
}
