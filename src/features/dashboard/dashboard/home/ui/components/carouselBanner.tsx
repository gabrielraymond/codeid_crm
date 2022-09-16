import { Button, Carousel } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {
	height: '400px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
	backgroundImage: 'url("https://picsum.photos/id/0/5616/3744")',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};

const CarouselComponent: React.FC = () => {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};

	function SampleNextArrow(props: any) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: 'block', background: 'red' }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props: any) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: 'block', background: 'green' }}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div>
			<Carousel autoplay {...settings} arrows={true} draggable={true}>
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>
			<Button type="primary">Primary Button</Button>
		</div>
	);
};

export default CarouselComponent;
