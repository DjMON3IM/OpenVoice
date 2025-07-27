import React from 'react'

interface AudioVisualizerProps {
  isActive: boolean
  className?: string
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isActive, className = '' }) => {
  if (!isActive) return null

  return (
    <div className={`waveform ${className}`}>
      <div className="waveform-bar"></div>
      <div className="waveform-bar"></div>
      <div className="waveform-bar"></div>
      <div className="waveform-bar"></div>
      <div className="waveform-bar"></div>
    </div>
  )
}

export default AudioVisualizer