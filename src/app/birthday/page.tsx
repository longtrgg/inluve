import Image from 'next/image';
import Banner from '@/assets/banner.png';
import Cake from '@/assets/cake.gif';

export default function Birthday() {
	return (
		<section className="flex flex-col items-center justify-center bg-purple-200 min-h-screen p-10">
			<Image src={Banner} alt="" />
			<div className="max-w-[500px] w-full text-center p-10 bg-white rounded-lg my-10">
				<div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
					<img
						src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/328265067_1181292129030399_1829062076872195802_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFGwCFzo_pXhF7u8llLCAzTfJm2urzeclV8mba6vN5yVTOP9SQYSh6-a4Pto4-Hjgf73AC_GXrSF-rBV5VtMpZy&_nc_ohc=hLahrrhwhnIQ7kNvgESPXC8&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=Ao3YT3hUWRhPh-XLEePxk4p&oh=00_AYDuBeQjrJnTIFeJV94GFQI5MLgBHfI34JT4WXws7xXS4w&oe=66F00840"
						alt=""
					/>
				</div>
				<h1 className="font-black text-3xl my-6">Long Truong</h1>
				<p className="font-semibold text-[#737887]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit
					praesentium animi magnam sequi. Veritatis exercitationem
					necessitatibus, velit aut culpa labore, iusto, odit recusandae soluta
					sit est quia molestias quis.
				</p>
			</div>
			<Image src={Cake} alt="" className="max-w-[500px] w-full" />
		</section>
	);
}
