import { BsTools } from "react-icons/bs";
import { GiVacuumCleaner, GiSpill } from "react-icons/gi";
import { FcInspection } from "react-icons/fc";
const features = [
  {
    name: "Expert Carpet Installation",
    description:
      " Trust our skilled team to professionally install your carpets, ensuring precision, durability, and a flawless finish. We handle every step with care, from measurement to installation, leaving you with a beautifully laid carpet that enhances the aesthetics of your space.",
    icon: BsTools,
  },
  {
    name: " Tailored Carpet Cleaning",
    description:
      "Experience personalized carpet cleaning solutions designed to meet your specific needs. Our professional cleaning services use advanced techniques and eco-friendly products to revive and refresh your carpets, leaving them not only clean but also extending their lifespan.",
    icon: GiVacuumCleaner,
  },
  {
    name: "Stain Eradication Specialists",
    description:
      "Say goodbye to stubborn stains! Our team specializes in removing a wide range of stains, from spills to pet accidents. We go beyond basic cleaning, providing meticulous stain removal and carpet restoration services, ensuring your carpets look as good as new.",
    icon: GiSpill,
  },
  {
    name: "Carpet Inspection and Consultation",
    description:
      "Beyond cleaning and installation, our services include detailed carpet inspections and consultations. Our experts assess the condition of your carpets, offering tailored recommendations for maintenance, repairs, and upgrades to ensure longevity and optimal performance.",
    icon: FcInspection,
  },
];

export default function Example() {
  return (
    <div className="bg-slate-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl p-5 text-center">
          <h2 className="text-base capitalize   font-semibold leading-7 text-amber-600">
            Services
          </h2>
          <p className="mt-2 text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl">
            Here at E & B Carpet, No job is too small
          </p>
          <p className="mt-6 text-lg leading-8 capitalize text-gray-600">
            We specialize in replacing a small patch of carpet to re doing the
            whole house. From carpet cleaning and Eliminate squeaks in subfloors
            and Stairs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute text-white left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
