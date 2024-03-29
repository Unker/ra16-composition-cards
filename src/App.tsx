import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <Card 
        title='Card title' 
        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
        link='.' 
        refName='Click!'
      />
      <Card 
        img="https://netology.ru/_next/static/media/logo-white-text.693dfd5d.svg"
        title='Card title' 
        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
        link='.' 
        refName='Click!'
      />
    </>
  )
}

export default App
