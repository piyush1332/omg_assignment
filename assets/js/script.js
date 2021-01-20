function openMobileNavMenu() {
	let header_menu_mobile = document.getElementById('header_menu_mobile');
	console.log(header_menu_mobile);
	console.log(header_menu_mobile.style.display );
	if(header_menu_mobile.style.display == 'block') {
		header_menu_mobile.style.display = 'none';
	}
	else {
		header_menu_mobile.style.display = 'block';
	}
}

function mobileMenuResizeHandling() {
	let w = window.outerWidth;
	console.log(w);
	if(w >= 916)
	{
		let header_menu_mobile = document.getElementById('header_menu_mobile');
		header_menu_mobile.style.display = 'none';
		
		let book_now_section = document.getElementById('book_now_section');
		book_now_section.style.display = 'block';
	}
	else
	{
		let book_now_section = document.getElementById('book_now_section');
		book_now_section.style.display = 'none';	
	}
	// else if(w >= 916) {
	// 	let book_now_section = document.getElementById('book_now_section');
	// 	book_now_section.style.display = 'block';
	// }
}

function openBookingForm() {
	let book_now_section = document.getElementById('book_now_section');
	book_now_section.style.display = 'block';
}

function closeBookingForm() {
	let book_now_section = document.getElementById('book_now_section');
	book_now_section.style.display = 'none';
}