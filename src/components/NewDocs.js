import { Icon, Button } from "@material-tailwind/react"
import Input from "./Input/Input"
import { useState } from "react"
import { newDoc } from "../axios/axios"
import { useDispatch, useSelector } from "react-redux"
import { setDoc } from "../reducer/docReducer"

function NewDocs() {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.currentUser)
    // const currentDoc = useSelector(state => state.doc.currentDoc)
    // currentUser.push()

    return (
        <div className="mx-4 my-4 flex justify-center" >
            <Input value={name} setValue={setName} type='text' placeholer="Введите имя документа" />
            <Button
                color="lightBlue"
                buttonType="link"
                size="sm"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className='h-15'
                onClick={() => dispatch(newDoc(name))}
            >
                <svg class="h-14 w-14 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
            </Button>
        </div>
    )
}

export default NewDocs