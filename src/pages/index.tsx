import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";




export default function Home() {
  return (
    <div> 
      <Head>
        <title>Evgeny | Web-Developer</title>
        <meta name='description' content='Web-Development portfolio'/>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
