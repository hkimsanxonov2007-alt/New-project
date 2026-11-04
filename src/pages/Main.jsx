import Section from "../campanents/Section";

function Main() {
  return (
    <div className="w-full h-[150vh] bg-[#FFFFFF] flex flex-col justify-center items-center gap-25">
      <div className="w-282 flex justify-around items-center gap-5">
        <Section text={"Strategy"} />
        <Section text={"Punctuality"} />
        <Section text={"Diligence"} />
        <Section text={"Technologies"} />
      </div>
      <div className="w-282 h-103 flex flex-col justify-center items-center gap-15">
        <h1 className="text-[36px] text-[#2E2F42] font-bold">
          What are we doing
        </h1>
        <div className="w-full flex justify-between">
          <img src="1.png" alt="" />
          <img src="2.png" alt="" />
          <img src="3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Main;
