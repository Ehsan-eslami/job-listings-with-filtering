# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

This project is an intermediate-level challenge from Frontend Mentor. I completed it in a week, primarily due to my busy schedule rather than the difficulty of the project itself.

At the outset, I considered the tools I wanted to utilize for this application. I chose Next.js, as it presented a valuable opportunity to test and enhance my skills. Although I have been learning Next.js for less than a month, I believe I am making significant progress and growing my proficiency with this powerful framework.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot
![Screenshot from the web page.](./public/Screenshot.png?raw=true)

### Links

- Solution URL: [Solution URL](https://github.com/Ehsan-eslami/job-listings-with-filtering)
- Live Site URL: [Live Site URL](https://job-listings-with-filtering-topaz.vercel.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- TypeScript
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

In this project I use next.js and tailwind css, I learn how to fetch local data in next.js app. I also learn about set the default values in the 'tailwind.config.ts'. both next.js and tailwind have complete documentation and they are so useful. When I want set meta data the documentation of next.js helped me a lot.
[you can read and learn next.js document from here](https://nextjs.org/docs)


```js
// fetch data from json file
export const getStaticProps = (async (context) => {
  const filePath = path.join(process.cwd(), '/json/data.json')
  const jsonData = await fs.readFile(filePath, "utf8")
  const posts: Posts[] = JSON.parse(jsonData)

  return {props: {posts}}
}) satisfies GetStaticProps<{
  posts: Posts[]
}>

const applyFilters = () => {
    let filteredData = [...posts];
    if (filters.role) {
      filteredData = filteredData.filter(post => post.role === filters.role);
    }
    if (filters.level) {
      filteredData = filteredData.filter(post => post.level === filters.level);
    }
    if (filters.languages.length > 0) {
      filteredData = filteredData.filter(post => 
        filters.languages.every(lang => post.languages.includes(lang))
      );
    }
    if (filters.tools.length > 0) {
      filteredData = filteredData.filter(post => 
        filters.tools.every(tool => post.tools.includes(tool))
      );
    }
    setData(filteredData);
  };

  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => {
      const updatedFilters = { ...prev };
      if (type === 'role') {
        updatedFilters.role = value;
      } else if (type === 'level') {
        updatedFilters.level = value;
      } else if (type === 'language') {
        updatedFilters.languages = updatedFilters.languages.includes(value)
          ? updatedFilters.languages.filter(lang => lang !== value)
          : [...updatedFilters.languages, value];
      } else if (type === 'tool') {
        updatedFilters.tools = updatedFilters.tools.includes(value)
          ? updatedFilters.tools.filter(tool => tool !== value)
          : [...updatedFilters.tools, value];
      }
      return updatedFilters;
    });
  };

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

## Author

- Website - [Ehsan Eslami](https://linktr.ee/Ehsaneslami)
- Frontend Mentor - [@Ehsan-eslami](https://www.frontendmentor.io/profile/Ehsan-eslami)

<!----------------------------------------next.js readme file--------------------------------------->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

