import { useRef, useState } from "react";
import './App.css';

function App() {
  const iframeUrls = [
    'https://create-react-app.dev/docs/getting-started',
    'https://blog.logrocket.com/best-practices-react-iframes/',
    'https://usefulangle.com/post/65/javascript-automatically-resize-iframe',
    'https://platform.twitter.com/widgets/tweet_button.html',
    ];

  const random = Math.floor(Math.random() * iframeUrls.length);
  const refIframe = useRef(null);
  const [iframSrc, setIframeUrl] = useState(iframeUrls[random]);
  const [frameHeight, setFrameHeight] = useState(100);

  const goBook = () => {
    const random = Math.floor(Math.random() * iframeUrls.length);
    console.log(random);
    setIframeUrl(
      `${iframeUrls[random]}`
    );
  };

  const onPageLoad = (e, obj) => {
    let iframe = document.getElementById("iframeContainer");
    setFrameHeight(frameHeight*2);
    console.log('Iframe page load', e);
  };

  return (
    <div className="App">
      <button type="button" onClick={goBook}>
        Reload Page
      </button>
      <div className="iframe-container">
        <iframe
          id="iframeContainer"
          onLoad={(e) => onPageLoad(e, this)}
          title="myBook"
          src={iframSrc}
          height={frameHeight}
          width="600"
          border="0"
          ref={refIframe}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
