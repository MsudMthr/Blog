import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";

const actions = [
  { icon: <CategoryIcon />, name: "Category", href: "/categories" },
  { icon: <PersonIcon />, name: "Authors", href: "/authors" },
  { icon: <MenuBookIcon />, name: "Blogs", href: "/blogs" },
  { icon: <HomeIcon />, name: "Home", href: "/" },
];

export default function SpeedDialTooltipOpen() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="fixed bottom-3 right-3 z-[999] ">
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              handleClose();
              router.push(action.href);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
