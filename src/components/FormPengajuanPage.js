import { useState } from 'react'
import {BsChevronDown, BsChevronRight} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom'
const FormPengajuanPage = () => {
    const [JenisPerbaikan, setJenisPerbaikan] = useState(true)
     return(
        <div className='w-full flex justify-center mt-20 mb-20'>
            <div className='flex flex-col w-[80%] md:w-[60%] gap-2'>
            <Link to={'/'} className='text-white items-center tracking-wider font-semibold flex flex-row gap-[15px]'>
                <img className='h-[30px]' src={require('../images/back_button_icon.png')} />
                <p>Kembali</p>
            </Link>
            <div className='text-white bg-indigo-900 w-full border-2 border-white'>
                <section className='flex text-lg md:text-2xl justify-center mt-5 font-bold'>
                    <p>Ajukan Perbaikan</p>
                </section>
                <section className='flex flex-col gap-5 px-5 mt-10 md:mt-20'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs '>Silakan Pilih Jenis Perbaikan</p>
                        <div className='flex flex-row justify-between text-black w-full bg-white rounded-md items-center'>
                            <input
                            className='w-full p-2 ml-2 text-xs'
                            placeholder='Pilih Perbaikan'/>
                            
                            <div className='flex flex-row md:gap-5 gap-1 mr-2'>
                                <div>
                                    <RxCross2/>
                                </div>
                                <div className='w-[2px] bg-black'></div>
                                <div onClick={() => setJenisPerbaikan(!JenisPerbaikan)}>
                                    {JenisPerbaikan ? (
                                        <BsChevronRight/>
                                        ) : (
                                        <BsChevronDown/>
                                    )}
                                </div>
                            </div>

                        </div>
                        <ul className={`${JenisPerbaikan ? 'hidden' : 'flex'} pl-[14px] font-semibold flex-col text-black w-full max-h-[252px] overflow-scroll bg-white rounded-md`}>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            <li>
                                dsadsadsad
                            </li>
                            
                        </ul>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs '>Tambahkan Perbaikan Lainnya<br></br><span className='italic'> *apabila pilihan anda tidak terdaftar</span></p>
                        <div className='flex flex-row justify-between text-black w-full bg-white rounded-md items-center'>
                            <input
                            className='w-[80%] p-2 ml-2 text-xs'
                            placeholder='Ketik Disini'/>
                        </div>
                    </div>

                </section>
                <section className='w-full mt-20 mb-10 flex flex-row gap-5 px-5 justify-between'>
                    <p className='text-xs flex flex-row items-center gap-5'>Jenis perbaikan yang saya masukkan sudah benar <input className='mt-1' type='checkbox' /></p>
                    
                    <img className="h-[30px]" src={require('../images/next_button_icon.png')} />
                </section>

            </div>
        </div>
        </div>
        
     )
}

export default FormPengajuanPage;