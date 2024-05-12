import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitHandler=async ()=>{
    console.log('submit');
  }
  //Cet effet est utile pour rediriger automatiquement l'utilisateur
  //vers l'URL /dashboard dès qu'il se connecte à votre application.
  useEffect(() => {
    // Vérifie si 'user' est vrai (utilisateur connecté)
    if (user) {
      // Navigue vers l'URL '/dashboard'
      navigate("/dashboard");
    }
  }, [user]); // Exécuter cet effet chaque fois que la valeur de 'user' change

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-white">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/*left side*/}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-700">
              Manage all your task in one place!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-sky-600">
              <span>Cloud-Based</span>
              <span>Task Manager</span>
            </p>
            <div className='cell'>
              <div className='circle rotate-in-up-left'></div>
            </div>
          </div>
        </div>
        {/*right side*/}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(submitHandler)} className='form-container w-full md:w-[400px] flex flex-col  gap-y-8 bg-white px-10 pt-14 pb-14'>
          <div className="">
           <p className="text-sky-600 text-3xl font-bold text-center">Welcome back!</p>
           <p className="text-center text-base text-gray-700 mt-2"> Keep all your credential safge</p>
          </div>
           <div className="flex flex-col gap-y-6">
            <TextBox 
              placeholder="email@example.com"
              type='email'
              name='email'
              label='Email Address'
              className='w-full rounded-full'
              register={register("email", { required: 'Email Adress is required',})}
              error={errors.email ? errors.email.message:''}
            />
            <TextBox 
              placeholder="password"
              type='password'
              name='password'
              label='Password'
              className='w-full rounded-full'
              register={register ("password", {required : 'Password is required',})}
              error={errors.password ? errors.password.message:''}
            />
            <span className="text-sm text-gray-600 hover::text-blue-600 hover:underline cursor-pointer">Forget Password?</span>
             <Button 
             type='submit' 
             label='Submit'
             className="w-full h-10 bg-sky-700 text-white rounded-full"/>

           </div>
        </form>
        </div>
      </div>
    </div>
  );
};
