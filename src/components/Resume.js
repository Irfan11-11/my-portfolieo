import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/js.png'
import react from '../assets/skills/react.png'
import tailwind from '../assets/skills/tailwind.png'
import next from '../assets/skills/next.png'
import django from '../assets/skills/django.png'
import java from '../assets/skills/java.png'
import python from '../assets/skills/python.png'
import docker from '../assets/skills/docker.png'
import git from '../assets/skills/github.png'
import mysql from '../assets/skills/mysql.png'
import api from '../assets/skills/api.png'
import bootstrap from '../assets/skills/bootstrap-logo.png'
import mongodb from '../assets/skills/OIP (1).jpeg'
import nodejs from '../assets/skills/nodejs_logo.png'


const Resume = () => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate("/");
    }
    return (
        <div className="text-white animate-fade" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4 ">
                <button onClick={backHome} className='after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1'><CloseIcon sx={{ fontSize: '38px',color:'#009e66' }} /></button>
            </div>
            <div className='flex flex-col align-middle justify-center'>
                <div className='m-auto p-20'>
                    <p className='text-thin text-[#9f9f9f] text-center'>Check out My Resume</p>
                    <h1 className='text-5xl pt-3'>Resume</h1>
                </div>
                <div className="flex align-middle justify-center max-md:flex-col m-auto">
                    {/* Education */}
                    <div className=" lg:pr-20">
                        <h1 className='text-2xl mb-5 text-[#009e66]'>Education</h1>
                        <div className="card w-[500px] max-lg:w-[335px] box-border  bg-[#161616] relative lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8  border-b border-l-[#009e66] border-l-2">
                            <span className='before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#009e66]'></span>
                            <h1 className=' inline text-xl'>Nethaji Arts and Science College Nemmara,Palakkad</h1>
                            <p className='text-[rgb(159,159,159)] text-base pb-2 pt-2 '> <span className='text-[13px]'>(2020 - 2023)</span></p>
                            <p className='text-[#9f9f9f] text-[13px] pb-2'>Bsc Computer Science</p>
                        </div>
                        <div className="max-lg:w-[335px] w-[500px] bg-[#161616] relative border-b lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#009e66] border-l-2">
                            <span className='before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#009e66]'></span>
                            <h1 className='inline text-xl'>KSHSS Kizhakencherry,Palakkad</h1>
                            <p className='text-[#9f9f9f] text-base pb-2 pt-2'> <span className='text-[13px]'>(2018 - 2020)</span></p>
                            <p className='text-[#9f9f9f] text-[13px]'>Biology Science</p>
                        </div>
                        <div className="max-lg:w-[335px] w-[500px]  bg-[#161616] relative lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#009e66] border-l-2">
                            <span className='before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#009e66]'></span>
                            <h1 className='inline text-xl'>PKHSS Manjapra,Palakkad</h1>
                            <p className='text-[#9f9f9f] text-base pb-2 pt-2'> <span className='text-[13px]'>(2017 - 2018)</span></p>
                            <p className='text-[#9f9f9f] text-[13px]'>Kerala University </p>
                        </div>
                    </div>
                    {/* Experience */}
                    <div className="max-sm:mt-4 pl-20 max-lg:pl-5 max-sm:pl-0">
                        <h1 className='text-2xl mb-5 text-[#009e66]'>Experience</h1>
                        <div className="max-lg:w-[335px] w-[500px] relative bg-[#161616] border-b lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#009e66] border-l-2">
                            <span className='before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#009e66] '></span>
                            <h1 className='inline text-xl'>Luminar Technolab Kakkanad,kochi</h1>
                            <p className='text-[#9f9f9f] text-base pb-2 pt-2'> (Nov'23 - May'24)</p>
                            <ul className='list-disc text-[#9f9f9f] text-[12px]'>
                                <li><p>Internship</p></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className='text-left mb-4'>
                    <div className='max-md:text-center lg:pl-52 pt-16 max-md:m-auto'>
                        <p className="text-thin text-[#9f9f9f]">My knowledge in some tools</p>
                        <h1 className='text-4xl pt-3'>My Skills</h1>
                    </div>
                    <div className='text-[#c9c8c8] w-10/12 grid grid-cols-2 sm:grid-cols-4 gap-7 text-center lg:p-16 m-auto mt-8'>
                        <div className='rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300 flex justify-center align-middle'>
                            <img src={html} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>HTML</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={css} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>CSS</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={js} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>JavaScript</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={git} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Github</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={react} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>React</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={tailwind} alt="html" className='my-4 w-6 h-5'/>
                            <p className='my-4 mx-2'>TailwindCss</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={bootstrap} alt="html" className='my-4 w-9 h-6'/>
                            <p className='my-4'>Bootstrap</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={nodejs} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Node JS</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={mongodb} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Mongo DB</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resume;