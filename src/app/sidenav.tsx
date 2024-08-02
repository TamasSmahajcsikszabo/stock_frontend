import NavLinks from '@/app/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div>
      <div>
        <NavLinks />
        <div></div>
        <form>
          <button>
            <PowerIcon />
            <div>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}