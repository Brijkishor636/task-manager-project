"use client"

export default function ActionSection() {
    return (
      <section
        className="relative bg-blue-300 text-white py-20 px-6"
        style={{
          backgroundImage: "", // 👈 Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute bg-blue-300 opacity-80"></div>
  
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl font-bold mb-4">
            Ready to take control of your tasks?
          </h2>
          <p className="mb-8 text-lg">
            Start managing your work smarter today with our powerful task manager.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    );
  }
  