import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
export default function Form(){
    const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isMismatch = confirmPassword && password !== confirmPassword;

  return (
    <div  data-aos='fade' data-aos-delay='400' data-aos-duration='1000' className=" flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-10" id="form">
      <div className="relative flex items-center justify-center my-10" >

        <div className="relative z-10 w-[350px] md:w-[400px] h-[400px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col justify-between ">
          <div>
            <h2 className="text-2xl font-bold text-center text-purple-400 mb-4">
              Welcome to <span className="text-blue-400">ARISE</span>
            </h2>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <span
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-white cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full px-4 py-2 text-white placeholder-gray-300 rounded-md border focus:outline-none pr-10 ${
                    isMismatch
                      ? "bg-white/10 border-red-500 opacity-60"
                      : "bg-white/10 border-white/10"
                  }`}
                />
                <span
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-white cursor-pointer"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              {isMismatch && (
                <p className="text-sm text-red-400">Passwords do not match</p>
              )}

              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-md hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </form>
          </div>

          <p className="text-sm text-center text-gray-400 mt-2">
            Already a member?{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>

        
    )
       




    

  
}