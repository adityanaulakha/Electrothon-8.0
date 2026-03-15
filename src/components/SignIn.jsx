import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function SignIn() {
	const navigate = useNavigate()
	const { login } = useAuth()
	
	// Pre-fill demo credentials
	const [email, setEmail] = useState('demo@trynex.com')
	const [password, setPassword] = useState('trynex2026')

	const handleSubmit = (e) => {
		e.preventDefault()
		login(email)
		// Mock login - navigate to dashboard/tryon
		navigate('/tryon')
	}

	return (
		<div className="flex min-h-screen w-full font-display bg-[#faf9f8]">
			{/* Left Side - Form */}
			<div className="flex flex-1 flex-col justify-center px-6 py-12 lg:w-1/2 lg:flex-none sm:px-12 lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-[360px]">
					{/* Logo */}
					<Link to="/" className="mb-10 inline-flex items-center gap-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
							<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M12 9l-8.5 7h17L12 9z" />
								<path d="M12 9V7a2 2 0 0 1 4 0" />
							</svg>
						</div>
						<span className="text-xl font-black text-slate-900">TryNex</span>
					</Link>

					<h2 className="mt-2 text-[28px] font-black tracking-tight text-slate-900">Welcome Back</h2>
					<p className="mt-2 text-sm text-slate-500 font-medium">Step into your virtual fitting room.</p>

					<form onSubmit={handleSubmit} className="mt-8 space-y-6">
						<div>
							<label htmlFor="email" className="block text-xs font-bold text-slate-800">Email address</label>
							<div className="mt-2 text-slate-900">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									placeholder="name@company.com"
									className="block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder-slate-400 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-xs font-bold text-slate-800">Password</label>
								<Link to="#" className="text-xs font-bold text-primary transition-colors hover:text-[#e65c00]">Forgot password?</Link>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									placeholder="••••••••"
									className="block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder-slate-400 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary font-serif tracking-widest text-slate-900"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="mt-2 flex w-full justify-center rounded-full bg-primary px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#e65c00] active:scale-[0.98]"
							>
								Sign in
							</button>
						</div>
					</form>

					<div className="mt-10">
						<div className="relative">
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="w-full border-t border-slate-200" />
							</div>
							<div className="relative flex justify-center text-xs font-medium leading-6">
								<span className="bg-[#faf9f8] px-4 text-slate-400">Or continue with</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-4">
							<button className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#ece8e4] bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-colors hover:bg-[#faf9f8]">
								<svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
									<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
									<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
									<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
									<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
								</svg>
								Google
							</button>
							<button className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#ece8e4] bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-colors hover:bg-[#faf9f8]">
								<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M16.365 14.363c0 1.636.825 3.063 2.133 3.87-3.149 4.39-8.492 4.414-9.845 4.414-2.552 0-4.992-1.635-6.28-1.635-1.285 0-3.328 1.558-5.32 1.558-1.402 0-2.607-.582-3.468-1.635-2.335-2.833-3.66-8.528-2.296-12.77.662-2.062 2.37-3.464 4.195-3.464 1.83 0 3.332 1.246 5.088 1.246 1.751 0 3.655-1.246 6.023-1.246 2.023 0 3.815.897 4.908 2.376-4.15 2.45-3.385 8.163.86 9.288zM14.654 4.542c.815-.972 1.365-2.33 1.215-3.674-1.214.048-2.665.81-3.518 1.782-.733.823-1.373 2.22-.198 3.514 1.353.136 2.76-.642 3.501-1.622z"/>
								</svg>
								Apple
							</button>
						</div>
					</div>

					<p className="mt-12 mb-8 text-center text-[13px] font-medium text-slate-500">
						Not a member?{' '}
						<Link to="#" className="font-bold text-primary hover:text-[#e65c00]">Start your 14-day free trial</Link>
					</p>
				</div>
			</div>

			{/* Right Side - Image */}
			<div className="relative hidden w-0 flex-1 lg:block bg-slate-900 overflow-hidden">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy1T3G_BdXP5MT4aHrDL2TnA0hVIdAgSpQNi8gwPOKkcdQjI7wjcmp226t0rGj3c12Dix29itm5kRpb_7dP_U6LUWIU5O9iJ7rt0O73nW-aV_uX4NmnxlVaRw32VR-NAVsWybtM_ZQ8ToBpJmqsi6Q_Rt63Xvbo3id4CmyuE4J0wfWDgxuOC5Bi8B-S5RrB8D8Emm_mWLGl_RpKW1QJmSRi_GQGtsIkEbWxyHdeviAdNjr2PuT2z5DDZerYKZNUmcW4LbjKWNtY_d-"
					alt="Fashion try-on models"
				/>
				{/* Gradient overlay for text */}
				<div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
				
				<div className="absolute bottom-16 left-16 right-16 z-10 max-w-lg">
					<blockquote className="text-left text-[26px] font-bold leading-snug tracking-tight text-white md:text-[28px]">
						"TryNex has completely transformed how I visualize my wardrobe. It's like having a personal stylist in my pocket."
					</blockquote>
					<div className="mt-10 flex items-center gap-4">
						<img
							className="h-12 w-12 rounded-full border-2 border-white/20 object-cover shadow-lg"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="Sarah Jenkins"
						/>
						<div>
							<div className="text-[15px] font-bold text-white">Sarah Jenkins</div>
							<div className="text-sm font-medium text-slate-300">Creative Director, StyleHub</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignIn
