import { databases } from "@/appwrite";
import { Board, Column, TypedColumn } from "@/typings";

export const getJobsGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_JOBS_COLLECTION_ID!
  );
  const jobs = data.documents;
  console.log("Grouped docs", data.documents);

  // ? Reduce to separate fetched jobs by their status array
  const columns = jobs.reduce((acc, job) => {
    if (!acc.get(job.status)) {
      acc.set(job.status, {
        //if there is no job with this status
        id: job.status, // set initial
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

  // console.log(" ");
  // console.log("----- GET JOBS IN STATUS ARRAY/COLUMN -----");
  // console.log(columns);

  // ? if columns do not have any entries, display them as empty with an add job button
  const columnTypes: TypedColumn[] = [
    "Applied",
    "Interviewing",
    "Rejected",
  ];

  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
      // if there is no column with above status
      columns.set(columnType, {
        // create it and populate with empty array
        id: columnType,
        jobs: [],
      });
    }
  }
  console.log(columns);

  // ? Sort columns by same order as the array, Applied -> Interviewing -> Technical -> Rejected -> Offered -> Hired
  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0]) // Sort in same order as orderTypes above
    )
  );

  const board: Board = {
    columns: sortedColumns,
  };

  return board
};
