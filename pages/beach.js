import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/beach.module.css'
import Navbar from '@/components/navbar'
import Topnavbar from '@/components/top-navbar'
import data from '../data/fishes.json'
import { useState } from 'react'

// Fishes
import AtlanticSalmon from "@/components/as-popup";
import BlueTang from "@/components/bt-popup";
import ClownFish from "@/components/cf-popup";
import StripedBass from "@/components/sb-popup";
import Flounder from '@/components/fl-popup'
import VelvetCrab from '@/components/vc-popup'
import AtlanticCod from '@/components/ac-popup'
import BlueWhale from '@/components/bw-popup'
import ChamberedNautilus from '@/components/cn-popup'
import Stingray from '@/components/s-popup'
import GreenTurtle from '@/components/gt-popup'
import Octopus from '@/components/o-popup'
import KillerWhale from '@/components/kw-popup'
import SwordFish from '@/components/sf-popup'
import LeatherbackTurtle from '@/components/lt-popup'
import WhiteShark from '@/components/ws-popup'
import AnglerFish from '@/components/af-popup'
import Interact from '@/components/interact-popup'

export default function Beach() {
  const [fishData, setFishData] = useState([...data])
  const [isActive, setIsActive] = useState (false)
  const [show, setShow] = useState (false)

  function popSound(){
    let audio = new Audio("/music/Bubble-pop.mp3");
    audio.play()
  }

  return (
    <>
      <Head>
        <title>Under the Waves | Beach</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Pixel/utwalogo.png" />
      </Head>
      <main className={styles.main}>
        <audio autoPlay src={"/music/Island Tour.mp3"} loop={true} autostart={true}></audio>
        <Topnavbar/>
        <h1 className={styles.headerTitle}>Beach</h1>
        <div className={styles.parentContainer}>
          <img
            className={styles.topground}
            src="Pixel/Background/beach.png"
          />
          <div className={styles.front_background}>
            <img 
              className={styles.foreground} 
              src='Pixel/Background/front.png' 
            />
            <img
              id={styles.oceanback}
              className={styles.background}
              src="Pixel/Background/ocean.png"
            />
          </div>
        </div>
        
        <div className={styles.dialogueContainer}>
          <Image className={styles.character} src={"/Pixel/charac-higher-res.gif"} width={150} height={150}/>
          <p className={styles.characterName}>Kika</p>
        </div>
        <div className={styles.instruction}>
          <p>
            Hey there! Scroll down under and have fun learning about the sea creatures and exploring the ocean!
          </p>
        </div>
        <Navbar/>
        <Interact/>
        <div className={styles.fishContainer}>
          <Image src={"/Pixel/Bubbles3.png"} className={styles.bubbles0} width={100} height={100}/>
          <div className={styles.atlanticSalmon} onClick={popSound}>
            <AtlanticSalmon/>
          </div>
          <div className={styles.stripedBass} onClick={popSound}>
            <StripedBass/>
          </div>
          <Image src={"/Pixel/Bubbles2.png"} className={styles.bubbles1} width={100} height={100}/>
          <div className={styles.clownFish} onClick={popSound}>
            <ClownFish/>
          </div>
          <div className={styles.blueTang} onClick={popSound}>
            <BlueTang/>
          </div>
          <div className={styles.flounder} onClick={popSound}>
            <Flounder/>
          </div>
          <div className={styles.velvetCrab} onClick={popSound}>
            <VelvetCrab/>
          </div>
          <Image className={styles.bubbles2} src={"/Pixel/Bubbles2.png" } width={100} height={100}/>
          <Image className={styles.bubbles3} src={"/Pixel/Bubbles.png" } width={100} height={100}/>
          <div className={styles.atlanticCod} onClick={popSound}>
            <AtlanticCod/>
          </div>
          <Image className={styles.bubbles10} src={"/Pixel/Bubbles2.png" } width={100} height={100}/>
          <div className={styles.blueWhale} onClick={popSound}>
            <BlueWhale/>
          </div>
          <div className={styles.chamberedNautilus} onClick={popSound}>
            <ChamberedNautilus/>
          </div>
          <div className={styles.stingray} onClick={popSound}>
            <Stingray/>
          </div>
          <Image className={styles.bubbles4} src={"/Pixel/Bubbles3.png" } width={100} height={100}/>
          <div className={styles.greenTurtle} onClick={popSound}>
            <GreenTurtle/>
          </div>
          <Image className={styles.bubbles5} src={"/Pixel/Bubbles2.png" } width={100} height={100}/>
          <div className={styles.octopus} onClick={popSound}>
            <Octopus/>
          </div>
          <div className={styles.killerWhale} onClick={popSound}>
            <KillerWhale/>
          </div>
          <Image className={styles.bubbles6} src={"/Pixel/Bubbles3.png" } width={100} height={100}/>
          <Image className={styles.bubbles7} src={"/Pixel/Bubbles3.png" } width={100} height={100}/>
          <div className={styles.whiteShark} onClick={popSound}>
            <WhiteShark/>

          </div>
          <div className={styles.swordFish} onClick={popSound}>
            <SwordFish/>
          </div>
          <Image className={styles.bubbles8} src={"/Pixel/Bubbles3.png" } width={100} height={100}/>
          <div className={styles.leatherbackTurtle} onClick={popSound}>
            <LeatherbackTurtle/>
          </div>
          <Image className={styles.bubbles9} src={"/Pixel/Bubbles.png" } width={100} height={100}/>
          <div className={styles.anglerFish} onClick={popSound}>
            <AnglerFish/>
          </div>
        </div>
        <div className={styles.endText}>
          <p>You have reached the end of the waves, thank you joining us in a journey full of exploring and learning.</p>
        </div>
      </main>
    </>
  )
}