import Home from '../src/pages/Home'
import AuthContextProvider from './context/AuthContext'

const App = () => {
    return (
        <AuthContextProvider>
            <>
                <Home />
            </>
        </AuthContextProvider>
    )
}

export default App