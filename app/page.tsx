import Image from "next/image";
import DataImage from "@/public/data";
import HeroInfo from "@/components/HeroInfo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* tittle */}
      <div className="py-20">
        <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left">
          Welcome to Our Company
        </h1>
      </div>
      {/* tittle */}

      {/* hero-image */}
      <div className="max-w-5xl mx-auto relative">
        <Image src={DataImage.Hero} alt="Hero Image" priority />
        <HeroInfo />
      </div>
      {/* hero-image */}

      {/* Services */}
      <div className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1" id="Services">
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            provide the best price guarantee
          </p>
          <p className="text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
            odit reprehenderit, porro corrupti eum eaque. Sunt error quo vitae?
          </p>
        </div>
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-service-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            Services that you can trust
          </p>
          <p className="text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
            odit reprehenderit, porro corrupti eum eaque. Sunt error quo vitae?
          </p>
        </div>
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-star-s-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            focus on customer satisfaction
          </p>
          <p className="text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
            odit reprehenderit, porro corrupti eum eaque. Sunt error quo vitae?
          </p>
        </div>
      </div>
      {/* Services */}

      {/* Projects */}
      <div className="mt-32" id="Projects">
        <h1 className="text-4xl/normal text-center font-semibold">
          Our Projects
        </h1>
        <p className="text-base/loose text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          perferendis, mollitia vel ratione ullam eaque animi quas voluptatum
          dolores doloribus id itaque corrupti molestiae saepe necessitatibus
          iure expedita obcaecati architecto?
        </p>

        <div className="mt-20 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 ">
          <div className=" p-4 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <Image
              src={DataImage.Proyek1}
              alt="proyek image"
              className="rounded-tl-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea
              minima numquam, quos harum perspiciatis?
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </div>
          <div className=" p-4 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <Image
              src={DataImage.Proyek2}
              alt="proyek image"
              className="rounded-tl-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea
              minima numquam, quos harum perspiciatis?
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </div>
          <div className=" p-4 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <Image
              src={DataImage.Proyek3}
              alt="proyek image"
              className="rounded-tl-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea
              minima numquam, quos harum perspiciatis?
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </div>
          <div className=" p-4 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <Image
              src={DataImage.Proyek4}
              alt="proyek image"
              className="rounded-tl-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project 4</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea
              minima numquam, quos harum perspiciatis?
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </div>
          <div className=" p-4 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <Image
              src={DataImage.Proyek5}
              alt="proyek image"
              className="rounded-tl-2xl"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project 5</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea
              minima numquam, quos harum perspiciatis?
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}

      {/* contact */}
      <div className="mt-32 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4" id="Contact">
        <h2 className="text-3xl font-bold">Ngoding.</h2>
        <div className="flex gap-10">
          <Link href={"#Home"}>Home</Link>
          <Link href={"#Services"}>Services</Link>
          <Link href={"#Projects"}>Projects</Link>
        </div>
        <div className="flex gap-4">
          <Link href={""}>
            <i className="ri-youtube-fill ri-2x"></i>
          </Link>
          <Link href={""}>
            <i className="ri-instagram-fill ri-2x"></i>
          </Link>
          <Link href={""}>
            <i className="ri-reddit-fill ri-2x"></i>
          </Link>
          <Link href={""}>
            <i className="ri-twitter-fill ri-2x"></i>
          </Link>
        </div>
      </div>
      {/* contact */}
    </>
  );
}
