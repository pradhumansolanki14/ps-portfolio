import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaEnvelope,
  FaCommentDots,
  FaUsers,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { getDashboard } from "../api/dashboard.api";

// 🔥 COUNT ANIMATION
const useCountUp = (end, duration = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

// 🔥 PREMIUM CARD
const StatCard = ({ item, delay }) => {
  const count = useCountUp(item.value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative p-6 rounded-2xl 
      border border-gray-200 dark:border-white/10
      bg-white/70 dark:bg-white/[0.04]
      backdrop-blur-xl

      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]

      transition-all duration-300 overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-emerald-400/15 blur-2xl" />
      </div>

     
      <div className="relative z-10">

        <div className="flex justify-between mb-4 items-center">
          <div className="text-emerald-400 text-xl 
          transition duration-300 
          group-hover:scale-110 group-hover:rotate-6">
            {item.icon}
          </div>

          <span className="text-xs text-gray-400">
            Total
          </span>
        </div>

        <h2 className="text-3xl font-semibold">
          {count}
        </h2>

        <p className="text-sm text-gray-500">
          {item.title === "Requests"
            ? "Client Requests"
            : item.title}
        </p>

      </div>
    </motion.div>
  );
};

const AdminDashboard = () => {
  const [data, setData] = useState({
    stats: {
      projects: 0,
      requests: 0,
      clients: 0,
      reviews: 0,
    },
    activity: [],
  });

  const [loading, setLoading] = useState(true);
  const [showAllActivity, setShowAllActivity] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDashboard();
        setData(res.data);
      } catch (err) {
        console.log("Dashboard error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      title: "Projects",
      value: data.stats.projects,
      icon: <FaProjectDiagram />,
    },
    {
      title: "Requests",
      value: data.stats.requests,
      icon: <FaEnvelope />,
    },
    {
      title: "Clients",
      value: data.stats.clients,
      icon: <FaUsers />,
    },
    {
      title: "Reviews",
      value: data.stats.reviews,
      icon: <FaCommentDots />,
    },
  ];

  const visibleActivity = showAllActivity
    ? data.activity
    : data.activity.slice(0, 5);

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
       <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-1.5">
          Admin
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">
          Dashboard{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Overview
           </span>
       </h1>

      </motion.div>

      {/* LOADING */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin" />
        </div>
      )}

      {!loading && (
        <>
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <StatCard key={i} item={item} delay={i * 0.1} />
            ))}
          </div>

          {/* LOWER */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* QUICK ACTION */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 rounded-2xl 
              border border-gray-200 dark:border-white/10
              bg-white/70 dark:bg-white/[0.04]
              backdrop-blur-xl

              shadow-[0_8px_30px_rgba(0,0,0,0.06)]
              dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
            >
              <h3 className="font-medium mb-5">
                Quick Actions
              </h3>

              <div className="flex flex-col gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full font-medium
                  bg-gradient-to-r from-emerald-400 to-teal-300
                  text-black"
                >
                  + Add Project
                </motion.button>

                <button
                  className="px-4 py-2 rounded-full 
                  border border-gray-300 dark:border-white/10
                  hover:border-emerald-400 hover:text-emerald-400 transition"
                >
                  View Requests
                </button>
              </div>
            </motion.div>

            {/* ACTIVITY */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="group relative p-6 rounded-2xl 
              border border-gray-200 dark:border-white/10
              bg-white/70 dark:bg-white/[0.04]
              backdrop-blur-xl

              shadow-[0_8px_30px_rgba(0,0,0,0.06)]
              dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
              overflow-hidden"
            >

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-emerald-400/5 blur-2xl" />
              </div>

              <div className="relative z-10">

                <h3 className="font-medium mb-5">
                  Activity
                </h3>

                <div className="space-y-3 text-sm text-gray-500">

                  {visibleActivity.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-2 group cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 transition" />

                      <p className="group-hover:text-emerald-400 transition">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}

                </div>

                {/* VIEW MORE */}
                {data.activity.length > 5 && (
                  <div className="mt-5 text-center">
                    <button
                      onClick={() =>
                        setShowAllActivity(!showAllActivity)
                      }
                      className="text-xs px-3 py-1 rounded-full 
                      border border-emerald-400/30 
                      hover:border-emerald-400 
                      hover:bg-emerald-400/10 
                      transition-all duration-300"
                    >
                      {showAllActivity
                        ? "Show Less"
                        : "View More Activity"}
                    </button>
                  </div>
                )}

              </div>
            </motion.div>

          </div>
        </>
      )}

    </div>
  );
};

export default AdminDashboard;