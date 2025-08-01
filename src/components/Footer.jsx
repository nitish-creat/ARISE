
export default function Footer() {
  return(
  <>
   <div className="flex items-center justify-center px-4 text-white mb-10 mt-10 relative">
   
  <div className="absolute w-[380px] h-[420px] bg-white rounded-full blur-3xl opacity-40 z-0"></div>

 
  <div className="absolute w-[420px] h-[460px]  rounded-full blur-[100px] opacity-30 z-0"></div>

  <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full relative z-10">
    
    <div  data-aos='fade' data-aos-delay='400' data-aos-duration='1000' className="flex-1 bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 border border-purple-800 rounded-2xl p-8 backdrop-blur shadow-lg flex flex-col justify-between h-[400px] w-[350px]">
      <div >
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
  
    

