/**
 *
 * @proj beautify_vdump
 * @author prevdev@gmail.com
 * @copyright Copyright (c) 2015 prev.kr
 * @license MIT LICENSE
 *
 * https://github.com/Prev/beautify_vdump
 */

(function () {
	function a() {
		var pres = document.getElementsByTagName("pre");
		for (var i=0; i<pres.length; i++) {
			var str = pres[i].innerText.trim();
			
			if (pres[i].className == "vdump") continue;

			if (str.indexOf("array") == 0 || str.indexOf("object") == 0 || str.indexOf("string") == 0 || str.indexOf("int") == 0|| str.indexOf("NULL") == 0) {
				//str = str.replace(/( *)\[(.*)\]=>\n(\s*)/g, '$1[<span class="vdump-keyword">$2</span>] <span class="sub">=></span> ');
				
				str = str.replace(/( *)\[(.*)\]=>\n(\s*)/g, function (match, p1, p2, p3) {
					p1 = p1.split("  ").join('<span class="vdump-space"><i></i></span>');
					return p1 + '[<span class="vdump-keyword">' + p2 + '</span>] <span class="sub">=></span> ';
				});
				
				str = str.replace(/( *)(array|object)(.*?){\n/g, '$1<span class="vdump-vartype2">$2</span>$3<span class="vdump-vartype2">{</span>\n');
				str = str.replace(/( *)string\(([0-9]*)\)\s"([\S\s]*?)"\n/g, '$1<span class="vdump-vartype">string</span>($2) <b>"</b><span class="vdump-string">$3</span><b>"</b>\n');
				str = str.replace(/( *)int\(([0-9]*)\)\n/g, '$1<span class="vdump-vartype3">int</span>(<span class="vdump-numric">$2</span>)\n');
				str = str.replace(/( *)bool\((true|false)\)\n/g, '$1<span class="vdump-vartype3">bool</span>(<span class="vdump-bool"><span class="vdump-keyword">$2</span></span>)\n');
				str = str.replace(/( *)NULL\n/g, '$1<span class="vdump-bool"><i>NULL</i></span>\n');
				
				//str = str.replace(/( *)}\n/g, '$1<span class="vdump-vartype2">}</span>\n');
				str = str.replace(/( *)}\n/g, function (match, p1) {
					p1 = p1.split("  ").join('<span class="vdump-space"><i></i></span>');
					return p1 + '<span class="vdump-vartype2">}</span>\n';
				});

				pres[i].className = "vdump";
				pres[i].innerHTML = str;
			}
		}
	}
	a();
	window.addEventListener('load', a);

	var l = document.createElement("link");
		l.setAttribute("rel", "stylesheet");
		l.setAttribute("href", "https://prev.github.io/beautify_vdump/bv.css");
		document.head.appendChild(l);
})();
