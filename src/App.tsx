import { I18nextProvider } from "react-i18next"
import { AppRouter } from "./routes/AppRouter"
import i18n from "./i18n/i18n"


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppRouter />
    </I18nextProvider>
  )
}

export default App
