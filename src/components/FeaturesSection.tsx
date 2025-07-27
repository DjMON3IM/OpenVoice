import React from 'react'
import { 
  Zap, 
  Globe, 
  Shield, 
  Cpu, 
  Headphones, 
  Sparkles,
  Clock,
  Users,
  Award
} from 'lucide-react'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Clone voices in seconds with our optimized neural networks',
      color: 'text-yellow-500'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Support for 50+ languages and regional accents',
      color: 'text-blue-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your audio data is processed locally and never stored',
      color: 'text-green-500'
    },
    {
      icon: Cpu,
      title: 'AI Powered',
      description: 'Advanced neural networks for natural-sounding speech',
      color: 'text-purple-500'
    },
    {
      icon: Headphones,
      title: 'Studio Quality',
      description: 'Professional-grade audio output with crystal clarity',
      color: 'text-red-500'
    },
    {
      icon: Sparkles,
      title: 'Style Control',
      description: 'Adjust emotion, pace, and tone for perfect results',
      color: 'text-pink-500'
    }
  ]

  const stats = [
    { icon: Clock, value: '< 10s', label: 'Average Processing Time' },
    { icon: Users, value: '1M+', label: 'Voices Cloned' },
    { icon: Award, value: '99.9%', label: 'Accuracy Rate' }
  ]

  return (
    <section id="features" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need for professional voice cloning and text-to-speech
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className={`inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="glass-card rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-3">
              <div className="inline-flex p-3 rounded-xl bg-primary-50">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-12">
        <h3 className="text-3xl font-bold text-gray-900">
          Ready to Clone Your Voice?
        </h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Start creating professional voice clones in minutes. No technical expertise required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4">
            Get Started Free
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection