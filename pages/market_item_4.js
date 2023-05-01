import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/market_item.module.css'
import Navbar from '@/components/navbar'
import Topnavbar from '@/components/top-navbar'
import { useState } from "react"
import Link from "next/link"

export default function Shopitem_4() {

    function popSound(){
        let audio = new Audio("/music/bubble-boop.mp3");
        audio.play()
    }

    function boopSound(){
        let audio = new Audio("/music/Bubble-pop.mp3");
        audio.play()
    }

    // increase or decrease
    const [number, setNumber] = useState(0);
    const [number_amount, setNumber_amount] = useState(0);

    // buttons popup
    const [popup, setPopup] = useState(true);
    const [popup_1, setPopup_1] = useState(true);

    return(
        <>
            <Head>
            <title>Under the Waves | Fish Pellets</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Topnavbar/>
                <h1 className={styles.headerTitle}>Market</h1>
                <div className={styles.content_section}>
                    <div className={styles.top_part}>
                        <Link href={"/market"}>
                            <Image
                                onClick={popSound}
                                className={styles.back}
                                src={"/buttons/back.svg"}
                                width={50}
                                height={50}
                            />
                        </Link>
                        <div className={styles.shell}>
                            <Image
                                src={"/market/shell.svg"}
                                width={30}
                                height={30}
                            />
                            <p>200</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_top_part}>
                            <div className={styles.big_image}>
                                <Image
                                    src={"/market/fishfood.svg"}
                                    width={220}
                                    height={220}
                                />
                            </div>
                            <div className={styles.right_part}>
                                <p className={styles.heading}>Fish Pellets</p>
                                <div className={styles.price}>
                                    <Image
                                        src={"/market/shell.svg"}
                                        width={20}
                                        height={20}
                                    />
                                    <p>10</p>
                                </div>
                                <div className={styles.qty}>
                                    <p>QTY:</p>
                                    <div className={styles.qty_buttons}>
                                        <div onClick={() => {(number_amount=== 0 ) ? setNumber_amount(0) : setNumber_amount(number_amount -10)}}>
                                            <Image
                                                onClick={() => {(number === 0 ) ? setNumber(0) : setNumber(number - 1)}}
                                                src={"/buttons/decrease.svg"}
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <p>
                                            {number}
                                        </p>
                                        <div onClick={() => setNumber_amount(number_amount + 10)}>
                                            <Image
                                                onClick={() => setNumber(number + 1)}
                                                src={"/buttons/increase.svg"}
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    popup ?
                                        <div onClick={() => setPopup(false)}>
                                            <Image
                                                onClick={boopSound}
                                                className={styles.buy}
                                                src={"/buttons/buy.svg"}
                                                width={80}
                                                height={30}
                                            />
                                        </div>
                                        : 
                                        <div className={styles.popup}>
                                            <Image 
                                                className={styles.background_image}
                                                src={"/boxes/wide_box.png"}
                                                width={330}
                                                height={340}
                                            />
                                            <p>Do you want to spend 
                                                <Image 
                                                    onClick={boopSound}
                                                    className={styles.shell_amount}
                                                    src={"/market/shell.svg"}
                                                    width={20}
                                                    height={20}
                                                />
                                                <span className={styles.color_pink}>{number_amount}</span> to buy <span className={styles.color_yellow}>{number} Fish Pellets</span>?</p>
                                            <div className={styles.box_buttons_1}>
                                                {
                                                    popup_1 ?
                                                        <div onClick={() => setPopup_1(false)}>
                                                            <Image 
                                                                onClick={boopSound}
                                                                className={styles.buttons}
                                                                src={"/buttons/yes.svg"}
                                                                width={100}
                                                                height={40}
                                                            />
                                                        </div>
                                                        : 
                                                        <div className={styles.popup_1}>
                                                            <div>
                                                                <Image 
                                                                    className={styles.background_image_1}
                                                                    src={"/boxes/wide_box.png"}
                                                                    width={350}
                                                                    height={380}
                                                                />
                                                                <Image 
                                                                    onClick={() => setPopup(true)}
                                                                    className={styles.cross}
                                                                    src={"/buttons/cross.svg"}
                                                                    width={25}
                                                                    height={25}
                                                                />
                                                            </div>
                                                            <p>
                                                                Thank you for purchasing and for being a fin-tastic friend to your <span className={styles.color_blue}>fishes</span>!  
                                                            </p>
                                                            <div className={styles.box_buttons}>
                                                                <Link href={"/market"}>
                                                                    <Image 
                                                                        onClick={boopSound}
                                                                        className={styles.button_1}
                                                                        src={"/buttons/back_to_market.svg"}
                                                                        width={140}
                                                                        height={60}
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                }
                                                <div onClick={() => setPopup(true)}>
                                                    <Image 
                                                        onClick={boopSound}
                                                        className={styles.buttons}
                                                        src={"/buttons/no.svg"}
                                                        width={100}
                                                        height={40}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={styles.middle_part}>
                            <p>
                                <span className={styles.color_yellow}>Fish Pellets</span> are type of food commonly used to feed <span className={styles.color_blue}>fishes</span> in aquariums. 
                            </p>
                        </div>
                        <div className={styles.buttom_part}>
                            <p>Details</p>
                            <div className={styles.details}>
                                <div className={styles.points}>
                                    <Image
                                        className={styles.star}
                                        src={"/market/pink_star.svg"}
                                        width={30}
                                        height={30}
                                    />
                                    <p>They are small, compressed pellets made from a blend of ingredients such as <span className={styles.color_green}>fish meal</span>, <span className={styles.color_green}>plant proteins</span>, <span className={styles.color_green}>grains</span>, <span className={styles.color_green}>vitamins</span>, and <span className={styles.color_green}>minerals</span>.</p>
                                </div>
                                <div className={styles.points}>
                                    <Image
                                        className={styles.star}
                                        src={"/market/blue_star.svg"}
                                        width={30}
                                        height={30}
                                    />
                                    <p><span className={styles.color_yellow}>Fish pellets</span> are designed to sink to the bottom of the tank or pond, making them suitable for <span className={styles.color_blue}>bottom-feeding fish</span>.</p>
                                </div>
                                <div className={styles.points}>
                                    <Image
                                        className={styles.star}
                                        src={"/market/green_star.svg"}
                                        width={30}
                                        height={30}
                                    />
                                    <p><span className={styles.color_yellow}>Fish pellets</span> are a convenient and cost-effective way to feed <span className={styles.color_yellow}>large numbers</span> of <span className={styles.color_blue}>fishes</span>, and they can be stored for long periods without losing their nutritional value.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navbar}>
                    <Navbar/>
                </div>
            </main>
        </>
    )
}