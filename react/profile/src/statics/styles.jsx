import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const styles = {
  downloadTransition:
    'transition ease-in-out group-hover:ease-in-out group-hover:transition',
  downloadTextSpan:
    'absolute flex items-center justify-center h-full m-[0px,auto] text-[16px] font-[600] group-hover:left-[12px] duration-500 group-hover:duration-500',
  orangeBtn:
    'w-max px-[16px] py-[6px] rounded-[18px] bg-orange text-primary hover:cursor-pointer hover:shadow-[0px_1px_10px_-1px_rgba(48,49,121,.45)] hover:translate-y-[-1px] transition ease-in-out duration-300',
  wavingAfter:
    'group text-orange flex justify-center items-center cursor-pointer relative transition ease-in-out duration-300 after:absolute after:content-[""] after:w-[calc(100%-28px)] after:h-[2px] after:rounded-[8px] after:bg-orange after:left-[2px] after:top-[22px] hover:after:bg-transparent',
};

export default styles;

export function wavingLetters(props) {
  const letters = props;

  return (
    <>
      {letters.split('').map((char, index) => (
        <span
          className="group-hover:animate-textReveal inline-block [animation-fill-mode:backwards]"
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.03}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <KeyboardArrowDownIcon
        className="group-hover:animate-textReveal inline-block
    [animation-fill-mode:backwards]"
        style={{ animationDelay: '0.35s', width: '22px' }}
      />
    </>
  );
}