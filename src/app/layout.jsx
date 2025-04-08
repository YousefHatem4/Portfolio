"use client";
import './globals.css';
import Navbar from './_navbar/page';
import Footer from './_footer/page'; 
export default function RootLayout({ children }) {
  return <>
    <html>
      <body cz-shortcut-listen="true">
        <div>
          <Navbar />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  </>
}
