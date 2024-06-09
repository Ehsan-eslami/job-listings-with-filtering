interface PostsProps {
  posts: object
}


const JobList: React.FC<PostsProps> = ({ posts }) => {


  return (
    <ul>
      { posts.map(post =>(
        <li key={post.id}>
          <div className="flex flex-row gap-4">
            <div>
              <img  
                src={post.logo}
                alt="company logo"
                className="w-20"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2">
                <p className="text-darkGrayishCyan my-auto text-sm font-bold">
                  {post.company}
                </p>    
                {
                  post.new && (
                    <p className="bg-darkGrayishCyan text-[10px] my-auto text-white px-1 py-[2px] rounded-lg">
                      NEW!
                    </p>
                  )
                }

                {
                  post.featured && (
                    <p className="bg-veryDarkGrayishCyan text-[10px] my-auto text-white   px-1 py-[2px] rounded-lg">
                      FEATURED!
                    </p>
                  )
                }
              </div>
              <h1 className="font-bold text-lg">
                {post.position}
              </h1>

              <div className="flex flex-row gap-2 text-darkGrayishCyan">
                <p className=" my-auto text-sm font-bold">
                  {post.postedAt}
                </p>    
                .
                <p className=" my-auto text-sm font-bold">
                  {post.contract}
                </p>
                .
                <p className=" my-auto text-sm font-bold">
                  {post.location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-between items-center text-darkGrayishCyan font-semibold">
            <p className="bg-lightGrayishCyan-filterTablets py-1 px-2 rounded-lg ">
              {post.role} 
            </p>
            <p className="bg-lightGrayishCyan-filterTablets py-1 px-2 rounded-lg ">
              {post.level} 
            </p>
            <div className="flex flex-row gap-2">
              {post.languages.map((lang: string) => 
                <p className="bg-lightGrayishCyan-filterTablets py-1 px-2 rounded-lg ">
                  {lang}
                </p>
              )} 
            </div>  

            <div className="flex flex-row gap-2">
              {post.tools.map((tool: string) => 
                <p className="bg-lightGrayishCyan-filterTablets py-1 px-2 rounded-lg ">
                  {tool}
                </p>
              )} 
            </div>

          </div>
        </li>
      ))}
    </ul>
  )
}

export default JobList;