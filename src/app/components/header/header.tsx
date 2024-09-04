import Menu from "./menu";
import Logo from "./logo";
import Image from 'next/image';
import iconLogin from '../../../../public/assets/icons/login.svg';
import iconCart from '../../../../public/assets/icons/cart.svg';
import iconMenu from '../../../../public/assets/icons/menu-burger.svg';


export default function Header() {
    return (
        <header className="w-full z-30 top-0 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
                <Logo />
                <div className="md:order-3 flex items-center" id="nav-content">
                    <a className="inline-block no-underline hover:text-black" href="#">
                        <Image
                            priority
                            className="fill-current hover:text-black"
                            src={iconLogin}
                            alt="Login"
                        />
                    </a>
                    <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                        <Image
                            priority
                            className="fill-current hover:text-black"
                            src={iconCart}
                            alt="Panier"
                        />
                    </a>
                </div>
                <div className="cursor-pointer md:hidden block">
                    <Image
                        priority
                        src={iconMenu}
                        alt="Menu"
                    />
                </div>
                <Menu />
            </div>
        </header>
    )
}