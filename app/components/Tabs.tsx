'use client'

import { useState } from 'react'
import { DownloadIcon, PuzzleIcon, PaintbrushIcon, UsersIcon, MessageSquareIcon } from 'lucide-react'
import Download from './tabs/Download'
import Plugins from './tabs/Plugins'
import Themes from './tabs/Themes'
import Contributors from './tabs/Contributors'
import DiscordServer from './tabs/DiscordServer'

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState('download')

  const tabs = [
    { id: 'download', icon: DownloadIcon, component: Download },
    { id: 'plugins', icon: PuzzleIcon, component: Plugins },
    { id: 'themes', icon: PaintbrushIcon, component: Themes },
    { id: 'contributors', icon: UsersIcon, component: Contributors },
    { id: 'discord', icon: MessageSquareIcon, component: DiscordServer },
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || Download

  return (
    <div className="flex">
      <div className="w-[72px] bg-[#202225] p-3 flex flex-col items-center space-y-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              activeTab === tab.id ? 'bg-[#5865f2]' : 'bg-[#36393f] hover:bg-[#3ba55c]'
            }`}
          >
            <tab.icon className="w-6 h-6 text-white" />
          </button>
        ))}
      </div>
      <div className="flex-1 p-6">
        <ActiveComponent />
      </div>
    </div>
  )
}

