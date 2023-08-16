import Button from "@/components/elements/Button"
import Container from "@/components/elements/Container"
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"
import Head from "next/head"

const Superbasic = () => {
  return (
    <>
      <Head>
        <title>Ramadhana Bagus - Website Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="h-screen flex items-center">
          <div className="h-[650px] flex items-center">
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
        </section>

        {/* <section>
          <div className="flex flex-col gap-8">
            <h3 className="text-white text-2xl leading-none font-bold tracking-tight">Projects</h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#282828] border border-[#4f4f4f] rounded-xl p-4 text-white !flex !flex-col gap-2">
                <h3 className="font-semibold">Erajaya Swasembada</h3>
                <p className="text-sm opacity-70">
                  Established in 1996, PT Erajaya Swasembada Tbk. (“Erajaya”) has grown beyond an
                  integrated mobile telecommunication device importer, distributor and retailer,
                  where the Company is also acknowledged as the largest and most trusted companies
                  in its business in Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </Container>
    </>
  )
}

export default Superbasic
