export default function Landing() {
  return (
    <div className="w-full h-screen relative bg-secondary flex justify-center items-center">
      <ul className="flex flex-col gap-6 absolute left-0 top-1/2">
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>

      <div className="w-full flex flex-col gap-6 items-center">
        Bio
        <div>Photo</div>
        <div>Name & Role</div>
      </div>
    </div>
  );
}
