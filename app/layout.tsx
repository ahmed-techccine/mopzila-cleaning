import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Titillium_Web } from "next/font/google";

export const metadata: Metadata = {
  title: 'Mopzilla Cleaning',
  description: 'Delivering Expert Commercial Cleaning Services Facility and Everyone In It',
}

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={titillium.className}>
        {children}

        {/* ✅ Tawk.to Live Chat */}
        <Script
          id="tawkto"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/684083332d1fbe190e48615b/1isu010mn';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        {/* ✅ UserWay ADA Widget */}
        <Script
          id="userway-widget"
          strategy="afterInteractive"
          src="https://cdn.userway.org/widget.js"
          data-account="pr3j6GuKON"
        />
        <Script id="estimatty-widget" strategy="afterInteractive">
          {`
            (function(d,s,i,a,t){
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s);
              j.async=true;
              j.src='https://w.estimatty.com/cdn/estimatty.js';
              j.dataset.i=i;
              j.dataset.a=a;
              f.parentNode.insertBefore(j,f);
            })(document,'script','pq.hm4xf9pTG2TcFO2Gv6Vu','pq.miRG2ACipka8AMJptVqS');
          `}
        </Script>
      </body>
    </html>
  );
}
