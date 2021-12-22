document.addEventListener('DOMContentLoaded', (event) => {
	let elements = document.getElementsByClassName("el");
	let asteriks = document.getElementsByClassName("el2");
	let spans = document.getElementsByClassName("mod");
	let spanInfo = document.getElementsByClassName("mod2");
	let gridWrapper = document.getElementById("grid");
	let infoBox = document.getElementById("info-box");
	let closes = [document.getElementById("close-icon"), document.getElementById("overlay")];
	let symb = document.getElementById("symb");
	let name = document.getElementById("name");
	let type = document.getElementById("type");
	let number = document.getElementById("number");
	let s_s = document.getElementById("s-s-v");
	let a_m = document.getElementById("a-m-v");
	let e_c = document.getElementById("e-c-v");
	let o_s = document.getElementById("o-s-v");
	let eg = document.getElementById("e-v");
	let a_r = document.getElementById("a-r-v");
	let i_e = document.getElementById("i-e-v");
	let m_p = document.getElementById("m-p-v");
	let b_p = document.getElementById("b-p-v");
	let d = document.getElementById("d-v");
	let y_d = document.getElementById("y-d-v");
	let elIntro = document.getElementById("el-intro");
	let html = document.querySelector("html");
	let body = document.querySelector("body");

	// Fixing View Problems
	symb.style.fontSize = 0.047109375 * screen.width + "px";
	name.style.fontSize = 0.027578125 * screen.width + "px";
	type.style.fontSize = 0.015625 * screen.width + "px";
	gridWrapper.style.gridGap = 0.0048828125 * screen.width + "px";

	for (let element of asteriks) {
		element.style.width = 0.0390625 * screen.width + "px";
		element.style.height = 0.0390625 * screen.width + "px";
		element.style.fontSize = 0.015625 * screen.width + "px";
		element.style.margin = 0.0048828125 * screen.width + "px";
	}
	for (let element of elements) {
		element.style.width = 0.0390625 * screen.width + "px";
		element.style.height = 0.0390625 * screen.width + "px";
		element.style.fontSize = 0.015625 * screen.width + "px";
		element.style.margin = 0.0048828125 * screen.width + "px";
	}
	for (let span of spans) {
		span.style.fontSize = 0.015625 * screen.width + "px";
	}
	for (let span of spanInfo) {
		span.style.fontSize = 0.025625 * screen.width + "px";
	}
  	window.addEventListener("resize", (event)=> {
		for (let element of elements) {
			element.style.width = screen.width * 0.0390625 + "px";
			element.style.height = screen.width * 0.0390625 + "px";
			element.style.fontSize = screen.width * 0.015625 + "px";
			element.style.margin = 0.0048828125 * screen.width + "px";
		}
		for (let span of spans) {
			span.style.fontSize = 0.015625 * screen.width + "px";
		}
		for (let element of asteriks) {
			element.style.width = 0.0390625 * screen.width + "px";
			element.style.height = 0.0390625 * screen.width + "px";
			element.style.fontSize = 0.015625 * screen.width + "px";
			element.style.margin = 0.0048828125 * screen.width + "px";
		}
		for (let span of spanInfo) {
			span.style.fontSize = 0.025625 * screen.width + "px";
		}
		symb.style.fontSize = 0.047109375 * screen.width + "px";
		name.style.fontSize = 0.027578125 * screen.width + "px";
		type.style.fontSize = 0.015625 * screen.width + "px";
		gridWrapper.style.gridGap = 0.0048828125 * screen.width + "px";
	});
	
	// Information Array
	let infoArray = [{number: 1, symb: "H", name: "Hydrogen", type: "لافلز", s_s: "غاز", a_m: "1.0080 u", e_c: "1s<sup>1</sup>", o_s: "+1, -1", eg: "2.2", a_r: "120 pm", i_e: "13.598 eV", m_p: "13.81 K", b_p: "20.28 K", d: "0.00008988 g/cm<sup>3</sup>", y_d: "1766"},
				{number: 2, symb: "He", name: "Helium", type: "غاز نبيل", s_s: "غاز", a_m: "4.00260 u", e_c: "1s<sup>2</sup>", o_s: "0", eg: "none", a_r: "140 pm", i_e: "24.587 eV", m_p: "0.95 K", b_p: "4.22 K", d: "0.0001785 g/cm<sup>3</sup>", y_d: "1868"},
				{number: 3, symb: "Li", name: "Lithium", type: "فلز قلوى", s_s: "صلب", a_m: "7.0 u", e_c: "[He]2s<sup>1</sup>", o_s: "+1", eg: "0.98", a_r: "182 pm", i_e: "5.392 eV", m_p: "453.65 K", b_p: "1615 K", d: "0.534 g/cm<sup>3</sup>", y_d: "1817"},
				{number: 4, symb: "Be", name: "Beryllium", type: "فلز قلوى أرضى", s_s: "صلب", a_m: "9.012183 u", e_c: "[He]2s<sup>2</sup>", o_s: "+2", eg: "1.57", a_r: "153 pm", i_e: "9.323 eV", m_p: "1560 K", b_p: "2744 K", d: "1.85 g/cm<sup>3</sup>", y_d: "1798"},
				{number: 5, symb: "B", name: "Boron", type: "شبه فلز", s_s: "صلب", a_m: "10.81 u", e_c: "[He]2s<sup>2</sup>2p<sup>1</sup>", o_s: "+3", eg: "2.04", a_r: "192 pm", i_e: "8.298 eV", m_p: "2348 K", b_p: "4273 K", d: "2.37 g/cm<sup>3</sup>", y_d: "1808"},
				{number: 6, symb: "C", name: "Carbon", type: "لافلز", s_s: "صلب", a_m: "12.011 u", e_c: "[He]2s<sup>2</sup>2p<sup>2</sup>", o_s: "+4, +2, -4", eg: "2.55", a_r: "170 pm", i_e: "11.260 eV", m_p: "3823 K", b_p: "4098 K", d: "2.2670 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 7, symb: "N", name: "Nitrogen", type: "لافلز", s_s: "غاز", a_m: "14.007 u", e_c: "[He]2s<sup>2</sup>2p<sup>3</sup>", o_s: "+5, +4, +3, +2, +1, -1, -2, -3", eg: "3.04", a_r: "155 pm", i_e: "14.534 eV", m_p: "63.15 K", b_p: "77.36 K", d: "0.0012506 g/cm<sup>3</sup>", y_d: "1772"},
				{number: 8, symb: "O", name: "Oxygen", type: "لافلز", s_s: "غاز", a_m: "15.999 u", e_c: "[He]2s<sup>2</sup>2p<sup>4</sup>", o_s: "-2", eg: "3.44", a_r: "152 pm", i_e: "13.618 eV", m_p: "54.36 K", b_p: "90.2 K", d: "0.001429 g/cm<sup>3</sup>", y_d: "1774"},
				{number: 9, symb: "F", name: "Fluorine", type: "لافلز، هالوجين", s_s: "غاز", a_m: "18.99840316 u", e_c: "[He]2s<sup>2</sup>2p<sup>5</sup>", o_s: "-1", eg: "3.98", a_r: "135 pm", i_e: "17.423 eV", m_p: "53.53 K", b_p: "85.03 K", d: "0.001696 g/cm<sup>3</sup>", y_d: "1670"},
				{number: 10, symb: "Ne", name: "Neon", type: "غاز نبيل", s_s: "غاز", a_m: "20.180 u", e_c: "[He]2s<sup>2</sup>2p<sup>6</sup>", o_s: "0", eg: "none", a_r: "154 pm", i_e: "21.565 eV", m_p: "24.56 K", b_p: "27.07 K", d: "0.0008999 g/cm<sup>3</sup>", y_d: "1898"},
				{number: 11, symb: "Na", name: "Sodium", type: "فلز قلوى", s_s: "صلب", a_m: "22.989769 u", e_c: "[Ne]3s<sup>1</sup>", o_s: "+1", eg: "0.93", a_r: "227 pm", i_e: "5.139 eV", m_p: "370.95 K", b_p: "1156 K", d: "0.97 g/cm<sup>3</sup>", y_d: "1807"},
				{number: 12, symb: "Mg", name: "Magnesium", type: "فلز قلوى أرضى", s_s: "صلب", a_m: "24.305 u", e_c: "[Ne]3s<sup>2</sup>", o_s: "+2", eg: "1.31", a_r: "173 pm", i_e: "7.646 eV", m_p: "923 K", b_p: "1363 K", d: "1.74 g/cm<sup>3</sup>", y_d: "1808"},
				{number: 13, symb: "Al", name: "Aluminum", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب", a_m: "26.981538 u", e_c: "[Ne]3s<sup>2</sup>3p<sup>1</sup>", o_s: "+3", eg: "1.61", a_r: "184 pm", i_e: "5.986 eV", m_p: "933.437 K", b_p: "2792 K", d: "2.70 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 14, symb: "Si", name: "Silicon", type: "شبه فلز", s_s: "صلب", a_m: "28.085 u", e_c: "[Ne]3s<sup>2</sup>3p<sup>2</sup>", o_s: "+4, +2, -4", eg: "1.9", a_r: "210 pm", i_e: "8.152 eV", m_p: "1687 K", b_p: "3538 K", d: "2.3296 g/cm<sup>3</sup>", y_d: "1854"},
				{number: 15, symb: "P", name: "Phosphorus", type: "لافلز", s_s: "صلب", a_m: "30.97376200 u", e_c: "[Ne]3s<sup>2</sup>3p<sup>3</sup>", o_s: "+5, +3, -3", eg: "2.19", a_r: "180 pm", i_e: "10.487 eV", m_p: "317.3 K", b_p: "553.65 K", d: "1.82 g/cm<sup>3</sup>", y_d: "1669"},
				{number: 16, symb: "S", name: "Sulfur", type: "لافلز", s_s: "صلب", a_m: "32.07 u", e_c: "[Ne]3s<sup>2</sup>3p<sup>4</sup>", o_s: "+6, +4, -2", eg: "2.58", a_r: "180 pm", i_e: "10.360 eV", m_p: "388.36 K", b_p: "717.75 K", d: "2.067 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 17, symb: "Cl", name: "Chlorine", type: "لافلز، هالوجين", s_s: "غاز", a_m: "35.45 u", e_c: "[Ne]3s<sup>2</sup>3p<sup>5</sup>", o_s: "+7, +5, +1, -1", eg: "3.16", a_r: "175 pm", i_e: "12.968 eV", m_p: "171.65 K", b_p: "239.11 K", d: "0.003214 g/cm<sup>3</sup>", y_d: "1774"},
				{number: 18, symb: "Ar", name: "Argon", type: "غاز نبيل", s_s: "غاز", a_m: "39.9 u", e_c: "[Ne]3s<sup>2</sup>3p<sup>6</sup>", o_s: "0", eg: "none", a_r: "188 pm", i_e: "15.760 eV", m_p: "83.8 K", b_p: "87.3 K", d: "0.0017837 g/cm<sup>3</sup>", y_d: "1894"},
				{number: 19, symb: "K", name: "Potassium", type: "فلز قلوى", s_s: "صلب", a_m: "39.0983 u", e_c: "[Ar]4s<sup>1</sup>", o_s: "+1", eg: "0.82", a_r: "275 pm", i_e: "4.341 eV", m_p: "336.53 K", b_p: "1032 K", d: "0.89 g/cm<sup>3</sup>", y_d: "1807"},
				{number: 20, symb: "Ca", name: "Calcium", type: "فلز قلوى أرضى", s_s: "صلب", a_m: "40.08 u", e_c: "[Ar]4s<sup>2</sup>", o_s: "+2", eg: "1", a_r: "231 pm", i_e: "6.113 eV", m_p: "1115 K", b_p: "1757 K", d: "1.54 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 21, symb: "Sc", name: "Scandium", type: "فلز انتقالى", s_s: "صلب", a_m: "44.95591 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>1</sup>", o_s: "+3", eg: "1.36", a_r: "211 pm", i_e: "6.561 eV", m_p: "1814 K", b_p: "3109 K", d: "2.99 g/cm<sup>3</sup>", y_d: "1879"},
				{number: 22, symb: "Ti", name: "Titanium", type: "فلز انتقالى", s_s: "صلب", a_m: "47.867 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>2</sup>", o_s: "+4, +3, +2", eg: "1.54", a_r: "187 pm", i_e: "6.828 eV", m_p: "1941 K", b_p: "3560 K", d: "4.5 g/cm<sup>3</sup>", y_d: "1791"},
				{number: 23, symb: "V", name: "Vanadium", type: "فلز انتقالى", s_s: "صلب", a_m: "50.9415 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>3</sup>", o_s: "+5, +4, +3, +2", eg: "1.63", a_r: "179 pm", i_e: "6.746 eV", m_p: "2183 K", b_p: "3680 K", d: "6.0 g/cm<sup>3</sup>", y_d: "1801"},
				{number: 24, symb: "Cr", name: "Chromium", type: "فلز انتقالى", s_s: "صلب", a_m: "51.996 u", e_c: "[Ar]3d<sup>5</sup>4s<sup>1</sup>", o_s: "+6, +3, +2", eg: "1.66", a_r: "189 pm", i_e: "6.767 eV", m_p: "2180 K", b_p: "2944 K", d: "7.15 g/cm<sup>3</sup>", y_d: "1797"},
				{number: 25, symb: "Mn", name: "Manganese", type: "فلز انتقالى", s_s: "صلب", a_m: "54.93804 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>5</sup>", o_s: "+7, +4, +3, +2", eg: "1.55", a_r: "197 pm", i_e: "7.434 eV", m_p: "1519 K", b_p: "2334 K", d: "7.3 g/cm<sup>3</sup>", y_d: "1774"},
				{number: 26, symb: "Fe", name: "Iron", type: "فلز انتقالى", s_s: "صلب", a_m: "55.84 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>6</sup>", o_s: "+3, +2", eg: "1.83", a_r: "194 pm", i_e: "7.902 eV", m_p: "1811 K", b_p: "3134 K", d: "7.874 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 27, symb: "Co", name: "Cobalt", type: "فلز انتقالى", s_s: "صلب", a_m: "58.93319 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>7</sup>", o_s: "+3, +2", eg: "1.88", a_r: "192 pm", i_e: "7.881 eV", m_p: "1768 K", b_p: "3200 K", d: "8.86 g/cm<sup>3</sup>", y_d: "1735"},
				{number: 28, symb: "Ni", name: "Nickel", type: "فلز انتقالى", s_s: "صلب", a_m: "58.693 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>8</sup>", o_s: "+3, +2", eg: "1.91", a_r: "163 pm", i_e: "7.640 eV", m_p: "1728 K", b_p: "3186 K", d: "8.192 g/cm<sup>3</sup>", y_d: "1751"},
				{number: 29, symb: "Cu", name: "Copper", type: "فلز انتقالى", s_s: "صلب", a_m: "63.55 u", e_c: "[Ar]4s<sup>1</sup>3d<sup>10</sup>", o_s: "+2, +1", eg: "1.9", a_r: "140 pm", i_e: "7.726 eV", m_p: "1357.77 K", b_p: "2835 K", d: "8.933 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 30, symb: "Zn", name: "Zinc", type: "فلز انتقالى", s_s: "صلب", a_m: "65.4 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>10</sup>", o_s: "+2", eg: "1.65", a_r: "139 pm", i_e: "9.394 eV", m_p: "692.68 K", b_p: "1180 K", d: "7.134 g/cm<sup>3</sup>", y_d: "1746"},
				{number: 31, symb: "Ga", name: "Gallium", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب", a_m: "69.723 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>1</sup>", o_s: "+3", eg: "1.81", a_r: "187 pm", i_e: "5.999 eV", m_p: "302.91 K", b_p: "2477 K", d: "5.91 g/cm<sup>3</sup>", y_d: "1875"},
				{number: 32, symb: "Ge", name: "Germanium", type: "شبه فلز", s_s: "صلب", a_m: "72.63 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>2</sup>", o_s: "+4, +2", eg: "2.01", a_r: "211 pm", i_e: "7.9 eV", m_p: "1211.4 K", b_p: "3106 K", d: "5.323 g/cm<sup>3</sup>", y_d: "1886"},
				{number: 33, symb: "As", name: "Arsenic", type: "شبه فلز", s_s: "صلب", a_m: "74.92159 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>3</sup>", o_s: "+5, +3, -3", eg: "2.18", a_r: "185 pm", i_e: "9.815 eV", m_p: "1090 K", b_p: "887 K", d: "5.776 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 34, symb: "Se", name: "Selenium", type: "لا فلز", s_s: "صلب", a_m: "78.97 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>4</sup>", o_s: "+6, +4, -2", eg: "2.55", a_r: "190 pm", i_e: "9.752 eV", m_p: "493.65 K", b_p: "958 K", d: "4.809 g/cm<sup>3</sup>", y_d: "1817"},
				{number: 35, symb: "Br", name: "Bromine", type: "لا فلز", s_s: "سائل", a_m: "79.90 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>5</sup>", o_s: "+5, +1, -1", eg: "2.96", a_r: "183 pm", i_e: "11.814 eV", m_p: "265.95 K", b_p: "331.95 K", d: " g/cm<sup>3</sup>", y_d: "1826"},
				{number: 36, symb: "Kr", name: "Krypton", type: "غاز نبيل", s_s: "غاز", a_m: "83.80 u", e_c: "[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>", o_s: "0", eg: "3", a_r: "202 pm", i_e: "14.0 eV", m_p: "115.79 K", b_p: "119.93 K", d: "0.003733 g/cm<sup>3</sup>", y_d: "1898"},
				{number: 37, symb: "Rb", name: "Rubidium", type: "فلز قلوى", s_s: "صلب", a_m: "85.468 u", e_c: "[Kr]5s<sup>1</sup>", o_s: "+1", eg: "0.82", a_r: "303 pm", i_e: "4.177 eV", m_p: "312.46 K", b_p: "961 K", d: "1.53 g/cm<sup>3</sup>", y_d: "1861"},
				{number: 38, symb: "Sr", name: "Strontium", type: "فلز قلوى أرضى", s_s: "صلب", a_m: "87.62 u", e_c: "[Kr]5s<sup>2</sup>", o_s: "+2", eg: "0.95", a_r: "249 pm", i_e: "5.695 eV", m_p: "1050 K", b_p: "1655 K", d: "2.64 g/cm<sup>3</sup>", y_d: "1790"},
				{number: 39, symb: "Y", name: "Yttrium", type: "فلز انتقالى", s_s: "صلب", a_m: "88.90584 u", e_c: "[Kr]5s<sup>2</sup>3d<sup>1</sup>", o_s: "+3", eg: "1.22", a_r: "219 pm", i_e: "6.217 eV", m_p: "1795 K", b_p: "3618 K", d: "4.47 g/cm<sup>3</sup>", y_d: "1794"},
				{number: 40, symb: "Zr", name: "Zirconium", type: "فلز انتقالى", s_s: "صلب", a_m: "91.22 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>2</sup>", o_s: "+4", eg: "1.33", a_r: "186 pm", i_e: "6.634 eV", m_p: "2128 K", b_p: "4682 K", d: "6.52 g/cm<sup>3</sup>", y_d: "1789"},
				{number: 41, symb: "Nb", name: "Niobium", type: "فلز انتقالى", s_s: "صلب", a_m: "92.90637 u", e_c: "[Kr]5s<sup>1</sup>4d<sup>4</sup>", o_s: "+5, +3", eg: "1.6", a_r: "207 pm", i_e: "6.759 eV", m_p: "2750 K", b_p: "5017 K", d: "8.57 g/cm<sup>3</sup>", y_d: "1801"},
				{number: 42, symb: "Mo", name: "Molybdenum", type: "فلز انتقالى", s_s: "صلب", a_m: "95.95 u", e_c: "[Kr]5s<sup>1</sup>4d<sup>5</sup>", o_s: "+6", eg: "2.16", a_r: "209 pm", i_e: "7.092 eV", m_p: "2896 K", b_p: "4912 K", d: "10.2 g/cm<sup>3</sup>", y_d: "1778"},
				{number: 43, symb: "Tc", name: "Technetium", type: "فلز انتقالى", s_s: "صلب", a_m: "96.90636 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>5</sup>", o_s: "+7, +6, +4", eg: "1.9", a_r: "209 pm", i_e: "7.28 eV", m_p: "2430 K", b_p: "4538 K", d: "11 g/cm<sup>3</sup>", y_d: "1937"},
				{number: 44, symb: "Ru", name: "Ruthenium", type: "فلز انتقالى", s_s: "صلب", a_m: "101.1 u", e_c: "[Kr]5s<sup>1</sup>4d<sup>7</sup>", o_s: "+3", eg: "2.2", a_r: "207 pm", i_e: "7.361 eV", m_p: "2607 K", b_p: "4423 K", d: "12.1 g/cm<sup>3</sup>", y_d: "1827"},
				{number: 45, symb: "Rh", name: "Rhodium", type: "فلز انتقالى", s_s: "صلب", a_m: "102.9055 u", e_c: "[Kr]5s<sup>1</sup>3d<sup>8</sup>", o_s: "+3", eg: "2.28", a_r: "195 pm", i_e: "7.459 eV", m_p: "2237 K", b_p: "3968 K", d: "12.4 g/cm<sup>3</sup>", y_d: "1803"},
				{number: 46, symb: "Pd", name: "Palladium", type: "فلز انتقالى", s_s: "صلب", a_m: "106.42 u", e_c: "[Kr]4d<sup>10</sup>", o_s: "+3, +2", eg: "2.2", a_r: "202 pm", i_e: "8.337 eV", m_p: "1828.05 K", b_p: "3236 K", d: "12.0 g/cm<sup>3</sup>", y_d: "1803"},
				{number: 47, symb: "Ag", name: "Silver", type: "فلز انتقالى", s_s: "صلب", a_m: "107.868 u", e_c: "[Kr]5s<sup>1</sup>4d<sup>10</sup>", o_s: "+1", eg: "1.93", a_r: "172 pm", i_e: "7.576 eV", m_p: "1234.93 K", b_p: "2435 K", d: "10.501 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 48, symb: "Cd", name: "Cadmium", type: "فلز انتقالى", s_s: "صلب", a_m: "112.41 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>10</sup>", o_s: "+2", eg: "1.69", a_r: "158 pm", i_e: "8.994 eV", m_p: "594.22 K", b_p: "1040 K", d: "8.69 g/cm<sup>3</sup>", y_d: "1817"},
				{number: 49, symb: "In", name: "Indium", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب", a_m: "114.818 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>10</sup>5p<sup>1</sup>", o_s: "+3", eg: "1.78", a_r: "193 pm", i_e: "5.786 eV", m_p: "429.75 K", b_p: "2345 K", d: "7.31 g/cm<sup>3</sup>", y_d: "1863"},
				{number: 50, symb: "Sn", name: "Tin", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب", a_m: "118.71 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>10</sup>5[<sup>2</sup>", o_s: "+4, +2", eg: "1.96", a_r: "217 pm", i_e: "7.344 eV", m_p: "505.08 K", b_p: "2875 K", d: "7.287 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 51, symb: "Sb", name: "Antimony", type: "شبه فلز", s_s: "صلب", a_m: "121.76 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>10</sup>5p<sup>3</sup>", o_s: "+5, +3, -3", eg: "2.05", a_r: "206 pm", i_e: "8.64 eV", m_p: "903.78 K", b_p: "1860 K", d: "6.685 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 52, symb: "Te", name: "Tellurium", type: "شبه فلز", s_s: "صلب", a_m: "127.6 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>10</sup>5p<sup>4</sup>", o_s: "+6, +4, -2", eg: "2.1", a_r: "206 pm", i_e: "9.010 eV", m_p: "722.66 K", b_p: "1261 K", d: "6.232 g/cm<sup>3</sup>", y_d: "1782"},
				{number: 53, symb: "I", name: "Iodine", type: "لا فلز", s_s: "صلب", a_m: "126.9045 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>10</sup>5p<sup>5</sup>", o_s: "+7, +5, +1, -1", eg: "2.66", a_r: "198 pm", i_e: "10.451 eV", m_p: "386.85 K", b_p: "457.55 K", d: "4.93 g/cm<sup>3</sup>", y_d: "1811"},
				{number: 54, symb: "Xe", name: "Xenon", type: "غاز نبيل", s_s: "غاز", a_m: "131.29 u", e_c: "[Kr]5s<sup>2</sup>4d<sup>10</sup>5p<sup>6</sup>", o_s: "0", eg: "2.6", a_r: "216 pm", i_e: "12.13 eV", m_p: "161.36 K", b_p: "165.03 K", d: "0.005887 g/cm<sup>3</sup>", y_d: "1898"},
				{number: 55, symb: "Cs", name: "Cesium", type: "فلز قلوى", s_s: "صلب", a_m: "132.9054520 u", e_c: "[Xe]6s<sup>1</sup>", o_s: "+1", eg: "0.79", a_r: "343 pm", i_e: "3.894 eV", m_p: "301.59 K", b_p: "944 K", d: "1.93 g/cm<sup>3</sup>", y_d: "1860"},
				{number: 56, symb: "Ba", name: "Barium", type: "فلز قلوى أرضى", s_s: "صلب", a_m: "137.33 u", e_c: "[Xe]6s<sup>2</sup>", o_s: "+2", eg: "0.89", a_r: "268 pm", i_e: "5.212 eV", m_p: "1000 K", b_p: "2170 K", d: "3.62 g/cm<sup>3</sup>", y_d: "1808"},
				{number: 57, symb: "La", name: "Lanthanum", type: "لانثانيد", s_s: "صلب", a_m: "138.9055 u", e_c: "[Xe]5s<sup>2</sup>5d<sup>1</sup>", o_s: "+3", eg: "1.1", a_r: "240 pm", i_e: "5.577 eV", m_p: "1191 K", b_p: "3737 K", d: "6.15 g/cm<sup>3</sup>", y_d: "1838"},
				{number: 58, symb: "Ce", name: "Cerium", type: "لانثانيد", s_s: "صلب", a_m: "140.116 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>1</sup>5d<sup>1</sup>", o_s: "+4, +3", eg: "1.12", a_r: "235 pm", i_e: "5.539 eV", m_p: "1071 K", b_p: "3697 K", d: "6.77 g/cm<sup>3</sup>", y_d: "1803"},
				{number: 59, symb: "Pr", name: "Praseodymium", type: "لانثانيد", s_s: "صلب", a_m: "140.90766 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>3</sup>", o_s: "+3", eg: "1.13", a_r: "239 pm", i_e: "5.464 eV", m_p: "1204 K", b_p: "3793 K", d: "6.77 g/cm<sup>3</sup>", y_d: "1885"},
				{number: 60, symb: "Nd", name: "Neodymium", type: "لانثانيد", s_s: "صلب", a_m: "144.24 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>4</sup>", o_s: "+3", eg: "1.14", a_r: "229 pm", i_e: "5.525 eV", m_p: "1294 K", b_p: "3347 K", d: "7.01 g/cm<sup>3</sup>", y_d: "1885"},
				{number: 61, symb: "Pm", name: "Promethium", type: "لانثانيد", s_s: "صلب", a_m: "144.91276 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>5</sup>", o_s: "+3", eg: "none", a_r: "236 pm", i_e: "5.55 eV", m_p: "1315 K", b_p: "3273 K", d: "7.26 g/cm<sup>3</sup>", y_d: "1945"},
				{number: 62, symb: "Sm", name: "Samarium", type: "لانثانيد", s_s: "صلب", a_m: "150.4 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>6</sup>", o_s: "+3, +2", eg: "1.17", a_r: "229 pm", i_e: "5.644 eV", m_p: "1347 K", b_p: "2067 K", d: "7.52 g/cm<sup>3</sup>", y_d: "1879"},
				{number: 63, symb: "Eu", name: "Europium", type: "لانثانيد", s_s: "صلب", a_m: "151.964 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>7</sup>", o_s: "+3, +2", eg: "none", a_r: "233 pm", i_e: "5.670 eV", m_p: "1095 K", b_p: "1802 K", d: "5.24 g/cm<sup>3</sup>", y_d: "1901"},
				{number: 64, symb: "Gd", name: "Gadolinium", type: "لانثانيد", s_s: "صلب", a_m: "157.2 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>7</sup>5d<sup>1</sup>", o_s: "+3", eg: "1.2", a_r: "237 pm", i_e: "6.15 eV", m_p: "1586 K", b_p: "3546 K", d: "1880 g/cm<sup>3</sup>", y_d: ""},
				{number: 65, symb: "Tb", name: "Terbium", type: "لانثانيد", s_s: "صلب", a_m: "158.92535 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>9</sup>", o_s: "+3", eg: "none", a_r: "221 pm", i_e: "5.864 eV", m_p: "1629 K", b_p: "3503 K", d: "8.23 g/cm<sup>3</sup>", y_d: "1834"},
				{number: 66, symb: "Dy", name: "Dysprosium", type: "لانثانيد", s_s: "صلب", a_m: "162.5 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>10</sup>", o_s: "+3", eg: "1.22", a_r: "229 pm", i_e: "5.939 eV", m_p: "1685 K", b_p: "2840 K", d: "8.55 g/cm<sup>3</sup>", y_d: "1886"},
				{number: 67, symb: "Ho", name: "Holmium", type: "لانثانيد", s_s: "صلب", a_m: "164.93033 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>11</sup>", o_s: "+3", eg: "1.23", a_r: "216 pm", i_e: "6.022 eV", m_p: "1747 K", b_p: "2973 K", d: "8.8 g/cm<sup>3</sup>", y_d: "1878"},
				{number: 68, symb: "Er", name: "Erbium", type: "لانثانيد", s_s: "صلب", a_m: "167.26 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>12</sup>", o_s: "+3", eg: "1.24", a_r: "235 pm", i_e: "6.108 eV", m_p: "1802 K", b_p: "3141 K", d: "9.07 g/cm<sup>3</sup>", y_d: "1843"},
				{number: 69, symb: "Tm", name: "Thulium", type: "لانثانيد", s_s: "صلب", a_m: "168.93422 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>13</sup>", o_s: "+3", eg: "1.25", a_r: "227 pm", i_e: "6.184 eV", m_p: "1818 K", b_p: "2223 K", d: "9.32 g/cm<sup>3</sup>", y_d: "1879"},
				{number: 70, symb: "Yb", name: "Ytterbium", type: "لانثانيد", s_s: "صلب", a_m: "173.05 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>", o_s: "+3, +2", eg: "none", a_r: "242 pm", i_e: "6.254 eV", m_p: "1092 K", b_p: "1469 K", d: "6.9 g/cm<sup>3</sup>", y_d: "1878"},
				{number: 71, symb: "Lu", name: "Lutetium", type: "لانثانيد", s_s: "صلب", a_m: "174.9668 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>1</sup>", o_s: "+3", eg: "1.27", a_r: "221 pm", i_e: "5.426 eV", m_p: "1936 K", b_p: "3675 K", d: "9.84 g/cm<sup>3</sup>", y_d: "1907"},
				{number: 72, symb: "Hf", name: "Hafnium", type: "فلز انتقالى", s_s: "صلب", a_m: "178.49 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>2</sup>", o_s: "+4", eg: "1.3", a_r: "212 pm", i_e: "6.825 eV", m_p: "2506 K", b_p: "4876 K", d: "13.3 g/cm<sup>3</sup>", y_d: "1923"},
				{number: 73, symb: "Ta", name: "Tantalum", type: "فلز انتقالى", s_s: "صلب", a_m: "180.9479 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>3</sup>", o_s: "+5", eg: "1.5", a_r: "217 pm", i_e: "7.89 eV", m_p: "3290 K", b_p: "5731 K", d: "16.4 g/cm<sup>3</sup>", y_d: "1802"},
				{number: 74, symb: "W", name: "Tungsten", type: "فلز انتقالى", s_s: "صلب", a_m: "183.84 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>4</sup>", o_s: "+6", eg: "2.36", a_r: "210 pm", i_e: "7.98 eV", m_p: "3695 K", b_p: "5828 K", d: "19.3 g/cm<sup>3</sup>", y_d: "1783"},
				{number: 75, symb: "Re", name: "Rhenium", type: "فلز انتقالى", s_s: "صلب", a_m: "186.207 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>5</sup>", o_s: "+7, +6, +4", eg: "1.9", a_r: "217 pm", i_e: "7.88 eV", m_p: "3459 K", b_p: "5869 K", d: "20.8 g/cm<sup>3</sup>", y_d: "1925"},
				{number: 76, symb: "Os", name: "Osmium", type: "فلز انتقالى", s_s: "صلب", a_m: "190.2 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>6</sup>", o_s: "+4, +3", eg: "2.2", a_r: "216 pm", i_e: "8.7 eV", m_p: "3306 K", b_p: "5285 K", d: "22.57 g/cm<sup>3</sup>", y_d: "1803"},
				{number: 77, symb: "Ir", name: "Iridium", type: "فلز انتقالى", s_s: "صلب", a_m: "192.22 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>7</sup>", o_s: "+4, +3", eg: "2.2", a_r: "202 pm", i_e: "9.1 eV", m_p: "2719 K", b_p: "4701 K", d: "22.42 g/cm<sup>3</sup>", y_d: "1803"},
				{number: 78, symb: "Pt", name: "Platinum", type: "فلز انتقالى", s_s: "صلب", a_m: "195.08 u", e_c: "[Xe]6s<sup>1</sup>4f<sup>14</sup>5d<sup>9</sup>", o_s: "+4, +2", eg: "2.28", a_r: "209 pm", i_e: "9 eV", m_p: "2041.55 K", b_p: "4098 K", d: "21.46 g/cm<sup>3</sup>", y_d: "1735"},
				{number: 79, symb: "Au", name: "Gold", type: "فلز انتقالى", s_s: "صلب", a_m: "196.96657 u", e_c: "[Xe]6s<sup>1</sup>4f<sup>14</sup>5d<sup>10</sup>", o_s: "+3, +1", eg: "2.54", a_r: "166 pm", i_e: "9.226 eV", m_p: "1337.33 K", b_p: "3129 K", d: "19.282 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 80, symb: "Hg", name: "Mercury", type: "فلز انتقالى", s_s: "سائل", a_m: "200.59 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>10</sup>", o_s: "+2, +1", eg: "2", a_r: "209 pm", i_e: "10.438 eV", m_p: "234.32 K", b_p: "629.88 K", d: "13.5336 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 81, symb: "Tl", name: "Thallium", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب", a_m: "204.383 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>10</sup>6p<sup>1</sup>", o_s: "+3, +1", eg: "1.62", a_r: "196 pm", i_e: "6.108 eV", m_p: "577 K", b_p: "1746 K", d: "11.8 g/cm<sup>3</sup>", y_d: "1861"},
				{number: 82, symb: "Pb", name: "Lead", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب", a_m: "207 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>10</sup>6p<sup>2</sup>", o_s: "+4, +2", eg: "2.33", a_r: "202 pm", i_e: "7.417 eV", m_p: "600.61 K", b_p: "2022 K", d: "11.342 g/cm<sup>3</sup>", y_d: "Ancient"},
				{number: 83, symb: "Bi", name: "Bismuth", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب", a_m: "208.9804 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>10</sup>6p<sup>3</sup>", o_s: "+5, +3", eg: "2.02", a_r: "207 pm", i_e: "7.289 eV", m_p: "544.55 K", b_p: "1837 K", d: "9.807 g/cm<sup>3</sup>", y_d: "1753"},
				{number: 84, symb: "Po", name: "Polonium", type: "شبه فلز", s_s: "صلب", a_m: "208.98243 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>10</sup>6p<sup>4</sup>", o_s: "+4, +2", eg: "2", a_r: "197 pm", i_e: "8.417 eV", m_p: "527 K", b_p: "1235 K", d: "9.32 g/cm<sup>3</sup>", y_d: "1898"},
				{number: 85, symb: "At", name: "Astatine", type: "لا فلز", s_s: "صلب", a_m: "209.98715 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>10</sup>6p<sup>5</sup>", o_s: "7, 5, 3, 1, -1", eg: "2.2", a_r: "202 pm", i_e: "9.5 eV", m_p: "575 K", b_p: "none", d: "7 g/cm<sup>3</sup>", y_d: "1940"},
				{number: 86, symb: "Rn", name: "Radon", type: "غاز نبيل", s_s: "غاز", a_m: "222.01758 u", e_c: "[Xe]6s<sup>2</sup>4f<sup>14</sup>5d<sup>10</sup>6p<sup>6</sup>", o_s: "0", eg: "none", a_r: "220 pm", i_e: "10.745 eV", m_p: "202 K", b_p: "211.45 K", d: "0.00973 g/cm<sup>3</sup>", y_d: "1900"},
				{number: 87, symb: "Fr", name: "Francium", type: "فلز قلوى", s_s: "صلب", a_m: "223.01973 u", e_c: "[Rn]7s<sup>1</sup>", o_s: "+1", eg: "0.7", a_r: "348 pm", i_e: "3.9 eV", m_p: "300 K", b_p: "none", d: "1939 g/cm<sup>3</sup>", y_d: "1939"},
				{number: 88, symb: "Ra", name: "Radium", type: "فلز قلوى أرضى", s_s: "صلب", a_m: "226.02541 u", e_c: "[Rn]7s<sup>2</sup>", o_s: "+2", eg: "0.9", a_r: "283 pm", i_e: "5.279 eV", m_p: "973 K", b_p: "1413 K", d: "5 g/cm<sup>3</sup>", y_d: "1898"},
				{number: 89, symb: "Ac", name: "Actinium", type: "أكتينيد", s_s: "صلب", a_m: "227.02775 u", e_c: "[Rn]7s<sup>2</sup>6d<sup>1</sup>", o_s: "+3", eg: "1.1", a_r: "260 pm", i_e: "5.17 eV", m_p: "1324 K", b_p: "3471 K", d: "10.07 g/cm<sup>3</sup>", y_d: "1899"},
				{number: 90, symb: "Th", name: "Thorium", type: "أكتينيد", s_s: "صلب", a_m: "232.038 u", e_c: "[Rn]7s<sup>2</sup>6d<sup>2</sup>", o_s: "+4", eg: "1.3", a_r: "237 pm", i_e: "6.08 eV", m_p: "2023 K", b_p: "5061 K", d: "11.72 g/cm<sup>3</sup>", y_d: "1828"},
				{number: 91, symb: "Pa", name: "Proactinium", type: "أكتينيد", s_s: "صلب", a_m: "231.03588 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>2</sup>6d<sup>1</sup>", o_s: "+5, +4", eg: "1.5", a_r: "243 pm", i_e: "5.89 eV", m_p: "1845 K", b_p: "none", d: "15.37 g/cm<sup>3</sup>", y_d: "1913"},
				{number: 92, symb: "U", name: "Uranium", type: "أكتينيد", s_s: "صلب", a_m: "238.0289 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>3</sup>6d<sup>1</sup>", o_s: "+6, +5, +4, +3", eg: "1.38", a_r: "240 pm", i_e: "6.194 eV", m_p: "1408 K", b_p: "4404 K", d: "18.95 g/cm<sup>3</sup>", y_d: "1789"},
				{number: 93, symb: "Np", name: "Neptunium", type: "أكتينيد", s_s: "صلب", a_m: "237.048172 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>4</sup>6d<sup>1</sup>", o_s: "+6, +5, +4, +3", eg: "1.36", a_r: "221 pm", i_e: "6.266 eV", m_p: "917 K", b_p: "4175 K", d: "20.25 g/cm<sup>3</sup>", y_d: "1940"},
				{number: 94, symb: "Pu", name: "Plutonium", type: "أكتينيد", s_s: "صلب", a_m: "244.06420 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>6</sup>", o_s: "+6, +5, +4, +3", eg: "1.28", a_r: "243 pm", i_e: "6.06 eV", m_p: "913 K", b_p: "3501 K", d: "19.84 g/cm<sup>3</sup>", y_d: "1940"},
				{number: 95, symb: "Am", name: "Americium", type: "أكتينيد", s_s: "صلب", a_m: "243.061380 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>7</sup>", o_s: "+6, +5, +4, +3", eg: "1.3", a_r: "244 pm", i_e: "5.993 eV", m_p: "1449 K", b_p: "2284 K", d: "13.69 g/cm<sup>3</sup>", y_d: "1944"},
				{number: 96, symb: "Cm", name: "Curium", type: "أكتينيد", s_s: "صلب", a_m: "247.07035 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>7</sup>6d<sup>1</sup>", o_s: "+3", eg: "1.3", a_r: "245 pm", i_e: "6.02 eV", m_p: "1618 K", b_p: "3400 K", d: "13.51 g/cm<sup>3</sup>", y_d: "1944"},
				{number: 97, symb: "Bk", name: "Berkelium", type: "أكتينيد", s_s: "صلب", a_m: "247.07031 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>9</sup>", o_s: "+4, +3", eg: "1.3", a_r: "244 pm", i_e: "6.23 eV", m_p: "1323 K", b_p: "none", d: "14 g/cm<sup>3</sup>", y_d: "1949"},
				{number: 98, symb: "Cf", name: "Californium", type: "أكتينيد", s_s: "صلب", a_m: "251.07959 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>10</sup>", o_s: "+3", eg: "1.3", a_r: "245 pm", i_e: "6.3 eV", m_p: "1173 K", b_p: "none", d: "none", y_d: "1950"},
				{number: 99, symb: "Es", name: "Einsteinium", type: "أكتينيد", s_s: "صلب", a_m: "252.083 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>11</sup>", o_s: "+3", eg: "1.3", a_r: "245 pm", i_e: "6.42 eV", m_p: "1133 K", b_p: "none", d: "none", y_d: "1952"},
				{number: 100, symb: "Fm", name: "Fermium", type: "أكتينيد", s_s: "صلب", a_m: "257.09511 u", e_c: "[Rn]5f<sup>12</sup>7s<sup>2</sup>", o_s: "+3", eg: "1.3", a_r: "none", i_e: "6.5 eV", m_p: "1800 K", b_p: "none", d: "none", y_d: "1952"},
				{number: 101, symb: "Md", name: "Mendelevium", type: "أكتينيد", s_s: "صلب", a_m: "258.09843 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>13</sup>", o_s: "+3, +2", eg: "1.3", a_r: "none", i_e: "6.58 eV", m_p: "110 K", b_p: "none", d: "none", y_d: "1955"},
				{number: 102, symb: "No", name: "Nobelium", type: "أكتينيد", s_s: "صلب", a_m: "259.101 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>", o_s: "+3, +2", eg: "1.3", a_r: "none", i_e: "6.65 eV", m_p: "1100 K", b_p: "none", d: "none", y_d: "1957"},
				{number: 103, symb: "Lr", name: "Lawrencium", type: "أكتينيد", s_s: "صلب", a_m: "266.12 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>1</sup>", o_s: "+3", eg: "1.3", a_r: "none", i_e: "none", m_p: "1900", b_p: "none", d: "none", y_d: "1961"},
				{number: 104, symb: "Rf", name: "Rutherfordium", type: "فلز انتقالى", s_s: "صلب", a_m: "267.122 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>2</sup>", o_s: "+4", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1964"},
				{number: 105, symb: "Db", name: "Dubnium", type: "فلز انتقالى", s_s: "صلب", a_m: "268.126 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>3</sup>", o_s: "5, 4, 3", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1967"},
				{number: 106, symb: "Sg", name: "Seaborgium", type: "فلز انتقالى", s_s: "صلب", a_m: "269.128 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>4</sup>", o_s: "6, 5, 4, 3, 0", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1974"},
				{number: 107, symb: "Bh", name: "Bohrium", type: "فلز انتقالى", s_s: "صلب", a_m: "270.133 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>5</sup>", o_s: "7, 5, 4, 3", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1976"},
				{number: 108, symb: "Hs", name: "Hassium", type: "فلز انتقالى", s_s: "صلب", a_m: "269.1336 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>6</sup>", o_s: "8, 6, 5, 4, 3, 2", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1984"},
				{number: 109, symb: "Mt", name: "Meitnerium", type: "فلز انتقالى", s_s: "صلب", a_m: "277.154 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>7</sup>", o_s: "9, 8, 6, 4, 3, 1", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1982"},
				{number: 110, symb: "Ds", name: "Darmstadtium", type: "فلز انتقالى", s_s: "صلب، متوقع", a_m: "282.166 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>8</sup>", o_s: "8, 6, 4, 2, 0", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1994"},
				{number: 111, symb: "Rg", name: "Roentgenium", type: "فلز انتقالى", s_s: "صلب، متوقع", a_m: "282.169 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>9</sup>", o_s: "5, 3, 1, -1", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1994"},
				{number: 112, symb: "Cn", name: "Copernicium", type: "فلز انتقالى", s_s: "صلب، متوقع", a_m: "286.179 u", e_c: "[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup>", o_s: "2, 1, 0", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1996"},
				{number: 113, symb: "Nh", name: "Nihonium", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب، متوقع", a_m: "286.182 u", e_c: "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>1</sup>", o_s: "none", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "none"},
				{number: 114, symb: "Fl", name: "Flerovium", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب، متوقع", a_m: "290.192 u", e_c: "[Rn]7s<sup>2</sup>7p<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup>", o_s: "6, 4, 2, 1, 0", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "1998"},
				{number: 115, symb: "Mc", name: "Moscovium", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب، متوقع", a_m: "290.196 u", e_c: "[Rn]7s<sup>2</sup>7p<sup>3</sup>5f<sup>14</sup>6d<sup>10</sup>", o_s: "3, 1", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "2003"},
				{number: 116, symb: "Lv", name: "Livermorium", type: "فلز ضعيف، ما بعد انتقالى", s_s: "صلب، متوقع", a_m: "293.205 u", e_c: "[Rn]7s<sup>2</sup>7p<sup>4</sup>5f<sup>14</sup>6d<sup>10</sup>", o_s: "+4, +2, -2", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "2000"},
				{number: 117, symb: "Ts", name: "Tennessine", type: "لا فلز", s_s: "صلب، متوقع", a_m: "294.211 u", e_c: "[Rn]7s<sup>2</sup>7p<sup>5</sup>5f<sup>14</sup>6d<sup>10</sup>", o_s: "+5, +3, +1, -1", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "2010"},
				{number: 118, symb: "Og", name: "Oganesson", type: "غاز نبيل", s_s: "غاز، متوقع", a_m: "295.216 u", e_c: "[Rn]7s<sup>2</sup>7p<sup>6</sup>5f<sup>14</sup>6d<sup>10</sup>", o_s: "+6, +4, +2, +1, 0, -1", eg: "none", a_r: "none", i_e: "none", m_p: "none", b_p: "none", d: "none", y_d: "2006"}]

	// Open Inforamtion Box
	for (let el of elements) {
		el.addEventListener("click", (e) => {
			elId = e.target.id;
			for (let i = 0; i < infoArray.length; i++) {
				if (infoArray[i]["symb"].toLowerCase() == elId) {
					number.innerHTML = infoArray[i]["number"];
					symb.innerHTML = infoArray[i]["symb"];
					name.innerHTML = infoArray[i]["name"];
					type.innerHTML = infoArray[i]["type"];
					s_s.innerHTML = infoArray[i]["s_s"];
					a_m.innerHTML = infoArray[i]["a_m"];
					e_c.innerHTML = infoArray[i]["e_c"];
					o_s.innerHTML = infoArray[i]["o_s"];
					if (infoArray[i]["o_s"] == "none") {
						o_s.parentElement.style.display = "none";
					} else {
						o_s.parentElement.style.display = "flex";
					}
					eg.innerHTML = infoArray[i]["eg"];
					if (infoArray[i]["eg"] == "none") {
						eg.parentElement.style.display = "none";
					} else {
						eg.parentElement.style.display = "flex";
					}
					a_r.innerHTML = infoArray[i]["a_r"];
					if (infoArray[i]["a_r"] == "none") {
						a_r.parentElement.style.display = "none";
					} else {
						a_r.parentElement.style.display = "flex";
					}
					i_e.innerHTML = infoArray[i]["i_e"];
					if (infoArray[i]["i_e"] == "none") {
						i_e.parentElement.style.display = "none";
					} else {
						i_e.parentElement.style.display = "flex";
					}
					m_p.innerHTML = infoArray[i]["m_p"];
					if (infoArray[i]["m_p"] == "none") {
						m_p.parentElement.style.display = "none";
					} else {
						m_p.parentElement.style.display = "flex";
					}
					b_p.innerHTML = infoArray[i]["b_p"];
					if (infoArray[i]["b_p"] == "none") {
						b_p.parentElement.style.display = "none";
					} else {
						b_p.parentElement.style.display = "flex";
					}
					d.innerHTML = infoArray[i]["d"];
					if (infoArray[i]["d"] == "none") {
						d.parentElement.style.display = "none";
					} else {
						d.parentElement.style.display = "flex";
					}
					y_d.innerHTML = infoArray[i]["y_d"];
					break;
				}
			}
			if (e.target.classList.contains("non-metal") == true) {
				elIntro.style.backgroundImage = "linear-gradient(to right, #3366ff, #99ccff)";
			} else if (e.target.classList.contains("alkali-metal") == true) {
				elIntro.style.backgroundImage = "linear-gradient(to right, #ff6666, #ff9933)";
			} else if (e.target.classList.contains("alkaline-earth-metal") == true) {
				elIntro.style.backgroundImage = "linear-gradient(to right, #996666, #ffcccc)";
			} else if (e.target.classList.contains("transition-metal") == true) {
				elIntro.style.backgroundImage = "linear-gradient(to right, #99ccff, #9999ff)";
			} else if (e.target.classList.contains("metalloid") == true) {
				elIntro.style.backgroundImage = "linear-gradient(to right, #ff9933, #ffcc99)";
			} else if (e.target.classList.contains("basic-metal") == true) {
				elIntro.style.backgroundImage = "linear-gradient(to right, #ff9999, #ffcccc)";
			} else if (e.target.classList.contains("noble-gas") == true) {
				elIntro.style.backgroundImage = "linear-gradient(to right, #33ff66, #f2ff99)";
			} else if (e.target.classList.contains("lanthanides") == true) {
				elIntro.style.backgroundImage = "linear-gradient(to right, #33cccc, #ccffff)";
			} else {
				elIntro.style.backgroundImage = "linear-gradient(to right, #33cc99, #99ffcc)";
			}
			html.classList.add("no-scroll");
			body.classList.add("no-scroll");
			infoBox.classList.add("opened");
	  	});
  	}
	for (close of closes) {
		close.addEventListener("click", () => {
			if (infoBox.classList.contains("opened") == true) {
				html.classList.remove("no-scroll");
				body.classList.remove("no-scroll");
				infoBox.classList.remove("opened");
			}
		});
	}
})
