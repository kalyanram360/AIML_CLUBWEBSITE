
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

import Footer from './components/Footer'
import EditorialsSimple from './components/EditorialsSimple'
import Activities from './components/Activities'
import Team from './components/Team'

function App() {

  return (
    <div className=" bg-white">
      <Navigation />
      <main className="mt-8">
        <Hero />
        <EditorialsSimple />
        <Activities />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
