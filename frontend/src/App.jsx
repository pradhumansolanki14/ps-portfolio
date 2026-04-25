import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AdminLayout from "./admin/AdminLayout";
import AdminProjects from "./admin/AdminProjects";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import ScrollToTop from "./components/ScollToTop";
import CustomCursor from "./components/CustomCursor";
import AdminReviews from "./admin/AdminReviews";
import AdminPublicRoute from "./routes/AdminPublicRoute";
import ReviewFloatingButton from "./components/ReviewButton";
import AdminClients from "./admin/AdminClients";
import LogoStroke from "./components/LogoStroke";
import { useEffect, useState } from "react";


const MainLayout = ({ children }) => {


  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-[80vh]">
        {children}
        <ReviewFloatingButton/>
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-neutral-50 text-black dark:bg-black dark:text-white min-h-screen">

      {/*  LOADER (ONLY ONCE) */}
      {loading && <LogoStroke />}

      {/*  APP CONTENT */}
      {!loading && (
        <BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ top: 20 }}
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: "16px",
                padding: "14px 18px",
                fontSize: "14px",
                backdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.7)",
                color: "#111",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              },
              className:
                "dark:!bg-[linear-gradient(135deg,#111414,#1a1f1c)] dark:!text-white dark:!border-white/10",
            }}
          />

          <CustomCursor />
          <ScrollToTop />

          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <HomePage />
                </MainLayout>
              }
            />

            <Route
              path="/about"
              element={
                <MainLayout>
                  <AboutPage />
                </MainLayout>
              }
            />

            <Route
              path="/projects"
              element={
                <MainLayout>
                  <ProjectsPage />
                </MainLayout>
              }
            />

            <Route
              path="/contact"
              element={
                <MainLayout>
                  <ContactPage />
                </MainLayout>
              }
            />

            <Route
              path="/admin/login"
              element={
                <AdminPublicRoute>
                  <AdminLogin />
                </AdminPublicRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="projects" element={<AdminProjects />} />
              <Route path="clients" element={<AdminClients />} />
              <Route path="reviews" element={<AdminReviews />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}

    </div>
  );
};
export default App;