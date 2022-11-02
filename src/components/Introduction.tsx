import icon from "/icon.svg";
import ExternalLink from "../components/ExternalLink";

const Introduction = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <img src={icon} alt="Logo" className="w-48 m-5" />
      <div className="m-5">
        <div className="text-xl text-white m-2 text-center sm:text-left">
          Torippy
        </div>
        <ul className="list-disc pl-5">
          <li className="my-1">
            大阪大学大学院工学研究科機械工学専攻
          </li>
          <li className="my-1">
            <ExternalLink href="https://www.robohan.net/">ロボット製作団体「Robohan」</ExternalLink> 2020年度制御班リーダー
          </li>
          <li className="my-1">
            学部卒業時に「<ExternalLink href="https://www.jsme.or.jp/event_project/award/hatakeyama-award/">日本機械学会畠山賞</ExternalLink>」受賞
          </li>
          <li className="my-1">
            IT国家試験「<ExternalLink href="https://www.jitec.ipa.go.jp/1_11seido/ap.html">応用情報技術者試験</ExternalLink>」「<ExternalLink href="https://www.jitec.ipa.go.jp/1_11seido/sc.html">情報処理安全確保支援士試験</ExternalLink> 」合格
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;