import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiExternalLinkLine } from "react-icons/ri";


import { NavlinksProps, Sosials } from "@/types/types";

export const navLinks: NavlinksProps[] = [
    {
        title: 'Home',
        path: '/',
    },
    {   title: 'Add Post', 
        path: '/addpost' 
    },
    {
        title: 'Blogs',
        path: '/blog',
    },
];

export const sosials: Sosials[] = [
    {
        icon: React.createElement(CiInstagram),
        path: "https://www.instagram.com/__.shwet._//"
    },
    {
        icon: React.createElement(FaGithub),
        path: "https://github.com/shwetd19"
    },
    {
        icon: React.createElement(CiLinkedin),
        path: "https://www.linkedin.com/in/shwetas-dhake/"
    },
    {
        icon: React.createElement(RiExternalLinkLine),
        path: "https://shwetd19.github.io/"
    }
];