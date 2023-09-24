import Button from "@/components/elements/Button"
import Container from "@/components/elements/Container"
import Countdown from "@/components/elements/Countdown"
import useConfetti from "@/hooks/useConfetti"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useMemo, useState } from "react"

const eligiblePasscode = process.env.NEXT_PUBLIC_PASSCODE
const endDate = new Date("2023-09-25")
const currentDate = new Date()

const EvanaBirthdayAuth = () => {
  const router = useRouter()
  const confetti = useConfetti()
  const [passcode, setPasscode] = useState("")
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSuccess = () => {
    setIsLoading(false)
    confetti?.addConfetti({
      emojis: ["🦄", "🌹", "✨"],
      emojiSize: 100,
      confettiNumber: 50,
    })

    setTimeout(() => {
      router.push("/evana-birthday")
    }, 1000)
  }

  const handleCheckPasscode = () => {
    setError(false)
    setIsLoading(true)
    if (passcode === eligiblePasscode) {
      setTimeout(() => handleSuccess(), 1000)
    } else {
      setTimeout(() => {
        setError(true)
        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <>
      <Head>
        <title>Only for Evana</title>
        <meta name="description" content="Evana is eligible to enter here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 lg:gap-8 pt-[80px]">
              <h1
                className="text-white text-[32px] md:text-[64px] leading-none font-bold tracking-tight text-center"
                data-aos="fade-up"
              >
                <strong className="gradient-text">Hi, Evana Stevani!</strong> <br></br>
              </h1>
              <p className="text-white text-center" data-aos="fade-up">
                You can open to this on your special date, be patient for something that i already
                prepared for you 💖 <br></br>- Your love, Bagus.
              </p>

              <Countdown endDateTime={endDate} data-aos="fade-up">
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

              <div
                className="w-full bg-[#282828] border border-[#4f4f4f] rounded-xl p-4 text-white !flex !flex-col gap-4 hover:border-cyan-500/50 hover:bg-cyan-500/10 duration-300 transition-all h-max mt-10"
                data-aos="fade-up"
              >
                <div>
                  <label
                    htmlFor="passcode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Passcode
                  </label>
                  <input
                    type="password"
                    id="passcode"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-[#333333] border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none"
                    placeholder="Passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    required
                  />
                  {error && (
                    <p className="text-red-500 text-xs mt-3">
                      Wrong Passcode! Try with your birthday date.
                    </p>
                  )}
                </div>
                <Button
                  isLoading={isLoading}
                  className="mx-auto"
                  type="button"
                  onClick={handleCheckPasscode}
                  disabled={currentDate < endDate}
                >
                  Check Passcode
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default EvanaBirthdayAuth
