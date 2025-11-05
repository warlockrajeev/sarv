export default function AcademicsTemplate({ title }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-stone-900">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-rose-900 to-amber-700 bg-clip-text">
            {title}
          </h1>
          <p className="mt-4 text-stone-700 max-w-3xl mx-auto">
            Let’s Grow Together — Grow in EdTech sector with our innovative products Magik Mat & My Talking Tree.
          </p>
        </div>
      </section>

      {/* Join Us Form (static) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-rose-900">Join Us</h2>
            <p className="mt-2 text-sm text-stone-600">Partner with the brand that is transforming the learning experience for kids.</p>
            <form className="mt-6 grid grid-cols-2 gap-4">
              <input className="col-span-2 md:col-span-1 border border-stone-300 rounded-md px-3 py-2" placeholder="Name" />
              <input className="col-span-2 md:col-span-1 border border-stone-300 rounded-md px-3 py-2" placeholder="Email Id" />
              <input className="col-span-2 md:col-span-1 border border-stone-300 rounded-md px-3 py-2" placeholder="Phone Number" />
              <input className="col-span-2 md:col-span-1 border border-stone-300 rounded-md px-3 py-2" placeholder="Company" />
              <input className="col-span-2 md:col-span-1 border border-stone-300 rounded-md px-3 py-2" placeholder="Turn Over in Crores" />
              <input className="col-span-2 md:col-span-1 border border-stone-300 rounded-md px-3 py-2" placeholder="Nature of Business" />
              <input className="col-span-2 border border-stone-300 rounded-md px-3 py-2" placeholder="Location" />
              <button type="button" className="col-span-2 mt-2 rounded-md bg-rose-900 text-white px-4 py-2 font-medium">Submit</button>
            </form>
          </div>
          <div className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Everyone does better with support</h3>
            <p className="mt-2 text-sm text-stone-600">Magik Mat & My Talking Tree recognize the importance & effectiveness of channel partners, and provide them with:</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {["Critical Thinking","Best ROI","Self Direct Learning","Live & on-demand Training","Visual Perception","Marketing Materials","Word Skills","Technical Support","Coordinating Memory","Train the Trainer"].map((item)=> (
                <div key={item} className="rounded-md border border-amber-100 bg-amber-50/50 px-3 py-2">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product/Partner pitch */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Transform your business</h2>
            <p className="mt-3 text-sm text-stone-700">Our one of its kind innovative products can transform your business as it is transforming lives of many teachers, parents, and kids.</p>
            <p className="mt-3 text-sm text-stone-700">Magik Mat & My Talking Tree are innovative Edutech products that are interactive, engaging, and help immersive learning for kids. They enable children to boost physical activity, memorize, and recollect what they’ve learned while overcoming boredom with creative learning. They also assist teachers and parents.</p>
          </div>
          <div className="rounded-xl border border-stone-200 p-6">
            <h3 className="font-semibold">FSS Logo</h3>
            <p className="mt-2 text-sm text-stone-700">Federal Soft Systems is a Conglomerate Digital Transformation, IT Products and services company that offers 17+ IT/AI/ML Products, App Development, Custom Application Development, Product Engineering & Cloud Solutions to various business verticals across the globe. Headquarters in Bentonville (USA) with branches worldwide including multiple in India and one in Ontario, Canada.</p>
            <p className="mt-2 text-sm text-stone-700">500+ Projects | 1000+ Employees | 300+ Clients</p>
          </div>
        </div>
      </section>

      {/* School Transformation (LEAD) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-6">
            <h2 className="text-2xl font-bold">Transform your School with LEAD</h2>
            <p className="mt-2 text-sm">Grow your school with help from our experts with academic and admission solutions that will transform your school.</p>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-white border border-stone-200 p-4">
                <h3 className="font-semibold">Smart Classrooms</h3>
                <p className="mt-1 text-stone-700">Smart TV-enabled classrooms for audio-video learning provide robust conceptual clarity.</p>
              </div>
              <div className="rounded-lg bg-white border border-stone-200 p-4">
                <h3 className="font-semibold">Books with digital visualization</h3>
                <p className="mt-1 text-stone-700">QR codes in textbooks link to world-class videos to understand concepts better.</p>
              </div>
              <div className="rounded-lg bg-white border border-stone-200 p-4">
                <h3 className="font-semibold">LEAD Student App</h3>
                <p className="mt-1 text-stone-700">Live/recorded classes, masterclasses, assessments, and a parent section for full visibility.</p>
              </div>
              <div className="rounded-lg bg-white border border-stone-200 p-4">
                <h3 className="font-semibold">Gamified learning</h3>
                <p className="mt-1 text-stone-700">Interactive quizzes like Practice with Friends make learning fun and continuous.</p>
              </div>
            </div>
            <div className="mt-4">
              <button className="rounded-md bg-rose-900 text-white px-4 py-2 text-sm">Know More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Training Program */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">CERTIFIED EDUCATORS TRAINING PROGRAM</h2>
            <p className="mt-2 text-sm text-stone-700">STEM | ROBOTICS | CODING | AI | IOT</p>
            <p className="mt-3 text-sm text-stone-700">Hello educators, welcome to STEMROBO, where our primary focus is to revolutionize teaching standards by enhancing individual development through professional expertise in STEM, Robotics, Coding, and AI. With years of experience and a unique methodology, we deliver high-quality training to help you set up teaching standards that exceed expectations.</p>
            <button className="mt-4 rounded-md bg-amber-700 text-white px-4 py-2 text-sm">Read More</button>
          </div>
          <div className="rounded-xl border border-stone-200 p-6">
            <h3 className="font-semibold">Why Join This Program</h3>
            <p className="mt-2 text-sm text-stone-700">Upskill Yourself for STEM Excellence with Our Educators Training Program. Download Brochure.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {["NEW AGE PEDAGOGY","Goal oriented training","Best Expert Guidance","Unique Content","CERTIFICATE OF EXCELLENCE"].map((f) => (
                <div key={f} className="rounded-md border border-rose-100 bg-rose-50/50 px-3 py-2">{f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PM SHRI Yojana (summary) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">About PM SHRI School Yojana</h2>
          <p className="mt-2 text-sm text-stone-700">PM SHRI is a centrally sponsored scheme to develop 14500+ schools with a safe, engaging learning environment aligned to NEP 2020. The learning from these schools will be scaled up across the country over 2022-27.</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white border border-stone-200 p-4 text-sm">
              <h3 className="font-semibold">Objectives</h3>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Exemplary NEP 2020 schools and joyful, inclusive education</li>
                <li>Active citizenship and 21st-century skills with experiential pedagogy</li>
                <li>Green schools, community involvement, and equitable participation</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white border border-stone-200 p-4 text-sm">
              <h3 className="font-semibold">Technology-Driven Learning</h3>
              <p className="mt-1">Learning Management System, Smart Class integration, and comprehensive ERP to plan, assess, and engage students, teachers, and parents effectively.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


