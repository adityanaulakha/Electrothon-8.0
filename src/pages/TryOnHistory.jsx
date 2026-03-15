import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { UserMenu } from '../components/UserMenu'

const sidebarPages = [
	{ id: 'tryon', label: 'Tryon', path: '/tryon' },
	{ id: 'tryonHistory', label: 'TryonHistory', path: '/tryon-history' },
	{ id: 'wardrobeCollection', label: 'WardobeCollection', path: '/wardrobe-collection' },
	{ id: 'occasionRecommender', label: 'OccassionBasedOutfitRecommender', path: '/occasion-based-outfit-recommender' }
]

const sidebarDisplayLabels = {
	tryon: 'Try On',
	tryonHistory: 'Try On History',
	wardrobeCollection: 'Wardrobe Collection',
	occasionRecommender: 'Occasion-Based Recommender'
}

const historyItems = [
	{
		id: 1,
		date: 'Today, 2:30 PM',
		title: 'Linen Shirt on Casual Friday',
		userImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=500',
		garmentImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7OtoQSG6bMI61ocVnZenUxfu4Oe1j2iwcdt7sV9PXHezRSu9ag4y_4_5MxVAjQp9Es4-Z_XTurvLUWagrxVB4UxxDkxF5wgy254EnGB9LxMnTOiF7P3BW6Q3Sb2XrnahxsDjpcZRZQR3I6Xm9iiImmAzfTqufxlnGrv0w1qiKPo-a_ZozsnoE2q6BOAc7EoZoXx4qJs67ntP3fPH2k25dglfu0ZV2ciIoFa7AuS89u4-3DM8f3_uFmbQJlrsrGIxoaDAMaOH9O-df',
		resultImage: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&q=80&w=400&h=500'
	},
	{
		id: 2,
		date: 'Yesterday, 11:15 AM',
		title: 'Navy Blazer Formal Check',
		userImage: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=400&h=500',
		garmentImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy1T3G_BdXP5MT4aHrDL2TnA0hVIdAgSpQNi8gwPOKkcdQjI7wjcmp226t0rGj3c12Dix29itm5kRpb_7dP_U6LUWIU5O9iJ7rt0O73nW-aV_uX4NmnxlVaRw32VR-NAVsWybtM_ZQ8ToBpJmqsi6Q_Rt63Xvbo3id4CmyuE4J0wfWDgxuOC5Bi8B-S5RrB8D8Emm_mWLGl_RpKW1QJmSRi_GQGtsIkEbWxyHdeviAdNjr2PuT2z5DDZerYKZNUmcW4LbjKWNtY_d-',
		resultImage: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=400&h=500'
	},
	{
		id: 3,
		date: 'Mar 12, 4:45 PM',
		title: 'Floral Dress Preview',
		userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500',
		garmentImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0my3mXrzozAQQbt83I2uAc2aguuNoDhygJsIqaA406pLMhUOsLoTwaQmfvSqA8O2CKMsIlUXYmGLo6CrjWkyWHket18-om0Ybj-wbAj-lCOzQgHgzH-XsBFd6YjfTv_v-BwcSKjR_281BTKSHId-KvAK633CleRrvhFIJqIftA1SG-Uwt_Gw20HPRVdMsR8eLid-PfJlN9VOrbt0FvYdqmLcO7CCplEAYJqY0v5e5rIMWYeepi0qHDUEka9JpuNalCMdbBKHqQoWt',
		resultImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400&h=500'
	}
]

function Icon({ name, className }) {
	const common = {
		className,
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		'aria-hidden': true,
		focusable: 'false'
	}

	switch (name) {
		case 'download':
			return (
				<svg {...common}>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" y1="15" x2="12" y2="3" />
				</svg>
			)
		case 'share':
			return (
				<svg {...common}>
					<circle cx="18" cy="5" r="3" />
					<circle cx="6" cy="12" r="3" />
					<circle cx="18" cy="19" r="3" />
					<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
					<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
				</svg>
			)
		case 'trash':
			return (
				<svg {...common}>
					<polyline points="3 6 5 6 21 6" />
					<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
					<line x1="10" y1="11" x2="10" y2="17" />
					<line x1="14" y1="11" x2="14" y2="17" />
				</svg>
			)
		default:
			return null
	}
}

function TryOnHistory() {
	const navigate = useNavigate()
	const location = useLocation()
	const [selectedItem, setSelectedItem] = useState(null)
	const [dynamicHistory, setDynamicHistory] = useState(historyItems)

	useEffect(() => {
		try {
			const savedHistory = JSON.parse(localStorage.getItem('tryonHistory') || '[]')
			if (savedHistory.length > 0) {
				setDynamicHistory([...savedHistory, ...historyItems])
			}
		} catch (error) {
			console.error("Failed to load history from local storage", error)
		}
	}, [])

	const handleClearHistory = () => {
		localStorage.removeItem('tryonHistory')
		setDynamicHistory(historyItems) // Reset back to only the hardcoded ones
	}

	const handleDeleteItem = (id) => {
		const updatedLocal = JSON.parse(localStorage.getItem('tryonHistory') || '[]').filter(item => item.id !== id)
		localStorage.setItem('tryonHistory', JSON.stringify(updatedLocal))
		
		setDynamicHistory(prev => prev.filter(item => item.id !== id))
		setSelectedItem(null)
	}

	return (
		<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f7f5f3] font-display text-slate-900">
			<header className="sticky top-0 z-50 border-b border-[#ece8e4] bg-[#f7f5f3]/95 px-6 py-3 backdrop-blur">
				<div className="mx-auto grid w-full max-w-350 grid-cols-[1fr_auto_1fr] items-center gap-3">
					<Link
						to="/"
						className="justify-self-start inline-flex items-center gap-2 rounded-full border border-[#ece8e4] bg-white px-3 py-1.5 shadow-[0_4px_14px_rgba(15,23,42,0.06)]"
					>
						<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-black text-white">T</span>
						<span className="text-sm font-black text-slate-900">TryNex</span>
					</Link>

					<h1 className="text-center text-lg font-black tracking-tight text-slate-900">Try-On History</h1>

					<div className="justify-self-end flex items-center gap-2">
						<UserMenu />
					</div>
				</div>
			</header>

			<div className="flex flex-1">
				<aside className="w-72 shrink-0 border-r border-[#ece8e4] bg-[linear-gradient(180deg,#ffffff_0%,#faf8f6_100%)] px-4 py-6">
					<div className="sticky top-24 space-y-4">
						<div className="rounded-2xl border border-[#ece8e4] bg-white px-4 py-3 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
							<p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-400">Navigation</p>
							<p className="mt-1 text-sm font-bold text-slate-700">TryNex Modules</p>
						</div>

						<nav className="rounded-2xl border border-[#ece8e4] bg-white/90 p-2 shadow-[0_6px_18px_rgba(15,23,42,0.05)] backdrop-blur">
							<div className="flex flex-col gap-2">
								{sidebarPages.map((page, index) => {
									const isActive = location.pathname === page.path
									return (
										<button
											key={page.id}
											type="button"
											onClick={() => navigate(page.path)}
											className={
												isActive
													? 'flex w-full items-center gap-3 rounded-xl border border-primary/25 bg-[#fff2e7] px-3 py-3 text-left text-sm font-extrabold text-[#d86300] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]'
													: 'flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-left text-sm font-semibold text-slate-600 transition-colors hover:border-[#ece8e4] hover:bg-[#faf7f4] hover:text-slate-900'
											}
											aria-current={isActive ? 'page' : undefined}
										>
											<span
												className={
													isActive
														? 'inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-black text-white'
														: 'inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f1ece8] text-[10px] font-black text-slate-500'
												}
											>
												{String(index + 1).padStart(2, '0')}
											</span>
											<span className="truncate">{sidebarDisplayLabels[page.id] ?? page.label}</span>
										</button>
									)
								})}
							</div>
						</nav>

						<div className="rounded-2xl border border-[#ece8e4] bg-white px-4 py-3 text-xs text-slate-500">
							<p className="font-extrabold text-slate-700">Quick tip</p>
							<p className="mt-1 leading-relaxed">Save your favorite try-ons to your Wardrobe Collection to easily compare looks later.</p>
						</div>
					</div>
				</aside>

				<main className="flex-1 px-6 py-8">
					<div className="mx-auto w-full max-w-6xl">
						<div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
							<div>
								<h2 className="text-4xl font-black tracking-tight text-slate-900">Try On History</h2>
								<p className="mt-1 text-sm text-slate-500">View and manage a timeline of your previously generated looks.</p>
							</div>
							<div className="flex items-center gap-2">
								<button className="flex items-center gap-2 rounded-full border border-[#ece8e4] bg-white px-4 py-2.25 text-xs font-bold text-slate-700 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-colors hover:bg-[#faf9f8]">
									<svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
									</svg>
									Filter
								</button>
								<button 
									onClick={handleClearHistory}
									className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.25 text-xs font-bold text-white transition-opacity hover:opacity-90"
								>
									Clear History
								</button>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
							{dynamicHistory.map((item) => (
								<div 
									key={item.id} 
									className="group cursor-pointer rounded-3xl border border-[#ece8e4] bg-white p-3 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)]"
									onClick={() => setSelectedItem(item)}
								>
									<div className="aspect-3/4 w-full overflow-hidden rounded-2xl border border-[#e5e1dd] bg-[#faf9f8]">
										<img src={item.resultImage} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
									</div>
									<div className="mt-4 px-1 pb-1">
										<h3 className="text-sm font-extrabold text-slate-900 line-clamp-1">{item.title}</h3>
										<p className="mt-1 text-xs font-semibold text-slate-500">{item.date}</p>
									</div>
								</div>
							))}
						</div>
						
						<div className="mt-8 flex justify-center">
							<button className="rounded-full border border-[#ece8e4] bg-white xl:px-8 px-6 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition-colors hover:bg-[#faf9f8]">
								Load More
							</button>
						</div>
					</div>
				</main>
			</div>

			{/* Extended Version Modal */}
			{selectedItem && (
				<div 
					className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-slate-900/40 opacity-100 transition-opacity"
					onClick={() => setSelectedItem(null)}
				>
					<div 
						className="relative w-full max-w-4xl rounded-4xl bg-white p-6 shadow-2xl overflow-y-auto max-h-[90vh] anim-fade-up"
						onClick={(e) => e.stopPropagation()}
					>
						<button 
							className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 z-10"
							onClick={() => setSelectedItem(null)}
						>
							<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						<div className="mb-6 pr-12">
							<h3 className="text-2xl font-black text-slate-900">{selectedItem.title}</h3>
							<p className="mt-1.5 text-sm font-bold text-slate-500">{selectedItem.date}</p>
						</div>

						<div className="mb-6 flex flex-wrap items-center gap-3">
							<button className="flex items-center gap-2 rounded-full bg-[#faf9f8] px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-[#f0ece9] border border-[#ece8e4]">
								<Icon name="share" className="h-4 w-4" />
								<span>Share</span>
							</button>
							<button className="flex items-center gap-2 rounded-full bg-[#faf9f8] px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-[#f0ece9] border border-[#ece8e4]">
								<Icon name="download" className="h-4 w-4" />
								<span>Download</span>
							</button>
							<button 
								onClick={() => handleDeleteItem(selectedItem.id)}
								className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition-colors hover:bg-red-100 border border-red-100"
							>
								<Icon name="trash" className="h-4 w-4" />
								<span>Delete</span>
							</button>
						</div>

						<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
							<div className="flex flex-col gap-3 rounded-3xl border border-[#f0ece9] bg-[#faf9f8] p-5">
								<div className="flex items-center justify-between">
									<span className="text-xs font-black uppercase tracking-widest text-slate-500">Source Photo</span>
								</div>
								<div className="aspect-3/4 w-full overflow-hidden rounded-2xl border border-[#e5e1dd] bg-white">
									<img src={selectedItem.userImage} alt="User" className="h-full w-full object-cover" />
								</div>
							</div>

							<div className="flex flex-col gap-3 rounded-3xl border border-[#f0ece9] bg-[#faf9f8] p-5">
								<div className="flex items-center justify-between">
									<span className="text-xs font-black uppercase tracking-widest text-slate-500">Garment</span>
								</div>
								<div className="flex aspect-3/4 w-full items-center justify-center overflow-hidden rounded-2xl border border-[#e5e1dd] bg-white p-4">
									<img src={selectedItem.garmentImage} alt="Garment" className="h-full w-full object-contain" />
								</div>
							</div>

							<div className="flex flex-col gap-3 rounded-3xl border border-primary/20 bg-[#fff8f3] p-5 shadow-[inset_0_0_0_1px_rgba(255,106,0,0.05)]">
								<div className="flex items-center justify-between">
									<span className="text-xs font-black uppercase tracking-widest text-primary">Final Result</span>
									<span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-black text-primary uppercase tracking-wider">
										<svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
										AI Gen
									</span>
								</div>
								<div className="aspect-3/4 w-full overflow-hidden rounded-2xl border border-primary/20 bg-white">
									<img src={selectedItem.resultImage} alt="Try-On Result" className="h-full w-full object-cover" />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default TryOnHistory
