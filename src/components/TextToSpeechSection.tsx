import React, { useState } from 'react'
import { Volume2, Play, Pause, Download, Settings } from 'lucide-react'

const TextToSpeechSection: React.FC = () => {
  const [text, setText] = useState('')
  const [selectedVoice, setSelectedVoice] = useState('neural-1')
  const [speed, setSpeed] = useState(1.0)
  const [pitch, setPitch] = useState(1.0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null)

  const voices = [
    { id: 'neural-1', name: 'Emma (Neural)', language: 'English', accent: 'American' },
    { id: 'neural-2', name: 'James (Neural)', language: 'English', accent: 'British' },
    { id: 'neural-3', name: 'Sofia (Neural)', language: 'Spanish', accent: 'Spain' },
    { id: 'neural-4', name: 'Hiroshi (Neural)', language: 'Japanese', accent: 'Tokyo' },
    { id: 'neural-5', name: 'Marie (Neural)', language: 'French', accent: 'Paris' },
  ]

  const handleGenerate = () => {
    if (!text.trim()) return
    
    // Simulate TTS generation
    setTimeout(() => {
      setGeneratedAudio('data:audio/wav;base64,mock-tts-audio')
    }, 2000)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // Simulate audio playback
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 3000)
    }
  }

  return (
    <section id="tts" className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Text to Speech
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Convert any text to natural-sounding speech with our advanced neural voices
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8 space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Text Input */}
          <div className="lg:col-span-2 space-y-4">
            <label className="block text-lg font-medium text-gray-900">
              Enter Your Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here. Our AI will convert it to natural speech..."
              className="w-full h-48 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-lg"
              maxLength={1000}
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{text.length}/1000 characters</span>
              <button
                onClick={handleGenerate}
                disabled={!text.trim()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Volume2 className="w-5 h-5 mr-2" />
                Generate Speech
              </button>
            </div>
          </div>

          {/* Voice Settings */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Settings className="w-4 h-4 inline mr-2" />
                Voice Settings
              </label>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Voice</label>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {voices.map((voice) => (
                      <option key={voice.id} value={voice.id}>
                        {voice.name} - {voice.accent}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Speed: {speed.toFixed(1)}x
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Pitch: {pitch.toFixed(1)}x
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={pitch}
                    onChange={(e) => setPitch(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Generated Audio */}
        {generatedAudio && (
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Generated Audio</h4>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePlayPause}
                  className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
            <audio controls className="w-full">
              <source src={generatedAudio} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </section>
  )
}

export default TextToSpeechSection