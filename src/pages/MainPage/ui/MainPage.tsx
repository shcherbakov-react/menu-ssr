import { Category } from "@/features/Category/ui/Category";
import { MenuList } from "@/entities/Menu/ui/MenuList/MenuList";
import { Banner } from "@/features/Banner/ui/Banner";

export const MainPage = () => {
    return (
        <div>
            <Banner />
            <div className="container">
                <Category />
                <MenuList />
            </div>
        </div>
    )
}
