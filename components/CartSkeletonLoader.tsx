import { SkeletonLoader } from '@/components/SkeletonLoader'

export function CartSkeletonLoader() {
    return (
        <>
            <div className="max-w-[1290px] m-auto px-[30px] lg:px-[15px]">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center items-center">
                    <SkeletonLoader className="h-[59px] w-[200px] mb-[5px] rounded-full" />
                    <SkeletonLoader className="h-[20px] w-[250px] rounded-full" />
                </div>
                <div className="flex lg:flex-col">
                    <div className="w-3/4 pr-[30px] lg:w-full lg:p-0">
                        <SkeletonLoader className="h-[40px] w-[100%] mb-[20px] rounded-lg" />
                        <div className="border-collapse border border-[#ebebeb] w-full md:border-0">
                            <div className="flex justify-between p-4 border-b border-[#ebebeb]">
                                <SkeletonLoader className="h-[150px] w-[150px] rounded-lg" />
                                <SkeletonLoader className="h-[30px] w-[100px] rounded-full" />
                                <SkeletonLoader className="h-[30px] w-[100px] rounded-full" />
                                <SkeletonLoader className="h-[30px] w-[30px] rounded-full" />
                            </div>
                        </div>
                        <div className="mt-[70px]">
                            <SkeletonLoader className="h-[20px] w-[200px] mb-[15px] rounded-full" />
                            <div className="flex space-x-4">
                                <SkeletonLoader className="h-[120px] w-1/2 rounded-lg md:w-full" />
                                <SkeletonLoader className="h-[120px] w-1/2 rounded-lg md:hidden" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 py-[40px] px-[30px] bg-[#f5f5f5] rounded-[5px] lg:w-full">
                        <div className="mb-[10px]">
                            <SkeletonLoader className="h-[20px] w-[150px] mb-[10px] rounded-full" />
                            <SkeletonLoader className="h-[130px] w-[100%] rounded-lg" />
                        </div>
                        <div className="mb-[10px]">
                            <SkeletonLoader className="h-[20px] w-[150px] mb-[10px] rounded-full" />
                            <SkeletonLoader className="h-[40px] w-[100%] rounded-lg" />
                        </div>
                        <div className="mb-[10px]">
                            <SkeletonLoader className="h-[20px] w-[150px] mb-[10px] rounded-full" />
                            <SkeletonLoader className="h-[40px] w-[100%] rounded-lg" />
                        </div>
                        <div className="mb-[10px]">
                            <SkeletonLoader className="h-[20px] w-[150px] mb-[10px] rounded-full" />
                            <SkeletonLoader className="h-[40px] w-[100%] rounded-lg" />
                        </div>
                        <div className="border-t-[1px] border-[#DEDEDE] mt-[20px]">
                            <SkeletonLoader className="h-[20px] w-[150px] my-[10px] rounded-full" />
                            <SkeletonLoader className="h-[20px] w-[100px] my-[10px] rounded-full" />
                        </div>
                        <SkeletonLoader className="h-[40px] w-[100%] mt-[20px] rounded-full" />
                    </div>
                </div>
            </div>
        </>
    )
}