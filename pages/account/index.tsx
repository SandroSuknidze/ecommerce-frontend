import { useAuth } from '@/context/authContext'
import { GetServerSideProps } from 'next';
import withAuth from '@/utils/withAuth';
import { useRouter } from 'next/router'

const Index = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    async function Logout() {
        await router.push('/')
        logout()
    }

    return (
        <div>
            hello {user?.first_name}, this is protected dashboard
            <button onClick={Logout}>Logout</button>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
    const token = req.cookies.access_token;

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

export default withAuth(Index);
