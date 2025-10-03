import {KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';
import FormField from '../components/FormField';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };
    
    return (
        <div className='flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
             <h2 className='mt-6 text-center text-3xl font-extrabold text-emerald-600'>
                Crear Cuenta
                </h2>
        </div>
          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-8'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                <FormField
                    fieldName="email"
                    FieldIcon={Mail}
                    fieldValue={email}
                    setField={setEmail}
                    />
                <FormField
                    fieldName="password"
                    FieldIcon={KeyRound}
                    fieldValue={password}
                    setField={setPassword}
                    />
                </form>
            </div>
          </div>
        </div>
    );
};

export default LoginPage;