import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const styles = {
  downloadTextSpan:
    'absolute flex items-center justify-center h-full m-[0px_auto] text-[16px] font-[600] group-hover:left-[12px] duration-500 group-hover:duration-500',
  orangeBtn:
    'w-max px-[16px] py-[6px] rounded-[18px] bg-orange text-primary hover:cursor-pointer hover:shadow-[0px_1px_10px_-1px_rgba(48,49,121,.45)] hover:translate-y-[-1px] hover:bg-[#F26952] transition ease-in-out duration-300',
  wavingAfter:
    'group text-orange flex justify-center items-center cursor-pointer relative transition ease-in-out duration-300',
  groupTransition:
    'transition ease-in-out duration-300 group-hover:transition group-hover:ease-in-out group-hover:duration-300',
  formDiv: 'w-full h-full flex flex-col items-center gap-2',
  formLabel:
    'w-full px-[12px] text-blue font-[550] text-[13px] tablet:text-[14px] desktop:text-[15px]',
  formInput:
    'w-[calc(100%-24px)] p-[12px] rounded-[8px] bg-white text-[14px] tablet:text-[15px] desktop:text-[16px] text-lightblue font-[400] focus:text-blue focus:font-[500] border-[2px] border-solid border-transparent focus:border-blue focus:border-solid focus:border-[2px] focus:outline-none',
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
