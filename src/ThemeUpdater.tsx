import { BackgroundColor, Bin } from "./common/colors";
import { useLibraryData } from "./LibraryData/LibraryDataContext";
import { Loading } from "./Loading";

const ThemeUpdater = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return <Loading />;

  document.body.style.backgroundColor = BackgroundColor();
  const favicon = document.getElementById("favicon") as HTMLLinkElement;
  if (favicon !== null) favicon.href = `${Bin()}.ico`;
  const theme = document.getElementById("theme-color") as HTMLMetaElement;
  if (theme !== null) theme.content = BackgroundColor();

  return null;
};

export default ThemeUpdater;
