import React, { useRef, useState } from 'react'
const Login = () => {
  const playVideo = useRef()
  const [play, setPlay] = useState(false)
  const handlePlayVideo = () => {
    if(play) {
      playVideo?.current?.pause()
      setPlay(false)
    }
    else {
      playVideo?.current?.play()
      setPlay(true)
    }
  }
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-[#B88DF0]'>
      <div className=' w-4/5 sm:w-3/4 lg:w-[800px] h-3/5 flex bg-[#FEFDFE] rounded-3xl p-2'>
        <div className='hidden md:flex justify-center items-center bg-[#8100CC] w-3/5 rounded-l-2xl  h-full'>
          <div className='flex flex-col py-20 h-full justify-center w-4/5'>
            <h1 className='text-white font-bold text-3xl pb-4'>Welcome to <br/> The Patent Website</h1>
            <p className='text-[#C0B8CE] pb-8'>An Intelligent, Secure and Robust automated patent search tool.</p>
            <div className='flex w-full bg-[#B590E0] p-[5px] rounded-md h-[50%] mb-4'
              onClick={handlePlayVideo}
            >
              <div className='relative rounded overflow-hidden flex w-full h-full '>
                <div className={`${play ? 'hidden' : 'block'} absolute w-full h-full bg-[#191D1C] top-0 left-0 bg-opacity-60`}>
                  <div 
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'
                  onClick={handlePlayVideo}
                  >
                  <svg 
                  className=' w-10 h-10'
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="white"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z">
                    </path>
                  </svg>
                </div>
                </div>
                <video 
                src="https://firebasestorage.googleapis.com/v0/b/social-media-2-e01b4.appspot.com/o/170529730537210000000_374519764938888_6505366222450498219_n.mp4?alt=media&token=04bfcccc-aa7d-4f22-841c-6e012314965f"
                className='mx-auto bg-black'
                ref = {playVideo}
                >

                </video>
                {/* <img 
                className='object-cover w-full h-full '  
                src="https://noithathoaphat.info.vn/wp-content/uploads/2020/03/hinh-anh-van-phong-lam-viec-12.jpg"
                alt="" /> */}
              </div>
            </div>
              <p className='text-[#aa80cd] text-center'>Watch video for more information</p>
          </div>
        </div>

        {/* Form */}
        <div className='bg-[#EADCFF] rounded-2xl md:rounded-l-none rounded-r-2xl flex-1 flex items-center p-4 md:p-8 lg:p-10 relative'>
          <div className='absolute top-10 right-10 border-2 border-[#8C37C5] text-[#8C37C5] font-bold px-[10px] py-1 rounded ml-auto hover:opacity-80 transition-all cursor-pointer'>REGISTER</div>
          <form action="" className='px-5 md:px-0 w-full'>
            <p className='font-bold text-2xl pb-6'>Login</p>
            <div class="w-full relative pb-4">
              <label for="input" className="block tracking-wide text-[#8A8196] text-xs font-bold absolute left-2 -top-2 bg-[#EADCFF]">
                  Email address
              </label>
              <input id="input" name="input" type="text" placeholder="Email address" required
                      className="appearance-none block w-full bg-transparent border border-[#8A8196] rounded py-3 px-4 mb-3 leading-tight focus:outline-none"/>
            </div>
            <div class="w-full relative">
              <label 
              for="input" 
              className="block tracking-wide text-[#8A8196] text-xs font-bold absolute left-2 -top-2 bg-[#EADCFF]"
              >
                 Password
              </label>
              <input 
              id="input" 
              name="input" 
              type="password" 
              placeholder="Password" 
              required
              className="appearance-none block w-full bg-transparent border border-[#8A8196] rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              />
            </div>
            <a href='/' className='text-[#8E4BC1] font-bold float-right pb-16'>Forgot Password?</a>
              <button type='submit' className='uppercase w-full bg-[#6B00B0] text-white rounded py-2 hover:bg-opacity-90 transition-all font-semibold'>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
