import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
const Network = () => {
    return (
        <div className="flex flex-col invert gap-5 items-center ml-20 mt-5">
            <Instagram />
            <Facebook />
            <Twitter />
            <div className="w-0.5 h-40 bg-[#000]" ></div>
        </div>
    );
};

export default Network;