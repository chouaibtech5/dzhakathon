import React from "react";
import Navbar from "../components/Navbar.jsx";
import aboutUsImage from "../assets/images/about_us.png";

export default function About() {
  return (
    <main className="relative min-h-dvh bg-[#FFF8F0] font-['Poppins']">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image - Now on the left and smaller */}
            <div className="md:w-2/5 p-6 flex items-center justify-center">
              <div className="w-full max-w-md">
                <img 
                  src={aboutUsImage} 
                  alt="Delicious Algerian cuisine from DzDélice"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            
            {/* Text Content - Now on the right */}
            <div className="p-8 md:py-8 md:pr-12 md:pl-8 md:w-3/5">
              <h1 className="text-2xl font-semibold text-black" style={{
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '32px',
                letterSpacing: '0%',
                marginBottom: '13px'
              }}>
                Casbah Istanbul
              </h1>
              <p className="mb-4" style={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '128%',
                letterSpacing: '0%',
                color: 'rgba(0, 0, 0, 0.72)',
                marginBottom: '16px'
              }}>
                Mall Ben Aknoun , Ben Aknoun , Algiers
              </p>
              <p className="mb-8" style={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0%',
                color: '#667085',
                marginBottom: '16px'
              }}>
                Nestled inside the Benaknoun Shopping Center (Centre commercial Ben-Aknoun, N°4), Casbah Istanbul is a popular Turkish restaurant offering a refined yet inviting atmosphere—styled with elegant décor, a spacious layout, and an appreciated outdoor terrace.
              </p>
            </div>
          </div>
          
          {/* Horizontal Divider */}
          <div style={{
            height: '1px',
            width: '90%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            margin: '0 auto',
            marginTop: '24px',
            marginBottom: '24px'
          }}></div>

          {/* Cuisine & Highlights Section */}
          <div className="px-8 md:px-12 pb-12">
            <h2 style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#000000',
              marginBottom: '14px'
            }}>
              Cuisine & Highlights
            </h2>
            
            <ul className="space-y-4" style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '128%',
              letterSpacing: '0%',
              color: '#667085',
              listStyleType: 'disc',
              paddingLeft: '20px'
            }}>
              <li style={{ marginBottom: '16px' }}>
                The menu features authentic Turkish favorites: shawarma, kebabs, meze, and standout desserts like kunafa—frequently praised for its flavor and texture.
              </li>
              <li style={{ marginBottom: '16px' }}>
                Guests also enjoy dishes like Melange grillades a la braise and Beyri kebab, known for generous portions.
              </li>
              <li>
                The setting captures Istanbul's essence—warm lantern lighting, cozy corners, and a touch of elegance with Turkish accents.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
