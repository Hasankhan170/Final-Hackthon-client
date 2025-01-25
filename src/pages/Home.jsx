import axios from "axios";
import { useEffect, useState } from "react";

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

const MyComponent = () => {
  const [blogs, setBlogs] = useState([]); 
  const [error, setError] = useState(null); 

  const allBlogs = async () => {
      try {
          const response = await axios.get("https://boiler-plate-mu.vercel.app/api/UserPost/post");
          console.log("Fetched Posts:", response); 
          setBlogs(response.data.posts); 
      } catch (err) {
          console.error("Error fetching posts:", err.message);
          setError("Failed to fetch posts");
          setBlogs([]);
      }
  };

  useEffect(() => {
      allBlogs()
  }, []);

  return (
      <div>
          {error && <p>{error}</p>}
          {blogs.length > 0 ? (
              <ul>
                  {blogs.map((blog) => (
                      <li key={blog._id}>{blog.title}</li>
                  ))}
              </ul>
          ) : (
              <p>No blogs available.</p>
          )}
      </div>
  );
};


export default MyComponent;
