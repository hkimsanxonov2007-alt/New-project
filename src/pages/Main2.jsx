import Team from "../campanents/Team";

function Main2() {
  return (
    <div className="w-full h-183 bg-[#F4F4FD] flex flex-col justify-center items-center gap-10">
      <h1 className="text-[36px] font-bold text-[#2E2F42]">Our Team</h1>
      <div className="flex gap-10">
        <Team textName={"Mark Guerrero"} textWork={"Product Designer"}>
          <img src="7.png" alt="" />
        </Team>
        <Team textName={"Tom Ford"} textWork={"Frontend Developer"}>
          <img src="4.png" alt="" />
        </Team>
        <Team textName={"Camila Garcia"} textWork={"Marketing"}>
          <img src="5.png" alt="" />
        </Team>
        <Team textName={"Daniel Wilson"} textWork={"UI Designer"}>
          <img src="6.png" alt="" />
        </Team>
      </div>
    </div>
  );
}
export default Main2;
