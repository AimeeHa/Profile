export default function Header() {
  return (
    <>
      <nav className="w-full h-20 flex items-end gap-24 pb-4 px-24">
        <div className="w-1/4 text-green-700">Aimee Ha</div>

        <ul className="w-1/2 flex flex-row justify-evenly">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <div className="w-1/4 text-right">Download CV</div>
      </nav>
    </>
  );
}
