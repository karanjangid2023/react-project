import React, { useState } from "react";
 

const SignInPage = () => {
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting  Email: ${email} Password: ${password}`);
  };

  return (

<div className="  bg-stone-400 h-screen">      {/*main div */}
     
    <div className="text-center"> 
            <div className="  lg:w-[450px]   bg-red-500 mx-auto grid grid-cols-1 py-2"> 
                  <div className="mx-auto">
                      <img src="logo.png" className="w-64 "/>
                  </div>

            <div>
            <div></div>
            <div></div>
            </div>
            <div></div>

        </div>





             {/* <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-medium mb-6">Sign In</h1>
          <div className="mb-4  ">
            <label className="block font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-lg"
            />
          </div>
           
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Submit
          </button>
        </form> */}
      
    </div>   
</div>

  );
};

export default SignInPage;
