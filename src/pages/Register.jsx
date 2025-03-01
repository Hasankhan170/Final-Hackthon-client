// import axios from "axios";
// import {useForm} from "react-hook-form";
// import {useNavigate} from "react-router-dom"


// const Register = () => {

//   const navigate = useNavigate()

  
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm()
  
//     const submissions = async (data) => {
    
//         // Create FormData object
//         const formData = new FormData();
//         formData.append("username", data.name);
//         formData.append("email", data.email);
//         formData.append("password",  data.password);
       

//         try {
//           const response = await axios.post(
//             "https://final-hackthon-backend-teal.vercel.app/api/user/register",
//             formData,
//             {
//               headers: {
//                 "Content-Type": "multipart/form-data",
//               },
//             }
//           );
          
//           console.log("User registered successfully:", response.data);
//           const userId = response.data.data._id;  
//           localStorage.setItem("userId",userId)
        
//           console.log("User id:", response.data.data._id);
         
//           navigate("/login")
//         } catch (error) {
//           console.error("Error registering user:", error.response?.data || error.message);
//         }
//       };



    
//   return (
//     <>
//     <div className="flex justify-center mt-5 p-5">
//       <form
//         style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
//         className="p-8 w-full max-w-md bg-white rounded-lg"
//         onSubmit={handleSubmit(submissions)}
//       >
//         <h1 className="text-lg font-bold p-2 mb-5">Register</h1>
//         <input
//           className="input input-bordered w-full mb-3"
//           {...register("name", { required: "Name is required" })}
//           type="text"
//           placeholder="Username"
//         />
//         {errors.name && <p className="text-red-500 mb-2 text-start mx-1">{errors.name.message}</p>}

//         <input
//           className="input input-bordered w-full mb-3"
//           {...register("email", { required: "Email is required" })}
//           type="email"
//           placeholder="Email"
//         />
//         {errors.email && <p className="text-red-500 mb-2 text-start mx-1">{errors.email.message}</p>}

//         <input
//           className="input input-bordered w-full mb-3"
//           {...register("password", { required: "Password is required" })}
//           type="password"
//           placeholder="Password"
//         />
//         {errors.password && <p className="text-red-500 text-start mx-1 mb-2">{errors.password.message}</p>}

        
//         <button className="btn bg-info hover:bg-info w-full text-lg text-white" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default Register







import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"


const Register = () => {

  const navigate = useNavigate()

  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


    const submissions = async (data) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("cnic", data.cnic);
    
      try {
        const response = await axios.post(
          "https://boiler-plate-mu.vercel.app/api/user/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("User registered successfully:", response.data);
        navigate('/Login')
      } catch (error) {
        console.error("Error registering user:", error);
        if (error.response) {
          console.error("API response error:", error.response.data);
        } else if (error.request) {
          console.error("Network error: No response received", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    };



    
  return (
    <>
    <div className="flex justify-center mt-5 p-5">
      <form
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        className="p-8 w-full max-w-md bg-white rounded-lg"
        onSubmit={handleSubmit(submissions)}
      >
        <h1 className="text-lg font-bold p-2 mb-5">Register</h1>
        <input
          className="input input-bordered w-full mb-3"
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Username"
        />
        {errors.name && <p className="text-red-500 mb-2 text-start mx-1">{errors.name.message}</p>}

        <input
          className="input input-bordered w-full mb-3"
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 mb-2 text-start mx-1">{errors.email.message}</p>}

        <input
          className="input input-bordered w-full mb-3"
          {...register("cnic", { required: "cnic is required" })}
          type="cnic"
          placeholder="cnic"
        />
        {errors.cnic && <p className="text-red-500 text-start mx-1 mb-2">{errors.cnic.message}</p>}

        <button className="btn bg-info hover:bg-info w-full text-lg text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default Register;