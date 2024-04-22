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
      <div className="mainContainer">
        <div>
          <div><Header /></div>
          <div><Hello /></div>
          <div><Projects /></div>
          <div><Experience /></div>
        </div>
      </div>
    </>
  )
}

export default Home