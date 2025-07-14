// Final Union Believer Quiz App ✨

import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import './App.css';
import ZkgmAnimation from './ZkgmAnimation';
// Font import for modern UI
// import '@fontsource/geist';
import { motion } from 'framer-motion';
import Badge from './Badge.jsx';
import * as ReactDOM from 'react-dom/client';

const questions = [
	{
		question: "What is Union’s primary goal in the blockchain ecosystem?",
		options: [
			"Creating new layer-1 chains",
			"Enabling secure cross-chain messaging and asset movement",
			"Launching decentralized exchanges",
			"Building on top of Ethereum only",
		],
		answer: "Enabling secure cross-chain messaging and asset movement",
	},
	{
		question: "Union combines zero‑knowledge cryptography with what other key innovation to enable secure cross‑chain transfers?",
		options: [
			"Proof of Stake",
			"Data availability sampling",
			"Consensus verification",
			"Transaction batching",
		],
		answer: "Consensus verification",
	},
	{
		question: "Name two types of assets or items that Union supports transferring across blockchains.",
		options: [
			"Tokens and databases",
			"Files and smart contracts",
			"Fungible tokens and NFTs",
			"Accounts and usernames",
		],
		answer: "Fungible tokens and NFTs",
	},
	{
		question: "What term does Union use to describe its approach of using interchangeable components like ‘Prove’, ‘Verify’, and ‘Integrate’?",
		options: [
			"Proof-of-Everything",
			"Modular architecture",
			"Union Fabric",
			"Smart Routing",
		],
		answer: "Modular architecture",
	},
	{
		question: "Union extends the gold‑standard Inter‑Blockchain Communication Protocol with what kind of verification?",
		options: [
			"Layer-3 verification",
			"Zero-knowledge light client verification",
			"Trusted oracle verification",
			"Multi-party signature verification",
		],
		answer: "Zero-knowledge light client verification",
	},
];

const WelcomePage = ({ onContinue }) => (
	<div className="app-container relative">
		<div className="zkgm-bg">
			<ZkgmAnimation />
		</div>
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}
			className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_#0ff2,_transparent)] opacity-20 pointer-events-none z-0 animate-pulse"
		/>
		<motion.div
			initial={{ scale: 0.96, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.7, delay: 0.2, ease: 'anticipate' }}
			className="z-10 backdrop-blur-lg bg-gradient-to-b from-white/5 to-black/10 border border-white/20 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl max-w-sm md:max-w-xl text-center mx-auto w-full"
		>
			<div className="mb-4 md:mb-6">
				<h1 className="text-2xl md:text-4xl font-extrabold text-cyan-400 mb-2 tracking-tight drop-shadow-lg" style={{ letterSpacing: '0.01em' }}>
					Union Believer Quiz Tool
				</h1>
			</div>
			<h1 className="text-3xl md:text-5xl font-bold text-glow mb-4 md:mb-6 tracking-tight">
				Welcome to the Union Believer Quiz <span className="align-middle">🔮</span>
			</h1>
			<p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-gray-200">
				You think you know Union? Let's find out. <span className="align-middle">💭</span> This isn't just any quiz —
				it's a community check-in, a lore tap-in, and a badge of true zkGM belief.
			</p>
			<p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
				Answer <span className="font-semibold text-cyan-400">15</span> questions about Union's chain moves and community magic. Score
				high, and you'll earn a custom badge proving you've been <em>building where it matters</em>.
			</p>
			<motion.p
				className="text-sm md:text-md text-cyan-400 italic mb-6 md:mb-8 animate-pulse"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7 }}
			>
				Only real ones get past Level 6 <span className="align-middle">🔓</span>
			</motion.p>
			<motion.button
				whileHover={{ scale: 1.07 }}
				whileTap={{ scale: 0.97 }}
				onClick={onContinue}
				className="px-6 md:px-8 py-3 bg-gradient-to-r from-cyan-500/80 to-gray-600/80 text-white font-semibold rounded-full shadow-lg hover:from-cyan-400 hover:to-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 text-sm md:text-base"
			>
				🚀 Test My Knowledge
			</motion.button>
		</motion.div>
	</div>
);

const NameInputPage = ({ name, setName, onConfirm }) => (
	<div className="app-container relative">
		<ZkgmAnimation />
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}
			className="absolute inset-0 z-0 bg-black/10 backdrop-blur-sm"
		/>
		<motion.div
			initial={{ scale: 0.96, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.7, delay: 0.2, ease: 'anticipate' }}
			className="z-10 backdrop-blur-lg bg-white/10 border border-white/20 p-6 md:p-10 rounded-2xl shadow-lg text-center max-w-sm md:max-w-md mx-auto relative w-full"
		>
			<h2 className="text-2xl md:text-3xl font-bold text-glow mb-4 md:mb-6 tracking-tight">
				What's your name, Believer? <span className="align-middle">✨</span>
			</h2>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Type your name..."
				className="name-input bg-white/80 text-gray-900 placeholder-gray-400 border border-gray-200 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
			/>
			<motion.button
				whileHover={{ scale: 1.07 }}
				whileTap={{ scale: 0.97 }}
				onClick={() => name.trim().length > 0 && onConfirm()}
				className="px-6 md:px-8 py-3 bg-gradient-to-r from-cyan-500/80 to-gray-600/80 text-white font-semibold rounded-full shadow-lg hover:from-cyan-400 hover:to-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 mt-6 md:mt-8 text-sm md:text-base"
			>
				✅ Proceed
			</motion.button>
		</motion.div>
	</div>
);

const NotBelieverModal = ({ onExit }) => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
	>
		<motion.div
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ type: "spring", damping: 25, stiffness: 300 }}
			className="bg-gradient-to-b from-red-900/90 to-red-800/90 border-2 border-red-500 p-8 rounded-2xl shadow-2xl max-w-md mx-4 text-center"
		>
			<div className="text-6xl mb-4">😡🚨</div>
			<h2 className="text-2xl font-bold text-red-200 mb-4">YOU ARE NOT A UNION BELIEVER</h2>
			<p className="text-red-100 mb-6 leading-relaxed">
				Your score is below 30. This is an outrage! You clearly don't know Union well enough to even be here.
			</p>
			<p className="text-red-200 mb-6 font-semibold">
				Please exit this site immediately. No badge, no glory, no second chances until you study up!
			</p>
			<p className="text-red-300 mb-8 italic">
				Go and do something with your life. Union is not for the faint of heart.
			</p>
			<button
				onClick={onExit}
				className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-200"
			>
				EXIT SITE NOW
			</button>
		</motion.div>
	</motion.div>
);

export default function UnionBelieverQuiz() {
	const [step, setStep] = useState(-1);
	const [name, setName] = useState('');
	const [answers, setAnswers] = useState({});
	const [score, setScore] = useState(null);
	const [title, setTitle] = useState('');
	const [loading, setLoading] = useState(false);
	const [downloadNode, setDownloadNode] = useState(null);
	const [showNotBelieverModal, setShowNotBelieverModal] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [step]);

	const handleAnswer = (value) => {
		setAnswers({ ...answers, [step]: value });
	};

	const evaluateScore = () => {
		if (Object.keys(answers).length !== questions.length) {
			alert('Please answer all the questions.');
			return;
		}
		setLoading(true);
		setTimeout(() => {
			let total = 0;
			questions.forEach((q, idx) => {
				const ans = answers[idx];
				if (!ans) return;
				if (q.answer && ans === q.answer) total += 20;
			});
			setScore(total);

			// Show error modal for scores below 30
			if (total < 30) {
				setShowNotBelieverModal(true);
				setLoading(false);
				return;
			}

			if (total === 100) setTitle('🟣 True Goblin');
			else if (total >= 80) setTitle('🏆 Union Champion');
			else if (total >= 60) setTitle('🛠️ Union Builder');
			else if (total >= 40) setTitle('🧭 Union Explorer');
			else setTitle('🌱 Union Initiate');
			setLoading(false);
		}, 1000);
	};

	const handleImage = () => {
		// Render a hidden Badge for download
		const temp = document.createElement('div');
		temp.style.position = 'fixed';
		temp.style.left = '-9999px';
		document.body.appendChild(temp);
		import('./Badge.jsx').then(({ default: Badge }) => {
			const reactRoot = ReactDOM.createRoot(temp);
			reactRoot.render(<Badge title={title} score={score} name={name} isLive={false} />);
			setDownloadNode(temp.firstChild); // Store the node for removal
			setTimeout(() => {
				html2canvas(temp.firstChild).then((canvas) => {
					const link = document.createElement('a');
					link.download = 'union_believer_badge.png';
					link.href = canvas.toDataURL();
					link.click();
					reactRoot.unmount();
					document.body.removeChild(temp);
				});
			}, 300); // Wait for font and images to load
		});
	};

	const handleShare = async () => {
		const badge = document.getElementById('result-badge');
		if (!badge) return;
		const canvas = await html2canvas(badge);
		canvas.toBlob(async (blob) => {
			if (navigator.canShare && navigator.canShare({ files: [new File([blob], 'union_believer_badge.png', { type: blob.type })] })) {
				const file = new File([blob], 'union_believer_badge.png', { type: blob.type });
				await navigator.share({
					files: [file],
					title: 'Union Believer Badge',
					text: 'Check out my Union Believer Badge!'
				});
			} else {
				// fallback to download
				const link = document.createElement('a');
				link.download = 'union_believer_badge.png';
				link.href = canvas.toDataURL();
				link.click();
			}
		});
	};

	const handleExitSite = () => {
		window.location.href = 'https://google.com';
	};

	return (
		<div className="app-container relative">
			{/* Make the floating zkGM persistent across steps */}
			<div className="zkgm-bg">
				<ZkgmAnimation />
			</div>

			{/* Conditional rendering of screens below */}
			{loading ? (
				<motion.div
					className="flex flex-col items-center justify-center min-h-[60vh]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						animate={{ rotate: 360 }}
						transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
						style={{ width: 60, height: 60, borderRadius: '50%', border: '4px solid #0ff', borderTop: '4px solid #181a1b', marginBottom: 24 }}
					/>
					<div className="text-cyan-400 text-lg font-semibold mt-2">Generating your card...</div>
				</motion.div>
			) : score !== null ? (
				<motion.div
					initial={{ opacity: 0, scale: 0.97 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="flex flex-col items-center w-full max-w-sm md:max-w-md mx-auto"
				>
					<div className="mb-4 text-center">
						<div className="text-xl md:text-2xl font-bold mb-2 text-cyan-400">Hello, {name}!</div>
						<div className="text-base md:text-lg text-white mb-1">Your score was <span className="font-bold">{score}/100</span> and you are now:</div>
						<div className="text-lg md:text-xl font-bold text-glow mb-2">{title}</div>
						<div className="text-sm md:text-base text-gray-300">Spread the word and keep believing in Union!</div>
					</div>
					<div className="mb-6 w-full">
						<Badge title={title} score={score} name={name} isLive={true} />
					</div>
					<div className="flex flex-col md:flex-row gap-3 justify-center w-full max-w-xs">
						<button onClick={handleImage} className="btn bg-cyan-500/80 hover:bg-cyan-400/80 text-white flex-1 min-w-[140px] text-sm">
							⬇️ Download Card
						</button>
						<button onClick={handleShare} className="btn bg-gray-600/80 hover:bg-gray-500/80 text-white flex-1 min-w-[140px] text-sm">
							📤 Share Card
						</button>
						<button
							onClick={() => window.location.reload()}
							className="btn bg-gray-700/80 hover:bg-gray-600/80 text-white flex-1 min-w-[140px] text-sm"
						>
							🔁 Restart Quiz
						</button>
					</div>
				</motion.div>
			) : step === -2 ? (
				<WelcomePage onContinue={() => setStep(-1)} />
			) : step === -1 ? (
				<NameInputPage name={name} setName={setName} onConfirm={() => setStep(0)} />
			) : (
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="quiz-screen card-animated z-10 backdrop-blur-md bg-white/10 border border-white/20 p-4 md:p-8 rounded-2xl shadow-lg max-w-sm md:max-w-xl mx-auto relative mt-4 md:mt-8 w-full"
				>
					<h2 className="text-lg md:text-xl mb-4 text-glow font-bold">
						{`Question ${step + 1} of ${questions.length}`}
					</h2>
					<p className="question-text">
						{questions[step].question}
					</p>
					{questions[step].options ? (
						<div className="options-stack">
							{questions[step].options.map((opt, i) => (
								<label
									key={i}
									htmlFor={`q${step}_opt${i}`}
									className={`option-label ${answers[step] === opt ? 'ring-2 ring-cyan-400/80 bg-cyan-400/5' : ''}`}
								>
									<input
										type="radio"
										id={`q${step}_opt${i}`}
										name={`q${step}`}
										value={opt}
										checked={answers[step] === opt}
										onChange={() => handleAnswer(opt)}
									/>
									<span className={`custom-radio${answers[step] === opt ? ' custom-radio-checked' : ''}`}>
										<span className="custom-radio-dot" />
									</span>
									<span className="font-medium">{opt}</span>
								</label>
							))}
						</div>
					) : (
						<textarea
							aria-label="Answer input"
							className="answer-box"
							value={answers[step] || ''}
							onChange={(e) => handleAnswer(e.target.value)}
							placeholder="Type your answer..."
							rows={3}
							style={{ minHeight: 60, maxHeight: 120, resize: 'vertical' }}
						/>
					)}
					<div className="flex flex-col md:flex-row justify-between gap-3 mt-6">
						<button
							onClick={() => setStep(step - 1)}
							disabled={step === 0}
							className="px-4 md:px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-xl text-sm"
						>
							Previous
						</button>
						{step < questions.length - 1 ? (
							<button onClick={() => setStep(step + 1)} className="px-4 md:px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-xl text-sm">
								Next
							</button>
						) : (
							<button
								onClick={evaluateScore}
								className="px-4 md:px-6 py-3 bg-cyan-500/80 backdrop-blur-lg border border-cyan-400/40 rounded-full text-white hover:bg-cyan-500 transition-all duration-300 shadow-md hover:shadow-xl text-sm"
							>
								Submit
							</button>
						)}
					</div>
				</motion.div>
			)}
			{showNotBelieverModal && (
				<NotBelieverModal onExit={handleExitSite} />
			)}
		</div>
	);
}
