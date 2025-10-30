"use client";

const blogs = [
  {
    title: "AI News 1",
    description: "Latest updates and insights from the world of AI.",
    image: "/images/blog1.jpg",
  },
  {
    title: "AI News 2",
    description: "Discover how AI is transforming industries worldwide.",
    image: "/images/blog2.jpg",
  },
  {
    title: "AI News 3",
    description: "Learn about cutting-edge AI technologies and tools.",
    image: "/images/blog3.jpg",
  },
];

export default function AINewsBlog() {
  return (
    <section className="bg-neutral-50 py-20 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* === Section Heading === */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4 font-inter">
            From Research to Real-World AI
          </div>
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-neutral-900 mb-3">
            AI Blog & Latest News
          </h2>
          <p className="font-inter text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore insights, trends, and innovations shaping the future of
            artificial intelligence.
          </p>
        </div>

        {/* === Blog Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-montserrat font-semibold text-neutral-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-neutral-600 font-inter flex-1">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block w-full text-center py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition font-inter"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* === View All Button === */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold font-inter transition"
          >
            View All Blog Posts →
          </a>
        </div>
      </div>
    </section>
  );
}
