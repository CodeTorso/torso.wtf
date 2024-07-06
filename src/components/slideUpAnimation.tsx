"use client"

import React from 'react'
import {motion} from "framer-motion"

function SlideUpAnimation({children}: {children: React.ReactNode}) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    >{children}</motion.div>
  )
}

export default SlideUpAnimation