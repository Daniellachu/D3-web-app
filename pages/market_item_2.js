import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/market_item.module.css'
import Navbar from '@/components/navbar'
import Topnavbar from '@/components/top-navbar'
import { useState } from "react"
import Link from "next/link"

export default function Shopitem_2() {

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
            <title>Under the Waves | Filter</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/Pixel/utwalogo.png" />
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
                                    src={"/market/filter.svg"}
                                    width={220}
                                    height={220}
                                />
                            </div>
                            <div className={styles.right_part_filter}>
                                <p className={styles.heading}>Aquarium Filter</p>
                                <div className={styles.price}>
                                    <Image
                                        src={"/market/shell.svg"}
                                        width={20}
                                        height={20}
                                    />
                                    <p>30</p>
                                </div>
                                <div className={styles.qty}>
                                    <p>QTY:</p>
                                    <div className={styles.qty_buttons}>
                                        <div onClick={() => {(number_amount=== 0 ) ? setNumber_amount(0) : setNumber_amount(number_amount - 30)}}>
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
                                        <div onClick={() => setNumber_amount(number_amount + 30)}>
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
                                                <span className={styles.color_pink}>{number_amount}</span> to buy <span className={styles.color_green}>{number} Aquarium Filter</span>?</p>
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
                                An <span className={styles.color_yellow}>aquarium filter</span> is a device used to maintain the cleanliness and health of aquarium water by removing <span className={styles.color_purple}>physical </span>and <span className={styles.color_purple}>chemical waste</span> and <span className={styles.color_purple}>impurities</span>.
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
                                    <p>Removes <span className={styles.color_purple}>physical waste</span> like uneaten food, fish waste, and other debris that can accumulate in the water.</p>
                                </div>
                                <div className={styles.points}>
                                    <Image
                                        className={styles.star}
                                        src={"/market/blue_star.svg"}
                                        width={30}
                                        height={30}
                                    />
                                    <p>Removes <span className={styles.color_purple}>chemical waste</span> harmful chemicals and toxins from the water which can be deadly to <span className={styles.color_blue}>fishes</span> and other <span className={styles.color_blue}>aquatic animals</span>.</p>
                                </div>
                                <div className={styles.points}>
                                    <Image
                                        className={styles.star}
                                        src={"/market/green_star.svg"}
                                        width={30}
                                        height={30}
                                    />
                                    <p>Helps to maintain a stable <span className={styles.color_green}>water environment</span>.</p>
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