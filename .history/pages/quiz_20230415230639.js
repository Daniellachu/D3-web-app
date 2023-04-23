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


You can add the "Quiz" option in the <Topnavbar /> component. Based on your code, you have already imported the Topnavbar component. You can simply add the "Quiz" option as a new list item within the <ul> element of the Topnavbar component like this:

javascript
Copy code
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
          <Topnavbar>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Quiz</li>
            </ul>
          </Topnavbar>
          <Image
            className={styles.iphonesize}
            src={"/quiz/quiz-start.jpg"}
            width={410}
            height={675}
          />
          <h1 className={styles.h1}>Quiz</h1>
          <Navbar />
        </main>
      </>
    )
}