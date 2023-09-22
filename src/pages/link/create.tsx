import Button from "@/components/elements/Button"
import Container from "@/components/elements/Container"
import Head from "next/head"
import React, { useState, FormEvent, KeyboardEvent } from "react"
import { supabase } from "@/supabase"
import {
  LinkIcon,
  ClipboardIcon,
  ArrowTopRightOnSquareIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { toast } from "react-hot-toast"
import _ from "underscore"
import { isValidUrl } from "@/utils/stringUtils"
import Link from "next/link"

const hostUrl = process.env.NEXT_PUBLIC_HOST_URL

const CreateLink = () => {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [subDomain, setSubDomain] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [isCustomMode, setCustomMode] = useState(true)
  const [isShowQuickUrl, setIsShowQuickUrl] = useState(false)

  const [generatedUrl, setGeneratedUrl] = useState("")

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl)
    toast.success(`Copied to clipboard`)
  }

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    if (!url) return

    if (!isValidUrl(url)) {
      toast.error("Please enter valid url")
      return
    }

    const type = isCustomMode ? "custom" : "quick"
    const linkName = isCustomMode ? name : `Quick - ${_.random(1000, 9999)}`

    try {
      setIsLoading(true)

      const slug = subDomain ? subDomain : Math.random().toString(36).substr(2, 6)

      const { data, error } = await supabase
        .from("links")
        .insert({ name: linkName, redirect_url: url, slug, type })
        .select()
      if (!error) {
        setGeneratedUrl(`${hostUrl}/link/${data[0].slug}`)

        if (!isCustomMode) {
          setIsShowQuickUrl(true)
        }
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Url Shortener</title>
        <meta name="description" content="A shortlink generator from bagus.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-white text-[40px] md:text-[100px] leading-none font-bold tracking-tight">
                <strong className="gradient-text">Bye-bye</strong> <br></br>
                cumbersome website URL.
              </h1>
              <p className="text-white text-lg opacity-80">
                Transform any cumbersome URL into a sleek and manageable shortcut in seconds.
                <br></br>
                Hello to concise, shareable links.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-full bg-[#282828] border border-[#4f4f4f] text-white rounded-lg sm:rounded-2xl p-1 sm:p-2.5 flex items-center gap-2">
                  <input
                    type="text"
                    id="name"
                    className="text-sm rounded-lg block w-full py-2 px-2.5 placeholder-gray-400 text-white bg-[#282828] outline-none"
                    placeholder="https://your-long-url.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={handleEnter}
                    required
                  />
                  <Button
                    className="hidden sm:flex whitespace-nowrap gap-3"
                    type="button"
                    onClick={handleSubmit}
                    isLoading={isLoading}
                  >
                    <LinkIcon className=" w-5 h-5" />
                    <p>Short Link</p>
                  </Button>
                </div>
                <Link href="/link/custom">
                  <Button
                    className="w-max whitespace-nowrap gap-3"
                    type="button"
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    isFullWidth
                  >
                    <ArrowRightCircleIcon className=" w-5 h-5" />
                    <p>Custom URL</p>
                  </Button>
                </Link>
              </div>

              {/* Button Mobile */}
              <Button
                className="flex sm:hidden whitespace-nowrap gap-3"
                type="button"
                onClick={handleSubmit}
                isLoading={isLoading}
                isFullWidth
              >
                <LinkIcon className=" w-5 h-5" />
                <p>Short Link</p>
              </Button>

              {isShowQuickUrl && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#282828] border border-[#4f4f4f] rounded-2xl p-2.5 pr-2.5 pl-5 flex items-center justify-between"
                >
                  <p className="text-gray-400 text-sm">
                    Your short link is:{" "}
                    <strong
                      className="text-white hover:underline cursor-pointer"
                      onClick={handleCopy}
                    >
                      {generatedUrl}
                    </strong>
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      className="whitespace-nowrap gap-3"
                      type="button"
                      onClick={handleCopy}
                      variant="dark"
                    >
                      <ClipboardIcon className=" w-5 h-5" />
                    </Button>
                    <Link href={generatedUrl} rel="noopener noreferrer" target="_blank">
                      <Button className="whitespace-nowrap gap-3" type="button" variant="dark">
                        <ArrowTopRightOnSquareIcon className=" w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default CreateLink
