// import mongoose from "mongoose";

// export const connectToDb = async () => {
//   try {
//     if (!process.env.NEXT_PUBLIC_MONGO) {
//       throw new Error("MongoDB connection string is not provided");
//     }

//     await mongoose.connect(process.env.NEXT_PUBLIC_MONGO);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// };

import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    if (!process.env.NEXT_PUBLIC_MONGO) {
      throw new Error("MongoDB connection string is not provided");
    }

    if (!process.env.NEXTAUTH_SECRET) {
      throw new Error("NextAuth secret is not provided");
    }

    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO);
    console.log("Connected to MongoDB");
    console.log("NextAuth secret is available");
  } catch (error) {
    console.log(error);
  }
};
