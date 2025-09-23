import { useEffect, useRef, useState } from 'react'
import contact from '../../assets/Contact/conatct-spotlight.jpg'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './contactStyle.css';
import emailjs from '@emailjs/browser';
import Button from '../../components/FormComp/Button';
import InputBar from '../../components/FormComp/InputBar';

import { useAnimation, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import ContactSpotlight from '../../components/ContactPage/Spotlight'
import useDocumentTitle from '../../hooks/useDocumentTitle';


const Contact = () => {

  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle('Get in Touch - VoltCart');

  let formRef = useRef();
  let [errorMsg, setErrorMsg] = useState({
    name: false,
    nameStyle: "",
    email: false,
    emailStyle: "",
  })
  let [succesMsg, setSuccessMsg] = useState({})
  let [toggleMsg, setToggleMsg] = useState(false)

  let [cFormData, setcFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlerSubmitForm = async (e) => {
    e.preventDefault();

    let from_name = formRef.current.from_name.value
    let to_email = formRef.current.from_email.value
    let message = formRef.current.message.value

    // console.log('from_name', from_name)
    // console.log('from_name', from_name.length)
    // console.log('to_email', to_email)
    // console.log('message', message)

    try {

      if (from_name.length <= 0) {
        setErrorMsg({ email: false, emailStyle: "", name: true, nameStyle: "border-b-[#c31717] border-b-2" })
        // console.log('name field incorrect')
      }

      else if (to_email.length <= 0 || !emailRegex.test(to_email)) {
        setErrorMsg({ name: false, nameStyle: "", email: true, emailStyle: "border-b-[#c31717] border-b-2" })
        // console.log('email field incorrect')
      }

      else {
        setErrorMsg({ email: false, name: false })
        // console.log('Form Submitting!');
        setToggleMsg(true)
        setSuccessMsg({
          message: "Form Submitting...",
          additionalClass: "bg-[#dfb450]"
        })
        // console.log('Success');

        setcFormData({
          name: '',
          email: '',
          message: ''
        })

        setToggleMsg(true)
        setSuccessMsg({
          message: "Form Submitted Successfully!",
          additionalClass: "bg-[#46b450]"
        })
        setTimeout(() => setToggleMsg(false), 2500)

        // Receiver - Admin
        await emailjs
          .sendForm(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_RECEIVER_ID, formRef.current, {
            publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
          })

        // Sender - User
        await emailjs
          .send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_SENDER_ID, { from_name: from_name, to_email: to_email, message: message }, {
            publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
          })
      }

    }
    catch (err) {

      // console.log('an Error Occured', err)
      setToggleMsg(true)
      setSuccessMsg({
        message: "An Error Occured while submitting the Form!",
        additionalClass: "bg-[#b74556] "
      })
      setTimeout(() => setToggleMsg(false), 2500)
      // setcFormData({
      //   name: '',
      //   email: '',
      //   message: ''
      // })
    }
  }


  // >>>>>>>>>>>>>>>>>>>>>>>>> Spotlight ANimation

  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  const controls3D = useAnimation();

  // Entrance animation on route change or reload
  useEffect(() => {
    controls3D.set({ y: 50, opacity: 0 }); // reset before animating in
    const timer = setTimeout(() => {
      controls3D.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }, 250);
    return () => clearTimeout(timer);
  }, [location.pathname, controls3D]);

  // Entrance animation on route change or reload
  useEffect(() => {
    controls.set({ y: -50, opacity: 0 }); // reset before animating in
    const timer = setTimeout(() => {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }, 250);
    return () => clearTimeout(timer);
  }, [location.pathname, controls]);

  // Scroll animation
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      controls.start({
        y: latest * -8500, // moves text upward
        // y: latest * 8500, // moves text downward
        opacity: 1 - latest * 1.2, // fades out
        transition: { duration: 0.4 },
      });
    });
  }, [scrollYProgress, controls]);


  return (
    <div>
      <section className="bg-white ">
        <div className="m-auto" >


          {/* >>>>>>>>>>>>>> Full Width 3D Spotlight */}
          {/* <ContactSpotlight /> */}

          {/* >>>>>>>>>>>>>>>>> Spotlight */}
          <div className="relative contact-spotlight-bg h-[80vh] bg-cover bg-no-repeat bg-center-top flex flex-col justify-center px-4" style={{ backgroundImage: `url(${contact})` }}>
            <div className="w-[100%] py-[20px] px-[50px] flex align-center justify-center"><BreadCrumbs /></div>
            <h2 className="mb-4 text-[50px] lg:text-[90px] tracking-tight font-poppins font-[700] text-center text-white dark:text-white z-[99]">Contact Us</h2>

          </div>


          <div className="container_layout mt-[50px] m-auto" >
            <div className="w-[100%] flex flex-col justify-center gap-[50px] lg:gap-[75px] md:my-20 mb-[20px] ">

              <div className="w-[100%] md:w-[100%] flex flex-col md:flex-row gap-[20px] md:gap-[40px] ">

                {/* <div className="w-[100%] md:w-[33%] border-dashed border-2 text-center border-[#E5E7EB] hover:border-[#0d6efd] hover:border-solid pt-[50px] pb-[30px] px-[20px] rounded-xl relative">
                  <div className="w-fit iconStyle"><FaLocationDot className='w-[25px] h-[25px] hover:fill-[#0d6efd] 'fill='#E5E7EB' /></div>
                  <h5 className="font-montserrat font-[500] text-[22px] pl-[10px]">Location Address</h5>
                  <p className='font-poppins font-[400] text-[16px]'>Shop No. 2, near Cement Bridge, Baramulla, Jammu and Kashmir 193101</p>
                </div> */}

                <div className="group w-[100%] md:w-[33%] border-dashed border-2 text-center border-[#E5E7EB] hover:border-[#0d6efd] pt-[70px] pb-[30px] px-[20px] rounded-xl relative transition-all duration-300 ease-in-out">
                  <div className="w-fit iconStyle transition-all duration-300 ease-in-out">
                    <FaLocationDot className="w-[25px] h-[25px] fill-[#E5E7EB] transition-all duration-300 ease-in-out group-hover:fill-[#0d6efd]" />
                  </div>
                  <h5 className="font-montserrat font-[500] text-[20px] pl-[10px] pb-[10px] group-hover:text-[#0d6efd]">Location Address</h5>
                  <p className="font-poppins font-[400] text-[16px] group-hover:text-[#0d6efd]">
                    Shop No. 2, near Cement Bridge, Baramulla, Jammu and Kashmir 193101
                  </p>
                </div>


                <div className="w-[100%] md:w-[33%] border-solid border-2  border-gray-100 py-[10px] px-[20px] rounded-xl">
                  <div className="flex flex-row items-center pb-[10px]">
                    <FaPhone width='20px' height='20px' fill='blue' />
                    <h5 className="font-montserrat font-[500] text-[22px] pl-[10px]">Connect over call</h5>
                  </div>
                  <a className='font-poppins font-[400] text-[16px]' href="tel:+91 8454896170">+91 84548-96170</a>
                </div>

                <div className="w-[100%] md:w-[33%] border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">

                  <div className="flex flex-row items-center pb-[10px]">
                    <MdEmail width='20px' height='20px' fill='blue' />
                    <h5 className="font-montserrat font-[500] text-[22px] pl-[10px]">Contact via mail</h5>
                  </div>

                  <a className='font-poppins font-[400] text-[16px]' href="mailto:tausif8454@gmail.com">tausif8454@gmail.com</a>
                </div>

              </div>

            </div>


            <div className="flex flex-col md:flex-row">

              <form
                ref={formRef} onSubmit={handlerSubmitForm}
                className="w=[100%] md:w-[55%] mb-20 space-y-5 md:pr-10 relative "
              >

                <div>

                  <InputBar html_for="name" label_text="Your Name"
                    type="text" id="name" name="from_name" placeholder="eg: John Doe"
                    value={cFormData.name} onChange_func={(e) => setcFormData({ ...cFormData, name: e.target.value })}
                    additionalClassName={errorMsg.nameStyle}
                  />
                  {
                    errorMsg.name && <span className='text-[14px]/[20px] text-[#c31717] ' >The Field is required</span>
                  }

                </div>

                <div>

                  <InputBar html_for="email" label_text="Your Email"
                    type="email" id="email" name="from_email" placeholder="eg: name@flowbite.com"
                    value={cFormData.email} onChange_func={(e) => setcFormData({ ...cFormData, email: e.target.value })}
                    additionalClassName={errorMsg.emailStyle}
                  />
                  {
                    errorMsg.email && <span className='text-[14px]/[20px] text-[#c31717] ' >The Field is Incorrect!</span>
                  }
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-poppins text-[18px] font-medium text-black-1c">Your Message</label>
                  <textarea
                    id="message" rows="8" name='message' value={cFormData.message} onChange={(e) => setcFormData({ ...cFormData, message: e.target.value })}

                    className="w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px] focus:border-sky-500 "
                    placeholder="Leave a messege..."></textarea>
                </div>

                <Button type="submit" id="newsletter_submit_btn" text='Send' btnWidth='fit' />

                {
                  toggleMsg &&
                  <div

                    className={`input_msg text-white inline-flex absolute bottom-[23px] right-[40px] px-[30px] py-[6px] rounded-[6px] ${succesMsg.additionalClass} `}
                  >

                    <span className='text-[16px]/[22px] ' >{succesMsg.message}</span>

                  </div>
                }

              </form>

              <iframe className="w-[100%] md:w-[45%] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.8908350351486!2d74.34184322233432!3d34.20863162896153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427a1554541875c5%3A0x767cf96bc9f82add!2sBeyond%20Basic%20Home!5e0!3m2!1sen!2sin!4v1750772833106!5m2!1sen!2sin" />
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}

export default Contact
