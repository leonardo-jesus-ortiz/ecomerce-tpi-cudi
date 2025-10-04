import { useState } from 'react';
import { KeyRound, Mail, Smartphone, User } from "lucide-react";
import FormField from "../components/FormField";
import TitleForm from "../components/TitleForm";

const SignUpPage = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');
        const [lastName, setLastName] = useState('');
        const [iphone, setIphone] = useState('');
        const [confirmPassword, setConfirmPassword] = useState(''); 

        const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Name:', name);
        console.log('Last Name:', lastName);
        console.log('Iphone:', iphone);
        console.log('Confirm Password:', confirmPassword);
    };
    return (
        <div>
            <TitleForm title="Registrarse" />
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-8'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                <FormField 
                    fieldName="name"
                    FieldIcon={User}
                    fieldValue={name}
                    setField={setName}
                />
                <FormField
                    fieldName="lastName"
                    FieldIcon={User}
                    fieldValue={lastName}
                    setField={setLastName}
                />
                <FormField
                    fieldName="iphone"
                    FieldIcon={Smartphone}
                    fieldValue={iphone}
                    setField={setIphone}
                />
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
                <FormField
                    fieldName="confirmPassword"
                    FieldIcon={KeyRound}
                    fieldValue={confirmPassword}
                    setField={setConfirmPassword}
                />
                <button
                    className='w-full flex justify-center border rounded-md border-transparent
                    bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700
                    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'
                    type='submit'>Enviar </button>
                </form>
            </div>
          </div>
        </div>
    );
}

export default SignUpPage;