import Image from 'next/image'
import { FiBook } from 'react-icons/fi'
import {
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiStackoverflow,
  SiSteam,
  SiTiktok,
  SiX,
  SiYoutube
} from 'react-icons/si'

import PrimaryLinks from '@/components/primary-links'
import Spotlight from '@/components/spotlight'

const links = [
  {
    icon: <FiBook className='text-zinc-300' />,
    title: 'Blog',
    url: 'https://bravía.com/blog'
  },

  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram (Dev)',
    url: 'https://www.instagram.com/bravia.ot'
  },

  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram (Personal)',
    url: 'https://www.instagram.com/olanrewajutoyyiib'
  },

  {
    icon: <SiTiktok className='text-zinc-300' />,
    title: 'TikTok (Dev)',
    url: 'https://vm.tiktok.com/ZS9eMoqr6PdBc-zjnbH'
  },
  
  {
    icon: <SiTiktok className='text-zinc-300' />,
    title: 'TikTok (Personal)',
    url: 'https://www.tiktok.com/@olanrewajutoyyiib'
  },

  {
    icon: <SiYoutube className='text-zinc-300' />,
    title: 'YouTube (Dev)',
    url: 'http://www.youtube.com/@devbravia'
  },

  {
    icon: <SiYoutube className='text-zinc-300' />,
    title: 'YouTube (Personal)',
    url: 'https://youtube.com/@olanrewajutoyyib'
  },

  {
    icon: <SiFacebook className='text-zinc-300' />,
    title: 'Facebook',
    url: 'https://www.facebook.com/olanrewajutoyyiib'
  },

  {
    icon: <SiLinkedin className='text-zinc-300' />,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/olanrewaju-toyyib'
  },

  {
    icon: <SiX className='text-zinc-300' />,
    title: 'X (Twitter)',
    url: 'https://x.com/O_Toyyib'
  },

  {
    icon: <SiStackoverflow className='text-zinc-300' />,
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/24771030/bravia'
  },

  {
    icon: <SiSteam className='text-zinc-300' />,
    title: 'Steam',
    url: 'https://steamcommunity.com/profiles/76561198727811766/home'
  },

  {
    icon: <SiDiscord className='text-zinc-300' />,
    title: 'Discord',
    url: 'https://discord.com/channels/@bravia'
  },

  {
    icon: <SiDevdotto className='text-zinc-300' />,
    title: 'Dev.to',
    url: 'https://dev.to/bravia'
  },

  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'GitHub',
    url: 'https://github.com/braviadev'
  }
]

const Page = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pt-24 pb-10'>
        <Spotlight className='-top-4 left-56' />

        <Image
          src='https://bravía.com/images/avatar.png'
          width={90}
          height={90}
          alt='Logo'
          className='rounded-full'
          priority
        />

        <h1 className='text-xl font-semibold'>Olanrewaju Toyyib</h1>
        <p className='text-[#a1a1a1]'>Full Stack Developer / Engineer</p>
      </div>

      <PrimaryLinks />

      <div className='flex flex-col gap-4 py-3'>
        {links.map((link) => {
          const { icon, title, url } = link

          return (
            <a
              key={url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='absolute left-8'>{icon}</div>
              <div className='text-zinc-100'>{title}</div>
            </a>
          )
        })}
      </div>
    </>
  )
}

export default Page
