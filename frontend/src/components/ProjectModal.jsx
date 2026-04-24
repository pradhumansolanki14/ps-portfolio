import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomSelect from "../components/CustomSelect";
import Button from "./Button";

const ProjectModal = ({ open, onClose, onSubmit, mode = "create", initialData }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
    category: "",
    image: null,
  });

  // ✅ PREFILL FOR EDIT
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setForm({
        title: initialData.title || "",
        description: initialData.description || "",
        tech: initialData.tech?.join(", ") || "",
        github: initialData.github || "",
        live: initialData.live || "",
        category: initialData.category || "",
        image: null,
      });
    }

    if (mode === "create") {
      setForm({
        title: "",
        description: "",
        tech: "",
        github: "",
        live: "",
        category: "",
        image: null,
      });
    }

    if (mode === "client" && initialData) {
  setForm({
    title: initialData.title || "",
    description: initialData.description || "",
    tech: "",
    github: "",
    live: "",
    category: "",
    image: null,
  });
}
  }, [mode, initialData]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    onSubmit(formData);
  };

const isEdit = mode === "edit";
const isClient = mode === "client";

const title = isEdit
  ? "Edit Project"
  : isClient
  ? "Complete Project"
  : "Add Project";

const subtitle = isEdit
  ? "Update your project details"
  : isClient
  ? "Convert this client request into a project"
  : "Fill the form to add a new project";

const buttonText = isEdit
  ? "Update"
  : isClient
  ? "Mark Completed"
  : "Create";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* BACKDROP */}
          <div
            className="absolute inset-0 dark:bg-black/70 bg-black/20 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            className="relative z-[10000] w-[90%] max-w-md p-7 rounded-3xl 
            border border-white/10
            bg-white/80 dark:bg-[#1b1d1d]"
          >

            {/* GLOW */}
            <div className="absolute inset-0 rounded-3xl 
            bg-gradient-to-br from-emerald-400/10 to-transparent 
            blur-2xl opacity-30 pointer-events-none" />

            <div className="relative">

              {/* ✅ HEADER FIX */}
              <div className="mb-6">
              <h3 className="text-xl font-semibold">
  {title}
</h3>

<p className="text-sm text-gray-500 mt-1">
  {subtitle}
</p>
              </div>

              {/* FORM */}
              <div className="space-y-4">
                {[
                  { name: "title", placeholder: "Project Title" },
                  { name: "description", placeholder: "Description" },
                  { name: "tech", placeholder: "Tech (React, Node)" },
                  { name: "github", placeholder: "GitHub URL" },
                  { name: "live", placeholder: "Live URL" },
                ].map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl 
                    bg-white/60 dark:bg-white/5
                    border border-gray-200 dark:border-white/10"
                  />
                ))}

                <CustomSelect
                  value={form.category}
                  onChange={(val) =>
                    setForm({ ...form, category: val })
                  }
                  options={[
                    { label: "Frontend", value: "frontend" },
                    { label: "Backend", value: "backend" },
                    { label: "Fullstack", value: "fullstack" },
                  ]}
                  placeholder="Select category"
                />

                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="text-sm file:px-4 file:py-2 file:rounded-full file:bg-emerald-400 file:text-black"
                />
              </div>

              {/* ACTIONS */}
             <div className="flex justify-center gap-3 mt-6">

  {/* CANCEL */}
  <Button
    onClick={onClose}
    variant="secondary"
    className="px-5 py-2.5"
  >
    Cancel
  </Button>

  {/* SUBMIT */}
  <Button
    onClick={handleSubmit}
    className="px-6 py-2.5"
  >
    {buttonText}
  </Button>

</div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;