import { Button } from "@/components/ui/button"
import { Cog, Paintbrush, Tag, Feather, Home, DownloadIcon } from 'lucide-react'
import Link from 'next/link'

export default function Features() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-4">Zero-compromise experience</h2>
      <p className="text-center text-[#F6F6F6] mb-16 max-w-2xl mx-auto">
        Replugged has everything you need to enhance your Discord client, without compromising on performance or security.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#2B2D31] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center mb-4">
            <Cog className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Plugins</h3>
          <p className="text-[#B9BBBE] mb-4">
            Add new features to your Discord client, or enhance already existing ones by extending them. You can even write your own plugins!
          </p>
          <Link href="/plugins" className="text-[#5865F2] hover:underline">
            Explore available plugins →
          </Link>
        </div>

        <div className="bg-[#2B2D31] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center mb-4">
            <Paintbrush className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Themes</h3>
          <p className="text-[#B9BBBE] mb-4">
            Give your Discord client a fresh new look, that matches your taste. You're no longer limited by what Discord gave you, only imagination!
          </p>
          <Link href="/themes" className="text-[#5865F2] hover:underline">
            Explore available themes →
          </Link>
        </div>

        <div className="bg-[#2B2D31] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center mb-4">
            <Tag className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Customizable</h3>
          <p className="text-[#B9BBBE] mb-4">
            Plugins and themes are fully customizable, through easy-to-use interfaces, allowing you to turn your Discord client into what you want, whatever that is.
          </p>
        </div>

        <div className="bg-[#2B2D31] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center mb-4">
            <Feather className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Lightweight</h3>
          <p className="text-[#B9BBBE] mb-4">
            Replugged is designed to consume as little resources as possible, and provides to plugin developers powerful tools to build efficient and robust plugins.
          </p>
          <p className="text-sm text-[#B9BBBE] opacity-75">
            Note that Replugged still runs on top of the official client, and can't magically make it lighter. We just do our best to not consume even more resources.
          </p>
        </div>

        <div className="bg-[#2B2D31] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center mb-4">
            <Home className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Feels like home</h3>
          <p className="text-[#B9BBBE] mb-4">
            We try to integrate as smoothly as possible within Discord's design language. Every modded element feels like it always has been there. You'll almost forget you're running a modded client!
          </p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Make your Discord yours</h2>
        <p className="text-[#F6F6F6] mb-8">
          Stop limiting yourself to what Discord gives you. Get Replugged!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 px-8 text-lg rounded-full bg-[#5865F2] text-white hover:bg-[#4752C4]">
            <DownloadIcon className="mr-2 h-5 w-5" />
            Download
          </Button>
          <Button variant="secondary" className="h-12 px-8 text-lg rounded-full bg-[#23272A] hover:bg-[#2C2F33]">
            Discord Server
          </Button>
        </div>
      </div>
    </div>
  )
}

