import {
  Card,
  CardHeader,
  CardBody,
  Heading4,
  Button
} from "@material-tailwind/react";
import { useState } from "react";
import { registration } from "../axios/axios";
import Input from "./Input/Input";

export default function Registration() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="sticky flex justify-center mt-4">
      <Card className="w-96 mt-6">
        <CardHeader color="blue" className="relative h-56">
          <Heading4>Registration</Heading4>
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
            onClick = {() => registration(login, password)}
          >
            <p className="text-gray-800">Зарегестрироваться</p>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}