import { useState } from 'react'
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

const occasionFilters = [
	{ id: 'all', label: 'All Occasions' },
	{ id: 'wedding', label: '🎉 Wedding' },
	{ id: 'business', label: '💼 Business Casual' },
	{ id: 'date', label: '❤️ Date Night' },
	{ id: 'formal', label: '👔 Formal' },
	{ id: 'party', label: '🍸 Party' }
]

const recommendedOutfits = [
	{
		id: 1,
		title: 'Midnight Silk Gown',
		category: 'Wedding Collection',
		tags: ['wedding', 'formal'],
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-RTs3kcdPNqRevQspAXGDvVV7Og7gygonyy6IIbyuwtJ78KYKJzKwhlLzkZ_Pq-03Bk51__YDdpAsqWvqVjikerWfe8REkyLvulUsnhArD2eJaQmnEJWMn2k45yRqwqBUfkH5W5A5EBm1TMarrvN4fq_ikvuX6atl2ZyxbGVjOj86CFSimWcgzood2HASG1fLqr1ZHHQjhtYUaUcKxsLFSuXb941FixWFiFyUr09zCe30tV-Yrz-Vq2Z8f2IBaZYLJcQfUP0DYk90',
		liked: false
	},
	{
		id: 2,
		title: 'Navy Tailored Suit',
		category: 'Business Professional',
		tags: ['business', 'formal'],
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy1T3G_BdXP5MT4aHrDL2TnA0hVIdAgSpQNi8gwPOKkcdQjI7wjcmp226t0rGj3c12Dix29itm5kRpb_7dP_U6LUWIU5O9iJ7rt0O73nW-aV_uX4NmnxlVaRw32VR-NAVsWybtM_ZQ8ToBpJmqsi6Q_Rt63Xvbo3id4CmyuE4J0wfWDgxuOC5Bi8B-S5RrB8D8Emm_mWLGl_RpKW1QJmSRi_GQGtsIkEbWxyHdeviAdNjr2PuT2z5DDZerYKZNUmcW4LbjKWNtY_d-',
		liked: true
	},
	{
		id: 3,
		title: 'Floral Breeze Dress',
		category: 'Summer Wedding',
		tags: ['wedding', 'party'],
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0my3mXrzozAQQbt83I2uAc2aguuNoDhygJsIqaA406pLMhUOsLoTwaQmfvSqA8O2CKMsIlUXYmGLo6CrjWkyWHket18-om0Ybj-wbAj-lCOzQgHgzH-XsBFd6YjfTv_v-BwcSKjR_281BTKSHId-KvAK633CleRrvhFIJqIftA1SG-Uwt_Gw20HPRVdMsR8eLid-PfJlN9VOrbt0FvYdqmLcO7CCplEAYJqY0v5e5rIMWYeepi0qHDUEka9JpuNalCMdbBKHqQoWt',
		liked: false
	},
	{
		id: 4,
		title: 'Modern Velvet Tuxedo',
		category: 'Gala Essentials',
		tags: ['formal'],
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmjFvqm7SZgv8TccOY4AR9PreQsjmtzZ9xS2k39kP1rWMzd_oyBDXUmNKEOkirqkpjpfTzzUWz3yuyNEoPFKrctxBRVSPgVOV3bI72rCPhyuoNpkulUiphLOxqrlrAWrzjZppQ2vSnP9hig_Qz3O_o9fSImB5Gpwm999dvP9__Yb7tzsvhzXVrUQfhYU4rlP9BSCKGMv1lBx3Vs1o8OpT9A8SqLC0R1F9yBVfMLRTzfTUrUmuP2FEF6tWolyYqxjzd7r2pi4it5R9G',
		liked: true
	},
	{
		id: 5,
		title: 'Casual Linen Look',
		category: 'Garden Party',
		tags: ['party', 'date'],
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7OtoQSG6bMI61ocVnZenUxfu4Oe1j2iwcdt7sV9PXHezRSu9ag4y_4_5MxVAjQp9Es4-Z_XTurvLUWagrxVB4UxxDkxF5wgy254EnGB9LxMnTOiF7P3BW6Q3Sb2XrnahxsDjpcZRZQR3I6Xm9iiImmAzfTqufxlnGrv0w1qiKPo-a_ZozsnoE2q6BOAc7EoZoXx4qJs67ntP3fPH2k25dglfu0ZV2ciIoFa7AuS89u4-3DM8f3_uFmbQJlrsrGIxoaDAMaOH9O-df',
		liked: false
	},
	{
		id: 6,
		title: 'Metropolitan Blazer',
		category: 'Office Essentials',
		tags: ['business'],
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy1T3G_BdXP5MT4aHrDL2TnA0hVIdAgSpQNi8gwPOKkcdQjI7wjcmp226t0rGj3c12Dix29itm5kRpb_7dP_U6LUWIU5O9iJ7rt0O73nW-aV_uX4NmnxlVaRw32VR-NAVsWybtM_ZQ8ToBpJmqsi6Q_Rt63Xvbo3id4CmyuE4J0wfWDgxuOC5Bi8B-S5RrB8D8Emm_mWLGl_RpKW1QJmSRi_GQGtsIkEbWxyHdeviAdNjr2PuT2z5DDZerYKZNUmcW4LbjKWNtY_d-',
		liked: false
	},
	{
		id: 7,
		title: 'Emerald Luxe Dress',
		category: 'Evening Luxe',
		tags: ['party', 'date', 'formal'],
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-RTs3kcdPNqRevQspAXGDvVV7Og7gygonyy6IIbyuwtJ78KYKJzKwhlLzkZ_Pq-03Bk51__YDdpAsqWvqVjikerWfe8REkyLvulUsnhArD2eJaQmnEJWMn2k45yRqwqBUfkH5W5A5EBm1TMarrvN4fq_ikvuX6atl2ZyxbGVjOj86CFSimWcgzood2HASG1fLqr1ZHHQjhtYUaUcKxsLFSuXb941FixWFiFyUr09zCe30tV-Yrz-Vq2Z8f2IBaZYLJcQfUP0DYk90',
		liked: false
	},
	{
		id: 8,
		title: 'Classic City Trench',
		category: 'Autumn Style',
		tags: ['business', 'date'],
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmjFvqm7SZgv8TccOY4AR9PreQsjmtzZ9xS2k39kP1rWMzd_oyBDXUmNKEOkirqkpjpfTzzUWz3yuyNEoPFKrctxBRVSPgVOV3bI72rCPhyuoNpkulUiphLOxqrlrAWrzjZppQ2vSnP9hig_Qz3O_o9fSImB5Gpwm999dvP9__Yb7tzsvhzXVrUQfhYU4rlP9BSCKGMv1lBx3Vs1o8OpT9A8SqLC0R1F9yBVfMLRTzfTUrUmuP2FEF6tWolyYqxjzd7r2pi4it5R9G',
		liked: true
	}
]

function OccassionBasedOutfitRecommender() {
	const navigate = useNavigate()
	const location = useLocation()
	const [activeFilter, setActiveFilter] = useState('all')
	const [searchQuery, setSearchQuery] = useState('')

	const filteredOutfits = recommendedOutfits.filter((outfit) => {
		const matchesFilter = activeFilter === 'all' || outfit.tags.includes(activeFilter)
		const matchesSearch =
			outfit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			outfit.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
			outfit.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

		return matchesFilter && matchesSearch
	})

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

					<h1 className="text-center text-lg font-black tracking-tight text-slate-900">Occassion Outfit Recommender</h1>

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
					</div>
				</aside>

				<main className="flex-1 px-6 py-10 lg:px-12 lg:py-14">
					<div className="mx-auto w-full max-w-6xl">
						<div className="mb-10 max-w-3xl">
							<h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
								Find Your Perfect Look <br />
								<span className="text-primary">for Every Occasion</span>
							</h1>
							<p className="mt-4 text-lg text-slate-500 leading-relaxed">
								Experience high-fidelity AI-powered virtual try-ons tailored to your event, style preferences, and fit.
							</p>
						</div>

						{/* Search Bar */}
						<div className="mb-8 flex items-center gap-3 rounded-3xl border border-[#ece8e4] bg-white p-2.5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-primary">
								<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</div>
							<input
								type="text"
								placeholder="What's the occasion? (e.g., Summer Wedding, Job Interview, First Date)"
								className="flex-1 bg-transparent px-2 text-sm font-semibold text-slate-900 placeholder-slate-400 outline-none"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#e65c00] hover:shadow-lg">
								Find Outfits
							</button>
						</div>

						{/* Filters */}
						<div className="mb-10 flex flex-wrap items-center gap-3">
							{occasionFilters.map((filter) => (
								<button
									key={filter.id}
									onClick={() => setActiveFilter(filter.id)}
									className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
										activeFilter === filter.id
											? 'border-primary bg-primary text-white shadow-[0_4px_14px_rgba(255,106,0,0.3)]'
											: 'border-[#ece8e4] bg-white text-slate-600 hover:border-slate-300 hover:bg-[#faf9f8]'
									}`}
								>
									{filter.label}
								</button>
							))}
						</div>

						{/* Outfit Grid */}
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{filteredOutfits.map((outfit) => (
								<div key={outfit.id} className="group flex flex-col rounded-[28px] border border-[#ece8e4] bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
									<div className="relative aspect-3/4 w-full overflow-hidden rounded-[20px] bg-[#f0ece9]">
										<img src={outfit.image} alt={outfit.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
										<button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition-all hover:scale-110 hover:text-red-500">
											<svg className={`h-4 w-4 ${outfit.liked ? 'fill-red-500 text-red-500' : ''}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
												<path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
											</svg>
										</button>
									</div>
									<div className="mt-5 px-1">
										<h3 className="text-base font-extrabold text-slate-900">{outfit.title}</h3>
										<p className="mt-1 text-sm font-semibold text-primary">{outfit.category}</p>
									</div>
									<button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-white transition-colors hover:bg-[#e65c00]">
										<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
										Virtual Try-On
									</button>
								</div>
							))}
						</div>

						<div className="mt-12 flex justify-center">
							<button className="flex items-center gap-2 rounded-full border border-[#ece8e4] bg-white px-8 py-3 text-sm font-bold text-slate-600 shadow-sm transition-colors hover:bg-[#faf9f8]">
								Show More Styles
								<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
								</svg>
							</button>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default OccassionBasedOutfitRecommender
