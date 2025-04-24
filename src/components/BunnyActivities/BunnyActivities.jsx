import React from "react";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib"; // adjust path if needed

const bunnyActivities = [
  {
    id: 1,
    title: "Bird Watching",
    desc: "Learn to identify bird species and understand their habitats and behaviours.",
    imagePath: "birdwatching",
  },
  {
    id: 2,
    title: "Butterfly Watching",
    desc: "Observe butterflies' vibrant colors and patterns while learning about species differences.",
    imagePath: "butterfly watching",
  },
  {
    id: 3,
    title: "Campfire Stories",
    desc: "Listen to stories and discussions around folklore, wildlife, disaster management, and more.",
    imagePath: "campfire",
  },
  {
    id: 4,
    title: "Cloud Gazing",
    desc: "Unwind under the open sky while appreciating nature's shifting patterns above.",
    imagePath: "cloud-watching",
  },
  {
    id: 5,
    title: "Community Service Projects",
    desc: "Participate in activities that support local communities and the environment.",
    imagePath: "community-service",
  },
  {
    id: 6,
    title: "Creative Movement and Dance",
    desc: "Express yourself through movement while enhancing coordination and vitality.",
    imagePath: "dance",
  },
  {
    id: 7,
    title: "Environmental Conservation",
    desc: "Engage in hands-on conservation efforts that nurture eco-consciousness.",
    imagePath: "env-conserv",
  },
  {
    id: 8,
    title: "First Aid",
    desc: "Learn emergency response, CPR, and basic treatment techniques for safety readiness.",
    imagePath: "first-aid",
  },
  {
    id: 9,
    title: "Forest Stay",
    desc: "Immerse in forest life — from identifying flora to tracking animal activity.",
    imagePath: "lead.jpg",
  },
  {
    id: 10,
    title: "Fun Games and Activities",
    desc: "Enjoy thought-provoking games that foster problem-solving and creativity.",
    imagePath: "games-activities",
  },
  {
    id: 11,
    title: "Guided Nature Walks",
    desc: "Explore scenic trails and discover unique flora and fauna with expert guidance.",
    imagePath: "nature-walks",
  },
  {
    id: 12,
    title: "Health, Endurance, and Yoga",
    desc: "Boost your fitness and mindfulness with outdoor yoga and endurance challenges.",
    imagePath: "yoga",
  },
  {
    id: 13,
    title: "Leadership and Team-Building",
    desc: "Develop confidence, communication, and teamwork through outdoor tasks.",
    imagePath: "team-building",
  },
  {
    id: 14,
    title: "Mountain Biking",
    desc: "Ride across terrains that build strength and coordination with a thrill.",
    imagePath: "mountain-bike",
  },
  {
    id: 15,
    title: "Mountaineering",
    desc: "Climb rugged trails and experience the pride of reaching new summits.",
    imagePath: "mountaneering",
  },
  {
    id: 16,
    title: "Nature Art and Crafts",
    desc: "Create nature-inspired crafts using organic materials from your surroundings.",
    imagePath: "crafts",
  },
  {
    id: 17,
    title: "Nature Talks",
    desc: "Build confidence in public speaking by sharing nature reflections in group settings.",
    imagePath: "forest-talks",
  },
  {
    id: 18,
    title: "Night Hikes",
    desc: "Step into the nocturnal wilderness and explore nature after dark.",
    imagePath: "night-hike",
  },
  {
    id: 19,
    title: "Photography and Videography",
    desc: "Capture your adventure with creative media techniques and storytelling.",
    imagePath: "Ruben-and-Camera.jpg",
  },
  {
    id: 20,
    title: "Responsible Traveller",
    desc: "Learn sustainable travel practices that reduce your footprint while exploring.",
    imagePath: "responsible-travel",
  },
  {
    id: 21,
    title: "Rope Activities",
    desc: "Master knots and rope handling — essential skills for the great outdoors.",
    imagePath: "rope-activity",
  },
  {
    id: 22,
    title: "Stargazing",
    desc: "Identify constellations and explore space stories under the night sky.",
    imagePath: "stargazing",
  },
  {
    id: 23,
    title: "Storytelling and Creative Writing",
    desc: "Develop writing and storytelling skills through outdoor inspiration.",
    imagePath: "storytelling.jpg",
  },
  {
    id: 24,
    title: "Tent Camping",
    desc: "Experience overnight stays in tents, surrounded by nature’s calm and wonder.",
    imagePath: "tent-camp",
  },
  {
    id: 25,
    title: "Wilderness Survival Skills",
    desc: "Learn shelter-building, fire-starting, and foraging to survive in the wild.",
    imagePath: "survival",
  },
];

const BunnyActivities = () => {
  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 flex flex-col gap-10">
      <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl font-bold">
        Bunny’s Activities
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bunnyActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 bg-white overflow-hidden"
          >
            {activity.imagePath && (
              <IKImage
                urlEndpoint={IKURL}
                path={activity.imagePath}
                className="w-full h-40 object-cover"
              />
            )}
            {!activity.imagePath && (
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}
            <div className="p-4 flex flex-col gap-2">
              <h4 className="font-[manrope] font-semibold text-lg md:text-xl">
                {activity.title}
              </h4>
              <p className="font-[manrope] text-sm md:text-base text-gray-700">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BunnyActivities;
