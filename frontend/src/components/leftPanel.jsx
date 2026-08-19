import { useState, useEffect } from "react";
import "../css/leftPanel.css";

let strs = [
  "$ compile --init",
  "> loading feed for @you",
  "> 128,442 developers building in public",
  "> 3 people you follow pushed today",
  "> ready.",
];
function LeftPanel() {
  const [blockColors] = useState(() =>
    Array.from({ length: 140 }).map(
      () => `rgb(${randomNum(5, 5)},${randomNum(20, 10)},${randomNum(50, 20)})`,
    ),
  );
  const [texts, setText] = useState(["", "", "", "", ""]);
  const [cursorLine, setCursorLine] = useState(0);
  function randomNum(uppLimit, LowerLimit) {
    return Math.floor(Math.random() * uppLimit + LowerLimit);
  }

  useEffect(() => {
    let delay = 0;
    let timers = [];

    strs.map((Element, i) => {
      for (let j = 0; j < strs[i].length; j++) {
        const char = strs[i][j];
        let timer = setTimeout(() => {
          if (j === strs[i].length - 1) {
            setCursorLine(prev => prev + 1)
          }
      
          setText((prev) => {
            const update = [...prev];
            update[i] += char;
            return update;
          });
        }, delay);

        delay += 50;
        timers.push(timer);
      }
    });

    return () => {
      timers.forEach((timer) => {
        clearTimeout(timer);
      });
    };
  }, []);

  function logoImg() {}
  return (
    <div>
      <div className="panel">
        <div className="gridBg">
          {blockColors.map((color) => (
            <div
              style={{
                backgroundColor: `${color}`,
              }}
              className="block"
              //   key={i}
            ></div>
          ))}
        </div>

        <div className="webLogo">
          <div className="imgContain">
            <svg
              className="logo"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
          </div>
          <div className="webName">compile</div>
        </div>

        <div className="mainBox">
          <div className="headline">
            Built by developers, for developers who
            <span className="accent">ship</span>.
          </div>
          <div className="shortNote">
            Share what you're building, get real feedback on real code, and grow
            a following that actually reads your commits.
          </div>
        </div>

        <div className="terminalBox">
          <div className="tLine tText">
            {texts[0]} {cursorLine === 0 && <div className="cursor">█</div>}
          </div>
          <div className="tLine tComment">{texts[1]}{cursorLine === 1 && <div className="cursor">█</div>}</div>
          <div className="tLine tBlue">{texts[2]}{cursorLine ===  2 && <div className="cursor">█</div>}</div>
          <div className="tLine tAmber">{texts[3]}{cursorLine === 3 && <div className="cursor">█</div>}</div>
          <div className="tLine tAccent">{texts[4]}{cursorLine === 4 && <div className="cursor">█</div>}</div>
          <div className="tLine tText">
            $ <span className="cursor">█</span>
          </div>
        </div>

        <div className="gitLine">
          <svg
            className="gitIcon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </svg>
          <span>main · last push 4 min ago</span>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
