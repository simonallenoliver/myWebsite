import Header from "../components/Header"
import Hello from "../components/Hello"
import Projects from "../components/Projects"
import Toolbox from "../components/Toolbox"
import Experience from "../components/Experience"
import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <div className="bigBox">

        <Hello />
        <Toolbox />
        <Experience />
        <Projects />
        {/* <AboutMe/>
    <Footer/> */}
      </div>
    </>
  )
}

export default Home