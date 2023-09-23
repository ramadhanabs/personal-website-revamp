import Button from "@/components/elements/Button"
import Container from "@/components/elements/Container"
import ContentLoader from "@/components/elements/ContentLoader"
import DetailWishDialog from "@/composites/evana-birthday/DetailWishDialog"
import useDisclosure from "@/hooks/useDisclosure"
import { supabase } from "@/supabase"
import Head from "next/head"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { WishesType } from "."
import { GIFT_OPTIONS } from "./send-wishes"

const WishesList = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [wishes, setWishes] = useState<WishesType[]>([])
  const [selectedWish, setSelectedWish] = useState<WishesType | null>(null)

  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("greetings").select("*")

      if (!error) {
        setWishes(data as WishesType[])
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
        <title>List of Wishes</title>
        <meta name="description" content="List of wishes from us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="min-h-screen flex justify-center">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4 lg:gap-8 w-full">
              {/* Wishes Section */}
              <div className="flex flex-col gap-2 py-[100px] items-center">
                <h1 className="text-white text-lg lg:text-[48px] leading-none font-bold tracking-tight">
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

export default WishesList
