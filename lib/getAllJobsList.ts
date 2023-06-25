import { databases } from "@/appwrite";

export const getAllJobsList = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_JOBS_COLLECTION_ID!
  );

  const jobs = data.documents;
  console.log(" ");
  console.log("----- ALL JOBS IN A LIST -----");
  console.log(data.documents);
  
};
