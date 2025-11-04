import Link from "next/link";
import Image from "next/image";

function SparkIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.25c.414 0 .75.336.75.75V7.5a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 1 .53 1.28l-3.182 3.182a.75.75 0 0 0 0 1.06l3.182 3.182a.75.75 0 0 1-.53 1.28H13.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-1.28.53l-3.182-3.182a.75.75 0 0 0-1.06 0L4.046 23.77A.75.75 0 0 1 2.766 23.24V18.75a.75.75 0 0 0-.75-.75H1.5a.75.75 0 0 1-.53-1.28l3.182-3.182a.75.75 0 0 0 0-1.06L.97 9.286A.75.75 0 0 1 1.5 8.006h4.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 1 1.28-.53l3.182 3.182a.75.75 0 0 0 1.06 0L11.47 2.47A.75.75 0 0 1 12 2.25Z" />
    </svg>
  );
}

export default function Hero() {
  const circles = Array.from({ length: 10 });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      {/* Falling Circles Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {circles.map((_, i) => (
          <div
            key={i}
            className={`absolute h-8 w-8 rounded-full bg-amber-400 opacity-40 blur-sm animate-fallCircle`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-rose-200 opacity-60 blur-3xl float-blob" />

      {/* Main Hero Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium fade-up">
              <SparkIcon className="w-4 h-4" />
              School Edu Care & Integrated Services
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl fade-up delay-1 bg-gradient-to-r from-amber-800 via-rose-800 to-amber-900 bg-clip-text text-transparent">
              Bring Innovation to Your School with Sarv
            </h1>
            <p className="mt-4 text-lg text-stone-600 fade-up delay-2">
              We deliver end-to-end solutions: innovation & learning programs, curriculum and teacher training,
              interactive learning systems, and modern lab setups—under one Sarv umbrella.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 fade-up delay-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-rose-900 px-5 py-3 text-white font-medium hover:bg-rose-800 hover-pop"
              >
                Contact Us
              </Link>
              <Link
                href="#franchises"
                className="inline-flex items-center justify-center rounded-md border border-amber-300 px-5 py-3 text-stone-700 font-medium hover:bg-amber-50 hover-pop"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative fade-in-left delay-2 aspect-[4/3] w-full rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW4lMjBzdHVkeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt="Children learning and having fun at school"
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-amber-300 opacity-60 blur-2xl float-blob" />
          </div>
        </div>
      </div>
    </section>
  );
}
