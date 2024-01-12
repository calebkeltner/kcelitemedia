import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import React from 'react'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="How can we help you?" name="helpMessage" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Services</legend>
              <div className="space-y-5">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="MarketingManagement"
                      aria-describedby="MarketingManagement-description"
                      name="MarketingManagement"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="MarketingManagement"
                      className="text-base/6 text-neutral-950"
                    >
                      Marketing Management
                    </label>
                    {/* <p
                      id="MarketingManagement-description"
                      className="text-gray-500"
                    >
                      Brief Description.
                    </p> */}
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="SM-Management"
                      aria-describedby="SM-Management-description"
                      name="SM-Management"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="SM-Management"
                      className="text-base/6 text-neutral-950"
                    >
                      Social Media Management
                    </label>
                    {/* <p
                      id="SM-Management-description"
                      className="text-gray-500"
                    >
                      Brief Description.
                    </p> */}
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="influencer"
                      aria-describedby="influencer-description"
                      name="influencer"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="influencer"
                      className="text-base/6 text-neutral-950"
                    >
                      Influencer / Public Relations
                    </label>
                    {/* <p
                      id="influencer-description"
                      className="text-gray-500"
                    >
                      Brief Description.
                    </p> */}
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="contentCreation"
                      aria-describedby="contentCreation-description"
                      name="contentCreation"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="contentCreation"
                      className="text-base/6 text-neutral-950"
                    >
                      Content Creation
                    </label>
                    {/* <p
                      id="contentCreation-description"
                      className="text-gray-500"
                    >
                      Brief Description.
                    </p> */}
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="brandDesign"
                      aria-describedby="brandDesign-description"
                      name="brandDesign"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="brandDesign"
                      className="text-base/6 text-neutral-950"
                    >
                      Brand Design
                    </label>
                    {/* <p
                      id="brandDesign-description"
                      className="text-gray-500"
                    >
                      Brief Description.
                    </p> */}
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$250 - $500" name="budget" value="250" />
                <RadioInput label="$500 - $1,500" name="budget" value="500" />
                <RadioInput
                  label="$1,500 - $2,500"
                  name="budget"
                  value="1500"
                />
                <RadioInput label="$2,500+" name="budget" value="2500" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      {/* <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? We don’t but we have to list our
        addresses here for legal reasons.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" /> */}

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Sales', 'sales@kcelitemedia.com'],
            ['Press', 'press@kcelitemedia.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
