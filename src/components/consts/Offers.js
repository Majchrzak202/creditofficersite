import { BusinessCenter } from "@mui/icons-material";
import { Factory, Agriculture } from "@mui/icons-material";
import { MonetizationOn } from "@mui/icons-material";
import { LocalShipping } from "@mui/icons-material";
import { Apartment } from "@mui/icons-material";

const offerSegments = [
  {
    title: "Kredyt firmowy",
    shortDescription:
      "Kredyt firmowy na dowolny cel. Kwota do 1 mln zł bez zabezpieczenia hipotecznego. Moliwość procesowania bez ZUS i US. Tanie i sprawdzone rowiania",
    icon: <BusinessCenter />,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    id: 1,
    backgroundImage:
      "https://i.ibb.co/MRnwfpB/pexels-the-coach-space-2977547.jpg",
  },
  {
    title: "Kredyt inwestycyjny",
    shortDescription:
      "Kredyt inwestycyjny na realizację inwestycji, budowe nieruchomości lub zakup gruntu. Środki do 15 mln zł. Lorem ipsum Lorem ipsum qoute example qoute",
    icon: <Factory />,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    id: 2,
    backgroundImage: "https://i.ibb.co/6YtmgN7/pexels-pixabay-209251-1-1.jpg",
  },
  {
    title: "Kredyt rolniczy",
    shortDescription:
      "Kredyt rolniczy na zakup sprętu, ziemi, materiałów lub na konsolidację obecnych zobowiązań. Moliwość procesowania wniosku bez zabezpieczenia hipotecznego ",
    icon: <Agriculture />,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    id: 3,
    backgroundImage:
      "https://i.ibb.co/mrKc1mg/pexels-matthias-zomer-422218.jpg",
  },
  {
    title: "Kredyt konsolidacyjny",
    shortDescription:
      "Kredyt konsolidacyjny słuzy polączeniu wielu zobowiązań w jedno. Pomaga zoptymalizować miesięczne koszty obsługi produktów kredytowych ",
    icon: <MonetizationOn />,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    id: 4,
    backgroundImage: "https://i.ibb.co/58NJF1d/pexels-lukas-590022.jpg",
  },
  {
    title: "Kredyt deweloperski",
    shortDescription:
      "Kredyt deweloperski na realizację lud dokończenie inwestycji. Refinans wsześniejszych zobowiązań. Wysokie kwoty nawet do 30 mln PLN. Współpraca z bankami Spółdzielczymi",

    icon: <Apartment />,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    id: 5,
    backgroundImage:
      "https://i.ibb.co/34VJj79/pexels-quang-nguyen-vinh-2138126-1.jpg",
  },
  {
    title: "Leasing",
    shortDescription:
      "Leasing na samochód, maszyny, sprzęt komputerowy i wszystko inne co tylko moze pomóc w prowadzeniu biznesu. ",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: <LocalShipping />,
    id: 6,
    backgroundImage: "https://i.ibb.co/qM6MnQ8/pexels-pixabay-164634.jpg",
  },
];

export default offerSegments;
