import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserMenu } from '../components/UserMenu'

import { generateTryOnImage } from '../services/gemini'

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

const garmentPresets = [
	{
		id: 'preset-shirt-linen',
		label: 'Linen Shirt',
		description: 'Premium White',
		category: 'shirts',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuB7OtoQSG6bMI61ocVnZenUxfu4Oe1j2iwcdt7sV9PXHezRSu9ag4y_4_5MxVAjQp9Es4-Z_XTurvLUWagrxVB4UxxDkxF5wgy254EnGB9LxMnTOiF7P3BW6Q3Sb2XrnahxsDjpcZRZQR3I6Xm9iiImmAzfTqufxlnGrv0w1qiKPo-a_ZozsnoE2q6BOAc7EoZoXx4qJs67ntP3fPH2k25dglfu0ZV2ciIoFa7AuS89u4-3DM8f3_uFmbQJlrsrGIxoaDAMaOH9O-df'
	},
	{
		id: 'preset-blazer-navy',
		label: 'Navy Blazer',
		description: 'Tailored Fit',
		category: 'blazers',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuDy1T3G_BdXP5MT4aHrDL2TnA0hVIdAgSpQNi8gwPOKkcdQjI7wjcmp226t0rGj3c12Dix29itm5kRpb_7dP_U6LUWIU5O9iJ7rt0O73nW-aV_uX4NmnxlVaRw32VR-NAVsWybtM_ZQ8ToBpJmqsi6Q_Rt63Xvbo3id4CmyuE4J0wfWDgxuOC5Bi8B-S5RrB8D8Emm_mWLGl_RpKW1QJmSRi_GQGtsIkEbWxyHdeviAdNjr2PuT2z5DDZerYKZNUmcW4LbjKWNtY_d-'
	},
	{
		id: 'preset-dress-wrap',
		label: 'Wrap Dress',
		description: 'Beige Floral',
		category: 'dresses',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuA0my3mXrzozAQQbt83I2uAc2aguuNoDhygJsIqaA406pLMhUOsLoTwaQmfvSqA8O2CKMsIlUXYmGLo6CrjWkyWHket18-om0Ybj-wbAj-lCOzQgHgzH-XsBFd6YjfTv_v-BwcSKjR_281BTKSHId-KvAK633CleRrvhFIJqIftA1SG-Uwt_Gw20HPRVdMsR8eLid-PfJlN9VOrbt0FvYdqmLcO7CCplEAYJqY0v5e5rIMWYeepi0qHDUEka9JpuNalCMdbBKHqQoWt'
	},
	{
		id: 'preset-coat-structured',
		label: 'Overcoat',
		description: 'Charcoal Grey',
		category: 'blazers',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCmjFvqm7SZgv8TccOY4AR9PreQsjmtzZ9xS2k39kP1rWMzd_oyBDXUmNKEOkirqkpjpfTzzUWz3yuyNEoPFKrctxBRVSPgVOV3bI72rCPhyuoNpkulUiphLOxqrlrAWrzjZppQ2vSnP9hig_Qz3O_o9fSImB5Gpwm999dvP9__Yb7tzsvhzXVrUQfhYU4rlP9BSCKGMv1lBx3Vs1o8OpT9A8SqLC0R1F9yBVfMLRTzfTUrUmuP2FEF6tWolyYqxjzd7r2pi4it5R9G'
	},
	{
		id: 'preset-tee-orange',
		label: 'Orange Tee',
		description: 'Essential Orange',
		category: 'shirts',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBQUB9uMWoI1osu6xztsMa1LnbDOCXiLMdCWfxx8XUtC2kbZWierd-Dp3EAAcjKESphG_En_Ouz7PYFR95q-ftD3Z8Am1LV3XybjxOKsIORdATqJtpwptAEZd-exwxK6v-YB9Nj3cD8jO0GjC_XEqDTKrFBa14fDf_MOdfTxiHwRXtd9QWVGHORoxW12RbuBlpoG3ZXIUqN4w0_4rIZ1rg5hFhohP67BlC0zFpAnN7wBrzQxPMeDa5Pu26E3wawitowpTeXFT56MV0R'
	},
	{
		id: 'preset-dress-cocktail',
		label: 'Cocktail Dress',
		description: 'Midnight Black',
		category: 'dresses',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuC-RTs3kcdPNqRevQspAXGDvVV7Og7gygonyy6IIbyuwtJ78KYKJzKwhlLzkZ_Pq-03Bk51__YDdpAsqWvqVjikerWfe8REkyLvulUsnhArD2eJaQmnEJWMn2k45yRqwqBUfkH5W5A5EBm1TMarrvN4fq_ikvuX6atl2ZyxbGVjOj86CFSimWcgzood2HASG1fLqr1ZHHQjhtYUaUcKxsLFSuXb941FixWFiFyUr09zCe30tV-Yrz-Vq2Z8f2IBaZYLJcQfUP0DYk90'
	}
]

const presetFilters = [
	{ id: 'all', label: 'All' },
	{ id: 'shirts', label: 'Shirts' },
	{ id: 'blazers', label: 'Blazers' },
	{ id: 'dresses', label: 'Dresses' }
]

const fileToBase64 = (file) =>
	new Promise((resolve, reject) => {
		if (!file) {
			resolve(null)
			return
		}
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = (error) => reject(error)
	})

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
		case 'cloud_upload':
			return (
				<svg {...common}>
					<path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.7-1.4A4 4 0 1 1 17 18" />
					<path d="M12 12v7" />
					<path d="M8.5 15.5 12 12l3.5 3.5" />
				</svg>
			)
		case 'magic_button':
			return (
				<svg {...common}>
					<path d="M2 12h6" />
					<path d="M16 12h6" />
					<path d="M12 2v6" />
					<path d="M12 16v6" />
					<path d="M7.5 7.5 16.5 16.5" />
					<path d="M16.5 7.5 7.5 16.5" />
				</svg>
			)
		case 'image':
			return (
				<svg {...common}>
					<rect x="3" y="5" width="18" height="14" rx="2" />
					<path d="m8 13 2.5-2.5 3 3L16 11l5 5" />
					<circle cx="9" cy="9" r="1" />
				</svg>
			)
		default:
			return null
	}
}

function TryOn() {
	const [userPhotoFile, setUserPhotoFile] = useState(null)
	const [garmentFile, setGarmentFile] = useState(null)
	const [garmentMode, setGarmentMode] = useState('upload')
	const [selectedPresetId, setSelectedPresetId] = useState(null)
	const [presetFilter, setPresetFilter] = useState('all')
	const [resultSrc, setResultSrc] = useState('')
	const [isGenerating, setIsGenerating] = useState(false)
	const [error, setError] = useState('')
	const [userPhotoPreview, setUserPhotoPreview] = useState('')
	const [garmentPreview, setGarmentPreview] = useState('')

	const userInputRef = useRef(null)
	const garmentInputRef = useRef(null)
	const navigate = useNavigate()
	const location = useLocation()

	const selectedPreset = useMemo(
		() => garmentPresets.find((preset) => preset.id === selectedPresetId) ?? null,
		[selectedPresetId]
	)

	const canGenerate = useMemo(() => {
		if (!userPhotoFile) return false
		if (isGenerating) return false
		if (garmentMode === 'upload') return Boolean(garmentFile)
		return Boolean(selectedPreset)
	}, [userPhotoFile, garmentFile, garmentMode, selectedPreset, isGenerating])

	const visiblePresets = useMemo(() => {
		if (presetFilter === 'all') return garmentPresets
		return garmentPresets.filter((item) => item.category === presetFilter)
	}, [presetFilter])

	useEffect(() => {
		if (!userPhotoFile) {
			setUserPhotoPreview('')
			return
		}
		const url = URL.createObjectURL(userPhotoFile)
		setUserPhotoPreview(url)
		return () => URL.revokeObjectURL(url)
	}, [userPhotoFile])

	useEffect(() => {
		if (!garmentFile) {
			setGarmentPreview('')
			return
		}
		const url = URL.createObjectURL(garmentFile)
		setGarmentPreview(url)
		return () => URL.revokeObjectURL(url)
	}, [garmentFile])

	const handlePickUserPhoto = (file) => {
		if (!file) return
		setError('')
		setResultSrc('')
		setUserPhotoFile(file)
	}

	const handlePickGarment = (file) => {
		if (!file) return
		setError('')
		setResultSrc('')
		setGarmentMode('upload')
		setSelectedPresetId(null)
		setGarmentFile(file)
	}

	const handleSelectPreset = (presetId) => {
		setError('')
		setResultSrc('')
		setGarmentMode('preset')
		setGarmentFile(null)
		setSelectedPresetId(presetId)
	}

	const handleGenerate = async () => {
		setError('')
		if (!userPhotoFile) {
			setError('Please upload your photo first.')
			return
		}

		const garmentSource = garmentMode === 'upload' ? garmentFile : selectedPreset?.image
		if (!garmentSource) {
			setError(garmentMode === 'upload' ? 'Please upload a garment image.' : 'Please select a preset garment image.')
			return
		}

		setIsGenerating(true)
		try {
			const output = await generateTryOnImage(userPhotoFile, garmentSource)
			setResultSrc(output)

			// Save to Try-On history
			try {
				const userPhotoBase64 = await fileToBase64(userPhotoFile)
				const garmentImageStr = garmentMode === 'upload' ? await fileToBase64(garmentFile) : selectedPreset?.image
				
				const newHistoryItem = {
					id: Date.now(),
					date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
					title: selectedPreset ? `${selectedPreset.label} Try-On` : 'Custom Garment Try-On',
					userImage: userPhotoBase64,
					garmentImage: garmentImageStr,
					resultImage: output
				}

				// Get existing history from local storage
				const existingHistory = JSON.parse(localStorage.getItem('tryonHistory') || '[]')
				
				// Keep only the latest 10 to avoid exceeding localStorage quota
				const updatedHistory = [newHistoryItem, ...existingHistory].slice(0, 10)
				localStorage.setItem('tryonHistory', JSON.stringify(updatedHistory))
			} catch (storageErr) {
				console.error('Failed to save to history (may exceed storage limits):', storageErr)
			}
		} catch (e) {
			const msg = e?.message || 'Failed to generate try-on image. Please try again.'
			setError(msg)
		} finally {
			setIsGenerating(false)
		}
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

					<h1 className="text-center text-lg font-black tracking-tight text-slate-900">Virtual Try-On</h1>

					<div className="justify-self-end flex items-center gap-2">
						<UserMenu />
					</div>
				</div>
			</header>

			<div className="flex flex-1">
				<aside className="w-72 border-r border-[#ece8e4] bg-[linear-gradient(180deg,#ffffff_0%,#faf8f6_100%)] px-4 py-6">
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
							<p className="mt-1 leading-relaxed">Upload a clear full-body image and pair it with high-resolution garments for the best try-on results.</p>
						</div>
					</div>
				</aside>

				<main className="flex-1 px-6 py-8">
					<div className="mx-auto w-full max-w-6xl">
						<div className="mb-6">
							<h2 className="text-4xl font-black tracking-tight text-slate-900">Create Your Look</h2>
							<p className="mt-1 text-sm text-slate-500">Upload your photo and select a garment to start the virtual try-on experience.</p>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div className="rounded-3xl border border-[#ece8e4] bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
								<div className="mb-4 flex items-center gap-2">
									<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-black text-white">1</span>
									<h2 className="text-xl font-black text-slate-900">Upload Your Photo</h2>
								</div>
								<div
									className="flex min-h-130 flex-col items-center justify-center gap-4 rounded-3xl border border-[#eee9e5] bg-[#fbf9f7] px-6 py-10 text-center transition-colors hover:border-primary/40"
									onDragOver={(e) => e.preventDefault()}
									onDrop={(e) => {
										e.preventDefault()
										const file = e.dataTransfer.files?.[0]
										if (file && file.type?.startsWith('image/')) handlePickUserPhoto(file)
									}}
								>
									<input
										ref={userInputRef}
										type="file"
										accept="image/*"
										className="hidden"
										onChange={(e) => handlePickUserPhoto(e.target.files?.[0] ?? null)}
									/>

									{userPhotoPreview ? (
										<div className="w-full overflow-hidden rounded-2xl border border-[#eee9e5] bg-white">
											<img src={userPhotoPreview} alt="User" className="h-108 w-full object-contain" />
										</div>
									) : (
										<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffe9da] text-primary">
											<Icon name="cloud_upload" className="h-7 w-7" />
										</div>
									)}

									<div className="flex flex-col gap-1">
										<p className="text-xl font-black text-slate-900">Drag and drop your photo here</p>
										<p className="text-xs text-slate-500">Supports high resolution JPG, PNG (Max 5MB)</p>
									</div>

									<div className="flex items-center gap-3">
										<button
											type="button"
											onClick={() => userInputRef.current?.click()}
											className="flex h-10 min-w-35 items-center justify-center rounded-full bg-primary px-6 text-xs font-extrabold tracking-wide text-white shadow-lg shadow-primary/30 transition-transform active:scale-95"
										>
											Browse Files
										</button>
										{userPhotoPreview ? (
											<button
												type="button"
												onClick={() => {
													setUserPhotoFile(null)
													setResultSrc('')
												}}
												className="text-xs font-bold text-slate-400 transition-colors hover:text-slate-600"
											>
											Remove
										</button>
										) : null}
									</div>

									<div className="mt-2 w-full text-left">
										<p className="mb-2 text-xs font-bold text-slate-400">Tips for best results:</p>
										<ul className="space-y-1 text-xs text-slate-600">
											<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Use a front-facing full body photo</li>
											<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Ensure neutral lighting and background</li>
											<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Wear tight-fitting clothes if possible</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="rounded-3xl border border-[#ece8e4] bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
								<div className="mb-4 flex items-center justify-between gap-3">
									<div className="flex items-center gap-2">
										<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-black text-white">2</span>
										<h2 className="text-xl font-black text-slate-900">Choose an Item</h2>
									</div>
									<div className="flex rounded-full border border-[#e9e5e1] bg-[#f8f6f4] p-1 text-xs font-bold">
										<button
											type="button"
											onClick={() => {
												setError('')
												setResultSrc('')
												setGarmentMode('upload')
												setSelectedPresetId(null)
											}}
											className={
												garmentMode === 'upload'
													? 'rounded-full bg-white px-3 py-1.5 text-primary shadow-sm'
													: 'rounded-full px-3 py-1.5 text-slate-500 hover:text-slate-700'
											}
										>
											Upload
										</button>
										<button
											type="button"
											onClick={() => {
												setError('')
												setResultSrc('')
												setGarmentMode('preset')
												setGarmentFile(null)
											}}
											className={
												garmentMode === 'preset'
													? 'rounded-full bg-white px-3 py-1.5 text-primary shadow-sm'
													: 'rounded-full px-3 py-1.5 text-slate-500 hover:text-slate-700'
											}
										>
											Presets
										</button>
									</div>
								</div>

								{garmentMode === 'upload' ? (
									<div
										className="flex min-h-130 flex-col items-center justify-center gap-4 rounded-3xl border border-[#eee9e5] bg-[#fbf9f7] px-6 py-10 text-center transition-colors hover:border-primary/40"
										onDragOver={(e) => e.preventDefault()}
										onDrop={(e) => {
											e.preventDefault()
											const file = e.dataTransfer.files?.[0]
											if (file && file.type?.startsWith('image/')) handlePickGarment(file)
										}}
									>
										<input
											ref={garmentInputRef}
											type="file"
											accept="image/*"
											className="hidden"
											onChange={(e) => handlePickGarment(e.target.files?.[0] ?? null)}
										/>

										{garmentPreview ? (
											<div className="w-full overflow-hidden rounded-2xl border border-[#eee9e5] bg-white">
												<img src={garmentPreview} alt="Garment" className="h-108 w-full object-contain" />
											</div>
										) : (
											<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffe9da] text-primary">
												<Icon name="image" className="h-7 w-7" />
											</div>
										)}

										<div className="flex flex-col gap-1">
											<p className="text-sm font-extrabold text-slate-900">Upload garment image</p>
											<p className="text-xs text-slate-500">JPG/PNG recommended</p>
										</div>

										<div className="flex items-center gap-3">
											<button
												type="button"
												onClick={() => garmentInputRef.current?.click()}
												className="flex h-10 min-w-35 items-center justify-center rounded-full bg-primary px-6 text-xs font-extrabold tracking-wide text-white shadow-lg shadow-primary/30 transition-transform active:scale-95"
											>
												Browse Files
											</button>
											{garmentPreview ? (
												<button
													type="button"
													onClick={() => {
														setGarmentFile(null)
														setResultSrc('')
													}}
													className="text-xs font-bold text-slate-400 transition-colors hover:text-slate-600"
												>
												Remove
											</button>
											) : null}
										</div>
									</div>
								) : (
									<div className="rounded-3xl border border-[#eee9e5] bg-[#fbf9f7] p-4">
										{selectedPreset ? (
											<div className="mb-4 overflow-hidden rounded-2xl border border-[#e8e2dc] bg-white">
												<img src={selectedPreset.image} alt={selectedPreset.label} className="h-108 w-full object-contain" />
											</div>
										) : null}

										<div className="mb-4 flex rounded-full border border-[#ece7e3] bg-white p-1 text-xs">
											{presetFilters.map((filter) => {
												const active = presetFilter === filter.id
												return (
													<button
														key={filter.id}
														type="button"
														onClick={() => setPresetFilter(filter.id)}
														className={
															active
																? 'rounded-full bg-[#fff2e7] px-4 py-1.5 font-extrabold text-primary'
																: 'rounded-full px-4 py-1.5 font-bold text-slate-500 hover:text-slate-700'
														}
													>
														{filter.label}
													</button>
												)
											})}
										</div>

										<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
											{visiblePresets.map((preset) => {
												const isSelected = selectedPresetId === preset.id
												return (
													<button
														key={preset.id}
														type="button"
														onClick={() => handleSelectPreset(preset.id)}
														className={
															isSelected
																? 'rounded-2xl border-2 border-primary bg-white p-3 text-left'
																: 'rounded-2xl border border-[#ebe7e3] bg-white p-3 text-left transition-colors hover:border-primary/40'
														}
														aria-pressed={isSelected}
													>
														<div className="mb-2 flex aspect-3/4 items-center justify-center overflow-hidden rounded-xl bg-[#f4f1ee] p-3">
															<img src={preset.image} alt={preset.label} className="h-full w-full object-contain" loading="lazy" />
														</div>
														<p className="truncate text-xs font-extrabold text-slate-900">{preset.label}</p>
														<p className="truncate text-[10px] text-slate-500">{preset.description}</p>
														<div
															className={
																isSelected
																	? 'mt-2 rounded-full bg-primary py-1 text-center text-[10px] font-black text-white'
																	: 'mt-2 rounded-full bg-[#eef1f5] py-1 text-center text-[10px] font-black text-slate-700'
															}
														>
															{isSelected ? 'Selected' : 'Select'}
														</div>
													</button>
												)
											})}
										</div>
										<p className="mt-4 text-center text-xs font-extrabold text-primary">View entire collection</p>
									</div>
								)}
							</div>
						</div>

							<div className="mt-8 flex flex-col items-center gap-3">
								<p className="text-center text-xs text-slate-500">AI-powered generation takes approximately 15-30 seconds.</p>
							<button
								type="button"
								onClick={handleGenerate}
								disabled={!canGenerate}
									className="group flex h-14 w-full max-w-md items-center justify-center gap-3 rounded-full bg-primary text-base font-extrabold text-white shadow-xl shadow-primary/30 transition-transform hover:brightness-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
							>
								<span className="transition-transform group-hover:rotate-12">
									<Icon name="magic_button" className="h-6 w-6" />
								</span>
								<span>{isGenerating ? 'Generating…' : 'Generate'}</span>
							</button>
							{error ? (
								<p className="max-w-xl text-center text-sm font-medium text-red-600">{error}</p>
							) : null}
						</div>

						{isGenerating || resultSrc ? (
							<div className="mt-8 rounded-3xl border border-[#ece8e4] bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
								<h2 className="mb-4 text-sm font-extrabold text-slate-900">Generated Image</h2>
								{resultSrc ? (
									<div className="overflow-hidden rounded-2xl border border-[#eee9e5] bg-[#fbf9f7]">
										<img src={resultSrc} alt="Generated try-on" className="max-h-130 w-full object-contain" />
									</div>
								) : (
									<div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-[#d6cfc7] bg-[#fbf9f7] text-sm font-medium text-slate-400">
										Generating your try-on…
									</div>
								)}
							</div>
						) : null}
					</div>
				</main>
			</div>
		</div>
	)
}

export default TryOn

