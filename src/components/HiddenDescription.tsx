import Clicker from "./Clicker";

const HiddenDescription = () => {
  return (
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
  );
};

export default HiddenDescription;