// Final Union Believer Quiz App ✨

import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import './App.css';
import ZkgmAnimation from './ZkgmAnimation';
// Font import for modern UI
// import '@fontsource/geist';
import { motion } from 'framer-motion';
import Badge from './Badge.jsx';

const questions = [
	{
		question: 'What can you connect to the Union Dashboard to level up?',
		options: [
			'Your PlayStation account',
			'Your X/Twitter account',
			'Your Netflix subscription',
			'Your gym membership',
		],
		answer: 'Your X/Twitter account',
	},
	{
		question: 'Who is your favorite Union Maxi?',
		options: ['Opeyemi', 'Prifti', 'Okwybobo', 'Udochukwu'],
	},
	{
		question: 'Which level had the most users in the V1 testnet?',
		options: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
		answer: 'Level 2',
	},
	{
		question: 'How many active testers were hyped for the Union Build Ceremony?',
		options: ['100K', '300K+', '500K', '1M'],
		answer: '300K+',
	},
	{
		question: 'What is your rank on the leaderboard?',
		input: true,
		leaderboardSensitive: true,
	},
	{
		question: 'Which chain below was part of the V1 testnet action?',
		options: ['XION', 'Holesky', 'Sepolia', 'Corn'],
		answer: 'Sepolia',
	},
	{
		question: 'What is your rank as a Union Yapper?',
		options: ['1–10', '10–50', '50–100', 'Not on any LB'],
	},
	{
		question: 'When did you join Union Build testnet?',
		input: true,
		yearSensitive: true,
	},
	{
		question: 'Which chain was rocking it in V1?',
		options: ['Babylon', 'Sepolia', 'XION', 'Corn'],
		answer: 'Sepolia',
	},
	{
		question: 'How many accounts were active on the Union Dashboard?',
		options: ['50K', '250K', '1M', '2M'],
		answer: '1M',
	},
	{
		question: 'How many community calls have you attended?',
		options: ['1', '2', '3', '4'],
	},
	{
		question: 'Which chain was a key player in V1 for asset transfers?',
		options: ['Holesky', 'XION', 'Sepolia', 'Babylon'],
		answer: 'Sepolia',
	},
	{
		question: 'What is Union Build?',
		options: [
			'The zk-interoperability layer powering cross-chain apps',
			'A DeFi staking protocol',
			'A meme-based NFT collection',
		],
		answer: 'The zk-interoperability layer powering cross-chain apps',
	},
	{
		question: 'How many contributors showed up for the Union Build Ceremony?',
		options: ['500', '5K+', '50K', '500K'],
		answer: '5K+',
	},
	{
		question: 'What percentage of users reached Level 6 & up in the V1 testnet?',
		options: ['1.92%', '12.39%', '24.14%', '73.04%'],
		answer: '1.92%',
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
			className="z-10 backdrop-blur-lg bg-gradient-to-b from-white/5 to-black/10 border border-white/20 p-10 rounded-3xl shadow-2xl max-w-xl text-center mx-auto"
		>
			<h1 className="text-5xl font-bold text-glow mb-6 tracking-tight">
				Welcome to the Union Believer Quiz <span className="align-middle">🔮</span>
			</h1>
			<p className="text-lg leading-relaxed mb-4 text-gray-200">
				You think you know Union? Let’s find out. <span className="align-middle">💭</span> This isn’t just any quiz —
				it’s a community check-in, a lore tap-in, and a badge of true zkGM belief.
			</p>
			<p className="text-base text-gray-400 mb-6">
				Answer <span className="font-semibold text-cyan-400">15</span> questions about Union's chain moves and community magic. Score
				high, and you’ll earn a custom badge proving you’ve been <em>building where it matters</em>.
			</p>
			<motion.p
				className="text-md text-cyan-400 italic mb-8 animate-pulse"
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
				className="px-8 py-3 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white font-semibold rounded-full shadow-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
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
			className="z-10 backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-2xl shadow-lg text-center max-w-md mx-auto relative"
		>
			<h2 className="text-3xl font-bold text-glow mb-6 tracking-tight">
				What’s your name, Believer? <span className="align-middle">✨</span>
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
				className="px-8 py-3 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white font-semibold rounded-full shadow-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 mt-8"
			>
				✅ Confirm Name
			</motion.button>
		</motion.div>
	</div>
);

export default function UnionBelieverQuiz() {
	const [step, setStep] = useState(-1);
	const [name, setName] = useState('');
	const [answers, setAnswers] = useState({});
	const [score, setScore] = useState(null);
	const [title, setTitle] = useState('');
	const [loading, setLoading] = useState(false);

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
				if (q.answer && ans === q.answer) total += 10;
				if (q.yearSensitive) {
					if (typeof ans === 'string') {
						if (ans.includes('2024')) total += 7;
						else if (ans.includes('2025')) total += 3;
					}
				}
				if (q.leaderboardSensitive) {
					const rank = parseInt(ans);
					if (!isNaN(rank)) {
						if (rank >= 1 && rank <= 20) total += 7;
						else total += 2;
					}
				}
			});
			total += Math.floor(Math.random() * 20);
			total = Math.min(100, total);
			setScore(total);
			if (total >= 91) setTitle('👑 ZK Ascendant');
			else if (total >= 76) setTitle('🧙‍♂️ Trusted Relayer');
			else if (total >= 61) setTitle('⚔️ Bridge Reformer');
			else if (total >= 46) setTitle('🧢 Testnet Tourist');
			else if (total >= 31) setTitle('🪞 Re-org Witness');
			else setTitle('💀 Fallen Bridge Maxi');
			setLoading(false);
		}, 1500);
	};

	const handleImage = () => {
		const badge = document.getElementById('result-badge');
		if (!badge) return;
		html2canvas(badge).then((canvas) => {
			const link = document.createElement('a');
			link.download = 'union_believer_badge.png';
			link.href = canvas.toDataURL();
			link.click();
		});
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
						style={{ width: 60, height: 60, borderRadius: '50%', border: '4px solid #0ff', borderTop: '4px solid #23272f', marginBottom: 24 }}
					/>
					<div className="text-cyan-400 text-lg font-semibold mt-2">Generating your card...</div>
				</motion.div>
			) : score !== null ? (
				<motion.div
					initial={{ opacity: 0, scale: 0.97 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="flex flex-col items-center"
				>
					<div className="mb-6">
						<Badge title={title} score={score} name={name} />
					</div>
					<div className="space-y-3 flex flex-col items-center">
						<button onClick={handleImage} className="btn bg-cyan-500/80 hover:bg-cyan-400/80 text-white">
							⬇️ Download Card
						</button>
						<button
							onClick={() => window.location.reload()}
							className="btn bg-gray-700/80 hover:bg-gray-600/80 text-white"
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
					className="quiz-screen card-animated z-10 backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-lg max-w-xl mx-auto relative mt-8"
				>
					<h2 className="text-xl mb-4 text-glow font-bold">
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
					<div className="flex justify-between mt-6">
						<button
							onClick={() => setStep(step - 1)}
							disabled={step === 0}
							className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-xl"
						>
							Previous
						</button>
						{step < questions.length - 1 ? (
							<button onClick={() => setStep(step + 1)} className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-xl">
								Next
							</button>
						) : (
							<button
								onClick={evaluateScore}
								className="px-6 py-3 bg-cyan-500/80 backdrop-blur-lg border border-cyan-400/40 rounded-full text-white hover:bg-cyan-500 transition-all duration-300 shadow-md hover:shadow-xl"
							>
								Submit
							</button>
						)}
					</div>
				</motion.div>
			)}
		</div>
	);
}
