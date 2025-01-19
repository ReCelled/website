import { Button } from "@/components/ui/button"

export default function Download() {
  return (
    <div className="bg-[#2f3136] rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Download Replugged</h2>
      <p className="mb-4 text-[#b9bbbe]">Get the latest version of Replugged for your operating system:</p>
      <div className="flex flex-wrap gap-4">
        <Button className="bg-[#5865f2] hover:bg-[#4752c4]">Download for Windows</Button>
        <Button className="bg-[#5865f2] hover:bg-[#4752c4]">Download for macOS</Button>
        <Button className="bg-[#5865f2] hover:bg-[#4752c4]">Download for Linux</Button>
      </div>
    </div>
  )
}

