

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);

//   // const allBlogs = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:3000/api/User/post");
//   //     console.log(response.data.data);
//   //     setBlogs(response.data.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //     setBlogs([]);
//   //   }
//   // };
//   const allBlogs = async () => {
//     try {
//         const response = await axios.get("https://boiler-plate-mu.vercel.app/api/UserPost/post"),; // Ensure the URL matches your backend
//         console.log("Fetched Posts:", response.data.data);
//         setBlogs(response.data.data);
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//         setBlogs([]);
//     }
// };


//   useEffect(() => {
//     allBlogs();
//   }, []);

//   return (
//     <>
//       {/* <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
//         {blogs.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {blogs.map((blog) => (
//               <div key={blog._id} className="card w-full bg-base-100 shadow-xl" style={{ minHeight: '250px' }}>
//                 <div className="card-body" style={{ padding: '16px' }}>
//                 {blog.createdBy?.image && (
//   <img
//     src={blog.createdBy.image}
//     alt="Author Profile"
//     style={{
//       width: "50px",
//       height: "50px",
//       borderRadius: "50%",
//       objectFit: "cover",
//     }}
//   />
// )}
// <h3>{blog.createdBy?.name}</h3>

//                   <h2 className="card-title">{blog.title}</h2>
//                   <div
//                     style={{
//                       maxHeight: '100px',
//                       overflowY: 'auto',
//                       overflowX: 'hidden',
//                       display: 'block',
//                       paddingRight: '5px',
//                     }}
//                   >
//                     {blog.description}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No blogs available.</p>
//         )}
//       </div> */}
//     </>
//   );
// };

// const MyComponent = () => {
//   const [blogs, setBlogs] = useState([]); 
//   const [error, setError] = useState(null); 

//   const allBlogs = async () => {
//       try {
//           const response = await axios.get("https://boiler-plate-mu.vercel.app/api/UserPost/post");
//           console.log("Fetched Posts:", response.data.posts); 
//           console.log("Fetched Posts:", response.data.posts); 

//           setBlogs(response.data.posts); 
//       } catch (err) {
//           console.error("Error fetching posts:", err.message);
//           setError("Failed to fetch posts");
//           setBlogs([]);
//       }
//   };

//   useEffect(() => {
//       allBlogs()
//   }, []);

//   return (
//       <div>
//           {error && <p>{error}</p>}
//           {blogs.length > 0 ? (
//               <ul>
//                   {blogs.map((blog) => (
//                       <li key={blog._id}>{blog.title}</li>
//                   ))}
//               </ul>
//           ) : (
//               <p>No blogs available.</p>
//           )}
//       </div>
//   );
// };


// export default MyComponent;



// const Home = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     const allBlogs = async () => {
//         try {
//             const response = await axios.get("https://boiler-plate-mu.vercel.app/api/UserPost/post");
//             console.log("Fetched Posts:", response.data.posts); // Check the structure
//             setBlogs(response.data.posts || []); // Ensure it's an array
//         } catch (err) {
//             console.error("Error fetching posts:", err.message);
//             setError("Failed to fetch posts");
//         } finally {
//             setIsLoading(false); // Stop loading
//         }
//     };

//     useEffect(() => {
//         allBlogs(); // Fetch blogs on mount
//     }, []);

//     return (
//         <div>
//             {console.log("Blogs to Render in JSX:", blogs)} {/* Debugging */}
//             {isLoading ? (
//                 <p>Loading blogs...</p>
//             ) : error ? (
//                 <p>{error}</p>
//             ) : blogs.length > 0 ? (
//                 <ul>
//                     {blogs.map((blog) => (
//                         <div key={blog._id || blog.id}>
//                           <h3>{blog.content}</h3>
//                           <img src={blog.image} alt="" />
//                         </div>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No blogs available.</p>
//             )}
//         </div>
//     );
// };

// export default Home;

import axios from "axios";
import { useState } from "react";

const Home = () => {
  // Loan types and subcategories
  const loanOptions = {
    "Wedding Loan": ["Valima", "Furniture", "Valima Food", "Jahez"],
    "Home Construction Loan": ["Structure", "Finishing"],
    "Business Startup Loan": ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    "Education Loan": ["University Fees", "Child Fees Loan"],
  };

  // State for selected loan type and subcategory
  const [loanType, setLoanType] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://boiler-plate-mu.vercel.app/api/loan/apply", {
        loanType,
        subcategory,
        amount,
        duration,
      });

      if (response.status === 201) {
        alert(response.data.message); // Success message from server
      } else {
        alert(response.data.message); // Handle other statuses
      }
    } catch (error) {
      console.error("Error applying for loan:", error);
      alert(
        error.response?.data?.message || "An unexpected error occurred. Please try again later."
      );
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Apply for a Loan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Loan Type Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Loan Type</label>
          <select
            value={loanType}
            onChange={(e) => {
              setLoanType(e.target.value);
              setSubcategory(""); // Reset subcategory when loan type changes
            }}
            className="w-full border p-2 rounded"
            required
          >
            <option value="" disabled>Select Loan Type</option>
            {Object.keys(loanOptions).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Dropdown */}
        {loanType && (
          <div>
            <label className="block mb-1 font-medium">Subcategory</label>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full border p-2 rounded"
              required
            >
              <option value="" disabled>Select Subcategory</option>
              {loanOptions[loanType].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Amount Input */}
        <div>
          <label className="block mb-1 font-medium">Amount (PKR)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter loan amount"
            required
          />
        </div>

        {/* Duration Input */}
        <div>
          <label className="block mb-1 font-medium">Duration (Years)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter duration in years"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Loan Application
        </button>
      </form>
    </div>
  );
};

export default Home;


