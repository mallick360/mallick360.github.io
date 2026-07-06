import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Architecture } from '@/sections/Architecture'
import { Achievements } from '@/sections/Achievements'
import { Contact } from '@/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Architecture />
      <Achievements />
      <Contact />
    </>
  )
}
