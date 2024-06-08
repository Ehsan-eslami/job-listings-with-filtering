interface PostsProps {
  posts: object
}


const JobList: React.FC<PostsProps> = ({ posts }) => {


  return (
    <ul className="flex flex-col gap-3 relative  z-10">
      { posts.map(post =>(
        <li key={post.id}>
          <div className="bg-white shadow-xl flex flex-row py-3 px-5">
            <div>
              <img 
                src={post.logo}
                alt="company logo"
                className="w-10"
              />
            </div>
            <div className="grid grid-cols-6">
              <p className="text-xs">
                <span className="text-darkGrayishCyan font-bold">
                  {post.company}
                </span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default JobList;