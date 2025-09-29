import Image from "next/image";  // hamesha top pe likho

export default function Blogs() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      {/* Image + Heading */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/lfs image.png"
          alt="Description of image"
          width={300}
          height={200}
          className="rounded-lg shadow-md"
        />
        <p className="mt-4 font-bold text-lg sm:text-xl">
          Hi mera name Asfandyar hy
        </p>
      </div>

      {/* Blogs Section */}
      <div className="mt-10 max-w-3xl mx-auto bg-red-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Popular Blogs</h2>

        {/* Blog Item */}
        <div className="blog-item mb-6">
          <h3 className="text-xl font-semibold">How to learn JavaScript fast</h3>
          <p className="text-gray-700">
            vjjs hkasde lhzcjdkafe xlkzhfesf c
          </p>
        </div>

        <div className="blog-item mb-6">
          <h3 className="text-xl font-semibold">How to learn React quickly</h3>
          <p className="text-gray-700">
            vjjs hkasde lhzcjdkafe xlkzhfesf c
          </p>
        </div>

        <div className="blog-item">
          <h3 className="text-xl font-semibold">Best practices for Next.js</h3>
          <p className="text-gray-700">
            vjjs hkasde lhzcjdkafe xlkzhfesf c
          </p>
        </div>
      </div>
    </div>
  );
}
