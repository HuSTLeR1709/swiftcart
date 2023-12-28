const people = [
    {
      name: 'Nabhjeet Katiyar',
      role: 'Co-Founder / CEO',
      imageUrl:'/images/Nbahjeet.jpg',
    },
    {
        name: 'Priyam Katiyar',
        role: 'CTO',
        imageUrl: '/images/priyam.jpg',
    },
    {
        name: 'Utsav Katiyar',
        role: 'Frontend Developer',
        imageUrl: '/images/utsav.jpg',
    },
    {
        name: 'Nikhil Gupta',
        role: 'Designer',
        imageUrl: '/images/nikhil.jpg',
    },
    {
        name: 'Abhinav Omer',
        role: 'Backend Developer',
        imageUrl: '/images/abhinav.jpg',
    },
    {
        name: 'Sandesh Katiyar',
        role: 'Director of Product',
        imageUrl: '/images/Sandesh.jpg',
    },
    // More people...
  ]
  
  export default function OurTeam() {
    return (
      <div className="bg-white py-18 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-6 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            At the helm of SwiftCart, our leadership team embodies a passion for innovation, a commitment to excellence, and a vision for transforming your shopping experience.
            </p>
            
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
        
      </div>
    )
  }
  