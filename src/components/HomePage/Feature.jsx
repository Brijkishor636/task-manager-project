
import { FaTasks, FaUserShield, FaChartLine, FaBell } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Task Tracking",
      description: "Easily create, update, and manage your daily tasks to stay productive.",
      icon: <FaTasks className="text-3xl text-blue-600" />
    },
    {
      title: "Secure Access",
      description: "Your tasks and data are protected with top-level security.",
      icon: <FaUserShield className="text-3xl text-blue-600" />
    },
    {
      title: "Performance Insights",
      description: "Get useful insights and analytics to track your productivity.",
      icon: <FaChartLine className="text-3xl text-blue-600" />
    },
    {
      title: "Smart Reminders",
      description: "Never miss a deadline again with intelligent task reminders.",
      icon: <FaBell className="text-3xl text-blue-600" />
    },
  ];

  return (
    <section className="bg-blue-300 py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
          Features that Keep You on Track
        </h2>
        <p className="text-blue-700 max-w-2xl mx-auto">
          Powerful and simple tools to manage your work more efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-blue-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
