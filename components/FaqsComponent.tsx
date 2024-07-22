import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface FaqsComponentProps {
    id: string
    title: string
    description: string
}
export function FaqsComponent({ id, title, description }: FaqsComponentProps) {
    const [isQuestionOpen, setIsQuestionOpen] = useState(false)

    const toggleBrand = () => {
        setIsQuestionOpen(!isQuestionOpen)
    }

    return (
        <div className="border-b-[1px] border-b-[#ebebeb]">
            <div
                onClick={toggleBrand}
                className="flex cursor-pointer justify-between py-[20px]"
            >
                <h4 className={`${isQuestionOpen ? 'text-11black' : 'text-55black'} text-[18px] font-medium`}>
                    {id}{' '}{title}
                </h4>
                <div className="relative">
                    <FontAwesomeIcon
                        icon={faMinus}
                        className="text-87black"
                    />
                    <FontAwesomeIcon
                        icon={faMinus}
                        className={`${isQuestionOpen
                            ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                    />
                </div>
            </div>
            <div className="max-h-[240px] overflow-hidden">
                <AnimatePresence initial={false}>
                    {isQuestionOpen && (
                        <motion.section
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ type: 'spring', duration: 1, bounce: 0 }}
                        >
                            <div className="py-[20px] text-55black">
                                <h2 className="">{description}</h2>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}