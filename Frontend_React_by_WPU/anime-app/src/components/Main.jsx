/* eslint-disable react/prop-types */
import { useState } from "react";
import Anime from "./Anime";
import AnimeDetail from "./AnimeDetail";
import AnimeLove from "./AnimeLove";
import AnimeWinter from "./AnimeWinter";
import MainLegacy from "./MainLegacy";
import AnimeByCategory from "./AnimeCategory";

const toggleOpen = (setIsOpen) => () => setIsOpen((open) => !open);

function ListBox({ animes, onSelectedAnime }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="box"
      style={animes.length > 1 ? {} : { overflow: "hidden" }}
    >
      <button className="btn-toggle" onClick={toggleOpen(setIsOpen)}>
        {isOpen ? "+" : "±"}
      </button>
      {isOpen && <Anime animes={animes} onSelectedAnime={onSelectedAnime} />}
    </div>
  );
}

function SelectedBox({ selectedAnime }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={toggleOpen(setIsOpen)}>
        {isOpen ? "+" : "±"}
      </button>
      {isOpen && <AnimeDetail selectedAnime={selectedAnime} />}
    </div>
  );
}

const animeLegacyData = [
  {
    mal_id: "Idaten Jump",
    title: "Idaten Jump",
    images: {
      jpg: {
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1691/133569l.jpg",
      },
    },
    aired: {
      prop: {
        from: {
          year: 2005,
        },
      },
    },
    score: 7.3,
    rating: "PG - Children",
    status: "Global TV",
    synopsis:
      'During a race, mountain bike (MTB) enthusiast Shou Yamato is mysteriously dragged into another world alongside his friends, Kakeru and Makoto. Soon, the group discovers that this world known as "X-Zone" revolves around Idaten battles—MTB races characterized by special courses, rules, and hidden powers lying dormant within the bikes. The only way to return home is to win and obtain the MTB emblems from the defeated challengers. Despite being perplexed and terrified of the bizarre world, Shou is surprisingly excited. He has the opportunity to compete with fellow MTB riders, make new friends and rivals, and also unearth the X-Zone\'s hidden truths that may dramatically change his fate. Shou and his friends must make it through an arduous journey, one rife with conspiracies against them, in order to safely return home together. [Written by MAL Rewrite]',
  },
  {
    mal_id: "Eyeshield 21",
    title: "Eyeshield 21",
    images: {
      jpg: {
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1079/133529l.jpg",
      },
    },
    aired: {
      prop: {
        from: {
          year: 2005,
        },
      },
    },
    score: 7.9,
    rating: "PG-13 - Teens 13 or older",
    status: "Global TV",
    synopsis:
      "Shy, reserved, and small-statured, Deimon High School student Sena Kobayakawa is the perfect target for bullies. However, as a result of running errands throughout his life, Sena has become agile and developed a skill for avoiding crowds of people. After the cunning Youichi Hiruma—captain of the Deimon Devil Bats football team—witnesses Sena's rapid legs in motion, he coerces the timid boy into joining his squad. As Hiruma wants to conceal Sena's identity from other clubs, Sena is forced to hide under the visored helmet of \"Eyeshield 21,\" a mysterious running back wearing the number 21 jersey. The legendary Eyeshield 21 can supposedly run at the speed of light and has achieved remarkable feats in the United States during his time at the Notre Dame College. Accustomed to avoiding his problems in the past, Sena's specialty might just help him become the new secret weapon of the Deimon Devil Bats. As he interacts with his teammates, Sena gradually gains more self-confidence and forges valuable bonds along the way. [Written by MAL Rewrite]",
  },
  {
    mal_id: "Naruto",
    title: "Naruto",
    images: {
      jpg: {
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1141/142503l.jpg",
      },
    },
    aired: {
      prop: {
        from: {
          year: 2002,
        },
      },
    },
    score: 8.0,
    rating: "PG-13 - Teens 13 or older",
    status: "Global TV - Trans TV",
    synopsis:
      "Moments before Naruto Uzumaki's birth, a huge demon known as the Nine-Tailed Fox attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the demon's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. In the present, Naruto is a hyperactive and knuckle-headed ninja growing up within Konohagakure. Shunned because of the demon inside him, Naruto struggles to find his place in the village. His one burning desire to become the Hokage and be acknowledged by the villagers who despite him. However, while his goal leads him to unbreakable bonds with lifelong friends, it also lands him in the crosshairs of many deadly foes. [Written by MAL Rewrite]",
  },
  {
    mal_id: "InuYasha",
    title: "InuYasha",
    images: {
      jpg: {
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1589/95329l.jpg",
      },
    },
    aired: {
      prop: {
        from: {
          year: 2000,
        },
      },
    },
    score: 7.9,
    rating: "PG-13 - Teens 13 or older",
    status: "Global TV - Indosiar - Spacetoon",
    synopsis:
      "Kagome Higurashi's 15th birthday takes a sudden turn when she is forcefully pulled by a demon into the old well of her family's shrine. Brought to the past, when demons were a common sight in feudal Japan, Kagome finds herself persistently hunted by these vile creatures, all yearning for an item she unknowingly carries: the Shikon Jewel, a small sphere holding extraordinary power. Amid such a predicament, Kagome encounters a half-demon boy named Inuyasha who mistakes her for Kikyou, a shrine maiden he seems to resent. Because of her resemblance to Kikyou, Inuyasha takes a violent dislike to Kagome. However, after realizing the dire circumstances they are both in, he sets aside his hostility and lends her a hand. Unfortunately, during a fight for the Shikon Jewel, the miraculous object ends up shattered into pieces and scattered across the land. Fearing the disastrous consequences of this accident, Kagome and Inuyasha set out on a challenging quest to recover the shards before they fall into the wrong hands. [Written by MAL Rewrite]",
  },
  {
    mal_id: "Yu☆Gi☆Oh! Duel Monsters",
    title: "Yu☆Gi☆Oh! Duel Monsters",
    images: {
      jpg: {
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/3/77055l.jpg",
      },
    },
    aired: {
      prop: {
        from: {
          year: 2000,
        },
      },
    },
    score: 7.5,
    rating: "PG-13 - Teens 13 or older",
    status: "ANTV - Indosiar - RCTI - SCTV - Spacetoon",
    synopsis:
      'Yuugi Mutou is a naïve and lonely high school student who is fascinated by games. While staying with his grandfather, the owner of a game shop, he comes across an ancient Egyption relic known as the "Millennium Puzzle." Rumored to grant any wish to those who solve the Puzzle, Yuugi becomes determined to solve it to wish for some friends. After years of struggling, Yuugi manages to complete the puzzle and mysteriously finds that his wish has been fulfilled. Meanwhile, a new card game known as "Duel Monsters" starts rising in popularity. In this game, players called duelists fight against each other with "monsters" by using magic and trap cards to foil their opponent\'s plans. Yuugi quickly becomes skilled at the game and lives a peaceful life with his newfound friends. However, Yuugi\'s peace is short-lived. The undefeated duelist and egocentric billionaire Seto Kaiba suddenly abducts Yuugi\'s grandfather, forcing him to duel against the rare "Blue Eyes White Dragon" card. Yuugi is thrown into a new world of fierce battles and the stakes continue to rise as dark forces interfere from the shadows. After unexpectedly defeating Kaiba with the help of his "other self"—the spirit of a nameless pharaoh—contained in the puzzle, he unofficially becomes the top duelist known as "The King of Games." However, this new title will attract covetousness and Yuugi will have to use all his intelligence and willpower in order to protect what he holds the dearest to him. [Written by MAL Rewrite]',
  },
];

export default function Main({ animes, selectedAnime, onSelectedAnime }) {
  const [selectedAnimeLegacy, setSelectedAnimeLegacy] = useState(
    animeLegacyData[0]
  );

  const handleSelectedAnimeLegacy = (animeLegacy) => {
    setSelectedAnimeLegacy(animeLegacy);
  };

  return (
    <>
      <main className="main">
        {selectedAnime && selectedAnime.mal_id !== "No Search Result" && (
          <SelectedBox selectedAnime={selectedAnime} />
        )}
        {animes.length > 0 && (
          <ListBox animes={animes} onSelectedAnime={onSelectedAnime} />
        )}
      </main>
      {selectedAnime && selectedAnime.mal_id !== "No Search Result" && (
        <div className="box-separator"></div>
      )}
      <AnimeLove />
      <AnimeWinter />
      <MainLegacy
        animesLegacy={animeLegacyData}
        selectedAnimeLegacy={selectedAnimeLegacy}
        onSelectedAnimeLegacy={handleSelectedAnimeLegacy}
      />
      <AnimeByCategory />
    </>
  );
}
