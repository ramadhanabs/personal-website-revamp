import React from "react"
import { supabase } from "@/supabase"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

const LinkShortener = () => {
  return <div>LinkShortener</div>
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { slug } = context.query

  const res = await supabase.from("links").select().eq("slug", slug).single()
  return {
    redirect: {
      destination: res.data.redirect_url as string,
      permanent: false
    },
  }
}

export default LinkShortener
