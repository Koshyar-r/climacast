import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { CitySearch } from "./city-search"

const Header = () => {

    return (
        <header className="sticky top-0 w-full z-50 backdrop-blur bg-background/95 border-b py-2 supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/">
                    <img src="/weather.png" alt="climacast logo" className="h-12" />
                </Link>

                <div>
                    {/* Search */}
                    <CitySearch />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header