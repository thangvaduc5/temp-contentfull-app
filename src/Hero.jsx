import heroImg from './assets/undraw_fun_moments_2vha.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Projects</h1>
          <p>
            Projects are the most practical way to learn any language, andReact
            is no exception. Solidify your knowledge of React by creating these
            cool projects.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
