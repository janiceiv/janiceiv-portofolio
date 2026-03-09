import Link from "next/dist/client/link";

const Header = () =>{
  const nav_items = ["About", "Skills", "Projects", "Experience", "Contact"];
  return <header className="bg-background fixed w-full">
    <nav className="flex h-16 px-5">
      <button className="md:hidden">☰</button>
      <ul className="hidden md:flex items-center gap-10 mx-auto text-secondary">
        {nav_items.map((item) => (
          <li key={item} className="hover:text-primary">
            <Link href={`/${item.toLowerCase()}`}> {item} </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>;
}

export default Header;