import { useState } from 'react';
import { KeyRound, Mail, Smartphone, User } from "lucide-react";
import FormContainer from '../components/FormContainer';

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
    const fields = [
            {name: 'name', 
            label: 'Ingrese su Nombre: ', 
            icon: User, 
            value: name, 
            onChange: setName, 
            type: 'text', 
            placeholder: 'Ej: Juan'},

            {name: 'lastName', 
            label: 'Ingrese su Apellido: ', 
            icon: User, 
            value: lastName, 
            onChange: setLastName, 
            type: 'text', 
            placeholder: 'Ej: Pérez'},

            {name: 'iphone', 
            label: 'Ingrese su Teléfono: ', 
            icon: Smartphone, 
            value: iphone, 
            onChange: setIphone, 
            type: 'tel', 
            placeholder: 'Ej: +1234567890'},

            {name: 'email', 
            label: 'Ingrese su Correo Electrónico: ', 
            icon: Mail, 
            value: email, 
            onChange: setEmail, 
            type: 'email', 
            placeholder: 'Ej: juan@example.com'},

            {name: 'password', 
            label: 'Ingrese su Contraseña: ', 
            icon: KeyRound, 
            value: password, 
            onChange: setPassword, 
            type: 'password', 
            placeholder: 'Mínimo 8 caracteres'},

            {name: 'confirmPassword',
            label: 'Confirmar Contraseña: ', 
            icon: KeyRound,
            value: confirmPassword, 
            onChange: setConfirmPassword, 
            type: 'password', 
            placeholder: 'Reingrese su contraseña'},
        ];
    return (
        <FormContainer title="Crear Cuenta" fields={fields} onSubmit={handleSubmit}
        submitlabel='Completar'/>
  
    );
}

export default SignUpPage;