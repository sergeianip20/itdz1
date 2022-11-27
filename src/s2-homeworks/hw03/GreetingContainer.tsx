import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string)=> void // need to fix any
}

export const pureAddUser = (
    name: string,
    setError: Function,
    setName: Function,
    addUserCallback: Function
) => {
    if(name.trim() !== ''){
        addUserCallback(name);
        setName("");
    } else {
        setError("Ошибка! Введите имя!");
    }
};

export const pureOnBlur = (name: string, setError: Function) => {
    if (name.trim() === "") {
        setError("Ошибка! Введите имя!");
    }else {
        setError('')
    }
};

export const pureOnEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    addUser: Function
) => {
    if (e.key === 'Enter') {
        addUser();
    }
};

// более простой и понятный для новичков
function GreetingContainer(props: GreetingContainerPropsType) {

// более современный и удобный для про :)//
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  //  users,
    //addUserCallback,
//}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, props.addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = props.users.length // need to fix
    const lastUserName =  props.users[props.users.length-1].name

// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
