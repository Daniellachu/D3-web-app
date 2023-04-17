import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/quiz.module.css'
import Topnavbar from '@/components/top-navbar'
import Navbar from '@/components/navbar'
import styles from '@/styles/settings.module.css'
import Link from 'next/link'

export default function Quiz() {
    return (
      <>
        <Head>
          <title>Under the Waves | Settings</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <Topnavbar title={"settings"}/>
        {/* <h1 className={styles.headerTitle}>Settings</h1> */}
        <Image className={styles.backButton}
            src={"/buttons/settingsBack.svg"}
            alt={"/buttons/settingsBack.svg"}
            width={42}
            height={42}
          />
        <div className={styles.parentContainer}>
          
            <Image
              src={"/boxes/shop_box.png"}
              alt={"/boxes/shop_box.png"}
              width={150}
              height={150}
            />
            <Image className={styles.profileIcon}
            src={"/Pixel/character-face.gif"}
            alt={"/Pixel/character-face.gif"}
            width={120}
            height={120}
            />
        </div>

        <div className={styles.changeLanguage}>
            <p>
                Language 
            </p>
            <p>
                English
            </p>

        </div>

            <div className={styles.audioBar}>
                <h3 className={styles.audioTitle}>Audio</h3>
                <Image className={styles.audioLevelBar}
                src={"/icons/soundBar.png"}
                alt={"/icons/soundBar.png"}
                width={205}
                height={31}
                />

            </div>  
                <div className={styles.modeButton}>
                  <p className={styles.modeTitle}>Mode</p>
                  <Link href={"/settings2"}>
                  <Image className={styles.uiModeButton}
                    src={"./buttons/modeButton.svg"}
                    alt={"./buttons/modeButton.svg"}
                    width={180}
                    height={60}
                  />
                  </Link>
            </div>
           


            <div className={styles.settingsSaveButton}>
              <div className={styles.confirmationButtons}>
              <Image className={styles.confirmationButtons}
                    src={"/buttons/saveButton.svg"}
                    alt={"/buttons/saveButton.svg"}
                    width={106}
                    height={33}
                  />
                  <Image className={styles.confirmationButtons}
                    src={"/buttons/reset.svg"}
                    alt={"/buttons/reset.svg"}
                    width={106}
                    height={33}
                  />
              </div>
            </div>
              
        <Navbar/>
        
      </main>
      </>
    )
  }