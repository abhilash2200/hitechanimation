"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });






import { Suspense } from "react";
import VideoTabs from "./VideoTabs";

const Projects = () => (
  <Suspense fallback={<div>Loading Videos...</div>}>
    <VideoTabs />
  </Suspense>
);

export default Projects;
