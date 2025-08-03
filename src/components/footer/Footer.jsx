export default function Footer() {
  return (
    <>
      <div data-aos="fade"
            data-aos-delay="200"
            data-aos-duration="900" className="flex items-center justify-center px-4 text-white mb-10 mt-10 relative">
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full relative z-10">
          <div
            className="flex-1 bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 border border-purple-800 rounded-2xl p-8 backdrop-blur 
              flex flex-col justify-between h-[400px] w-[350px] md:w-[550px]"
          >
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">
                🌌 Why You Should <span className="text-blue-400">Sign In</span> with ARISE
              </h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm">
                <li>Track your habits like a questlog</li>
                <li>Earn XP, badges, and level up your life</li>
                <li>AI-powered personal growth</li>
                <li>Join dreamers, doers, and achievers</li>
              </ul>
            </div>
            <p className="mt-6 text-blue-300 italic">
              Your journey begins the moment you <span className="text-purple-400">sign in</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
