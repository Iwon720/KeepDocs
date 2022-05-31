import {
    Card,
    CardHeader,
    CardBody,
    Heading4,
    Button
} from "@material-tailwind/react";
import { useState } from "react";
import { singin } from "../axios/axios";
import { useDispatch } from "react-redux";
import Input from "./Input/Input";

export default function Login() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div className="sticky flex justify-center mt-4">
            <Card className="w-96 mt-6">
                <CardHeader color="blue" className="relative h-56">
                    <Heading4>Sing In</Heading4>
                </CardHeader>
                <CardBody className="text-center">
                    <Input value={login} setValue={setLogin} type='text' placeholer="Введите логин" />
                    <Input value={password} setValue={setPassword} type='password' placeholer="Введите пароль" />
                    <Button
                        color="blueGray"
                        buttonType="link"
                        size="sm"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="dark"
                        className='h-15'
                        onClick={() => dispatch(singin(login, password))}
                    >
                        <p className="text-gray-800">Войти</p>
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}