import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3c91ff] to-[#3476ff] bg-clip-text text-transparent">
              About Quranium
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Bridging traditional Islamic knowledge with cutting-edge technology
            </p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-2">
            <section className="space-y-6 fade-in">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-2xl font-semibold mb-4 text-[#3476ff]">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  At Quranium, we&apos;re dedicated to making the Quran accessible and engaging through modern technology. 
                  Our platform combines traditional Islamic knowledge with cutting-edge 3D visualization to create 
                  an immersive learning experience.
                </p>
              </div>
            </section>

            <section className="space-y-6 fade-in">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-2xl font-semibold mb-4 text-[#3476ff]">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We envision a world where technology enhances our connection with the Quran, making it easier 
                  for people of all ages to understand and appreciate its timeless wisdom through interactive 
                  and engaging experiences.
                </p>
              </div>
            </section>

            <section className="space-y-6 md:col-span-2 fade-in">
              <h2 className="text-3xl font-semibold text-center mb-8 text-[#3476ff]">What We Offer</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 bg-gradient-to-b from-[#3c91ff] to-[#3476ff] rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Interactive Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Engage with the Quran through immersive 3D experiences and interactive content.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 bg-gradient-to-b from-[#3c91ff] to-[#3476ff] rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Modern Technology</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leveraging cutting-edge technology to present Islamic knowledge in innovative ways.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 bg-gradient-to-b from-[#3c91ff] to-[#3476ff] rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Community Focus</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building a global community of learners and educators passionate about the Quran.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 md:col-span-2 fade-in">
              <h2 className="text-3xl font-semibold text-center mb-8 text-[#3476ff]">Our Team</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-b from-[#3c91ff] to-[#3476ff] flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">AA</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center text-white">Dr. Ahmed Al-Mansouri</h3>
                  <p className="text-[#3476ff] text-center mb-2">Founder & CEO</p>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    A visionary leader with a passion for combining Islamic knowledge with modern technology.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-b from-[#3c91ff] to-[#3476ff] flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">SK</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center text-white">Sarah Khan</h3>
                  <p className="text-[#3476ff] text-center mb-2">Head of Education</p>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Expert in Islamic studies and educational technology, dedicated to creating engaging learning experiences.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-b from-[#3c91ff] to-[#3476ff] flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">MR</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center text-white">Mohammed Rahman</h3>
                  <p className="text-[#3476ff] text-center mb-2">Technical Director</p>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Leading our technical innovation with expertise in 3D visualization and interactive platforms.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 