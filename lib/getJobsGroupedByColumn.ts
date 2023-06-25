import { databases } from "@/appwrite";
import { Column, TypedColumn } from "@/typings";

export const getJobsGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_JOBS_COLLECTION_ID!
  );
  const jobs = data.documents;
  console.log(data.documents);

  // Reduce to separate fetched jobs by their status array
  const columns = jobs.reduce((acc, job) => {
    if (!acc.get(job.status)) {
      acc.set(job.status, { //if there is no job with this status
        id: job.status,// set initial
        jobs: [],
      });
    }

    acc.get(job.status)!.jobs.push({
      $id: job.$id,
      $createdAt: job.$createdAt,
      title: job.title,
      employer: job.employer,
      status: job.status,
      url: job.url,
      description: job.description,
      ...(job.image && { image: JSON.parse(job.image) }), // if there is an image then get that image
    });

    return acc;
  }, new Map<TypedColumn, Column>());
  console.log(" ");
  console.log("----- GET JOBS IN STATUS ARRAY/COLUMN -----");
    console.log(columns);
};
