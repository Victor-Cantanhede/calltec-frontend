'use client';
import { useRef, useState } from 'react';
import { login } from 'services/authService/authService';

import { FaUser, FaLock } from 'react-icons/fa6';
import { FiLogIn } from 'react-icons/fi';
import Input01 from 'components/Inputs/Input01';
import Button01 from 'components/Buttons/Button01';
import Image from 'next/image';


export default function Login() {
  const [inputUser, setInputUser] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const inputRememberMeRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();    
    const username: string = inputUser;
    const password: string = inputPassword;
    
    setLoading(true);

    try {
      const response = await login({username, password});
      console.log(response);
      
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className='h-full pt-[20dvh] bg-gray-100 overflow-auto'>

      <div className='h-[max-content] w-[400px] max-w-[95%] m-auto px-[20px] py-[40px] flex flex-col justify-center items-center gap-3 shadow-xl bg-white'>

        <Image src='/logo.png' alt='logo' width={120} height={120} />
        <h1>Login</h1>

        <form onSubmit={handleSubmit} autoComplete='off' className='w-[70%] flex flex-col justify-center items-start gap-3'>

          <Input01
            icon={<FaUser />}
            placeholder={'Usuário'}
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />

          <Input01
            icon={<FaLock />}
            type={'password'}
            placeholder={'Senha'}
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />

          <label htmlFor='iRemember' className='flex justify-center items-center gap-1.5'>
            <input ref={inputRememberMeRef} type='checkbox' id='iRemember' />
            <p>Manter-me conectado</p>
          </label>

          <Button01
            margin={'10px 0 0 0'}
            type={'submit'}
            value={'Entrar'}
            icon={<FiLogIn />}
            disabled={loading}
            loading={loading}
          />

        </form>

      </div>

    </div>
  );
}