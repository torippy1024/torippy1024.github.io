import InView from "./InView";

const Award = () => {
  const awards = [
    {
      initial: "AP",
      color: "#EA7FB1",
      bgColor: "#dd2a7b",
      title: "国家試験「応用情報技術者試験」 合格（2021年秋）",
      text: "高度IT人材となるために必要な応用的知識を問われる難関国家試験（ITスキル標準 レベル3）",
    },
    {
      initial: "SC",
      color: "#A1A7E7",
      bgColor: "#515bd4",
      title: "国家試験「情報処理安全確保支援士試験」 合格（2022年春）",
      text: "サイバーセキュリティに関する専門的な知識を問われる難関国家試験（ITスキル標準 レベル4）",
    },
    {
      initial: "機",
      color: "#AE71D4",
      bgColor: "#8134af",
      title: "日本機械学会畠山賞 受賞（2022年）",
      text: "人格、学業ともに優秀な学生として、各学校機械工学系教育組織につき毎年原則１名推薦されたものに贈与される賞",
    },
    {
      initial: "機",
      color: "#AE71D4",
      bgColor: "#8134af",
      title: "日本機械学会関西支部2021年度関西学生会卒業研究発表講演会 BPA 受賞",
      text: "卒業論文「建機遠隔操作時に作業機負荷を視覚的に提示する映像処理手法」で学会発表。優れた発表を行った学生員に贈られる BPA(Best Presentation Awards) を受賞",
    },
  ];

  return (
    <div className="my-5">
      <InView>
        <div className="text-xl text-white text-center sm:text-left">
          Awards & Certifications
        </div>
        <div className="flex flex-col justify-center sm:justify-start">
          {awards.map((award, index) =>
            <InView minHeight={10} key={index}>
              <div className="p-2 flex flex-col items-center justify-center sm:justify-start sm:flex-row">
                <div className="w-16 h-16 flex-none
                                rounded-md bg-base-content
                                text-base-100 text-5xl font-bold
                                flex justify-center items-center"
                    style={{background: award.bgColor}}
                >
                  {award.initial}
                </div>
                <div className="ml-2 flex flex-col text-center sm:text-start">
                  <div className="text-lg font-bold" style={{color: award.color}}>
                    {award.title}
                  </div>
                  <div>
                    {award.text}
                  </div>
                </div>
              </div>
            </InView>
          )}
        </div>
      </InView>
    </div>
  );
};

export default Award;