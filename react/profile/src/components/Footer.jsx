import links from '../statics/links';

export default function Footer() {
  return (
    <>
      <footer
        className="w-full h-[96px] flex flex-col gap-[8px] tablet:flex-row tablet:gap-[100px]
        tablet:h-[60px] items-center justify-center px-24 bg-darkblue text-white"
      >
        <h2 className="font-footer text-[22px]">~ Aimee Ha ~</h2>
        <ul className="flex flex-row gap-[12px]">
          {links.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer flex items-center justify-center rounded-[8px]
              hover:translate-y-[-2px] hover:scale-[1.2] hover:transition hover:ease-in-out
              hover:duration-300 transition ease-in-out duration-300 "
            >
              <a href={link.link}>{link.icon}</a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
