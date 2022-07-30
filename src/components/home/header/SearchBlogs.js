import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const SearchBlogs = () => {
    return (
        <div className="z-50 relative">
            <input type="search" name="" id="" placeholder='جستو جوی بلاگ ها' className="bg-transparent border-b-2 outline-none placeholder:text-[#d2d2d2] placeholder:text-xs text-[#d2d2d2]" />
            <label className='absolute left-0 invert '><SearchIcon /></label>
        </div>
        
    );
};

export default SearchBlogs;