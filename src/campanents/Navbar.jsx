function Navbar() {
  return (
    <div className="w-full h-[10vh] flex justify-around items-center bg-[#FFFFFF]">
      <div className="flex justify-center items-center gap-15">
        <h1 className="text-[#2E2F42] text-[18px] font-extrabold">
          <span className="text-blue-500">Web</span>Studio
        </h1>
        <ul className="flex justify-center items-center gap-5 text-[16px] font-semibold text-[#2E2F42]">
          <li>Studio</li>
          <li>Portfolio</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-15 text-[#434455] font-semibold">
        <p>info@devstudio.com</p>
        <p>+11 (000) 111-11-11</p>
      </div>
    </div>
  );
}
export default Navbar;
