import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface CollectionProps {
    imageSrc: StaticImageData;
    title: string;
    id: number
}

function Collection({ imageSrc, title, id }: CollectionProps) {
    return (
        <div className="mx-[15px] mb-[30px] max-w-[320px] max-h-[406px] relative overflow-hidden rounded-xl">
            <Link href={`/shop/${id}`}>
                <Image src={imageSrc} alt="collection"
                    className="rounded-xl hover:scale-110 transition duration-300 cursor-pointer max-w-full overflow-hidden" />
            </Link>
            <div
                className="absolute right-4 left-4 bottom-4 top-auto bg-white z-10 rounded p-4 overflow-hidden text-center">
                <div className="font-medium">
                    <Link href={`/shop/${id}`} className="hover:text-red-600 transition duration-300">{title}</Link>
                </div>
                <div className="">
                    (9 Products)
                </div>
            </div>
        </div>
    )
}

export default Collection