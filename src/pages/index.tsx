import Button from "@/components/elements/Button"
import Container from "@/components/elements/Container"
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"
import Head from "next/head"

const projects = [
  {
    name: "Eraspace",
    type: "E-Commerce",
    description: "Eraspace is a biggest lifestyle and gadget retailer website in Indonesia.",
    image_url: "/images/eraspace.png",
    link: "https://eraspace.com/",
    stack: ["NextJS", "TailwindCSS", "React Query"],
  },
  {
    name: "iBox",
    type: "E-Commerce",
    description: "iBox is an official reseller of Apple Premium Product in Indonesia.",
    image_url: "/images/ibox.png",
    link: "https://ibox.co.id/",
    stack: ["NextJS", "TailwindCSS", "React Query"],
  },
  {
    name: "Antaraloka",
    type: "Company Profile",
    description:
      "Lokantara is a company in the supply sector of industrial goods to meet local and export needs.",
    image_url: "/images/antaraloka.png",
    link: "https://antaraloka.com/",
    stack: ["Wordpress", "Elementor"],
  },
  {
    name: "Greenlab",
    type: "Company Profile",
    description: "Greenlab is an environmental and industrial hygiene laboratory expert.",
    image_url: "/images/greenlab.png",
    link: "https://greenlab.co.id/",
    stack: ["Wordpress", "Elementor"],
  },
  {
    name: "Unitest",
    type: "Company Profile",
    description:
      "Unitest is a testing laboratory that also do inspection and waste management in Indonesia.",
    image_url: "/images/unitest.png",
    link: "https://new.unitest.co.id/",
    stack: ["Wordpress", "Elementor"],
  },
  {
    name: "Mekar Abadi Pratama",
    type: "Company Profile",
    description: "Mekar Abadi Pratama is a supplier of medical gases installment and equipment.",
    image_url: "/images/mekarabadi.png",
    link: "https://mekarabadipratama.co.id/",
    stack: ["Wordpress", "Elementor"],
  },
]

const Superbasic = () => {
  return (
    <>
      <Head>
        <title>Ramadhana Bagus - Website Developer</title>
        <meta
          name="description"
          content="A personal website and projects showcases of Ramadhana Bagus Solichuddin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="h-screen flex items-center relative">
          <div className="h-[500px] flex items-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-white text-[40px] md:text-[100px] leading-none font-bold tracking-tight">
                Call me <strong className="gradient-text">Bagus</strong>.
                <br />A Website Developer.
              </h1>
              <p className="text-white text-lg opacity-80">
                Commonly 9-5 tech worker, that worked from office, exploring new things in his free
                time.
                <br />A frontend developer that also learning about backend.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/ramadhanabagus/">
                  <Button>
                    <p>Linkedin</p>
                    <ArrowRightCircleIcon className=" ml-3 w-6 h-6" />
                  </Button>
                </a>
                <a href="https://github.com/ramadhanabs">
                  <Button>
                    <p>Github</p>
                    <ArrowRightCircleIcon className=" ml-3 w-6 h-6" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 flex justify-center w-full">
            <a href="#portfolios" className="text-white/70 text-center border border-cyan-500 px-3 py-2 rounded-full text-xs font-semibold hover:bg-cyan-500/50 hover:text-white transition-all duration-300 animate-bounce">
              Check my portfolios
            </a>
          </div>
        </section>

        <section id="portfolios">
          <div className="flex flex-col gap-8">
            <h3 className="text-white text-2xl leading-none font-bold tracking-tight">
              Portfolios
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((item) => (
                <div
                  className="bg-[#282828] border border-[#4f4f4f] rounded-xl p-4 text-white !flex !flex-col gap-4 hover:border-cyan-500/50 hover:bg-cyan-500/10 duration-300 transition-all"
                  key={item.name}
                >
                  <div className="relative">
                    <img src={item.image_url} alt="antaraloka" className="rounded-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      {item.stack.map((stx) => (
                        <div
                          className="bg-teal-600/50 py-1 px-2 border border-teal-400 rounded-lg text-[10px]"
                          key={stx}
                        >
                          {stx}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm opacity-70">{item.description}</p>
                  </div>
                  <a href={item.link} className="mt-auto">
                    <Button isFullWidth>Visit</Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Superbasic
