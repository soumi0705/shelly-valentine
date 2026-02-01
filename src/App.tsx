import { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { ImageChange, NoTexts, getImageByEnum, getNoText } from "./utils";
import flowerPink from "./assets/flower-pink.png";
import kiss from "./assets/kiss.png";
import "./App.css";
import "./tailwind.css";

const App = () => {
  const [imageSrc, setImageSrc] = useState<ImageChange>(ImageChange.hearts);
  const [successYes, setSuccessYes] = useState<boolean>(false);
  const [noIndex, setNoIndex] = useState(0);

  const clickYes = () => {
    setImageSrc(ImageChange.milkandmochalove);
    setSuccessYes(true);
  };

  function clickNo() {
    const nextIndex = noIndex + 1;

    // If we're at the last message, trigger success
    if (nextIndex >= NoTexts.length) {
      clickYes();
      return;
    }

    // Otherwise update the index
    setImageSrc(ImageChange.sad);
    setNoIndex(nextIndex);
  }

  return (
    <div className="w-screen min-h-dvh flex flex-wrap items-center justify-center bg-lighter-pink px-2 py-4 gap-3">
      <div
        className={`${
          successYes ? "hidden" : ""
        } relative bg-light-pink border border-purple shadow-lg p-6 rounded-lg indie-flower-regular tracking-wide text-lg font-semibold h-fit overflow-hidden`}
      >
        <div className="absolute z-0 w-40 h-40 -bottom-4 -right-9 opacity-40 -rotate-[30deg]">
          <img src={flowerPink} alt="Flower Pink" />
        </div>
        <div className="relative z-10">
          <p className="text-dark-purple font-bold">
            Mera pyaara gulab jamun &#128584;
          </p>
          <p className="text-dark-purple mt-1">
            It's wild to think it's been 4+ years and we're still going strong.
            No matter how many fights or silly arguments we’ve had, we’ve only
            grown closer. Through every storm, every story, we've kept sailing
            together &#129402;.
          </p>
          <p className="text-dark-purple mt-1">
            My prettiest babygirl &#128525;!! I'm so damn proud of everything
            you've achieved. I admire your strength, your stubborn little
            resolve, the way you handle every problem life throws at you. And
            don't even get me started on those gorgeous brown eyes, that smol
            nose, and that ridiculously cute smile.
          </p>
          <p className="text-dark-purple mt-1">
            I love you so much. Like… so crazy much &#128584; I can’t even
            explain it. I genuinely like me better when I’m with you. And as the
            day comes closer, there’s something I’d like to ask you…
          </p>
        </div>
      </div>
      {!successYes ? (
        <div className="w-full bg-light-pink border border-purple shadow-lg p-6 rounded-lg relative overflow-hidden">
          <div className="absolute z-0 w-14 h-14 top-16 right-6 opacity-40 rotate-[64deg]">
            <img src={kiss} alt="kiss" />
          </div>
          <div>
            <h3 className="playpen-sans text-2xl text-purple text-center mb-2 font-bold tracking-wide">
              Will you be my{" "}
              <span className="text-dark-purple">valentine ?</span>
            </h3>
            <img
              className="h-60 w-60 mx-auto"
              src={getImageByEnum(imageSrc)}
              alt="Milk and Mocha GIF"
            />
            <div className="flex flex-col gap-2 mt-1">
              <button
                className="bg-purple border border-dark-purple text-white px-4 py-2 rounded-lg appearance-none font-semibold playpen-sans"
                onClick={clickYes}
              >
                YES !
              </button>
              <button
                className="bg-neon-green border border-dark-purple text-black px-4 py-2 rounded-lg appearance-none font-semibold playpen-sans"
                onClick={clickNo}
              >
                {HTMLReactParser(getNoText(noIndex))}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-light-pink border border-purple shadow-lg p-6 rounded-lg">
          <h3 className="playpen-sans text-xl text-purple text-center font-bold tracking-wide">
            Yay! You said YES!
          </h3>
          <img
            className="h-60 w-60 mx-auto"
            src={getImageByEnum(imageSrc)}
            alt="Milk and Mocha GIF"
          />
          <div className="indie-flower-regular tracking-wide text-lg font-semibold text-dark-purple mt-2 ">
            <p>My whole world just lit up a little brighter.</p>
            <p className="mt-1">
              That one click felt soft, warm, and impossibly sweet. Like the
              kind of moment you replay in your head because it just feels
              right.
            </p>
            <p className="mt-1">
              Thank you for choosing me. Today suddenly got a whole lot more
              magical.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
