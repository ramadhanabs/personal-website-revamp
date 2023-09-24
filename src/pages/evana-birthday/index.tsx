import Container from "@/components/elements/Container"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { supabase } from "@/supabase"
import { GIFT_OPTIONS } from "./send-wishes"
import Button from "@/components/elements/Button"
import DetailWishDialog from "@/composites/evana-birthday/DetailWishDialog"
import useDisclosure from "@/hooks/useDisclosure"
import ContentLoader from "@/components/elements/ContentLoader"
import Link from "next/link"
import Slider from "react-slick"
import { BANNER_EVANA } from "@/constants"

export interface WishesType {
  id: number
  created_at: string
  name: string
  wishes: string
  gift: string
}

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const EvanaBirthday = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [wishes, setWishes] = useState<WishesType[]>([])
  const [selectedWish, setSelectedWish] = useState<WishesType | null>(null)
  const [summary, setSummary] = useState({
    bear: 0,
    rose: 0,
    chocolate: 0,
    unicorn: 0,
  })

  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("greetings")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(8)

      const { data: dataSummary, error: errorSummary } = await supabase
        .from("greetings")
        .select("gift")

      const countBear = dataSummary?.filter((item) => item.gift === "bear").length
      const countRose = dataSummary?.filter((item) => item.gift === "rose").length
      const countChocolate = dataSummary?.filter((item) => item.gift === "chocolate").length
      const countUnicorn = dataSummary?.filter((item) => item.gift === "unicorn").length

      if (!error) {
        setWishes(data as WishesType[])
      }

      if (!errorSummary) {
        setSummary({
          bear: countBear ?? 0,
          rose: countRose ?? 0,
          chocolate: countChocolate ?? 0,
          unicorn: countUnicorn ?? 0,
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenDialog = (item: WishesType) => {
    setSelectedWish(item)
    onOpen()
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Head>
        <title>Happy Birthday Evana!</title>
        <meta name="description" content="Wish you all the best my love." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="min-h-screen flex justify-center">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4 lg:gap-8 pt-[80px] w-full">
              <Slider {...settings}>
                {BANNER_EVANA.map((item) => (
                  <div className="h-[600px] lg:h-[500px] w-full relative" key={item.image}>
                    <img src={item.image} className="w-full h-full object-cover rounded-xl" />
                    <div className="w-full h-full absolute top-0 right-0 bg-black/60">
                      <div className="flex flex-col w-full h-full justify-between lg:justify-end gap-4">
                        <div className="lg:hidden p-2 w-full rounded-t-xl bg-gradient-to-r from-blue-500/50 to-emerald-500/50">
                          <p className="text-white font-semibold text-center">
                            Happy Birthday My Lovely Queen!
                          </p>
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                          <h1 className="text-white text-2xl md:text-[64px] leading-none font-bold tracking-tight lg:w-[60%]">
                            <strong className="gradient-text">{item.title}</strong>
                          </h1>
                          <p className="text-white text-sm lg:text-lg">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div
                className="flex flex-col gap-2 pt-12 items-center text-center"
                data-aos="fade-up"
              >
                <h1 className="text-white text-[32px] leading-none font-bold tracking-tight">
                  <strong className="gradient-text">Song</strong> for you!
                </h1>
                <p className="text-white opacity-70 text-lg mb-4 text-center">
                  3 songs from me that represent you.
                </p>

                <div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:w-[70%]"
                  data-aos="fade-up"
                >
                  <iframe
                    className="rounded-lg"
                    src="https://open.spotify.com/embed/track/7ucwhjWSGTEh5e18h6WFER?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                  <iframe
                    className="rounded-lg"
                    src="https://open.spotify.com/embed/track/4yNk9iz9WVJikRFle3XEvn?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                  <iframe
                    className="rounded-lg"
                    src="https://open.spotify.com/embed/track/5uCax9HTNlzGybIStD3vDh?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Summary Gift Section */}
              <div
                className="flex flex-col gap-2 pt-[100px] items-center text-center"
                data-aos="fade-up"
              >
                <h1 className="text-white text-[32px] leading-none font-bold tracking-tight">
                  <strong className="gradient-text">Gift</strong> from your friends
                </h1>
                <p className="text-white opacity-70 text-lg mb-4 text-center">
                  Here is the summary of what your friends gave to you!
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-[70%]">
                  <div className="flex items-center justify-between gap-3 bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-4 text-white duration-300 transition-all">
                    <p className="text-[40px]">🧸</p>
                    <p className="text-[40px]">{summary.bear}</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-4 text-white duration-300 transition-all">
                    <p className="text-[40px]">🌹</p>
                    <p className="text-[40px]">{summary.rose}</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-4 text-white duration-300 transition-all">
                    <p className="text-[40px]">🍫</p>
                    <p className="text-[40px]">{summary.chocolate}</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-4 text-white duration-300 transition-all">
                    <p className="text-[40px]">🦄</p>
                    <p className="text-[40px]">{summary.unicorn}</p>
                  </div>
                </div>
              </div>

              {/* Wishes Section */}
              <div className="flex flex-col gap-2 py-[100px] items-center" data-aos="fade-up">
                <h1 className="text-white text-[32px] leading-none font-bold tracking-tight">
                  <strong className="gradient-text">Wishes</strong> from your friends
                </h1>
                <p className="text-white opacity-70 text-lg mb-4 text-center">
                  I gathered many wishes from your friends through form. Here is some wishes from
                  them.
                </p>
                {isLoading ? (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
                    {Array.from(Array(4)).map((_) => {
                      return (
                        <div
                          key={_}
                          className="flex shrink-0 flex-col gap-3 bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-4 text-white duration-300 transition-all"
                        >
                          <ContentLoader height={10} isRounded width="30%" />
                          <ContentLoader height={10} isRounded width="100%" />
                          <ContentLoader height={10} isRounded width="100%" />
                          <ContentLoader height={10} isRounded width="70%" />
                          <ContentLoader height={30} isRounded width="100%" className="mt-3" />
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                      {wishes.map((item) => {
                        const gift = GIFT_OPTIONS.find((gift) => gift.value === item.gift)?.icon
                        return (
                          <div
                            key={item.id}
                            className="flex shrink-0 flex-col gap-3 bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-4 text-white duration-300 transition-all"
                            data-aos="flip-left"
                          >
                            <p className="text-2xl">{gift}</p>
                            <div className="flex gap-2">
                              <div className="flex flex-col gap-2">
                                <p className="font-semibold">{item.name}</p>
                                <p className="line-clamp-3">{item.wishes}</p>
                              </div>
                            </div>
                            <Button
                              isFullWidth
                              className="mt-auto"
                              onClick={() => handleOpenDialog(item)}
                            >
                              See Details
                            </Button>
                          </div>
                        )
                      })}
                    </div>

                    <Link href="/evana-birthday/wishes">
                      <Button className="mx-auto">See More Wishes</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>

      <DetailWishDialog data={selectedWish} isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default EvanaBirthday
