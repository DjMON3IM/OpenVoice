import React, { useState, useRef } from 'react'
import { Upload, Mic, Play, Square, Download, Loader2 } from 'lucide-react'
import AudioVisualizer from './AudioVisualizer'

const VoiceCloneSection: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [referenceAudio, setReferenceAudio] = useState<File | null>(null)
  const [clonedAudio, setClonedAudio] = useState<string | null>(null)
  const [inputText, setInputText] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith('audio/')) {
      setReferenceAudio(file)
    }
  }

  const handleRecording = () => {
    setIsRecording(!isRecording)
    // Simulate recording functionality
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        // Simulate recorded file
        const mockFile = new File([''], 'recorded-audio.wav', { type: 'audio/wav' })
        setReferenceAudio(mockFile)
      }, 3000)
    }
  }

  const handleCloneVoice = async () => {
    if (!referenceAudio || !inputText.trim()) return
    
    setIsProcessing(true)
    
    // Simulate voice cloning process
    setTimeout(() => {
      // Create a mock audio URL for demonstration
      setClonedAudio('data:audio/wav;base64,mock-audio-data')
      setIsProcessing(false)
    }, 3000)
  }

  return (
    <section id="clone" className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Clone Any Voice in Seconds
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Upload a reference audio or record your voice, then generate speech with that exact tone and style
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Reference Audio Upload */}
        <div className="glass-card rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
            <Mic className="w-6 h-6 mr-3 text-primary-600" />
            Reference Audio
          </h3>
          
          <div className="space-y-4">
            <div 
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-400 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                {referenceAudio ? referenceAudio.name : 'Click to upload audio file'}
              </p>
              <p className="text-sm text-gray-500">
                Supports MP3, WAV, M4A (max 10MB)
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            <div className="text-center">
              <span className="text-gray-500">or</span>
            </div>

            <button
              onClick={handleRecording}
              className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-xl font-medium transition-all ${
                isRecording 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isRecording ? (
                <>
                  <Square className="w-5 h-5" />
                  <span>Stop Recording</span>
                  <AudioVisualizer isActive={true} />
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5" />
                  <span>Record Audio</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Text Input & Generation */}
        <div className="glass-card rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Generate Speech
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text to Speak
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter the text you want to be spoken in the cloned voice..."
                className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                maxLength={500}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {inputText.length}/500
              </div>
            </div>

            <button
              onClick={handleCloneVoice}
              disabled={!referenceAudio || !inputText.trim() || isProcessing}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Cloning Voice...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Clone Voice</span>
                </>
              )}
            </button>

            {clonedAudio && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-green-800 font-medium">Voice cloned successfully!</span>
                  <Download className="w-5 h-5 text-green-600 cursor-pointer hover:text-green-700" />
                </div>
                <audio controls className="w-full">
                  <source src={clonedAudio} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VoiceCloneSection