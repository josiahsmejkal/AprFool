"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
  "No 🙈",
  "Oops! Try again 😜",
  "Are you really sure? 🤨",
  "I don't believe you 😂",
  "Your finger slipped 😏",
  "Click 'Yes' instead 😆",
  "Come on, don't be shy 🥰",
  "I'm waiting... 👀",
  "You know you want to 😁",
  "Almost there ❤️",
  "Just one click away 💖",
  "Pleaseeee 🥺",
  "Don't make me cry 😭",
  "I'll buy you chocolate 🍫",
  "I'll bring flowers 🌹",
  "You're too adorable 💕",
  "Still saying no? 😭",
  "Okay... last chance 😅",
  "I love you anyway ❤️",
  "Fine... but I'm clicking Yes in my heart 💘"
];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I like you (X) ;)</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">
  Will you be my girlfriend? 💖
</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
