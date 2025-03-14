export default function Contributors() {
  return (
    <div className="bg-[#2f3136] rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Contributors</h2>
      <p className="text-[#b9bbbe]">Recelled is made possible by these amazing contributors:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-[#36393f] p-4 rounded-lg text-center">
          <img src="/placeholder.svg?height=100&width=100" alt="Contributor 1" className="w-20 h-20 rounded-full mx-auto mb-2" />
          <p className="text-[#b9bbbe]">John Doe</p>
        </div>
        <div className="bg-[#36393f] p-4 rounded-lg text-center">
          <img src="/placeholder.svg?height=100&width=100" alt="Contributor 2" className="w-20 h-20 rounded-full mx-auto mb-2" />
          <p className="text-[#b9bbbe]">Jane Smith</p>
        </div>
        <div className="bg-[#36393f] p-4 rounded-lg text-center">
          <img src="/placeholder.svg?height=100&width=100" alt="Contributor 3" className="w-20 h-20 rounded-full mx-auto mb-2" />
          <p className="text-[#b9bbbe]">Alex Johnson</p>
        </div>
        <div className="bg-[#36393f] p-4 rounded-lg text-center">
          <img src="/placeholder.svg?height=100&width=100" alt="Contributor 4" className="w-20 h-20 rounded-full mx-auto mb-2" />
          <p className="text-[#b9bbbe]">Emily Brown</p>
        </div>
      </div>
    </div>
  )
}
