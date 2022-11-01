import Anchor from './components/Anchor';
import './App.css';
import ShedrachJonah from './assets/ShedrachJonah.png'
import git from './assets/git.png'
import slack from './assets/slack.png'
import I4G from './assets/I4G.png'
import Zuri from './assets/Zuri.png'

function App() {
  const data = [
    {
      name: "Twitter Link",
      id: "twitter",
      url: "https://mobile.twitter.com/Shedyyyyyy_",
    },
    {
      name: "Zuri Team",
      id: "btn__zuri",
      url: "https://triaining.zuri.team/",
    },
    {
      name: "Zuri Books",
      id: "books",
      url: "https://books.zuri.team/"
    },
    {
      name: "Python Books",
      id: "book__python",
      url: "https://books.zuri.team/python-forbeginners?ref_id=deetechy"

    },
    {
      name: "Background Check for Coders",
      id: "pitch",
      url: "https://background.zuri.team/"

    },
    {
      name: "Design Books",
      id: "book__design",
      url: "https://books.zuri.team/design-rules",

    }
  ]

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="img-container">
        <img src={ShedrachJonah} className="profile__img" id='profile__img' alt='Profile' />
        <p id='twitter'>@Shedyyyyyy_</p>
        <p id='slack'>Shedrach Jonah</p>
      </div>

      <Anchor data={data} />

      <div className="footer1">
        <img src={slack} alt="git" />
        <img src={git} alt="git" />
      </div>
      <div className="separator">
        <hr />
      </div>
      <div className="footer2">
        <img src={I4G} alt="git" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={Zuri} alt="git" />
      </div>

    </div>
  );
}

export default App;
