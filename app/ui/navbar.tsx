import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="px-4 pt-4">
      <div className="navbar bg-base-100 border-2 border-black rounded-full px-4">
          <a role="button" className="btn btn-primary m-1" href="https://daisyui.com/components/button/">DaisyUi</a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Navigate</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><Link href={'/'}>Homepage</Link></li>
              <li><Link href={'/home'}>Home</Link></li>
              <li><Link href={'/aboutme'}>About Me!</Link></li>
            </ul>
          </div>
      </div>
    </div>
  );
}
