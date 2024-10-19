import Banner from '@/assets/banner.png';
import Cake from '@/assets/cake.gif';
import Image from 'next/image';

import './style.css';

export default async function Birthday({ params }: { params: { id: string } }) {
	const data = await fetch(
		`http://localhost:3000/api/v1/birthday/${params.id}`
	);
	const birthday = await data.json();

	const title = (name: string) => {
		const nameArray = name.split('');
		// return <span>{name}</span>;
		return (
			<h1
				className="font-black text-4xl my-6"
				data-name="test"
				style={{ ['--name-length' as string]: nameArray.length }}
			>
				{nameArray.map((item, index) => (
					<span key={index} style={{ ['--i' as string]: index + 1 }}>
						{item}
					</span>
				))}
			</h1>
		);
	};
	return (
		<section
			className="flex flex-col items-center justify-center min-h-screen p-10"
			style={{ backgroundColor: birthday.color }}
		>
			<Image src={Banner} alt="" className="w-[700px] -mt-10" />
			<div className="max-w-[500px] w-full text-center p-10 bg-white rounded-lg mt-10">
				<div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
					<img src={birthday.image} alt="" />
				</div>
				<div style={{ color: birthday.color }}>{title(birthday.name)}</div>
				<p className="font-semibold text-[#737887]">{birthday.description}</p>
			</div>
			<Image src={Cake} alt="" className="max-w-[500px] w-full" />
		</section>
	);
}
