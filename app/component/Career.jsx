import React from 'react'
import { Russo_One, Poppins } from 'next/font/google';
import Image from 'next/image';
const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const Career = () => {
    return (
        <section className='pb-10 pt-5'>
            <div className="lg:max-w-[1460px] xl:max-w-[1500px] mx-auto px-2">
                
                <div className="flex flex-wrap gap-y-4">
                    <div className="w-full lg:w-[30%] lg:block hidden">
                         <Image 
                            src='/assets/img/career.jpg' 
                            className='w-auto h-auto' 
                            width={800} 
                            height={600} 
                            alt='career'
                         />
                    </div>
                    <div className="w-full lg:w-[70%] flex justify-center flex-col">
                        <div className='flex flex-wrap gap-y-4'>
                            <div className='w-full bg-[#C62E2E] px-3'>
                                <h2 className={`text-[22px] lg:text-[32px] text-white ${russo.className}`}>Career Opportunities</h2>
                            </div>
                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-2'>
                                <div className='bg-[#243642] text-white p-6 rounded-md h-full '>
                                    <ul className='list-disc ps-6 text-[15px]'>
                                        <li>Logo Designer</li>
                                        <li>Infographic Artist</li>
                                        <li>Icon Designer</li>
                                        <li>Print Media Designer</li>
                                        <li>Package Designer</li>
                                        <li>Branding Artist</li>
                                        <li>Image Retouching Artist</li>
                                        <li>E-Publisher</li>
                                        <li>Motion Graphics Artist</li>
                                        <li>Web Designer</li>  
                                    </ul>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-2'>
                                <div className='bg-[#243642] text-white p-6 rounded-md h-full '>
                                    <ul className='list-disc ps-6 text-[15px]'>
                                        <li>UI Designer</li>
                                        <li>App Designer</li>
                                        <li>Layout Design</li>
                                        <li>Application Developer</li>
                                        <li>HTML Developer</li>
                                        <li>Houdini Generalist</li>
                                        <li>3D MOGRAPH Artist</li>
                                        <li>Fluids FX Artist</li>
                                        <li>CHF Artist</li>
                                        <li>RBD / Pyro FX Artist</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-2'>
                                <div className='bg-[#243642] text-white p-6 rounded-md h-full '>
                                    <ul className='list-disc ps-6 text-[15px]'>
                                        <li>Bootstrap Developer</li>
                                        <li>Web Developer</li>
                                        <li>UI Developer</li>
                                        <li>UX Developer</li>
                                        <li>Front End Developer</li>
                                        <li>PSD to HTML Coder</li>
                                        <li>WordPress Developer</li>
                                        <li>Blogger</li>
                                        <li>Web Content Manager</li>
                                        <li>Storyboard Artist</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-2'>
                                <div className='bg-[#243642] text-white p-6 rounded-md h-full '>
                                    <ul className='list-disc ps-6 text-[15px]'>
                                        <li>3D Generalist</li>
                                        <li>3D Modeling & Texturing Artist</li>
                                        <li>3D Game Asset Developer</li>
                                        <li>3D Background Artist</li>
                                        <li>3D Lighting Artist</li>
                                        <li>3D Animator</li>
                                        <li>3D Animation Supervisor</li>
                                        <li>VFX Roto Artist</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-2'>
                                <div className='bg-[#243642] text-white p-6 rounded-md h-full '>
                                    <ul className='list-disc ps-6 text-[15px]'>
                                        <li>Game Development</li>
                                        <li>Game Art and Animation</li>
                                        <li>Game Testing</li>
                                        <li>Storytelling and Narrative Design</li>
                                        <li>Marketing & Sales</li>
                                        <li>Esports & Streaming</li>
                                        <li>AI and Machine Learning in Gaming</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-2'>
                                <div className='bg-[#243642] text-white p-6 rounded-md h-full'>
                                    <ul className='list-disc ps-6 text-[15px]'>
                                        <li>Cleanup Artist</li>
                                        <li>Stereo Paint Artist</li>
                                        <li>CG Compositor</li>
                                        <li>Matte Painting Artist</li>
                                        <li>Live Action Compositor</li>
                                        <li>Stereo Roro Artist</li>
                                        <li>VFX Paint Artist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Career