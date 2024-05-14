/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const animesData = [
  {
    mal_id: 235,
    title: "Detective Conan",
    year: "1996 - Present",
    image: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
    score: 8.5,
    synopsis:
      "Shinichi Kudou, a high school student of astounding talent in detective work, is well known for having solved several challenging cases. One day, when Shinichi spots two suspicious men and decides to follow them, he inadvertently becomes witness to a disturbing illegal activity. Unfortunately, he is caught in the act, so the men dose him with an experimental drug formulated by their criminal organization, leaving him to his death. However, to his own astonishment, Shinichi lives to see another day, but now in the body of a seven-year-old child. Conan start secretly solving the senior Mouri's cases from behind the scenes with his still exceptional sleuthing skills, while covertly investigating the organization responsible for his current state, hoping to reverse the drug's effects someday.",
  },
  {
    mal_id: 20,
    title: "Naruto Shippuden",
    year: "2007 - 2017",
    image: "https://cdn.myanimelist.net/images/anime/4/71532.jpg",
    score: 8.7,
    synopsis:
      "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage.",
  },
  {
    mal_id: 21,
    title: "One Piece",
    year: "1999 - Present",
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    score: 9.0,
    synopsis:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.",
  },
  {
    mal_id: 269,
    title: "Bleach",
    year: "2004 - Present",
    image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    score: 8.2,
    synopsis:
      "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant.",
  },
];

export default function App() {
  const [animes, setAnimes] = useState(animesData);

  return (
    <>
      <Navbar animes={animes} />
      <Main animes={animes} />
    </>
  );
}
