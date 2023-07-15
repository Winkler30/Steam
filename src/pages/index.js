import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import styles from '@/styles/index.module.css'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                discount='30%'
                fullPrice='199,90'
                discountPrice='99,90'
              />
              <SaleCard
                image={'hogwarts.jpg'}
                discount='40%'
                fullPrice='300,00'
                discountPrice='249,99'
              />
              <SaleCard
                image={'valorant.jpg'}
                discount='50%'
                fullPrice='399,90'
                discountPrice='209,90'
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard/>
              <GameCard/>
              <GameCard/>
              <GameCard/>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
