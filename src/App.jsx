import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import Landing from './pages/Landing'
import OccassionBasedOutfitRecommender from './pages/OccassionBasedOutfitRecommender'
import TryOn from './pages/TryOn'
import TryOnHistory from './pages/TryOnHistory'
import WardrobeCollection from './pages/WardrobeCollection'
import SignIn from './components/SignIn'

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/tryon" element={<TryOn />} />
				<Route path="/tryon-history" element={<TryOnHistory />} />
				<Route path="/wardrobe-collection" element={<WardrobeCollection />} />
				<Route path="/occasion-based-outfit-recommender" element={<OccassionBasedOutfitRecommender />} />
				<Route path="/try-on" element={<Navigate to="/tryon" replace />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</AuthProvider>
	)
}

export default App
