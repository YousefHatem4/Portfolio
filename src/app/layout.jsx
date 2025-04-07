"use client";
import './globals.css';
import Navbar from './_navbar/page'; 
export default function RootLayout({ children }) {
  return <>
    <html>
      <body>
        <div className='mb-18'>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  </>
}
