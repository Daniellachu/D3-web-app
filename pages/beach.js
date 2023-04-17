import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/beach.module.css'
import Navbar from '@/components/navbar'
import Topnavbar from '@/components/top-navbar'
import data from '../data/fishes.json'
import { useState } from 'react'

export default function Beach() {
  const [fishData, setFishData] = useState([...data])
  const [isActive, setIsActive] = useState (false)
  const [show, setShow] = useState (false)
  //showing the fish
  const [open, setOpen] = useState (false)
  console.log(data);
  const [filterProduct, setFilterProduct] = useState("")

  const changeValues = (value) => {
    setIsActive(false)
  }

  const valuesChange = (value) => {
    console.log(filterProduct)
    setIsActive(true)
    setShow(true)
  }
  const tab = (fishInfo) => {
    var x, tablinks;
    x = document.getElementsByClassName("info");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(fishInfo).style.display = "block";
  }

  const next = (fishInfo) => {
    var x, tablinks;
    x = document.getElementsByClassName("infor");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(fishInfo).style.display = "block";
  }

  const tab3 = (fishInfo) => {
    var x, tablinks;
    x = document.getElementsByClassName("clown");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(fishInfo).style.display= "block";
  }
  return (
    <>
      <Head>
        <title>Under the Waves | Beach</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Topnavbar/>
        <h1 className={styles.headerTitle}>Beach</h1>
        <div className={styles.parentContainer}>
          <img className={styles.foreground}src='Pixel/Background/Foreground.png'></img>
          <img className={styles.background}src='Pixel/Background/Background.png'></img>
        </div>
        <Navbar/>
      <div className={styles.popUpContainer}>
          <Image className={styles.atlanticSalmon} src={"/animals/AtlanticSalmon.png"} height={100} width={100}onClick={()=> setIsActive(true)}></Image>
          {isActive &&(
            <div className={styles.popUp}>
              <div className={styles.popUpNav}>
                <button className={styles.greenNav} onClick={() => tab
                ('General')}>General</button>
                <button className={styles.yellowNav} onClick={() => tab
                ('Details')}>Details</button>
                <button className={styles.buttonClose} onClick={() => setIsActive(false)}>x</button>
              </div>
              <Image id="atlanticSalmon" src={"/animals/AtlanticSalmon.png"} height={50} width={50}></Image>
              <div id="General" class="info" style={{display:"block"}}>
                <div id="general">
                  { data && data.map((info,index) => {
                    if (info.name === "Atlantic Salmon"){
                      return (
                        <div key={index} name={info.name}>
                          <p className={styles.fishName}>
                          {info.name}
                          </p>
                          <p>
                          {info.familyName}
                          </p>
                          <div>{info.length} {info.weight}</div>
                          <div>{info.lifeSpan} {info.location}</div>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
              <div id="Details" class="info" style={{display:"none"}}>
                <div id="details">
                  {data && data.map((info,index) => {
                    if (info.name === "Atlantic Salmon"){
                      return(
                        <div key={index}>
                          <ul>
                            <li>{info.information[0]}</li>
                            <li>{info.information[1]}</li>
                            <li>{info.information[2]}</li>
                          </ul>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.popUpContainer}>
          <Image className={styles.crab} src={"/animals/AtlanticCod.png"} height={125} width={125} alt="crab" onClick={()=> setShow(true)}></Image>
          {show && (
            <div className={styles.popUp}>
              <div className={styles.popUpNav}>
                <button className={styles.greenNav} onClick={() => next
                ('General')}>General</button>
                <button className={styles.yellowNav} onClick={() => next
                ('Details')}>Details</button>
                <button className={styles.buttonClose} onClick={() => setShow(false)}>x</button>
              </div>
              <div id="General" class="infor" style={{display:"block"}}>
                <div id="general">
                  { data && data.map((info,index) => {
                    if (info.name === "Striped Bass"){
                      return (
                        <div key={index} name={info.name}>
                          <Image src={"/animals/AtlanticCod.png"} height={100} width={100} alt="crab"></Image>
                          <p className={styles.fishName}>
                          {info.name}
                          </p>
                          <p>
                          {info.familyName}
                          </p>
                          <div>{info.length} {info.weight}</div>
                          <div>{info.lifeSpan} {info.location}</div>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
              <div id="Details" class="infor" style={{display:"none"}}>
                <div id="details">
                  {data && data.map((info,index) => {
                    if (info.name === "Striped Bass"){
                      return(
                        <div key={index}>
                          <Image src={"/animals/AtlanticCod.png"} height={100} width={100} alt="crab"></Image>
                          <ul>
                            <li>{info.information[0]}</li>
                            <li>{info.information[1]}</li>
                            <li>{info.information[2]}</li>
                          </ul>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.popUpContainer}>
          <Image className={styles.clownFish} src={"/animals/ClownFish.png"} width={120} height={120} onClick={()=> setOpen(true)}></Image>
          {open &&(
            <div className={styles.popUp}>
              <div className={styles.popUpNav}>
                <button className={styles.greenNav} onClick={() => tab3
                  ('General')}>General</button>
                  <button className={styles.yellowNav} onClick={() => tab3
                  ('Detail')}>Details</button>
                  <button className={styles.buttonClose} onClick={() => setOpen(false)}>x</button>
              </div>
              <Image src={"/animals/ClownFish.png"} width={110} height={110}></Image>
              <div id="General" class="clown" style={{display:"block"}}>
                <div id="general">
                  { data && data.map((info,index) => {
                    if (info.name === "Clown Fish"){
                      return (
                        <div key={index} name={info.name}>
                          <p className={styles.fishName}>
                          {info.name}
                          </p>
                          <p>
                          {info.familyName}
                          </p>
                          <div>{info.length} {info.weight}</div>
                          <div>{info.lifeSpan} {info.location}</div>
                        </div>
                      )
                    }
                  })}
                </div>
                <div id="Details" class="clown" style={{display:"none"}}>
                  <div id="details">
                    {data && data.map((info,index) => {
                      if (info.name === "Clown Fish"){
                        return(
                          <div key={index}>
                            <Image src={"/animals/ClownFish.png"} height={100} width={100} alt="Clown Fish"></Image>
                            <ul>
                              <li>{info.information[0]}</li>
                              <li>{info.information[1]}</li>
                              <li>{info.information[2]}</li>
                            </ul>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
                
              </div>
            </div>
          )}
          <Image className={styles.blueTang} src={"/animals/BlueTang.png"} width={100} height={100}></Image>
        </div>
      </main>
    </>
  )
}