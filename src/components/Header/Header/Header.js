import { Icon } from "@material-tailwind/react";
import Button from "@material-tailwind/react/Button";
import { useDispatch, useSelector } from "react-redux";
import './style.css'
import { NavLink } from "react-router-dom";
import { logout } from "../../../reducer/userReducer";
import { editDoc } from "../../../axios/axios";

function Header() {

    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    // const currentDoc = useSelector(state => state.doc.currentDoc)
    // let a = document.getElementsByClassName("ql-editor");
    // let b = a[0].innerHTML
    // const id = cirrentDoc.id;
    // const name = currentDoc.name;
    // const innerData = b;

    return (
        <div className="sticky top-0 z-50 flex items-center px-6 shadow-md bg-white">
            {/* <Button
                color="lightBlue"
                buttonType="link"
                size="sm"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className='h-15'
                onClick={() => dispatch(editDoc(id, name, innerData))}
            >
                <Icon name='description' size='5xl' />
                <h1 className="ml-2 text-gray-800">KeepDocs</h1>
            </Button> */}
            <a href="/">
                <Button
                    color="lightBlue"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    className='h-15'
                >
                    <Icon name='description' size='5xl' />
                    <h1 className="ml-2 text-gray-800">KeepDocs</h1>
                </Button>
            </a>

            <div className="mr-4 mx-100 md:mx-20 flex items-center flex-grow px-5 py-2 in bg-gray-100 text-gray-600 focus-within:bg-white focus-within:shadow-md focus-within:text-black" >
                <Button
                    color="blueGray"
                    buttonType="link"
                    size="sm"
                    rounded={true}
                    block={false}
                    iconOnly={true}
                    ripple="dark"
                >
                    <Icon name="search" size="2xl" />
                </Button>
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            {!isAuth &&
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4">
                    <NavLink to="/login">Войти</NavLink>
                </button>
            }

            {!isAuth &&
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <NavLink to="/registration">Зарегестрироваться</NavLink>
                </button>
            }

            {isAuth &&
                <p className="mr-4">
                    {currentUser.login}
                </p>
            }

            {isAuth &&
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => dispatch(logout())}
                >
                    Выйти
                </button>
            }


        </div >
    )
}

export default Header