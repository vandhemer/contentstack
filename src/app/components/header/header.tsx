import Menu from "./menu";
import Logo from "./logo";

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between mt-2 mb-4">
                <Menu />
                <Logo />
            </nav>
      </header>
    )
}