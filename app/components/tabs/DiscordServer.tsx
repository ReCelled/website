import { Button } from "@/components/ui/button"

export default function DiscordServer() {
  return (
    <div className="bg-[#2f3136] rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Join Our Discord Server</h2>
      <p className="mb-4 text-[#b9bbbe]">Connect with the Recelled community, get support, and stay updated:</p>
      <Button className="bg-[#5865f2] hover:bg-[#4752c4]">
        Join Discord Server
      </Button>
    </div>
  )
}
