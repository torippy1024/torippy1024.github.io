import { InView } from "react-intersection-observer";

const Award = () => {
  return (
    <div className="my-5">
      <InView>
        <div className="text-xl text-white text-center sm:text-left">
          Awards & Certifications
        </div>
        <div className="flex flex-col items-center justify-center sm:justify-start sm:flex-row">
          <div className="p-2 flex flex-col items-center justify-center sm:justify-start sm:flex-row">
            <div className="w-16 h-16
                            rounded-md bg-base-content
                            text-base-100 text-5xl font-bold
                            flex justify-center items-center"
            >
              AP
            </div>
            <div className="ml-2 flex flex-col text-center sm:text-start">
              <div className="text-lg font-bold">
                国家試験「応用情報技術者試験」 合格 (2021年秋)
              </div>
              <div>
                高度IT人材となるために必要な応用的知識を問われる難関国家試験（ITスキル標準 レベル3）
              </div>
            </div>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default Award;