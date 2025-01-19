import Image from 'next/image'

const teamMembers = [
  {
    name: "Keshawa",
    title: "Leader",
    description: "I lead my team and also train & deploy ML models",
    image: "/images/Keshawa.jpeg"
  },
  {
    name: "Kalindu",
    title: "Server-side Development & marketing",
    description: "I work to build the backend of Modde",
    image: "/images/Kalindu.jpg"
  },
  {
    name: "Tharaki",
    title: "UI/UX Design & Marketing",
    description: "I design & lay the foundations for the client side",
    image: "/images/Tharaki.jpg"
  },
  {
    name: "Sandara",
    title: "Client-side development",
    description: "I bring the design to life",
    image: "/images/Sandara.jpg"
  },
  {
    name: "Ransika",
    title: "Server-side development",
    description: "I'm in charge of databases to aid the server side",
    image: "/images/Ransika.jpg"
  },
  {
    name: "Nelith",
    title: "Client Side development",
    description: "I help make the client side come to life",
    image: "/images/Nelith.jpg"
  }
];

export default function Testemonials() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Team</h2>
        <p className="text-lg text-gray-700 mb-10">Get to know the talented individuals who make Modde what it is.</p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="object-cover rounded-full border-4 border-gray-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-md text-gray-600 mb-4">{member.title}</p>
              <p className="text-sm text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
