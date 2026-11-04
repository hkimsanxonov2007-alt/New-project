function Team({ textName, textWork, children }) {
  return (
    <div className="w-66 h-95 flex flex-col bg-[#FFFFFF] justify-between items-center gap-10 shadow-2xl rounded-lg">
      {children}
      <div className="w-56 h-20 flex flex-col justify-center items-center">
        <h2 className="text-[20px] font-medium text-[#2E2F42]">{textName}</h2>
        <p className="text-[16px] text-[#434455] font-normal">{textWork}</p>
      </div>
    </div>
  );
}

export default Team;
