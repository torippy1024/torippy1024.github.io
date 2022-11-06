import QRCode from "qrcode.react";
import Clicker from "./Clicker";
import ExternalLink from "./ExternalLink";

const HiddenDescription = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="p-5 rounded text-green-500 font-dot bg-[url('/glitch.png')]">
        <div className="font-bold text-lg">
          このwebサイトにはいくつかの隠し要素があります
        </div>
        <ul className="list-disc pl-5">
          <li>{"pw{????}の形式で4つのキーワードが隠されています"}</li>    
          <li>{"スマホのみ・PCのみのギミックもあるのでできれば両方でお楽しみください"}</li>    
          <li>{"ホラー・びっくり演出はありません"}</li>    
        </ul>
        <Clicker />
        <div>
          どうぞお楽しみください！
        </div>
      </div>
      <div>
        <ExternalLink href="https://shima-usa.net/">
          <QRCode value="https://shima-usa.net/" className="m-2" />
        </ExternalLink>
      </div>
    </div>
  );
};

export default HiddenDescription;