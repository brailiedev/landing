import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
    <title>Brailie | Growth Marketing Agency</title>
    <meta name="description" content="Brailie: Crypto / web3-focused marketing agency. Expertise in blockchain growth strategies, SEO, social media, and exclusive press release services for web3 startups. Propel your venture to the forefront of the blockchain industry with Brailie." />
    <meta name="keywords" content="web3 marketing, blockchain marketing agency, web3 growth strategies, blockchain SEO, cryptocurrency advertising, web3 startup support, blockchain digital marketing, crypto press release, web3 business growth, blockchain social media management" />
</Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.logo}> <span className={styles.bracket} >&#91;</span> brailie <span className={styles.bracket} >&#93;</span> </div>
            <a href="mailto:brailiedev@gmail.com">GET IN TOUCH</a>
        </nav>
        <main className={styles.main}>
          <div className='hero'>
            <h1 className={styles.title}>
            Elevate Your Web3 Venture with Brailie.
            </h1>
            <p className={styles.description}>
            Unlock the full potential of blockchain marketing and growth strategies tailored for web3 projects.
            </p>
          </div>
          
          <Image className={styles.image} src="/images/hero.png" height={400} width={443} alt="Vercel Logo"/>

        </main>
      </header>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <footer className={styles.footer}>
        <h2>Working On A project? </h2>
        <a href="mailto:brailiedev@gmail.com">brailiedev@gmail.com</a>
        <div className={styles.copy}>
          <small>&copy; 2024 brailie. All Right Reserved</small>
          <div><hr className={styles.line}/></div>
          <small>Follow us on <a href="https://twitter.com/Brailiedev"><FontAwesomeIcon icon={faTwitter} /></a></small>
        </div>

      </footer>
    </div>
  )
}

export default Home
