import {useState} from 'react';

//import './login.css';

export default function LoginPage() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handler = (e) => {
        e.preventDefault();
        
        if(e.target.name==="email"){
            setEmail(e.target.value);    
        }
        else if(e.target.name==="password"){
            setPassword(e.target.value);          
        }

    }

    const logmein = async (e) => {
        e.preventDefault();
        try {

            if(!email || !password){
                throw Error("Please enter your email and passxcsword")
            }

            const loginData = JSON.stringify({email, password});

            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: loginData,
            });

            const respounceData = await response.json();

            if(response.status == 200){
                console.log("Success in login baby")
                console.log(respounceData)
            }else{
                console.log("Error in login 😥")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return(

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">

                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Log in
                </h1>

                <form className="mt-6">
                    <div className="mb-2">
                        <label for="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handler}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            name="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={handler}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a href="#" className="text-xs text-purple-600 hover:underline">
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button onClick={logmein}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
             
        
        // <>      
        //     <form className='grid gap-4'>




        //         {/* email */}
        //         <div class="form-group">

        //         <label for="email" class="form-group__label">
        //             <span data-splitting="" aria-hidden="true" class="words chars splitting" style="--word-total:1; --char-total:5;">
        //             <span class="word" data-word="Email" style="--word-index:0;">
        //                 <span class="char" data-char="E" style="--char-index:0;">E</span>
        //                 <span class="char" data-char="m" style="--char-index:1;">m</span>
        //                 <span class="char" data-char="a" style="--char-index:2;">a</span>
        //                 <span class="char" data-char="i" style="--char-index:3;">i</span>
        //                 <span class="char" data-char="l" style="--char-index:4;">l</span>
        //                 </span>
        //             </span>
        //         </label>
                
                
        //         <input required type="email" id="email" class="form-input" title="Enter valid email address" placeholder="Enter valid email address" />
        //         <div class="form-group__error">Enter a valid email address</div>


        //         </div>


        //         {/* password */}
        //         <div class="form-group">
        //         <label for="password" class="form-group__label">
        //             <span data-splitting="" aria-hidden="true" class="words chars splitting" style="--word-total:1; --char-total:8;">
        //             <span class="word" data-word="Password" style="--word-index:0;">
        //                 <span class="char" data-char="P" style="--char-index:0;">P</span>
        //                 <span class="char" data-char="a" style="--char-index:1;">a</span>
        //                 <span class="char" data-char="s" style="--char-index:2;">s</span>
        //                 <span class="char" data-char="s" style="--char-index:3;">s</span>
        //                 <span class="char" data-char="w" style="--char-index:4;">w</span>
        //                 <span class="char" data-char="o" style="--char-index:5;">o</span>
        //                 <span class="char" data-char="r" style="--char-index:6;">r</span>
        //                 <span class="char" data-char="d" style="--char-index:7;">d</span>
        //             </span>
        //             </span>
        //         </label>

        //         <input required="" type="password" id="password" class="form-input" placeholder="Password" title="Password must be at least 8 characters" pattern=".{8,}" />
        //         <div class="form-group__error">Password must be at least 8 characters</div>
        //         </div>

        //         {/* subbmit buttor */}
        //         <button type="submit">Submit</button>


        //     </form>

        // </>
    );
}



{/*

<div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Logo
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                href="#"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

*/}