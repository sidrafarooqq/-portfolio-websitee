'use client'
import { useRouter} from "next/navigation"

function Home() {
    const route= useRouter()
    return (
      
  
      <div>
        <div className=' h-20 text-black text-end space-x-28 pt-5 text-2xl pr-24 '>
           
        <button className='w-11 h-6 p-1' onClick={()=>route.push("/Home")}>Home</button>
        <button className='w-11 h-6 p-1' onClick={()=>route.push("/about")}>About</button>
        <button className='w-15 h-6 p-1' onClick={()=>route.push("/contact")}>Contact</button >
        <button className='w-15 h-6 p-1' onClick={()=>route.push("/projects")}>projects</button >
  
           </div >
           <main className='flex justify-center'>
           <div className=' h-screen w-screen bg-teal-200'>
    <div className='flex items-center justify-center h-full space-x-3 pr-20 pb-52'>
      <div>
        <h1 className=' text-black text-inherit text-3xl pl-4'>
          <i><b>Hello!</b></i> <br />
         <i><b> My name is Sidra Farooq,</b><br /> AI Engineering student and web developer.<br />
          Passionate about building innovative user-friendly solutions.</i> 
      
        </h1>
        
      </div>
      <img 
        src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/446996882_1445231476140255_8076217169334159637_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF65fezY8z-kL0oO7HJun0rYj4rmoO69WBiPiuag7r1YDGRJED26x1smXkuXh1fJrQJoyunHiUhX2CTF-_pUjRh&_nc_ohc=jn84VebMGQkQ7kNvgFuZ4RG&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=AyikqZdCwzGDtijHQ7Po8Aa&oh=00_AYC81v2Ew1zBneuGvCNED5Yd8SFXvqq3GifPcX3ol42ogA&oe=6732BC4C" 
        alt="Sidra Farooq" 
        className="w-72 h-72 rounded-full border-4 border-black shadow-lg "
      />
    
   
        </div>
  </div>
  
  </main>
  </div>
           
          
    )
  }
  
  export default Home