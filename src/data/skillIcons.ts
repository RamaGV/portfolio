import { 
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiTsnode, SiNextdotjs, SiExpress, SiExpo, SiMongodb,
  SiPostgresql, SiGraphql, SiApollographql, SiGit, SiGithub,
  SiDocker, SiAmazon, SiJenkins, SiWebpack, SiC,
  SiArduino, SiMqtt, SiProteus
} from 'react-icons/si';
import { AiOutlineCloudServer, AiOutlineApartment } from 'react-icons/ai';
import { FaMicrochip } from 'react-icons/fa6';
import { FiCpu, FiInfo } from 'react-icons/fi';

export interface SkillIcon {
  icon: React.ComponentType;
  color: string;
}

export const skillIcons: Record<string, SkillIcon> = {
  'react': { icon: SiReact, color: 'text-blue-500' },
  'typescript': { icon: SiTypescript, color: 'text-blue-600' },
  'javascript': { icon: SiJavascript, color: 'text-yellow-500' },
  'tailwind': { icon: SiTailwindcss, color: 'text-cyan-500' },
  'redux': { icon: SiRedux, color: 'text-purple-600' },
  'react-native': { icon: SiReact, color: 'text-blue-500' },
  'node': { icon: SiTsnode, color: 'text-green-600' },
  'nextjs': { icon: SiNextdotjs, color: 'text-black dark:text-white' },
  'express': { icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
  'expo': { icon: SiExpo, color: 'text-black dark:text-white' },
  'mongodb': { icon: SiMongodb, color: 'text-green-500' },
  'sql': { icon: SiPostgresql, color: 'text-blue-600' },
  'graphql': { icon: SiGraphql, color: 'text-pink-600' },
  'apollo': { icon: SiApollographql, color: 'text-purple-600' },
  'git': { icon: SiGit, color: 'text-orange-600' },
  'github': { icon: SiGithub, color: 'text-gray-800 dark:text-white' },
  'docker': { icon: SiDocker, color: 'text-blue-500' },
  'aws': { icon: SiAmazon, color: 'text-orange-500' },
  'cicd': { icon: SiJenkins, color: 'text-red-500' },
  'webpack': { icon: SiWebpack, color: 'text-blue-500' },
  'c-lang': { icon: SiC, color: 'text-blue-600' },
  'arduino': { icon: SiArduino, color: 'text-teal-500' },
  'mqtt': { icon: SiMqtt, color: 'text-purple-500' },
  'proteus': { icon: SiProteus, color: 'text-blue-500' },
  'iot': { icon: AiOutlineCloudServer, color: 'text-blue-500' },
  'microchip-studio': { icon: FaMicrochip, color: 'text-red-500' },
  'embedded-linux': { icon: FiCpu, color: 'text-orange-500' },
  'ladder': { icon: AiOutlineApartment, color: 'text-gray-600' },
  'sensors': { icon: FiInfo, color: 'text-teal-500' }
}; 