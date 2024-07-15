import { useAuth } from '@/context/authContext'
import { GetServerSideProps } from 'next';
import withAuth from '@/utils/withAuth';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { withTranslations } from '@/utils/i18nHelper'

export const getStaticProps = withTranslations(['common']);
const Index = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    const [section, setSection] = useState(1)

    async function Logout() {
        await router.push('/')
        logout()
        toast.success('Logout successful!', {
            position: 'top-center',
        })
    }

    return (
        <div>
            <div className="max-w-[1290px] m-auto px-[15px] md:px-0">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px] mb-[5px] text-[35px]">My Account</h1>
                    <nav>
                        <ol className="text-55black text-[14px]">
                            <li className="inline">
                                <Link href="/">Home / </Link>
                            </li>
                            <li className="inline">Account</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex justify-center md:flex-col">
                    <div className="flex w-1/4 px-[50px] lg:px-[15px] md:w-full">
                        <div className="flex flex-col w-full rounded-[5px] border-[1px] border-[#ebebeb] h-min">
                            <div onClick={() => setSection(1)} className={`${section === 1 && 'bg-[#f5f5f5] font-medium'} px-[20px] py-[11px] 
                                border-b-[1px] border-[#ebebeb] cursor-pointer`}
                            >
                                Dashboard
                            </div>
                            <div onClick={() => setSection(2)} className={`${section === 2 && 'bg-[#f5f5f5] font-medium'} px-[20px] py-[11px] 
                                border-b-[1px] border-[#ebebeb] cursor-pointer`}>Order
                                history
                            </div>
                            <div onClick={Logout} className="px-[20px] py-[11px] cursor-pointer">Log out</div>
                        </div>
                    </div>
                    <div className="flex flex-col w-3/4 px-[50px] border-l-[1px] border-l-[#ebebeb] lg:px-[15px] md:w-full">
                        {section === 1 && (
                            <div className="md:mt-[30px]">
                                <div className="flex flex-col">
                                    <div className="text-55black">Welcome&nbsp;
                                        <span
                                            className="font-medium text-11black">{user?.first_name + ' ' + user?.last_name}!&nbsp;</span>
                                        (Not? <span
                                            className="font-medium text-11black">{user?.first_name + ' ' + user?.last_name}&nbsp;</span>
                                        <span onClick={Logout}
                                              className="underline cursor-pointer text-11black">Log out</span>)
                                    </div>
                                </div>
                                <div className="flex flex-col mt-[30px]">
                                    <h3 className="mb-[15px] text-[24px] font-medium">Account details</h3>
                                    <div
                                        className="flex flex-col w-full border-[1px] border-[#ebebeb] text-55black rounded-[5px]">
                                        <div className="flex w-full">
                                            <div
                                                className="min-w-[138px] px-[20px] py-[13px] border-b-[1px] border-r-[1px] border-[#ebebeb]
                                                    sm:min-w-[65px] sm:px-[10px] sm:leading-[35px] sm:m-auto sm:py-0">Name
                                            </div>
                                            <div
                                                className="w-full px-[20px] py-[13px] border-b-[1px] border-[#ebebeb] line-clamp
                                                    sm:px-[10px] sm:leading-[35px] sm:m-auto sm:py-0">{user?.first_name + ' ' + user?.last_name}</div>
                                        </div>
                                        <div className="flex w-full">
                                            <div
                                                className="min-w-[138px] px-[20px] py-[13px] border-r-[1px] border-[#ebebeb]
                                                    sm:min-w-[65px] sm:px-[10px] sm:leading-[35px] sm:m-auto sm:py-0">Email
                                            </div>
                                            <div className="w-full px-[20px] py-[13px] line-clamp sm:px-[10px] sm:leading-[35px]
                                            sm:m-auto sm:py-0">{user?.email}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {section === 2 && (
                            <>
                                <div className="flex flex-col md:mt-[30px]">
                                    <h3 className="mb-[15px] text-[24px] font-medium">Order history</h3>
                                    <table className="border-collapse border border-[#ebebeb] w-full md:border-0">
                                        <thead className="md:hidden">
                                        <tr>
                                            <th className="border border-[#ebebeb] p-4 w-6/12 text-left font-medium"
                                                colSpan={2}>Product
                                            </th>
                                            <th className="border border-[#ebebeb] p-4 w-1/12 text-left font-medium">Quantity</th>
                                            <th className="border border-[#ebebeb] p-4 w-2/12 text-left font-medium">Total</th>
                                            <th className="border border-[#ebebeb] p-4 w-3/12 text-left font-medium">Purchase Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {/*<CartItem dynamicCount={false}/>*/}
                                            {/*<CartItem dynamicCount={false}/>*/}
                                            {/*<CartItem dynamicCount={false}/>*/}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const { req } = context;
//     const token = req.cookies.access_token;
//
//     if (!token) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         };
//     }
//
//     return {
//         props: {},
//     };
// };

export default withAuth(Index);
