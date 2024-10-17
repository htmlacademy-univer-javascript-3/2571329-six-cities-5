import { Main } from "../../pages/main/Main";
import { City, offerCard } from "../../types";

type AppProps = {
    offers: offerCard[];
    currentCity: City;
};

export const App: React.FC<AppProps> = ({
    offers,
    currentCity
}) => {
    return (
        <Main offers={offers} currentCity={currentCity} />
    );
};

