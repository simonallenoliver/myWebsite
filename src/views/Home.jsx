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
      <div className="scrollContainer">
        <div className="scrollChild"><Hello /></div>
        <div className="scrollChild"><Projects /></div>
        <div className="scrollChild"><Experience /></div>
      </div>
    </>
  )
}

export default Home