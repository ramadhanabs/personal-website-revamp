import Button from "@/components/elements/Button"
import { formatRupiah } from "@/utils/numberUtils"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import React from "react"
import { twMerge } from "tailwind-merge"

const DATA = [
  {
    id: 1,
    name: "Basic",
    description:
      "We understand that every individual or small business has unique needs, which is why we suggest Essential package to fit your specific requirements.",
    attributes: [
      {
        value: "modern_techstack",
        label: "Modern Techstack",
      },
      {
        value: "1x_revision",
        label: "1x Revision",
      },
      {
        value: "1_page",
        label: "Only 1 Page",
      },
      {
        value: "1_pages",
        label: "Process 1 Week",
      },
    ],
    bonuses: [],
    price: 750000,
    isRecommended: false,
    img_url:
      "https://images.unsplash.com/photo-1545431613-51ec097943c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: 2,
    name: "Essential",
    description:
      "We understand that every individual or small business has unique needs, which is why we suggest Essential package to fit your specific requirements.",
    attributes: [
      {
        value: "modern_techstack",
        label: "Modern Techstack",
      },
      {
        value: "2x_revision",
        label: "2x Revision",
      },
      {
        value: "5_page",
        label: "Only 5 Pages",
      },
      {
        value: "1_pages",
        label: "Process 1 Week",
      },
    ],
    bonuses: [
      {
        value: "free_domain",
        label: "Free Domain (.com, .id, .co.id)",
      },
      {
        value: "free_ui_ux",
        label: "Free UI/UX",
      },
    ],
    price: 2000000,
    isRecommended: true,
    img_url:
      "https://images.unsplash.com/photo-1545431766-45ff67845191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: 3,
    name: "Reguler",
    description:
      "We understand that every individual or small business has unique needs, which is why we suggest Essential package to fit your specific requirements.",
    attributes: [
      {
        value: "modern_techstack",
        label: "Modern Techstack",
      },
      {
        value: "1x_revision",
        label: "1x Revision",
      },
      {
        value: "1_page",
        label: "Only 1 Page",
      },
      {
        value: "1_pages",
        label: "Process 1 Week",
      },
    ],
    bonuses: [],
    price: 1200000,
    isRecommended: false,
    img_url:
      "https://images.unsplash.com/photo-1545431685-fbc1a310a797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
]
const PricingSection = () => {
  return (
    <section className="my-[100px]">
      <p className="text-xs text-white font-thin tracking-[.15em]">OUR PRICING - LANDING PAGE</p>
      <p className="text-[48px] text-white font-bold leading-none my-8">
        Get a bespoke quote.
        <br />
        Lets make it <strong className="gradient-text">Groovy!</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        {DATA.map((item) => (
          <div
            className={twMerge(
              "bg-[#1a1a1a] p-4 rounded-xl text-white group h-max",
              item.isRecommended && "border border-cyan-500/40"
            )}
            key={item.id}
          >
            <div className="relative w-full h-[200px]">
              <img
                src={item.img_url}
                alt=""
                className="rounded-xl w-full h-[200px] object-cover opacity-50 group-hover:opacity-100 ease-in-out duration-200"
              />
              {item.isRecommended && (
                <div className="absolute top-3 left-3">
                  <span className=" px-3 py-1 bg-gray-800/50 font-bold text-xs rounded-full text-white">
                    Recommended
                  </span>
                </div>
              )}

              <div className="absolute bottom-3 left-3">
                <p className="text-[32px] font-bold">{item.name}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 my-5">{item.description}</p>
            <div className="flex flex-col gap-3 text-gray-300">
              {item.attributes.map((attr) => (
                <div className="flex items-center" key={attr.value}>
                  <CheckCircleIcon className="w-4 h-4" />
                  <p className="ml-2">{attr.label}</p>
                </div>
              ))}
            </div>

            {item.bonuses.length > 0 && (
                <>
                <hr className="my-4 border border-gray-700" />
                <p className="mb-4">Bonus</p>
                <div className="flex flex-col gap-3 text-gray-300">
                  {item.bonuses.map((bonus) => (
                    <div className="flex items-center" key={bonus.value}>
                      <CheckCircleIcon className="w-4 h-4" />
                      <p className="ml-2">{bonus.label}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="flex items-center my-5">
              <p className="text-sm text-gray-600 mr-2">Starting at</p>
              <p className="text-center text-xl font-bold">{formatRupiah(item.price)}</p>
            </div>
            <Button variant="primary" isFullWidth>
              Order Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingSection
