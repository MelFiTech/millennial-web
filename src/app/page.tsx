   // pages/index.js
   import Head from 'next/head';
   import Hero from '../components/Hero';
   import Projects from '../components/Projects';
   import Footer from '../components/Footer';
   import WhatWeDo from '../components/WhatWeDo';
   import Achievement from '../components/Achievement';
   import CTA from '../components/CTA';

   export default function Home() {
     return (
       <div className="min-h-screen bg-black">
         <Head>
           <title>Millennial Real Estate</title>
           <meta name="description" content="Find your dream home with Millennial Real Estate" />
         </Head>
         <main className="flex flex-col">
           <Hero />
           <WhatWeDo />
           <Achievement />
           <Projects />
           <CTA />
         </main>
         <Footer />
       </div>
     );
   }