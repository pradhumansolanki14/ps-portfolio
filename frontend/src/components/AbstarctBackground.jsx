const AbstractBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">

      {/* MAIN BOTTOM GLOW */}
      <div
        className="
          absolute 
          w-[800px] h-[800px]
          bg-emerald-400/30
          rounded-full

          left-1/2 top-[60%]
          -translate-x-1/2

          blur-[180px]
        "
      />

      {/* RIGHT SIDE GLOW */}
      <div
        className="
          absolute 
          w-[500px] h-[900px]
          bg-teal-300/30

          right-[-100px] top-[-100px]

          blur-[140px]
        "
      />

      {/* DARK RADIAL FADE (IMPORTANT) */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent,black_70%)]
        "
      />

    </div>
  );
};

export default AbstractBackground;