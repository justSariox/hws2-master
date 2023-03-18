import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'


type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    // !name.trim() ? setError('Ошибка! Введите имя!') : addUserCallback(name)
    // setName('')
    if (!name.trim()) {
        setError('Имя не может быть пустым')
    } else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
    !name.trim() ? setError('Имя не может быть пустым') : setError('')

}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [count, setCount] = useState<number>(0)
    const usersCount = () => {
        setCount(users.length)
    }
    useEffect(() => usersCount(), [users])


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        setError('')// need to fix
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const trimmedName = name.trim()

    const totalUsers = count // need to fix
    const lastUserName = trimmedName // need to fix

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
