import Image from "next/image";

interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn =
  | "applied"
  | "interviewing"
  | "offered"
  | "rejected"
  | "hired"
  | "technical";

interface Column {
  id: TypedColumn;
  jobs: Job[];
}

interface Job {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  url: url;
  description: string;
  employer: string;
  image?: Image;
}

interface Image {
  bucketId: string;
  fieldId: string;
}
