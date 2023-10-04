import { useState } from 'react'
// import './App.css'

import { motion } from 'framer-motion'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
function App() {
  const [open, setOpen] = useState(false)

	const toggleOpen = () => setOpen(e => !e)

  return (
		<ChakraProvider>

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
				<Grid templateColumns='repeat(3, 1fr)' gap={6} className='flex-1 p-3 max-h-screen overflow-auto'>
					{Array.from({ length: 10 }).map((_, i) => (
						<GridItem key={i}>
							<Card  />
						</GridItem>
						))
					}
				</Grid>
			</div>
		</ChakraProvider>
  )
}

function Card() {
	return (
		<div className='flex-1 aspect-video shadow-xl rounded-xl bg-slate-100'>

		</div>
	)
}

export default App
