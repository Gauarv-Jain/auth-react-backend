import {useState} from 'react';
import validator from 'validator';

export default function SignupPage() {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cpassword, setCpassword] = useState(null);

    const handler = (e) => {
        e.preventDefault();
        
        if(e.target.name==="name"){
            setName(e.target.value);         
        }
        else if(e.target.name==="email"){
            setEmail(e.target.value);    
        }
        else if(e.target.name==="password"){
            setPassword(e.target.value);          
        }
        else if(e.target.name==="cpassword"){
            setCpassword(e.target.value);
        }

    }

    const regclick = async (e) => {
        e.preventDefault();
        try {

            if(password!==cpassword){
                throw Error('Password and conform password not the same')
            }
            if(!validator.isEmail(email)){
                throw Error('Enter correct email')
            }
            if(!validator.isStrongPassword(password)){
                throw Error('Pass word not strong enogh')
            }

            const postData = JSON.stringify({
                name: name,
                email: email,
                password: password,
            });

            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: postData,
            });

            const responseData = await response.json();

            if (response.status === 201) {
                console.log("User Made Succesdssully")
                console.log(responseData)
            } else {
                console.log(responseData.error);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                
                {/* signup hedding */}
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            SignUp
                        </h3>
                    </a>
                </div>

                {/* input fields and buttonss */}
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>

                        {/* name field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 undefined"> Name </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handler}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        {/* email field */}
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Email</label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handler}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        {/* pass field */}
                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 undefined">Password</label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handler}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        {/* conform pass field */}
                        <div className="mt-4">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 undefined">Confirm Password</label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="cpassword"
                                    onChange={handler}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>


                        {/* alredy register and register button  */}
                        <div className="flex items-center justify-end mt-4">

                            <a href="/login" className="text-sm text-gray-600 underline hover:text-gray-900">Already registered?</a>

                            <button type="submit"
                                onClick={regclick}
                                className="inline-flex items-center 
                                px-4 py-2 ml-4 
                                text-xs font-semibold tracking-widest
                                text-white uppercase 
                                transition duration-150 ease-in-out 
                                bg-gray-900 
                                border border-transparent 
                                rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}