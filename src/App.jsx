import { useState } from 'react'
// import './App.css'

import { motion } from 'framer-motion'
function App() {
  const [open, setOpen] = useState(false)

	const toggleOpen = () => setOpen(e => !e)

  return (
    <div className='w-screen h-screen flex'>
			<motion.div className='h-screen w-4 bg-slate-500' animate={{
				width: open ? '200px' : '4rem',
				transition: {
					duration: 0.5,
					ease: 'easeInOut'
				}
			}}>	
				<button type='button' onClick={toggleOpen}>handle</button>
			</motion.div>
			<main className='flex-1 grid grid-cols-3 gap-10 p-3'>
				{Array.from({ length: 10 }).map((_, i) => (
					<Card key={i} />
				))
				}
			</main>
		</div>
  )
}

function Card() {
	return (
		<div className='flex-1 aspect-video shadow-xl rounded-xl bg-slate-100'>

		</div>
	)
}

export default App
