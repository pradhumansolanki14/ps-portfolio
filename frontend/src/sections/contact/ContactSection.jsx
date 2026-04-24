// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { useRef } from "react";
// import emailjs from "emailjs-com";

// const ContactSection = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//         },
//         () => {
//           alert("Failed to send message");
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen px-6 py-20 flex items-center justify-center"
//     >
//       <div className="max-w-5xl w-full">
        
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-3xl md:text-4xl font-semibold text-center mb-12"
//         >
//           Contact Me
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-10">
          
//           {/* Left: Info */}
//           <div className="flex flex-col gap-6 justify-center">
            
//             <p className="text-gray-600 dark:text-gray-400">
//               Feel free to reach out for collaborations or just a friendly chat.
//             </p>

//             <a
//               href="mailto:your@email.com"
//               className="flex items-center gap-3 hover:text-blue-500"
//             >
//               <FaEnvelope /> your@email.com
//             </a>

//             <a
//               href="https://github.com/yourusername"
//               target="_blank"
//               className="flex items-center gap-3 hover:text-blue-500"
//             >
//               <FaGithub /> GitHub
//             </a>

//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               className="flex items-center gap-3 hover:text-blue-500"
//             >
//               <FaLinkedin /> LinkedIn
//             </a>
//           </div>

//           {/* Right: Form */}
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="flex flex-col gap-4"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="5"
//               required
//               className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
//             />

//             <button
//               type="submit"
//               className="bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg hover:scale-105 transition"
//             >
//               Send Message
//             </button>
//           </form>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;   



////////////////////////////////////////////////


// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";
// import { sendContact } from "../../api/contact.api";

// const ContactSection = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       await sendContact(form);
//       alert("Message sent successfully!");

//       setForm({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (error) {
//       alert("Failed to send message");
//     }

//     setLoading(false);
//   };

//   return (
//     <section>
//       <div className="grid md:grid-cols-2 gap-10">

//         {/* LEFT */}
//         <div className="flex flex-col gap-6 justify-center">

//           <p className="text-gray-600 dark:text-gray-400">
//             Feel free to reach out for collaborations or just a friendly chat.
//           </p>

//           <a
//             href="mailto:your@email.com"
//             className="flex items-center gap-3 hover:text-blue-500"
//           >
//             <FaEnvelope /> your@email.com
//           </a>

//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 hover:text-blue-500"
//           >
//             <FaGithub /> GitHub
//           </a>

//           <a
//             href="https://linkedin.com/in/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 hover:text-blue-500"
//           >
//             <FaLinkedin /> LinkedIn
//           </a>
//         </div>

//         {/* RIGHT FORM */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
//           />

//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             required
//             value={form.message}
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//             className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg hover:scale-105 transition"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//         </form>

//       </div>
//     </section>
//   );
// };

// export default ContactSection;



// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";
// import { sendContact } from "../../api/contact.api";

// const ContactSection = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       await sendContact(form);
//       alert("Message sent successfully!");

//       setForm({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (error) {
//       alert("Failed to send message");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="relative px-6 md:px-12 overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30" 
//         />
//         <div className="absolute left-1/2 -translate-x-1/2 top-10 w-80 h-80 
//           bg-emerald-400/10 blur-3xl" />
//       </div>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT */}
//         <div className="flex flex-col gap-6 justify-center">

//           <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
//             Feel free to reach out for collaborations or just a friendly chat.
//           </p>

//           {/* LINKS */}
//           <a
//             href="mailto:your@email.com"
//             className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//             hover:text-emerald-400 transition"
//           >
//             <FaEnvelope /> your@email.com
//           </a>

//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//             hover:text-emerald-400 transition"
//           >
//             <FaGithub /> GitHub
//           </a>

//           <a
//             href="https://linkedin.com/in/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//             hover:text-emerald-400 transition"
//           >
//             <FaLinkedin /> LinkedIn
//           </a>
//         </div>

//         {/* RIGHT FORM */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">

//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             required
//             value={form.message}
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="group inline-flex items-center justify-center gap-3 
//             py-3 rounded-full 
//             border border-gray-300 dark:border-gray-700 
//             hover:border-emerald-400 
//             transition-all duration-300"
//           >
//             <span className="font-medium">
//               {loading ? "Sending..." : "Send Message"}
//             </span>

//             <span className="transition-transform group-hover:translate-x-1">
//               →
//             </span>
//           </button>

//         </form>

//       </div>
//     </section>
//   );
// };

// export default ContactSection;




//////////////////////////////////////////


// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";
// import { sendContact } from "../../api/contact.api";
// import { motion } from "framer-motion";

// const ContactSection = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       await sendContact(form);
//       alert("Message sent successfully!");

//       setForm({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (error) {
//       alert("Failed to send message");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="relative px-6 md:px-12 py-5 overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30" 
//         />
//         <div className="absolute left-1/2 -translate-x-1/2 top-10 w-80 h-80 
//           bg-emerald-400/10 blur-3xl" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 p-8"
//       >

//         {/* LEFT */}
//         <div className="flex flex-col gap-6 justify-center">
//           <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
//             Feel free to reach out for collaborations or just a friendly chat.
//           </p>

//           <a
//             href="mailto:your@email.com"
//             className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//             hover:text-emerald-400 transition"
//           >
//             <FaEnvelope /> your@email.com
//           </a>

//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//             hover:text-emerald-400 transition"
//           >
//             <FaGithub /> GitHub
//           </a>

//           <a
//             href="https://linkedin.com/in/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//             hover:text-emerald-400 transition"
//           >
//             <FaLinkedin /> LinkedIn
//           </a>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">

//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             required
//             value={form.message}
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={loading}
//             className="group inline-flex items-center justify-center gap-3 
//             py-3 rounded-full 
//             border border-gray-300 dark:border-gray-700 
//             hover:border-emerald-400 
//             transition-all duration-300"
//           >
//             <span className="font-medium">
//               {loading ? "Sending..." : "Send Message"}
//             </span>

//             <span className="transition-transform group-hover:translate-x-1">
//               →
//             </span>
//           </motion.button>

//         </form>

//       </motion.div>
//     </section>
//   );
// };

// export default ContactSection;


/////////////////////////////////////////

// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";
// import { sendContact } from "../../api/contact.api";
// import { motion } from "framer-motion";

// const ContactSection = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await sendContact(form);
//       alert("Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } catch (error) {
//       alert("Failed to send message");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="relative py-20 md:py-28">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30" 
//         />
//         <div className="absolute left-1/2 -translate-x-1/2 top-10 w-96 h-96 
//           bg-emerald-400/10 blur-3xl" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
//       >

//         {/* LEFT */}
//         <div className="flex flex-col gap-6">

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
//             Let’s{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//               Connect
//             </span>
//           </h2>

//           <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
//             Feel free to reach out for collaborations, freelance work, or just a friendly chat.
//           </p>

//           {/* CONTACT LINKS */}
//           <div className="flex flex-col gap-3">

//             <a
//               href="mailto:your@email.com"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaEnvelope /> your@email.com
//             </a>

//             <a
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaGithub /> GitHub
//             </a>

//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaLinkedin /> LinkedIn
//             </a>

//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             required
//             value={form.message}
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none
//             transition"
//           />

//           {/* 🔥 PREMIUM BUTTON */}
//           <motion.button
//             whileTap={{ scale: 0.96 }}
//             type="submit"
//             disabled={loading}
//             className="group relative w-full inline-flex items-center justify-center gap-3 
//             py-3 rounded-full font-medium overflow-hidden

//             border border-black/10 dark:border-white/10
//             bg-white/60 dark:bg-white/[0.05] backdrop-blur-md

//             transition-all duration-300
//             hover:scale-[1.03]
//             hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
//           >

//             {/* GRADIENT HOVER */}
//             <span className="absolute inset-0 opacity-0 group-hover:opacity-100 
//             bg-gradient-to-r from-emerald-400 to-teal-300 transition duration-300" />

//             <span className="relative z-10 group-hover:text-black">
//               {loading ? "Sending..." : "Send Message"}
//             </span>

//             <span className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-black">
//               →
//             </span>

//           </motion.button>

//         </form>

//       </motion.div>
//     </section>
//   );
// };

// export default ContactSection;




// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";
// import { sendContact } from "../../api/contact.api";
// import { motion } from "framer-motion";

// const ContactSection = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     projectType: "",
//     budget: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await sendContact(form);
//       alert("Message sent successfully!");
//       setForm({
//         name: "",
//         email: "",
//         projectType: "",
//         budget: "",
//         message: "",
//       });
//     } catch (error) {
//       alert("Failed to send message");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="relative py-20 md:py-6">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div
//           className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30"
//         />
//         <div
//           className="absolute left-1/2 -translate-x-1/2 top-10 w-96 h-96 
//           bg-emerald-400/10 blur-3xl"
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
//       >

//         {/* LEFT */}
//         <div className="flex flex-col gap-6">

//            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 ">
//             Contact
//           </p>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
//             Let’s{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//               Connect
//             </span>
//           </h2>

//           <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
//             Feel free to reach out for collaborations, freelance work, or just a friendly chat.
//           </p>

//           {/* CONTACT LINKS */}
//           <div className="flex flex-col gap-3">

//             <a
//               href="mailto:your@email.com"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaEnvelope /> your@email.com
//             </a>

//             <a
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaGithub /> GitHub
//             </a>

//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaLinkedin /> LinkedIn
//             </a>

//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//           {/* NAME */}
//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition"
//           />

//           {/* EMAIL */}
//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition"
//           />

//           {/* PROJECT TYPE */}
//           <select
//             value={form.projectType}
//             onChange={(e) =>
//               setForm({ ...form, projectType: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition"
//           >
//             <option value="">Project Type</option>
//             <option>Website</option>
//             <option>Web App</option>
//             <option>Admin Dashboard</option>
//             <option>Fullstack Project</option>
//           </select>

//           {/* BUDGET */}
//           <select
//             value={form.budget}
//             onChange={(e) =>
//               setForm({ ...form, budget: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition"
//           >
//             <option value="">Budget</option>
//             <option>₹5k - ₹10k</option>
//             <option>₹10k - ₹25k</option>
//             <option>₹25k - ₹50k</option>
//             <option>₹50k+</option>
//           </select>

//           {/* MESSAGE */}
//           <textarea
//             placeholder="Tell me about your project..."
//             rows="5"
//             required
//             value={form.message}
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition"
//           />

//           {/* BUTTON */}
//           <motion.button
//             whileTap={{ scale: 0.96 }}
//             type="submit"
//             disabled={loading}
//             className="group relative w-full inline-flex items-center justify-center gap-3 
//             py-3 rounded-full font-medium overflow-hidden

//             border border-black/10 dark:border-white/10
//             bg-white/60 dark:bg-white/[0.05] backdrop-blur-md

//             transition-all duration-300
//             hover:scale-[1.03]
//             hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
//           >

//             <span className="absolute inset-0 opacity-0 group-hover:opacity-100 
//             bg-gradient-to-r from-emerald-400 to-teal-300 transition duration-300" />

//             <span className="relative z-10 group-hover:text-black">
//               {loading ? "Sending..." : "Start Project"}
//             </span>

//             <span className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-black">
//               →
//             </span>

//           </motion.button>

//         </form>

//       </motion.div>
//     </section>
//   );
// };

// export default ContactSection;







// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";
// import { sendContact } from "../../api/contact.api";
// import { motion } from "framer-motion";

// const ContactSection = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     projectType: "",
//     budget: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await sendContact(form);
//       alert("Message sent successfully!");
//       setForm({
//         name: "",
//         email: "",
//         projectType: "",
//         budget: "",
//         message: "",
//       });
//     } catch (error) {
//       alert("Failed to send message");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="relative py-20 md:py-6 overflow-hidden">
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div
//           className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30"
//         />

//         {/* FIXED BLUR (no overflow now) */}
//         <div
//           className="absolute left-1/2 -translate-x-1/2 top-10 
//           w-96 h-96 max-w-full
//           bg-emerald-400/10 blur-3xl pointer-events-none"
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 
//         grid md:grid-cols-2 gap-10 md:gap-16 items-center"
//       >
//         {/* LEFT */}
//         <div className="flex flex-col gap-6">
//           <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
//             Contact
//           </p>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
//             Let’s{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//               Connect
//             </span>
//           </h2>

//           <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
//             Feel free to reach out for collaborations, freelance work, or just a
//             friendly chat.
//           </p>

//           {/* CONTACT LINKS */}
//           <div className="flex flex-col gap-3">
//             <a
//               href="mailto:your@email.com"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaEnvelope /> your@email.com
//             </a>

//             <a
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaGithub /> GitHub
//             </a>

//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//               hover:text-emerald-400 transition"
//             >
//               <FaLinkedin /> LinkedIn
//             </a>
//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           {/* NAME */}
//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition w-full"
//           />

//           {/* EMAIL */}
//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition w-full"
//           />

//           {/* PROJECT TYPE */}
//           <select
//             value={form.projectType}
//             onChange={(e) =>
//               setForm({ ...form, projectType: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition w-full"
//           >
//             <option value="">Project Type</option>
//             <option>Website</option>
//             <option>Web App</option>
//             <option>Admin Dashboard</option>
//             <option>Fullstack Project</option>
//           </select>

        

//           {/* MESSAGE */}
//           <textarea
//             placeholder="Tell me about your project..."
//             rows="5"
//             required
//             value={form.message}
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//             className="px-4 py-3 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             focus:border-emerald-400 focus:outline-none transition w-full"
//           />

//           {/* BUTTON */}
//           <motion.button
//             whileTap={{ scale: 0.96 }}
//             type="submit"
//             disabled={loading}
//             className="group relative w-full inline-flex items-center justify-center gap-3 
//             py-3 rounded-full font-medium overflow-hidden

//             border border-black/10 dark:border-white/10
//             bg-white/60 dark:bg-white/[0.05] backdrop-blur-md

//             transition-all duration-300
//             hover:scale-[1.03]
//             hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
//           >
//             <span
//               className="absolute inset-0 opacity-0 group-hover:opacity-100 
//               bg-gradient-to-r from-emerald-400 to-teal-300 transition duration-300"
//             />

//             <span className="relative z-10 group-hover:text-black">
//               {loading ? "Sending..." : "Start Project"}
//             </span>

//             <span className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-black">
//               →
//             </span>
//           </motion.button>
//         </form>
//       </motion.div>
//     </section>
//   );
// };

// export default ContactSection;










import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { sendContact } from "../../api/contact.api";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import CustomSelect from "../../components/CustomSelect"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "", 
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔥 SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const toastId = toast.loading("Sending...");

    try {
      await sendContact({
        name: form.name,
        email: form.email,
        projectType: form.projectType,
        message: form.message,
      });

      toast.success("Message sent successfully ", { id: toastId });

      setForm({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });

    } catch (error) {
      toast.error("Failed to send message ", { id: toastId });
    }

    setLoading(false);
  };

  return (
    <section className="relative  md:py-6 overflow-hidden">



      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 
        grid md:grid-cols-2 gap-10 md:gap-16 items-center"
      >

        {/* LEFT */}
        <div className="flex flex-col gap-6">

          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight  -mt-5">
            Let’s{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
            Feel free to reach out for collaborations, freelance work, or just a
            friendly chat.
          </p>

          {/* CONTACT LINKS */}
          <div className="flex flex-col gap-3">

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-emerald-400 transition"
            >
              <FaEnvelope /> your@email.com
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-emerald-400 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-emerald-400 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-5">

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="px-4 py-3 rounded-xl 
            bg-white/60 dark:bg-white/[0.05] backdrop-blur-md
            border border-gray-200 dark:border-gray-800
            focus:border-emerald-400 focus:outline-none transition w-full"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="px-4 py-3 rounded-xl 
            bg-white/60 dark:bg-white/[0.05] backdrop-blur-md
            border border-gray-200 dark:border-gray-800
            focus:border-emerald-400 focus:outline-none transition w-full"
          />

          {/* PROJECT TYPE */}
      <CustomSelect
  value={form.projectType}
  onChange={(val) =>
    setForm({ ...form, projectType: val })
  }
  options={[
      { label: "Landing Page", value: "landing_page" },
  { label: "Business Website", value: "business_website" },
  { label: "Web Application", value: "web_application" },
  { label: "Dashboard / Admin Panel", value: "dashboard_admin" },
  { label: "E-commerce Store", value: "ecommerce" },
  ]}
  placeholder="Project Type"
/>

          {/* MESSAGE */}
          <textarea
            placeholder="Tell me about your project..."
            rows="5"
            required
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="px-4 py-3 rounded-xl 
            bg-white/60 dark:bg-white/[0.05] backdrop-blur-md
            border border-gray-200 dark:border-gray-800
            focus:border-emerald-400 focus:outline-none transition w-full"
          />

          {/* BUTTON */}
       <motion.button
  whileTap={{ scale: 0.96 }}
  type="submit"
  disabled={loading}
  className="
  group relative w-full inline-flex items-center justify-center gap-3 
  py-3 rounded-full font-medium overflow-hidden

  text-black

  bg-gradient-to-r from-emerald-400 to-teal-300

  shadow-[0_6px_20px_rgba(16,185,129,0.25)]

  transition-all duration-300
  hover:scale-[1.04]
  hover:shadow-[0_10px_35px_rgba(16,185,129,0.45)]

  disabled:opacity-60 disabled:cursor-not-allowed
"
>

  {/* 🔥 RADIAL GLOW */}
  <span
    className="
    absolute inset-0 opacity-0 group-hover:opacity-100
    transition duration-500
    bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.35),transparent_70%)]
  "
  />

  {/* ✨ LIGHT SWEEP */}
  {!loading && (
    <span
      className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      transition duration-700
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      translate-x-[-100%] group-hover:translate-x-[100%]
    "
    />
  )}

  {/* CONTENT */}
  <span className="relative z-10 flex items-center gap-2">

    {loading ? (
      <>
        {/* SPINNER */}
        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        Sending...
      </>
    ) : (
      <>
        Start Project
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </>
    )}

  </span>

</motion.button>
        </form>

      </motion.div>
    </section>
  );
};

export default ContactSection;