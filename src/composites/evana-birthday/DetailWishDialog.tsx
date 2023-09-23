import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { WishesType } from "@/pages/evana-birthday"
import Button from "@/components/elements/Button"
import { GIFT_OPTIONS } from "@/pages/evana-birthday/send-wishes"

export type DetailWishDialogProps = {
  isOpen: boolean
  onClose: () => void
  data: WishesType | null
}

const DetailWishDialog = ({ isOpen, onClose, data }: DetailWishDialogProps) => {
  const gift = GIFT_OPTIONS.find((gift) => gift.value === data?.gift)?.icon
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
      as={Fragment}
    >
      <Dialog
        static
        className="fixed top-0 flex items-center justify-center w-screen h-screen p-4 bg-black/50"
        onClose={onClose}
      >
        <Dialog.Panel className="bg-black border border-cyan-500/50 text-white rounded-lg max-w-[500px] p-4">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold capitalize">
              Wish From <strong className="text-cyan-500 ">{data?.name}</strong>
            </p>

            <hr className="border-cyan-500/50 -mx-4" />
            <p className="text-md">{data?.wishes}</p>
            <div className="flex items-center gap-1">
              <p>-{data?.name} give you a</p>
              <p className="text-lg">{gift}</p>
            </div>
            <hr className="border-cyan-500/50 -mx-4" />

            <div className="flex justify-center lg:justify-end">
              <Button onClick={onClose}>Close</Button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}

export default DetailWishDialog
