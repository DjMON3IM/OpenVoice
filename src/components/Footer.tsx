import React from 'react'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="glass-card rounded-none border-0 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">VoiceClone</h3>
            <p className="text-gray-600">
              Advanced voice cloning technology for creators, developers, and businesses.
            </p>
            <div className="flex space-x-4">
              <Github className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
              <Mail className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Product</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-primary-600">Voice Cloning</a></li>
              <li><a href="#" className="hover:text-primary-600">Text to Speech</a></li>
              <li><a href="#" className="hover:text-primary-600">API Access</a></li>
              <li><a href="#" className="hover:text-primary-600">Pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-primary-600">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-600">Tutorials</a></li>
              <li><a href="#" className="hover:text-primary-600">Blog</a></li>
              <li><a href="#" className="hover:text-primary-600">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-primary-600">About</a></li>
              <li><a href="#" className="hover:text-primary-600">Privacy</a></li>
              <li><a href="#" className="hover:text-primary-600">Terms</a></li>
              <li><a href="#" className="hover:text-primary-600">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            © 2024 VoiceClone. All rights reserved.
          </p>
          <p className="text-gray-600 flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for creators
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer