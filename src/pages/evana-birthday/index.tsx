import Container from "@/components/elements/Container"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { supabase } from "@/supabase"
import { GIFT_OPTIONS } from "./send-wishes"
import Button from "@/components/elements/Button"

interface WishesType {
  id: number
  created_at: string
  name: string
  wishes: string
  gift: string
}

const EvanaBirthday = () => {
  const [wishes, setWishes] = useState<WishesType[]>([])
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("greetings")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(8)

      if (!error) {
        setWishes(data as WishesType[])
      }
    } catch (err) {
      console.error(err)
    }
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
        <section className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 lg:gap-8 pt-[80px]">
              <h1 className="text-white text-[32px] md:text-[64px] leading-none font-bold tracking-tight text-center">
                <strong className="gradient-text">Happy Birthday Evana!</strong> 🦄
              </h1>
              <p className="text-white text-lg opacity-70 text-center">
                You light up my world in every way possible. Here is to another year of love,
                laughter, and unforgettable moments together.
                <br></br>
                Enjoy your special day to the fullest! 💖🥳 - Ramadhana Bagus S.
              </p>

              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  {wishes.map((item) => {
                    const gift = GIFT_OPTIONS.find((gift) => gift.value === item.gift)?.icon
                    return (
                      <div
                        key={item.id}
                        className="flex shrink-0 flex-col gap-3 bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-4 text-white duration-300 transition-all"
                      >
                        <p className="text-2xl">{gift}</p>
                        <div className="flex gap-2">
                          <div className="flex flex-col gap-2">
                            <p className="font-semibold">{item.name}</p>
                            <p className="line-clamp-3">{item.wishes}</p>
                          </div>
                        </div>
                        <Button isFullWidth className="mt-auto">
                          See Details
                        </Button>
                      </div>
                    )
                  })}
                </div>

                <Button className="mx-auto">See More Wishes</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default EvanaBirthday
