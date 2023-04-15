import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="sticky top-0 flex flex-wrap items-center justify-between w-full px-5 py-2 bg-black">
      <div className="flex flex-wrap items-center justify-between w-full px-5 py-2 text-lg text-white capitalize container-fluid">
        <img
          className="ml-2"
          src="/img/goodhive_light_logo.png"
          alt="Goodhive"
        />
        <Link href="/">Home</Link>
        <Link href="/design">Design System</Link>
        <Link href="/looking-for-talent">Looking for talent</Link>
        <span className="flex items-center mr-10 space-x-2">
          <img src="/img/user_icon.png" alt="user" />
          <p>John Doe</p>
          <img src="/img/notification_icon.png" alt="notification" />
          <img src="/img/metamask_icon.png" alt="metamask" />
        </span>
      </div>
    </div>
  );
};
