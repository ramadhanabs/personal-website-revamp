import Button from "@/components/elements/Button"
import Container from "@/components/elements/Container"
import { supabase } from "@/supabase"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import Head from "next/head"
import React, { FormEvent, useEffect, useMemo, useState } from "react"
import { twMerge } from "tailwind-merge"
import JSConfetti from "js-confetti"
import Countdown from "@/components/elements/Countdown"

const GIFT_OPTIONS = [
  {
    icon: "🧸",
    label: "Bear",
    value: "bear",
  },
  {
    icon: "🌹",
    label: "Rose",
    value: "rose",
  },
  {
    icon: "🍫",
    label: "Chocolate",
    value: "chocolate",
  },
  {
    icon: "🦄",
    label: "Unicorn",
    value: "unicorn",
  },
]

const BirthdayGreetings = () => {
  const [name, setName] = useState("")
  const [wishes, setWishes] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [selectedGift, setSelectedGift] = useState("")

  const [confetti, setConfetti] = useState<JSConfetti | null>(null)

  const isValidated = useMemo(() => {
    if (name && wishes && selectedGift) return true
    return false
  }, [name, wishes, selectedGift])

  const clickConfetti = () => {
    confetti?.addConfetti({
      emojis: ["🦄", "🌹", "✨"],
      emojiSize: 100,
      confettiNumber: 50,
    })
  }

  const reset = () => {
    setName("")
    setWishes("")
    setSelectedGift("")
  }

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    try {
      if (!isValidated) return
      setIsLoading(true)

      const { data, error } = await supabase
        .from("greetings")
        .insert({ name, wishes, gift: selectedGift })
        .select()

      if (!error) {
        setIsSuccess(true)
        clickConfetti()
        reset()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newConfetti = new JSConfetti()
      setConfetti(newConfetti)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Send Wishes for Evana Birthday!</title>
        <meta name="description" content="Send your best wishes for Evana here! " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 lg:gap-8 pt-[80px]">
              <h1 className="text-white text-[32px] md:text-[64px] leading-none font-bold tracking-tight text-center">
                <strong className="gradient-text" onClick={clickConfetti}>
                  Make a good wishes
                </strong>{" "}
                <br></br>
                for Evana birthday! 🎉✨
              </h1>
              <p className="text-white text-sm lg:text-lg opacity-80 text-center">
                Hello! I will collect all your wishes here and show it to her.
                <br></br>
                Say your best wishes and make her happy! 💖
              </p>

              <Countdown endDateTime={new Date("2023-09-25")}>
                {(timeLeft) => (
                  <div className="flex items-center justify-center gap-3 lg:gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center border border-cyan-500/60 bg-cyan-500/10 text-white rounded-xl w-max p-2 gap-2">
                        <p className="text-2xl font-semibold">{timeLeft.days}</p>
                      </div>
                      <p className="text-white text-sm">Days</p>
                    </div>

                    <p className="text-white">:</p>

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center border border-cyan-500/60 bg-cyan-500/10 text-white rounded-xl w-max p-2 gap-2">
                        <p className="text-2xl font-semibold">{timeLeft.hours}</p>
                      </div>
                      <p className="text-white text-sm">Hours</p>
                    </div>

                    <p className="text-white">:</p>

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center border border-cyan-500/60 bg-cyan-500/10 text-white rounded-xl w-max p-2 gap-2">
                        <p className="text-2xl font-semibold">{timeLeft.minutes}</p>
                      </div>
                      <p className="text-white text-sm">Minutes</p>
                    </div>

                    <p className="text-white">:</p>

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center border border-cyan-500/60 bg-cyan-500/10 text-white rounded-xl w-max p-2 gap-2">
                        <p className="text-2xl font-semibold">{timeLeft.seconds}</p>
                      </div>
                      <p className="text-white text-sm">Seconds</p>
                    </div>
                  </div>
                )}
              </Countdown>

              <div className="w-full bg-[#282828] border border-[#4f4f4f] rounded-xl p-4 text-white !flex !flex-col gap-4 hover:border-cyan-500/50 hover:bg-cyan-500/10 duration-300 transition-all h-max mt-10">
                {isSuccess ? (
                  <div className="flex flex-col items-center gap-4">
                    <h1 className="text-white text-2xl leading-none font-bold tracking-tight text-center">
                      <strong className="gradient-text">Thank you for your wishes!</strong>
                    </h1>
                    <Button onClick={() => setIsSuccess(false)}>Say another wishes</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="border text-sm rounded-lg block w-full p-2.5 bg-[#333333] border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none"
                          placeholder="Put your name here"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="wishes"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your wishes
                        </label>
                        <textarea
                          rows={4}
                          id="wishes"
                          className="border text-sm rounded-lg block w-full p-2.5 bg-[#333333] border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none"
                          placeholder="Put your wishes here"
                          value={wishes}
                          onChange={(e) => setWishes(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Choose gift for Evana
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {GIFT_OPTIONS.map((item) => (
                            <div
                              key={item.label}
                              onClick={() => setSelectedGift(item.value)}
                              className={twMerge(
                                "cursor-pointer border justify-between rounded-lg w-full p-2.5 bg-[#333333] border-gray-600/70 hover:border-cyan-500/70 transition-all duration-300 text-white flex items-center",
                                selectedGift === item.value && "border-cyan-500/70"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <p className="text-2xl">{item.icon}</p>
                                <div>
                                  <p>{item.label}</p>
                                </div>
                              </div>

                              {selectedGift === item.value && (
                                <CheckCircleIcon className="w-5 h-5 text-cyan-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button
                        isLoading={isLoading}
                        isFullWidth
                        type="submit"
                        disabled={!isValidated}
                      >
                        Send your wishes!
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default BirthdayGreetings
