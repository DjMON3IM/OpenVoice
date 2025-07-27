import React from 'react'
import { Mic, Waveform } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="glass-card rounded-none border-0 border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-lg">
                <Waveform className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                VoiceClone
              </h1>
              <p className="text-sm text-gray-600">Instant Voice Cloning Technology</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#clone" className="text-gray-600 hover:text-primary-600 transition-colors">
              Voice Clone
            </a>
            <a href="#tts" className="text-gray-600 hover:text-primary-600 transition-colors">
              Text to Speech
            </a>
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
              Features
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header