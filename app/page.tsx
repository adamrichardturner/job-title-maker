import JobTitleFun from '../components/JobTitleFun'
import Image from 'next/image'
import Linkedin from '../public/linkedin.svg'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkedin Bio Generator</title>
        <meta
          name="description"
          content="Linkedin AI Bio Generator by Adam Turner"
        />

        <meta property="og:url" content="https://adamrichardturner.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Linkedin AI Bio Generator by Adam Turner"
        />
        <meta
          property="og:description"
          content="Linkedin AI Bio Generator by Adam Turner"
        />
        <meta
          property="og:image"
          content="https://adamrichardturner.dev/adamturner-social.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="adamrichardturner.dev" />
        <meta property="twitter:url" content="https://adamrichardturner.dev/" />
        <meta
          name="twitter:title"
          content="Adam Turner | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Adam Turner | Full Stack Developer | React, Next, JavaScript, TypeScript Express and MongoDB."
        />
        <meta
          name="twitter:image"
          content="https://adamrichardturner.dev/adamturner-social.png"
        />
      </Head>
      <main className="bg-tertiary flex min-h-screen flex-col items-center justify-evenly p-12">
        <section className="w-full flex flex-col items-center justify-center">
          <Image src={Linkedin} width={200} height={50} alt="Linkedin" />
          <h1 className="text-primary font-sans text-2xl mb-6 text-center">
            Bio Generator
          </h1>
          <div className="flex justify-center w-full lg:w-3/4 text-center mx-auto">
            <JobTitleFun />
          </div>
        </section>
        <footer>
          <p className="text-primary">
            Made By{' '}
            <a
              href="https://adamrichardturner.dev"
              className="font-bold"
              target="_blank"
              rel="noreferrer"
            >
              Adam Turner
            </a>
          </p>
        </footer>
      </main>
    </>
  )
}
