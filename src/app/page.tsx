'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from 'services/authService/authService';

import { FaUser, FaLock } from 'react-icons/fa6';
import { FiLogIn } from 'react-icons/fi';
import Input01 from 'components/Inputs/Input01';
import Button01 from 'components/Buttons/Button01';
import Image from 'next/image';


export default function LoginPage() {
  const [inputUser, setInputUser] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loginFailed, setLoginFailed] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    const username: string = inputUser;
    const password: string = inputPassword;

    setLoading(true);

    try {
      await login({username, password});
      router.push('/dashboard');
      
    } catch (error) {
      const message: string = `${error}`;
      console.error(message);
      setLoginFailed(message);
      setLoading(false);
    }
  };

  return (
    <div className='h-full sm:pt-[20dvh] bg-gray-100 overflow-auto'>

      <div className='h-full sm:h-[max-content] w-full sm:w-[400px] m-auto px-[20px] py-[40px] flex flex-col justify-center items-center gap-3 shadow-xl bg-white'>

        <Image src='/logo.png' alt='logo' priority width={120} height={120} />
        <h1>Login</h1>

        <form onSubmit={handleSubmit} autoComplete='off' className='w-[100%] sm:w-[70%] flex flex-col justify-center items-start gap-3 transition ease-linear duration-300'>

          <Input01
            icon={<FaUser />}
            placeholder={'Usuário'}
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            required
          />

          <Input01
            icon={<FaLock />}
            type={'password'}
            placeholder={'Senha'}
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />

          {loginFailed &&
            <p className='w-full pl-2 pr-2 border-l-2 border-l-red-600 rounded bg-red-100 text-red-600 text-[0.8rem]'>{loginFailed}</p>
          }

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