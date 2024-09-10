import "./App.css";
import { TwitterFollowCard } from "./assets/TwitterFolowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="midudev">
        Miguel Angel Durán
      </TwitterFollowCard>

      <TwitterFollowCard userName="diesanchezb">
        Diego Sánchez
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="GarciaLorcaFV">
        Federico García Lorca
      </TwitterFollowCard>

      <TwitterFollowCard userName="emicoroniti">
        Emiliano Coroniti
      </TwitterFollowCard>
    </section>
  );
}
