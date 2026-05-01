"use client";

import { motion } from 'framer-motion';
import { ScooterSVG } from '@/components/icons';

export const HeroAnimation = () => (
  <motion.div
    initial={{ x: "-100vw" }}
    animate={{ x: "110vw" }}
    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
  >
    <ScooterSVG />
  </motion.div>
);