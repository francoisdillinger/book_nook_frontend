import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default function HomeSection(){
    const [toggleForm, setToggleForm] = useState(true);
    return(
        <div onClick={() => setToggleForm(!toggleForm)} className="md:h-screen bg-bookNook bg-cover bg-center xl:bg-bottom bg-no-repeat flex justify-center items-center px-6 mx-auto lg:py-2">
            <div className=" w-full bg-white rounded-lg shadow dark:border mt-8 mb-11 lg:mt-16 lg:mb-60 md:mt-11 md:mb-40 sm:max-w-md md:max-w-xl xl:p-0 xl:mb-80  dark:bg-gray-800 dark:border-gray-700">
                {toggleForm?
                    <LoginForm  />
                :
                    <SignUpForm  />
                }
            </div>
        </div>
    )
}