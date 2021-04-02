import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],

    secret: process.env.SECRET,

    jwt: {
        secret: process.env.JWT_SECRET,
    },

    pages: {
        signIn: '/login'
    },

    callbacks: {
        async signIn(user, account, profile) {
            //console.log(user);
            return true;
        },
    }
});