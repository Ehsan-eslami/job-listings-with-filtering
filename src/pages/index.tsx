import path from "path";
import { promises as fs } from "fs";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Header from "@/components/Header";
import JobList from "@/components/JobList";
 
type Posts = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: Array<string>,
  tools: Array<string>
}

export const getStaticProps = (async (context) => {
  const filePath = path.join(process.cwd(), '/json/data.json')
  const jsonData = await fs.readFile(filePath, "utf8")
  const posts: Posts[] = JSON.parse(jsonData)

  return {props: {posts}}
}) satisfies GetStaticProps<{
  posts: Posts[]
}>

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  
  return (
    <>
      <Header />
      <JobList posts={posts} />
    </>      
  );
}
