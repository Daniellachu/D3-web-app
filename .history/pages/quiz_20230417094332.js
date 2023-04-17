// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/quiz.module.css'
// import Topnavbar from '@/components/top-navbar'
// import Navbar from '@/components/navbar'
// import React from 'react'


// export default function Quiz() {
//     return (
//       <>
//         <Head>
//           <title>Under the Waves | Quiz</title>
//           <meta name="description" content="Generated by create next app" />
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <main className={styles.main}>
          


//         <Topnavbar />
        
//           <Image
//             className={styles.iphonesize}
//             src={"/quiz/quiz-start.jpg"}
//             width={410}
//             height={675}
//           />
//          <h1 className={styles.h1}>Quiz</h1>
//           <Navbar
//           />
          
//         </main>
//       </>
//     )
//   }


import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/quiz.module.css'
import Topnavbar from '@/components/top-navbar'
import Navbar from '@/components/navbar'
import React from 'react'

export default function Quiz() {
    return (
      <>
        <Head>
          <title>Under the Waves | Quiz</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Topnavbar />
          <h1><center>Quiz</center></h1>
          <Image
            className={styles.iphonesize}
            src={"/quiz/pre-question.jpg"}
            width={310}
            height={195}
          />
          <br></br>
          <Image
            className={styles.iphonesize}
            src={"/quiz/pre-question1.jpg"}
            width={310}
            height={95}
          />
          <br></br>
          <Image
            className={styles.iphonesize}
            src={"/quiz/pre-question2.jpg"}
            width={310}
            height={95}
          />
          <br></br>
          <Image
            className={styles.iphonesize}
            src={"/quiz/pre-question3.jpg"}
            width={310}
            height={95}
          />




          <Navbar />
        </main>
      </>
    )
}