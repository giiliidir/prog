import Swiper from "swiper";
import {Pagination, Navigation, Autoplay} from "swiper/modules";

const init = () => {
	if (!document.querySelector('.slider-1')) {
		return;
	}

	const slider = new Swiper('.slider-1',{
		modules: [Autoplay],
		// init: false,
		autoplay: {
			delay: 1000,
		},
	});

	document.querySelector('[data-slider]').addEventListener('click', () => {
		// slider.init();
		// document.querySelectorAll('[data-bg="1"]').forEach((item) => {
		// 	item.remove();
		// });
	});
}
export default {
	init,
};
