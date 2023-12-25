import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { AiFillMediumSquare } from 'react-icons/ai'
import { Bio } from "../../data/constants";
import { BsGithub, BsFacebook } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const FloatingSocialMediaIconBar = ({darkMode}) => {
  const icons = [
    {
      icon: BsFacebook,
      href: Bio.facebook,
    },
    {
      icon: FaLinkedin,
      href: Bio.linkedin,
    },
    {
      icon: AiFillMediumSquare,
      href: Bio.medium,
    },
    {
        icon: BsGithub,
        href: Bio.github,
    }
  ];

  return (
    <Box
      position="fixed"
      right="10px"
      bottom="10px"
      zIndex={1000}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Stack spacing={2}>
        {icons.map((icon, index) => (
          <Button
            key={index}
            href={icon.href}
            target="_blank"
            sx={{
              width: "60px",
              height: "60px",
              border: "1px solid #854ce6",
              background: darkMode ? "#171721" : "#fff",
              borderRadius: "50%",
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 0 50px 4px rgba(0,0,0,0.6)",
                filter: "brightness(1.1)",
                background: darkMode ? "#21212a" : "#f5f5f5", // Adjust for dark mode
              },
            }}
          >
            <icon.icon size={30}
            style={{
                color: darkMode ? "white" : "black",
            }} />
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default FloatingSocialMediaIconBar;
