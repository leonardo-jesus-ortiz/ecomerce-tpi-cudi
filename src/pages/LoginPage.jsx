import {KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';
import FormContainer from '../components/FormContainer';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const fields = [
        {name: 'email', label: 'Ingrese su Correo Electrónico', icon: Mail, value: email, onChange: setEmail, type: 'email', placeholder: 'Ej: juan@example.com'},
        {name: 'password', label: 'Ingrese su Contraseña', icon: KeyRound, value: password, onChange: setPassword, type: 'password', placeholder: 'Mínimo 8 caracteres'},
    ];
    
    return (
        <FormContainer title="Iniciar Sesión" fields={fields} onSubmit={handleSubmit}
        submitlabel='Ingresar'/>
    );
};

export default LoginPage;