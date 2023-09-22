import Head from "next/head"
import React, { FormEvent, useState } from "react"
import Container from "@/components/elements/Container"
import { isValidUrl } from "@/utils/stringUtils"
import { toast } from "react-hot-toast"
import { supabase } from "@/supabase"
import Button from "@/components/elements/Button"

const hostUrl = process.env.NEXT_PUBLIC_HOST_URL

const CreateCustomLink = () => {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [subDomain, setSubDomain] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [generatedUrl, setGeneratedUrl] = useState("")

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    if (!url) return

    if (!isValidUrl(url)) {
      toast.error("Please enter valid url")
      return
    }

    try {
      setIsLoading(true)

      const slug = subDomain ? subDomain : Math.random().toString(36).substr(2, 6)

      const { data, error } = await supabase
        .from("links")
        .insert({ name, redirect_url: url, slug, type: "custom" })
        .select()
      if (!error) {
        setGeneratedUrl(`${hostUrl}/link/${data[0].slug}`)
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
        <title>Custom Url Shortener</title>
        <meta name="description" content="A shortlink generator from bagus.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <section className="h-screen flex flex-col gap-4 items-center justify-center max-w-2xl mx-auto">
          <h1 className="text-white text-[40px] md:text-[64px] leading-none font-bold tracking-tight">
            <strong className="gradient-text">Custom</strong> URL
          </h1>
          <p className="text-white text-center text-lg opacity-80">
            You dont like random string on your URLs? Me too! <br></br>
            Customize your subdomain here 👇
          </p>
          <div className="w-full bg-[#282828] border border-[#4f4f4f] rounded-xl p-4 text-white !flex !flex-col gap-4 hover:border-cyan-500/50 hover:bg-cyan-500/10 duration-300 transition-all h-max">
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
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="destinationUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Destination Url
                  </label>
                  <input
                    type="text"
                    id="destinationUrl"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://your-long-url.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subdomain"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sub Domain (Optional)
                  </label>
                  <div className="flex items-center">
                    <div className="border border-r-0 text-sm rounded-l-lg block w-max p-2.5 bg-gray-400 border-gray-600 text-gray-700">
                      https://bagus.tech/
                    </div>
                    <input
                      type="text"
                      id="subdomain"
                      className="border border-l-0 text-sm rounded-r-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
                      placeholder="your-sub-domain"
                      value={subDomain}
                      onChange={(e) => setSubDomain(e.target.value)}
                    />
                  </div>
                </div>
                <Button isFullWidth type="submit">
                  Shorten URL
                </Button>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </>
  )
}

export default CreateCustomLink
