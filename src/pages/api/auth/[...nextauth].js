import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin'
  },
  adapter: TypeORMLegacyAdapter({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "nextauth"
  }),
}

export default NextAuth(authOptions)