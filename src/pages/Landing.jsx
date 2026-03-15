import { useNavigate } from 'react-router-dom'
import { UserMenu } from '../components/UserMenu'

const heroImage =
	'https://lh3.googleusercontent.com/aida-public/AB6AXuChB_NbmyvB9KPB0P78YRmOtx0IMtdYI04Kpu-nXBf50O1weLgjHukMRXaPFsPZCscICxgQ6tTSNjLFII1E6hFbyIs4fStz6skUUaGEqBJNxl40zsV9P8qc4ZQ2xuYns1bcJQrYarnC2NaGWPXulZGVKP6UyUpNfug3P2tK_7KyPq92P6zyO-M4tTLwk6usFtjPKNz5o0B_L363RYdygRFVMC_V1FyFL9ykRh3iK33bXLVYMCZpDVo1zvDlbqk8U77GeqV8UPXGj4G2'

const communityAvatars = [
	{
		alt: 'TryNex community member 1',
		src: 'https://i.pravatar.cc/64?img=32'
	},
	{
		alt: 'TryNex community member 2',
		src: 'https://i.pravatar.cc/64?img=12'
	},
	{
		alt: 'TryNex community member 3',
		src: 'https://i.pravatar.cc/64?img=47'
	}
]

const livePreviewAvatar = {
	alt: 'Live preview model',
	src: 'https://i.pravatar.cc/64?img=5'
}

const steps = [
	{
		icon: 'upload_file',
		title: 'Upload Your Photo',
		description: 'Take a clear full-body photo of yourself in neutral lighting for the best results.'
	},
	{
		icon: 'checkroom',
		title: 'Select an Outfit',
		description: 'Browse our curated collection of high-end fashion and designer pieces.',
		highlight: true
	},
	{
		icon: 'auto_awesome',
		title: 'See the Magic',
		description: 'Our AI renders the clothes onto your body instantly with realistic physics and textures.'
	}
]

const features = [
	{
		icon: 'photo_camera',
		title: 'Photographic Realism',
		description: 'High-resolution rendering that shows every fabric detail, from silk sheen to denim texture.'
	},
	{
		icon: 'bolt',
		title: 'Instant Results',
		description: 'No waiting. Our proprietary cloud infrastructure ensures you see your new look in seconds.'
	},
	{
		icon: 'straighten',
		title: 'Accurate Sizing',
		description: 'Advanced 3D mapping ensures the fit looks natural on your unique body shape and posture.'
	}
]

const trustedBrands = ['Urban Thread', 'Velvet Lane', 'Mono Atelier', 'Northline Studio', 'Aster & Oak']

const testimonials = [
	{
		name: 'Riya Kapoor',
		role: 'Fashion Creator',
		quote: 'TryNex made outfit previews feel real enough that I now plan every campaign look inside it first.',
		rating: '4.9/5'
	},
	{
		name: 'Arjun Mehta',
		role: 'E-commerce Lead',
		quote: 'Our return rate dropped after adding TryNex previews. Customers decide faster and with more confidence.',
		rating: '5.0/5'
	},
	{
		name: 'Naina Rao',
		role: 'Personal Stylist',
		quote: 'The fit confidence and texture quality are outstanding. It saves hours during remote styling sessions.',
		rating: '4.8/5'
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
		case 'upload_file':
			return (
				<svg {...common}>
					<path d="M12 3v10" />
					<path d="M8 7l4-4 4 4" />
					<path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
				</svg>
			)
		case 'checkroom':
			return (
				<svg {...common}>
					<path d="M8 6a4 4 0 0 1 8 0" />
					<path d="M6 6h12l-1.5 14H7.5L6 6z" />
					<path d="M9 10v2" />
					<path d="M15 10v2" />
				</svg>
			)
		case 'auto_awesome':
			return (
				<svg {...common}>
					<path d="M12 2l.9 3.6L16.5 6.5 12.9 7.4 12 11l-.9-3.6L7.5 6.5l3.6-.9L12 2z" />
					<path d="M19 12l.6 2.4L22 15l-2.4.6L19 18l-.6-2.4L16 15l2.4-.6L19 12z" />
					<path d="M5 13l.6 2.4L8 16l-2.4.6L5 19l-.6-2.4L2 16l2.4-.6L5 13z" />
				</svg>
			)
		case 'auto_fix_high':
			return (
				<svg {...common}>
					<path d="M5 19l4.5-1.2L19 8.3a2 2 0 0 0 0-2.8l-.5-.5a2 2 0 0 0-2.8 0L6.2 14.5 5 19z" />
					<path d="M13 6l5 5" />
					<path d="M12 20h7" />
				</svg>
			)
		case 'photo_camera':
			return (
				<svg {...common}>
					<path d="M7 7l2-3h6l2 3" />
					<rect x="3" y="7" width="18" height="14" rx="2" />
					<path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
				</svg>
			)
		case 'bolt':
			return (
				<svg {...common}>
					<path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
				</svg>
			)
		case 'straighten':
			return (
				<svg {...common}>
					<rect x="3" y="7" width="18" height="10" rx="2" />
					<path d="M7 7v10" />
					<path d="M11 7v10" />
					<path d="M15 7v10" />
					<path d="M19 7v10" />
				</svg>
			)
		case 'language':
			return (
				<svg {...common}>
					<circle cx="12" cy="12" r="10" />
					<path d="M2 12h20" />
					<path d="M12 2a14 14 0 0 1 0 20" />
					<path d="M12 2a14 14 0 0 0 0 20" />
				</svg>
			)
		case 'share':
			return (
				<svg {...common}>
					<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
					<path d="M12 16V3" />
					<path d="M7 8l5-5 5 5" />
				</svg>
			)
		default:
			return null
	}
}

function Landing() {
	const navigate = useNavigate()

	return (
		<div className="relative min-h-screen overflow-x-hidden bg-[#f5f2ee] font-display text-slate-900">
			<header className="sticky top-0 z-50 border-b border-[#e8e2dc] bg-[#f5f2ee]/88 backdrop-blur-md anim-fade-in">
				<div className="mx-auto flex h-19 w-full max-w-300 items-center justify-between px-6 lg:px-10">
					<a
						href="#home"
						aria-label="Go to home"
						className="inline-flex items-center gap-2.5 rounded-full border border-[#ebe5df] bg-white px-3 py-1.5 shadow-[0_6px_20px_-16px_rgba(15,23,42,0.5)]"
					>
						<div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
							<Icon name="checkroom" className="block h-4 w-4" />
						</div>
						<span className="text-[22px] font-semibold tracking-tight">TryNex</span>
					</a>

					<nav className="hidden items-center gap-1 rounded-full border border-[#ebe5df] bg-white p-1 md:flex">
						<a className="rounded-full bg-[#fff2e7] px-4 py-2 text-[13px] font-semibold text-primary" href="#home">
							Home
						</a>
						<a className="rounded-full px-4 py-2 text-[13px] font-medium text-slate-700 transition-colors hover:text-primary" href="#how-it-works">
							How It Works
						</a>
						<a className="rounded-full px-4 py-2 text-[13px] font-medium text-slate-700 transition-colors hover:text-primary" href="#features">
							Features
						</a>
						<a className="rounded-full px-4 py-2 text-[13px] font-medium text-slate-700 transition-colors hover:text-primary" href="#pricing">
							Pricing
						</a>
					</nav>

					<div className="flex items-center gap-4">
						<button
							type="button"
							onClick={() => navigate('/tryon')}
							className="hidden md:block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(255,106,0,0.85)] transition hover:bg-[#ea6100]"
						>
							Try It Now
						</button>
						<UserMenu />
					</div>
				</div>
			</header>

			<main>
				<section id="home" className="relative mx-auto w-full max-w-300 px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
					<div className="relative overflow-hidden rounded-[34px] border border-[#e7ded4] bg-[linear-gradient(115deg,#fbeedf_0%,#f8f4ef_45%,#f0eeeb_100%)] px-6 py-10 sm:px-8 lg:px-12 lg:py-12 anim-fade-up">
						<div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
						<div className="pointer-events-none absolute -right-20 bottom-10 h-44 w-44 rounded-full bg-slate-300/20 blur-3xl" />

						<div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
							<div className="max-w-140">
								<div className="mb-7 inline-flex rounded-full border border-primary/20 bg-[#fff2e7] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary anim-fade-up anim-delay-1">
									Next-Gen Fashion AI
								</div>
								<h1 className="text-[44px] font-black leading-[0.95] tracking-[-0.03em] text-[#0f172a] sm:text-[58px] lg:text-[72px] anim-fade-up anim-delay-2">
									AI Virtual{' '}
									<span className="bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">Try-On</span>
								</h1>
								<p className="mt-5 max-w-127.5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 anim-fade-up anim-delay-3">
									Experience the future of fashion. See how clothes look on you with photographic realism before
									hitting the buy button.
								</p>
								<div className="mt-8 flex flex-col gap-4 sm:flex-row anim-fade-up anim-delay-4">
									<button
										type="button"
										onClick={() => navigate('/tryon')}
										className="h-14 rounded-full bg-primary px-9 text-base font-semibold text-white shadow-[0_18px_34px_-18px_rgba(255,106,0,0.95)] transition hover:scale-[1.02]"
									>
										Try It Now
									</button>
									<button
										type="button"
										className="h-14 rounded-full border border-[#d8cec3] bg-white px-9 text-base font-medium text-slate-900 shadow-[0_10px_20px_-18px_rgba(15,23,42,0.8)] transition hover:bg-[#faf6f2]"
									>
										View Demo
									</button>
								</div>

								<div className="mt-8 inline-flex items-center gap-4 rounded-full border border-[#ebe4dc] bg-white px-4 py-2 text-sm text-slate-500 shadow-[0_10px_22px_-20px_rgba(15,23,42,0.9)] anim-fade-up anim-delay-4">
									<div className="flex -space-x-2">
										{communityAvatars.map((avatar) => (
											<img
												key={avatar.alt}
												src={avatar.src}
												alt={avatar.alt}
												loading="lazy"
												className="h-8 w-8 rounded-full border-2 border-white object-cover"
											/>
										))}
									</div>
									<span>Joined by 10,000+ fashion enthusiasts</span>
								</div>

								<div className="mt-6 grid max-w-125 grid-cols-2 gap-3 anim-fade-up anim-delay-4">
									<div className="rounded-2xl border border-[#e7dfd6] bg-white/80 px-4 py-3 shadow-[0_10px_20px_-20px_rgba(15,23,42,0.8)] backdrop-blur">
										<p className="text-lg font-black text-[#0f172a]">98%</p>
										<p className="text-xs font-medium text-slate-500">Fit confidence</p>
									</div>
									<div className="rounded-2xl border border-[#e7dfd6] bg-white/80 px-4 py-3 shadow-[0_10px_20px_-20px_rgba(15,23,42,0.8)] backdrop-blur">
										<p className="text-lg font-black text-[#0f172a]">15s</p>
										<p className="text-xs font-medium text-slate-500">Avg render time</p>
									</div>
								</div>
							</div>

							<div className="relative aspect-5/4 w-full overflow-hidden rounded-[30px] border border-black/15 bg-[#3d2b1f] shadow-[0_34px_64px_-30px_rgba(15,23,42,0.58)] anim-fade-up anim-delay-3 anim-float">
								<div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
									<span className="h-2 w-2 rounded-full bg-emerald-400" /> Live Rendering
								</div>
								<div className="absolute right-5 top-5 z-10 rounded-full border border-white/40 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">15 sec avg</div>
								<div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
								<div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/35" />
								<div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/92 px-4 py-3 shadow-[0_16px_24px_-20px_rgba(15,23,42,0.85)] backdrop-blur">
									<div className="flex items-center justify-between gap-3">
										<div className="flex items-center gap-3">
											<img
												src={livePreviewAvatar.src}
												alt={livePreviewAvatar.alt}
												loading="lazy"
												className="h-8 w-8 shrink-0 rounded-full border border-white/70 object-cover"
											/>
											<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
												<Icon name="auto_fix_high" className="block h-5 w-5" />
											</div>
											<div>
												<p className="text-[11px] font-semibold leading-none text-primary">Live Preview</p>
												<p className="mt-1 text-sm font-medium text-slate-900">Summer Silk Dress</p>
											</div>
										</div>
										<span className="text-xs font-semibold text-slate-900">98% Match</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="border-t border-slate-200/50 bg-[#f5f2ee] pb-16 pt-10">
					<div className="mx-auto w-full max-w-300 px-6 lg:px-10">
						<p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 anim-fade-in">
							Trusted by modern fashion teams
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-8 lg:gap-x-20">
							{trustedBrands.map((brand, index) => (
								<div
									key={brand}
									className="text-lg font-bold uppercase tracking-widest text-slate-400 transition-colors duration-300 hover:text-slate-800 anim-fade-up"
									style={{ animationDelay: `${120 * index}ms` }}
								>
									{brand}
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="how-it-works" className="bg-white py-24 lg:py-32">
					<div className="mx-auto w-full max-w-300 px-6 lg:px-10">
						<div className="mx-auto max-w-3xl text-center anim-fade-up">
							<span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">Process</span>
							<h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
								How It Works
							</h2>
							<p className="mt-5 text-lg text-slate-500">
								Get your virtual fitting in three simple steps, powered by advanced AI mapping.
							</p>
						</div>

						<div className="mt-20 grid gap-10 lg:grid-cols-3 lg:gap-12">
							{steps.map((step, index) => (
								<div
									key={step.title}
									className="group relative flex flex-col items-center text-center anim-fade-up"
									style={{ animationDelay: `${180 * (index + 1)}ms` }}
								>
									<div
										className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1 ${
											step.highlight
												? 'bg-primary text-white shadow-primary/25'
												: 'bg-slate-50 text-slate-600 border border-slate-100'
										}`}
									>
										<Icon name={step.icon} className="block h-8 w-8" />
									</div>
									
									{index < steps.length - 1 ? (
										<div className="absolute left-1/2 top-10 z-0 hidden w-full border-t-[1.5px] border-dashed border-slate-200 lg:block" />
									) : null}
									
									<h3 className="mt-8 text-xl font-bold text-slate-900">{step.title}</h3>
									<p className="mt-3 max-w-sm text-base leading-relaxed text-slate-500">
										{step.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="features" className="bg-[#faf8f6] py-24 lg:py-32">
					<div className="mx-auto w-full max-w-300 px-6 lg:px-10">
						<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between anim-fade-up">
							<div className="max-w-2xl">
								<span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">Capabilities</span>
								<h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
									Experience the Future
								</h2>
							</div>
							<p className="max-w-md text-base leading-relaxed text-slate-500 md:text-right">
								Our cutting-edge AI technology brings the dressing room experience directly to your screen with
								unmatched precision and real-time generation.
							</p>
						</div>

						<div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{features.map((feature, index) => (
								<div
									key={feature.title}
									className="group rounded-4xl bg-white p-8 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-16px_rgba(0,0,0,0.1)] hover:ring-primary/20 anim-fade-up"
									style={{ animationDelay: `${180 * (index + 1)}ms` }}
								>
									<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff5eb] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
										<Icon name={feature.icon} className="block h-6 w-6" />
									</div>
									<h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">{feature.title}</h3>
									<p className="mt-4 text-base leading-relaxed text-slate-500">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="bg-white py-24 lg:py-32">
					<div className="mx-auto w-full max-w-300 px-6 lg:px-10">
						<div className="mb-16 max-w-2xl anim-fade-up">
							<span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">Reviews</span>
							<h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
								What Users Are Saying
							</h2>
						</div>

						<div className="grid gap-6 md:grid-cols-3">
							{testimonials.map((item, index) => (
								<article
									key={item.name}
									className="flex flex-col justify-between rounded-4xl bg-[#faf8f6] p-8 ring-1 ring-slate-100 transition-colors hover:bg-[#f5f2ee] anim-fade-up"
									style={{ animationDelay: `${160 * (index + 1)}ms` }}
								>
									<div>
										<div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-semibold text-slate-900 shadow-sm ring-1 ring-slate-100">
											<span className="text-amber-400">★</span>
											<span className="text-sm">{item.rating}</span>
										</div>
										<p className="text-lg leading-relaxed text-slate-700">&quot;{item.quote}&quot;</p>
									</div>
									<div className="mt-8 flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-500">
											{item.name.charAt(0)}
										</div>
										<div>
											<p className="font-bold text-slate-900">{item.name}</p>
											<p className="text-sm font-medium text-slate-500">{item.role}</p>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				<section id="pricing" className="bg-white pb-24 lg:pb-32">
					<div className="mx-auto w-full max-w-300 px-6 lg:px-10">
						<div className="relative overflow-hidden rounded-[40px] bg-slate-900 px-8 py-24 text-center shadow-2xl">
							<div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/30 blur-[100px]" />
							<div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
							<div className="relative z-10 mx-auto max-w-3xl">
								<h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
									Ready to transform your shopping experience?
								</h2>
								<p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
									Join thousands of brands and shoppers using TryNex to make smarter, more confident style choices today.
								</p>
								<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
									<button
										type="button"
										onClick={() => navigate('/tryon')}
										className="h-14 w-full rounded-full bg-primary px-10 text-base font-bold text-white shadow-[0_0_40px_-10px_rgba(255,106,0,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_60px_-15px_rgba(255,106,0,0.8)] sm:w-auto"
									>
										Get Started Free
									</button>
									<button
										type="button"
										className="h-14 w-full rounded-full bg-white/10 px-10 text-base font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:w-auto"
									>
										Talk to Sales
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-slate-950 py-16 text-slate-400">
				<div className="mx-auto w-full max-w-300 px-6 lg:px-10">
					<div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
						<div className="md:col-span-2 lg:col-span-2">
							<a href="#home" aria-label="Go to home" className="inline-flex items-center gap-2.5">
								<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white">
									<Icon name="checkroom" className="block h-4 w-4" />
								</div>
								<span className="text-2xl font-bold tracking-tight text-white">TryNex</span>
							</a>
							<p className="mt-6 max-w-xs text-sm leading-relaxed">
								The world&apos;s leading AI virtual try-on technology for retail and personal styling.
							</p>
							<div className="mt-8 flex gap-4">
								<a
									href="#"
									aria-label="Visit language settings"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-primary hover:text-white"
								>
									<Icon name="language" className="block h-5 w-5" />
								</a>
								<a
									href="#"
									aria-label="Share this page"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-primary hover:text-white"
								>
									<Icon name="share" className="block h-5 w-5" />
								</a>
							</div>
						</div>

						<div>
							<h4 className="text-sm font-bold uppercase tracking-wider text-white">Product</h4>
							<ul className="mt-6 space-y-4 text-sm">
								<li>
									<a href="#" className="transition-colors hover:text-primary">Try-On AI</a>
								</li>
								<li>
									<a href="#" className="transition-colors hover:text-primary">API for Retail</a>
								</li>
								<li>
									<a href="#pricing" className="transition-colors hover:text-primary">Pricing</a>
								</li>
								<li>
									<a href="#" className="transition-colors hover:text-primary">Success Stories</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
							<ul className="mt-6 space-y-4 text-sm">
								<li>
									<a href="#" className="transition-colors hover:text-primary">About Us</a>
								</li>
								<li>
									<a href="#" className="transition-colors hover:text-primary">Careers</a>
								</li>
								<li>
									<a href="#" className="transition-colors hover:text-primary">Blog</a>
								</li>
								<li>
									<a href="#" className="transition-colors hover:text-primary">Contact</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-sm font-bold uppercase tracking-wider text-white">Legal</h4>
							<ul className="mt-6 space-y-4 text-sm">
								<li>
									<a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
								</li>
								<li>
									<a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
								</li>
								<li>
									<a href="#" className="transition-colors hover:text-primary">Cookie Policy</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
						<p className="text-sm">© 2026 TryNex AI Inc. All rights reserved.</p>
						<p className="mt-4 text-sm sm:mt-0">Designed for the future of fashion.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Landing
