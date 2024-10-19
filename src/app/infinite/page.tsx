'use client';

import { useEffect, useState, useCallback } from 'react';
import './style.css';

export default function AppendHtmlComponent() {
	const [htmlElements, setHtmlElements] = useState<JSX.Element[]>([]);
	const [intervalRunning, setIntervalRunning] = useState<boolean>(false);
	const [hasStarted, setHasStarted] = useState<boolean>(false);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [backgroundClass, setBackgroundClass] = useState<string>('bg-white'); // Khởi tạo background với màu trắng

	const random = useCallback((min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}, []);

	useEffect(() => {
		let counter = 0;

		if (intervalRunning) {
			const availableX = window.innerWidth - 300;
			const availableY = window.innerHeight - 60;

			const intervalId = setInterval(() => {
				if (counter < 300 && intervalRunning) {
					setHtmlElements((prevElements) => [
						...prevElements,
						<div
							key={counter}
							className="love-message"
							style={{
								left: `${random(0, availableX)}px`,
								top: `${random(0, availableY)}px`,
							}}
						>
							❤️ Cho anh xin lỗi nhé em yêu 😚
						</div>,
					]);
					counter++;
				} else {
					clearInterval(intervalId);
					setIntervalRunning(false);
				}
			}, 100);

			return () => clearInterval(intervalId);
		}
	}, [intervalRunning, random]);

	const handleStart = () => {
		setHasStarted(true);
		setIntervalRunning(true);
		setIsPlaying(true);
		setBackgroundClass('bg-gradient-to-br from-blue-200 to-blue-50'); // Đổi nền thành gradient xanh dương
	};

	return (
		<div
			className={`h-screen w-screen ${backgroundClass} relative bg-gradient-to-br from-pink-100 to-pink-50`}
		>
			<div>{htmlElements}</div>
			{!hasStarted && (
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<h1 className="text-3xl font-bold mb-5 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
						Chào em, cô gái của anh
					</h1>
					<p className="mb-5 text-xl text-gray-800 p-4 ">
						🐶 Anh có món quà này để tặng em, click vào nút để xem nhé!
					</p>
					<button
						onClick={handleStart}
						className="bg-pink-400 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-pink-500 transform hover:scale-105"
					>
						Bắt đầu
					</button>
				</div>
			)}
			{isPlaying && (
				<iframe
					width="0"
					height="0"
					style={{ display: 'none' }}
					src="https://www.youtube.com/embed/i7WNbg4GuZE?autoplay=1&mute=0&start=5"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			)}
		</div>
	);
}
