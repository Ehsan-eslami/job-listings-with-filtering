import { useEffect, useState } from "react";

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

interface PostsProps {
    posts: Posts[]
}

const JobList: React.FC<PostsProps> = ({ posts }) => {

  const [data, setData ] = useState(posts);
  const [filters, setFilters] = useState({
    role: '',
    level: '',
    languages: [] as string[],
    tools: [] as string[]
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

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

  const clearFilter = (type: string, value: string) => {
    setFilters(prev => {
      const updatedFilters = { ...prev };
      if (type === 'role') {
        updatedFilters.role = '';
      } else if (type === 'level') {
        updatedFilters.level = '';
      } else if (type === 'language') {
        updatedFilters.languages = updatedFilters.languages.filter(lang => lang !== value);
      } else if (type === 'tool') {
        updatedFilters.tools = updatedFilters.tools.filter(tool => tool !== value);
      }
      return updatedFilters;
    });
  };

  return (
    <>
      <ul>
        { (filters.role || filters.level || filters.languages.length > 0 || filters.tools.length > 0) &&
          <div className="filter-input">
            <div className="w-[90%] flex gap-2 flex-wrap rounded-md">
              {filters.role && (  
                <div className="filter-chip">
                  <span className="py-1 px-2">
                  {filters.role}
                  </span>
                  <div className="bg-darkGrayishCyan flex justify-center items-center p-2 rounded-r-md hover:bg-black duration-200">
                    <img src="/images/icon-remove.svg" alt="" onClick={() => clearFilter('role', filters.role)} />
                  </div>
                </div>
              )}
              {filters.level && (  
                <div className="filter-chip">
                  <span className="py-1 px-2">
                  {filters.level}
                  </span>
                  <div className="bg-darkGrayishCyan flex justify-center items-center p-2 rounded-r-md hover:bg-black duration-200">
                    <img src="/images/icon-remove.svg" alt="" onClick={() => clearFilter('level', filters.level)} />
                  </div>
                </div>
              )}
              {filters.languages.map(lang => (
                <div className="filter-chip" key={lang}>
                  <span className="py-1 px-2">
                  {lang}
                  </span>
                  <div className="bg-darkGrayishCyan flex justify-center items-center p-2 rounded-r-md hover:bg-black duration-200">
                    <img src="/images/icon-remove.svg" alt="" onClick={() => clearFilter('language', lang)} />
                  </div>
                </div>
              ))}
              {filters.tools.map(tool => (
                <div className="filter-chip" key={tool}>
                  <span className="py-1 px-2">
                    {tool}
                  </span>
                  <div className="bg-darkGrayishCyan flex justify-center items-center p-2 rounded-r-md hover:bg-black duration-200">
                    <img src="/images/icon-remove.svg" alt="remove icon" onClick={() => clearFilter('tool', tool)}  />
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setFilters({ role: '',level: '', languages: [], tools: [] })}
              className="w-[10%] text-sm hover:underline duration-200"
            >
              Clear
            </button>
          </div>
        }
        { data.map(post => (
          <li 
            key={post.id} 
            className={post.featured && " border-l-4 border-darkGrayishCyan"}
          >
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
                  {post.new && (
                    <p className="bg-darkGrayishCyan text-[10px] my-auto text-white px-1 py-[2px] rounded-lg">
                      NEW!
                    </p>
                  )}
                  {post.featured && (
                    <p className="bg-veryDarkGrayishCyan text-[10px] my-auto text-white px-1 py-[2px] rounded-lg">
                      FEATURED!
                    </p>
                  )}
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
              <p 
                className="filter"
                onClick={() => handleFilterChange('role', post.role)}
              >
                {post.role}
              </p>
              <p 
                className="filter"
                onClick={()=> handleFilterChange('level', post.level)}
              >
                {post.level}
              </p>
              <div className="flex flex-row gap-2">
                {post.languages.map(lang => (
                  <p 
                    className="filter"
                    onClick={() => handleFilterChange('language', lang)}
                    key={lang}
                  >
                    {lang}
                  </p>
                ))}
              </div>  
              <div className="flex flex-row gap-2">
                {post.tools.map(tool => (
                  <p 
                    className="filter"
                    onClick={() => handleFilterChange('tool', tool)}
                    key={tool}
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobList;
