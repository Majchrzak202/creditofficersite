import { BusinessCenter } from "@mui/icons-material";
import { Factory, Agriculture } from "@mui/icons-material";
import { MonetizationOn } from "@mui/icons-material";
import { Toll } from "@mui/icons-material";
import { LocalShipping } from "@mui/icons-material";

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
      "https://pixabay.com/get/g226cbef55b413d3796cd077a0a16e4ce178af8205cdf00bb76d9e2a5363d807c5d6aac6d906c93e444c8f7f50f031516e4264b56be82647092d4017da78b51569650a0dc15c4ff30e3327791ccb550a2_1280.jpg",
  },
  {
    title: "Kredyt inwestycyjny",
    shortDescription:
      "Kredyt inwestycyjny na realizację inwestycji, budowe nieruchomości lub zakup gruntu. Środki do 15 mln zł. Lorem ipsum Lorem ipsum qoute example qoute",
    icon: <Factory />,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    id: 2,
    backgroundImage:
      "https://pixabay.com/get/g226cbef55b413d3796cd077a0a16e4ce178af8205cdf00bb76d9e2a5363d807c5d6aac6d906c93e444c8f7f50f031516e4264b56be82647092d4017da78b51569650a0dc15c4ff30e3327791ccb550a2_1280.jpg",
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
      "https://pixabay.com/get/g226cbef55b413d3796cd077a0a16e4ce178af8205cdf00bb76d9e2a5363d807c5d6aac6d906c93e444c8f7f50f031516e4264b56be82647092d4017da78b51569650a0dc15c4ff30e3327791ccb550a2_1280.jpg",
  },
  {
    title: "Kredyt konsolidacyjny",
    shortDescription:
      "Kredyt konsolidacyjny słuzy polączeniu wielu zobowiązań w jedno. Pomaga zoptymalizować miesięczne koszty obsługi produktów kredytowych ",
    icon: <MonetizationOn />,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    id: 4,
    backgroundImage:
      "https://pixabay.com/get/g226cbef55b413d3796cd077a0a16e4ce178af8205cdf00bb76d9e2a5363d807c5d6aac6d906c93e444c8f7f50f031516e4264b56be82647092d4017da78b51569650a0dc15c4ff30e3327791ccb550a2_1280.jpg",
  },
  {
    title: "Kredyt gotówkowy",
    shortDescription:
      "Kredyt gotówkowy na dowolny cel. Minimalne formalności, szybki proces i nawet do 300 tys. zł. Najprostsza forma finansowania dla klientów indywidualnych i firmowych",
    icon: <Toll />,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    id: 5,
    backgroundImage:
      "https://pixabay.com/get/g226cbef55b413d3796cd077a0a16e4ce178af8205cdf00bb76d9e2a5363d807c5d6aac6d906c93e444c8f7f50f031516e4264b56be82647092d4017da78b51569650a0dc15c4ff30e3327791ccb550a2_1280.jpg",
  },
  {
    title: "Leasing",
    shortDescription:
      "Leasing na samochód, maszyny, sprzęt komputerowy i wszystko inne co tylko moze pomóc w prowadzeniu biznesu. ",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: <LocalShipping />,
    id: 6,
    backgroundImage:
      "https://pixabay.com/get/g226cbef55b413d3796cd077a0a16e4ce178af8205cdf00bb76d9e2a5363d807c5d6aac6d906c93e444c8f7f50f031516e4264b56be82647092d4017da78b51569650a0dc15c4ff30e3327791ccb550a2_1280.jpg",
  },
];

export default offerSegments;
