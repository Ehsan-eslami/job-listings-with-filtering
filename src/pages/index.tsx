import path from "path";
import { promises as fs } from "fs";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Header from "@/components/Header";
import JobList from "@/components/JobList";
import { createPortal } from "react-dom";
 
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
      <footer className="attribution fixed bottom-0 z-40 left-[50%] translate-x-[-50%] bg-white py-1 px-2 ">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Ehsan-eslami">Ehsan Eslami</a>.
      </footer>
    </>      
  );
}
