import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='pt-4 flex items-center justify-between w-80 '>
             
            <Link href={"#"}  >
                <a className="px-2 py-1 text-[#d2d2d2] drop-shadow-xl"  >مقالات</a>
            </Link>
            <Link href={"#"}  >
                <a className="px-2 py-1 text-[#d2d2d2] drop-shadow-xl"  >نویسنده ها</a>
            </Link>
            <Link href={"#"}  >
                <a className="px-2 py-1 text-[#d2d2d2] drop-shadow-xl"  >دسته بندی ها</a>
            </Link>
            <Link href={"#"}  >
                <a className="px-2 py-1 text-[#d2d2d2] drop-shadow-xl"  >خانه</a>
            </Link>
        </div>
    );
};

export default Navbar;