import { BackgroundColor, Bin } from './common/colors'

const ThemeUpdater = () => {
  document.body.style.backgroundColor = BackgroundColor()
  const favicon = document.getElementById('favicon') as HTMLLinkElement
  if (favicon !== null) favicon.href = `${Bin()}.ico`
  const theme = document.getElementById('theme-color') as HTMLMetaElement
  if (theme !== null) theme.content = BackgroundColor()

  return null
}

export default ThemeUpdater
