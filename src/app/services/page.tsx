import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'words words words words words words words words words words words words words words words.',
}

export default async function Services() {
  let articles = await loadArticles()

  return (
    <>
      <PageIntro eyebrow="Services" title="One size fits all doesn't apply here.">
        <p>
          Check back soon for more information on the services we will be offering in 2024!
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
