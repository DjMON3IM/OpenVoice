import React from 'react'
import Header from './components/Header'
import VoiceCloneSection from './components/VoiceCloneSection'
import TextToSpeechSection from './components/TextToSpeechSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <VoiceCloneSection />
        <TextToSpeechSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App