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

const wardrobeItems = [
	{
		id: 1,
		title: 'White Linen Shirt',
		category: 'Tops',
		date: 'Added 2 days ago',
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7OtoQSG6bMI61ocVnZenUxfu4Oe1j2iwcdt7sV9PXHezRSu9ag4y_4_5MxVAjQp9Es4-Z_XTurvLUWagrxVB4UxxDkxF5wgy254EnGB9LxMnTOiF7P3BW6Q3Sb2XrnahxsDjpcZRZQR3I6Xm9iiImmAzfTqufxlnGrv0w1qiKPo-a_ZozsnoE2q6BOAc7EoZoXx4qJs67ntP3fPH2k25dglfu0ZV2ciIoFa7AuS89u4-3DM8f3_uFmbQJlrsrGIxoaDAMaOH9O-df'
	},
	{
		id: 2,
		title: 'Blue Denim Jeans',
		category: 'Bottoms',
		date: 'Added 5 days ago',
		image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400&h=500'
	},
	{
		id: 3,
		title: 'Floral Summer Dress',
		category: 'Dresses',
		date: 'Added 1 week ago',
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0my3mXrzozAQQbt83I2uAc2aguuNoDhygJsIqaA406pLMhUOsLoTwaQmfvSqA8O2CKMsIlUXYmGLo6CrjWkyWHket18-om0Ybj-wbAj-lCOzQgHgzH-XsBFd6YjfTv_v-BwcSKjR_281BTKSHId-KvAK633CleRrvhFIJqIftA1SG-Uwt_Gw20HPRVdMsR8eLid-PfJlN9VOrbt0FvYdqmLcO7CCplEAYJqY0v5e5rIMWYeepi0qHDUEka9JpuNalCMdbBKHqQoWt'
	},
	{
		id: 4,
		title: 'Leather Biker Jacket',
		category: 'Outerwear',
		date: 'Added 2 weeks ago',
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy1T3G_BdXP5MT4aHrDL2TnA0hVIdAgSpQNi8gwPOKkcdQjI7wjcmp226t0rGj3c12Dix29itm5kRpb_7dP_U6LUWIU5O9iJ7rt0O73nW-aV_uX4NmnxlVaRw32VR-NAVsWybtM_ZQ8ToBpJmqsi6Q_Rt63Xvbo3id4CmyuE4J0wfWDgxuOC5Bi8B-S5RrB8D8Emm_mWLGl_RpKW1QJmSRi_GQGtsIkEbWxyHdeviAdNjr2PuT2z5DDZerYKZNUmcW4LbjKWNtY_d-'
	},
	{
		id: 5,
		title: 'Silk Blouse',
		category: 'Tops',
		date: 'Added 3 weeks ago',
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQUB9uMWoI1osu6xztsMa1LnbDOCXiLMdCWfxx8XUtC2kbZWierd-Dp3EAAcjKESphG_En_Ouz7PYFR95q-ftD3Z8Am1LV3XybjxOKsIORdATqJtpwptAEZd-exwxK6v-YB9Nj3cD8jO0GjC_XEqDTKrFBa14fDf_MOdfTxiHwRXtd9QWVGHORoxW12RbuBlpoG3ZXIUqN4w0_4rIZ1rg5hFhohP67BlC0zFpAnN7wBrzQxPMeDa5Pu26E3wawitowpTeXFT56MV0R'
	},
	{
		id: 6,
		title: 'Wool Overcoat',
		category: 'Outerwear',
		date: 'Added 1 month ago',
		image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmjFvqm7SZgv8TccOY4AR9PreQsjmtzZ9xS2k39kP1rWMzd_oyBDXUmNKEOkirqkpjpfTzzUWz3yuyNEoPFKrctxBRVSPgVOV3bI72rCPhyuoNpkulUiphLOxqrlrAWrzjZppQ2vSnP9hig_Qz3O_o9fSImB5Gpwm999dvP9__Yb7tzsvhzXVrUQfhYU4rlP9BSCKGMv1lBx3Vs1o8OpT9A8SqLC0R1F9yBVfMLRTzfTUrUmuP2FEF6tWolyYqxjzd7r2pi4it5R9G'
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
		case 'plus':
			return (
				<svg {...common}>
					<path d="M12 5v14M5 12h14" />
				</svg>
			)
		case 'grid':
			return (
				<svg {...common}>
					<rect x="3" y="3" width="7" height="7" rx="1" />
					<rect x="14" y="3" width="7" height="7" rx="1" />
					<rect x="14" y="14" width="7" height="7" rx="1" />
					<rect x="3" y="14" width="7" height="7" rx="1" />
				</svg>
			)
		case 'shirt':
			return (
				<svg {...common}>
					<path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
				</svg>
			)
		case 'calendar':
			return (
				<svg {...common}>
					<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
					<line x1="16" y1="2" x2="16" y2="6" />
					<line x1="8" y1="2" x2="8" y2="6" />
					<line x1="3" y1="10" x2="21" y2="10" />
				</svg>
			)
		default:
			return null
	}
}

function WardrobeCollection() {
	const navigate = useNavigate()
	const location = useLocation()
	const [activeCategory, setActiveCategory] = useState('All Items')

	const categories = [
		{ name: 'All Items', icon: 'grid' },
		{ name: 'Tops', icon: 'shirt' },
		{ name: 'Bottoms', icon: 'grid' },
		{ name: 'Dresses', icon: 'grid' },
		{ name: 'Outerwear', icon: 'grid' }
	]

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

					<h1 className="text-center text-lg font-black tracking-tight text-slate-900">Wardrobe Collection</h1>

					<div className="justify-self-end flex items-center gap-3">
						<div className="hidden lg:flex items-center rounded-full border border-[#ece8e4] bg-white px-3 py-1.5 shadow-sm">
							<svg className="w-4 h-4 text-slate-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
							<input className="bg-transparent outline-none text-sm w-44 font-medium placeholder-slate-400" placeholder="Search your wardrobe..." />
						</div>
						<button className="hidden sm:flex items-center gap-1.5 bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full hover:bg-[#ea6100]">
							<Icon name="plus" className="w-4 h-4" /> Upload Garment
						</button>
						<UserMenu />
					</div>
				</div>
			</header>

			<div className="flex flex-1">
				{/* Global Sidebar matching TryOn.jsx */}
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

				<main className="flex-1 flex gap-8 px-6 py-10 w-full overflow-hidden">
					{/* Local Sidebar for Categories */}
					<div className="w-52 shrink-0 hidden md:flex flex-col">
						<h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 px-2">Categories</h3>
						<div className="flex flex-col gap-1.5">
							{categories.map((cat) => {
								const isActive = cat.name === activeCategory
								return (
									<button
										key={cat.name}
										onClick={() => setActiveCategory(cat.name)}
										className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
											isActive ? 'bg-[#fff2e7] text-[#d86300]' : 'text-slate-600 hover:bg-slate-200/50'
										}`}
									>
										<Icon name={cat.icon} className="w-5 h-5" />
										{cat.name}
									</button>
								)
							})}
						</div>

						{/* Wardrobe Limit Progress component */}
						<div className="mt-auto mb-8 rounded-2xl border border-[#ffe0c2] bg-[#fffaf5] p-5 shadow-sm">
							<p className="font-extrabold text-primary mb-3 uppercase tracking-widest text-[10px]">Wardrobe Limit</p>
							<div className="h-2 w-full bg-[#fcd4b1] rounded-full overflow-hidden mb-3">
								<div className="h-full bg-primary rounded-full w-[48%]" />
							</div>
							<p className="text-xs text-slate-600 font-bold">24 of 50 items used</p>
						</div>
					</div>

					<div className="flex-1 min-w-0">
						<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
							<div>
								<div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
									<span>My Profile</span>
									<span className="text-slate-300">›</span>
									<span className="text-slate-700">Wardrobe Collection</span>
								</div>
								<h2 className="text-3xl font-black text-slate-900 tracking-tight">Wardrobe Collection</h2>
								<p className="text-slate-500 text-sm mt-1">Manage and organize your digital collection of garments.</p>
							</div>
							<div className="flex items-center gap-2">
								<button className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-600 shadow-sm">
									<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
								</button>
								<button className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-600 shadow-sm">
									<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h10M4 18h4"/></svg>
								</button>
							</div>
						</div>

						{/* Ensure the grid takes into account small screens properly */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
							{/* Add Item Card */}
							<button className="flex flex-col items-center justify-center p-8 rounded-4xl border-[2.5px] border-dashed border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center aspect-5/6">
								<div className="w-14 h-14 rounded-full bg-[#fff2e7] text-primary flex items-center justify-center mb-4 shadow-sm">
									<Icon name="plus" className="w-6 h-6" />
								</div>
								<span className="font-bold text-slate-900 text-base">Add Item</span>
								<span className="text-xs text-slate-500 font-medium mt-1">PNG, JPG up to 10MB</span>
							</button>

							{/* Item Cards mapped */}
							{wardrobeItems
								.filter((item) => activeCategory === 'All Items' || item.category === activeCategory)
								.map((item) => (
									<div
										key={item.id}
										className="group rounded-4xl border border-[#ece8e4] bg-white overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] flex flex-col aspect-5/6"
									>
										<div className="relative flex-1 bg-[#fbf9f7] p-6 flex flex-col justify-center border-b border-[#ece8e4] overflow-hidden">
											<img
												src={item.image}
												alt={item.title}
												className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
											/>
											<span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm shadow-sm px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-slate-600 rounded drop-shadow">
												{item.category}
											</span>
										</div>
										<div className="p-5 flex flex-col bg-white shrink-0">
											<h3 className="font-extrabold text-slate-900 text-[15px]">{item.title}</h3>
											<p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
												<Icon name="calendar" className="w-3.5 h-3.5" />
												{item.date}
											</p>
										</div>
									</div>
								))}
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default WardrobeCollection
