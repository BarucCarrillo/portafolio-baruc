import visual_studio_code from "thesvg/visual-studio-code";
import sublime_text from "thesvg/sublime-text";
import mongodb from "thesvg/mongodb";
import firebase from "thesvg/firebase";
import mysql from "thesvg/mysql";
import react from "thesvg/react";
import flutter from "thesvg/flutter";
import postman from "thesvg/postman";
import git from "thesvg/git";
import github from "thesvg/github";
import figma from "thesvg/figma";
import hetzner from "thesvg/hetzner";
import cloudflare from "thesvg/cloudflare";
import laravel from "thesvg/laravel";
import reactnative from "thesvg/reactnative";
import azure_sql_server from "thesvg/azure-sql-server";
import prisma from "thesvg/prisma";
import dotnet from "thesvg/dotnet";
import nextdotjs from "thesvg/nextdotjs";
import xamarin from "thesvg/xamarin";
import owasp from "thesvg/owasp";
import claude_code from "thesvg/claude-code";
import opencode from "thesvg/opencode";
import docker from "thesvg/docker";
import dart from "thesvg/dart";

// 1. Entornos de Desarrollo
const develop_tools = [
    { logo: visual_studio_code, title: 'VS Code' },
    { logo: sublime_text, title: 'Sublime Text' },
    { logo: claude_code, title: 'Claude Code' }, 
    { logo: opencode, title: 'Open Code' },   
];

// 2. Gestión de Base de Datos y ORMs
const database_tools = [
    { logo: mongodb, title: 'MongoDB' },
    { logo: firebase, title: 'Firebase' },
    // { logo: mysql, title: 'MySQL', variant: 'mono' },
    { logo: azure_sql_server, title: 'SQL Server' }, 
    { logo: prisma, title: 'Prisma Studio', variant: 'mono' }, 
];

// 3. Frameworks y Librerías (Web)
const web_frameworks = [
    { logo: dotnet, title: '.NET' }, 
    { logo: nextdotjs, title: 'Next.js' }, 
    { logo: laravel, title: 'Laravel' },
    { logo: react, title: 'React' },
];

// 4. Desarrollo Móvil
const mobile_tools = [
    { logo: reactnative, title: 'React Native' },
    { logo: xamarin, title: 'Xamarin' }, 
    { logo: flutter, title: 'Flutter' },
    { logo: dart, title: 'Dart' },
];

// 5. Herramientas Generales, Infraestructura y Diseño
const general_tools = [
    { logo: postman, title: 'Postman' },
    { logo: git, title: 'Git' },
    { logo: github, title: 'GitHub' },
    { logo: owasp, title: 'OWASP ZAP' }, 
    { logo: figma, title: 'Figma' },
    { logo: hetzner, title: 'Hetzner' },
    { logo: cloudflare, title: 'Cloudflare' },
    { logo: docker, title: 'Docker' }
];

export const skills_data = {
    develop: develop_tools,
    databases: database_tools,
    frameworks: web_frameworks,
    mobile: mobile_tools,
    general: general_tools
};