import react from '/react.png'
import vue from '/vue.png'
import tailwind from '/tailwind.png'
import boostrap from '/boostrap.png'
import hero from '/hero.png'

// 1. Data Structure (SkillsData)
const skillsData = [
  {
    id: 1,
    image: vue,
    title: 'Vue JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, beatae?',
  },
  {
    id: 2,
    image: react,
    title: 'React JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, beatae?',
  },
  {
    id: 3,
    image: tailwind,
    title: 'Tailwindcss',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, beatae?',
  },
  {
    id: 4,
    image: boostrap,
    title: 'Bootstrap',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, beatae?',
  },
  // Add more skills here...
];

// 2. SkillBox Component (Card structure)
const SkillBox = ({ image, title, description }) => {
  return (
    <article
      data-aos="zoom-in"
      className="p-4 text-center transition duration-300 bg-gray-800 rounded-lg shadow-lg sm:p-6 hover:bg-purple-800 all"
    >
      <figure className="flex justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="object-contain w-16 h-16 sm:w-20 sm:h-20"
        />
      </figure>

      <header>
        <h3 className="mb-2 text-xl font-semibold sm:text-xl">{title}</h3>
      </header>

      <div className="text-sm text-gray-400">
        <p className='text-sm text-gray-400 sm:text-base'>{description}</p>
      </div>
    </article>
  );
};

// 3. Main Skills Component
export default function Skills() {
  return (
    <section id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 overflow-hidden text-white">
      {/* Absolute positioned elements for visual effect (Lines 53-61) */}

      {/* Blur Circle (Lines 53-56) */}
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#6d3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2" />

      {/* Floating Image (Lines 57-61) */}
      <img
        src={hero}
        alt="left picture"
        className="absolute z-10 w-24 h-24 transform left-2 top-2 sm:left-16 sm:top-32 -rotate-12 sm:w-32 opacity-70"
      />

      {/* Section Content and Header (Lines 63-73) */}
      <div data-aos="fade-up" data-aos-delay='300' className="relative z-20 space-y-6 text-center sm:space-y-10">
        <header>
          <h1 className="text-4xl font-bold sm:text-4xl">
            My Expertise <br />and <span className="text-purple-400">Skills</span>
          </h1>
          <p className="mt-2 text-sm text-gray-400 sm:mt-4 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa perspiciatis distinctio atque placeat tempore quo eligendi voluptate quasi error!
          </p>
        </header>

        {/* Skills Grid Section (Lines 74-80) */}
        <section data-aos="fade-up" data-aos-delay="500"
          className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">

          {/* Data Mapping (Lines 75-78) */}
          {skillsData.map(skill => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
      <img src={hero} className='absolute z-10 w-24 h-auto transform right-2 top-2 sm:right-16 rotate-12 sm:w-32 opacity-70' />
    </section>
  );
}
