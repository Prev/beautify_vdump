(function () {
	function a() {
		var pres = document.getElementsByTagName("pre");
		for (var i=0; i<pres.length; i++) {
			var str = pres[i].innerText.trim();
			
			if (pres[i].className == "vdump") continue;

			if (str.indexOf("array") == 0 || str.indexOf("object") == 0) {
				str = str.replace(/( *)\[(.*)\]=/g, '$1[<b>$2</b>]=');
				str = str.replace(/( *)(array|object)(.*?){\n/g, '$1<span class="vdump-keyword">$2</span>$3<b>{</b>\n');
				str = str.replace(/( *)string\(([0-9]*)\)\s"([\S\s]*?)"\n/g, '$1<span class="vdump-keyword">string</span>($2) <span class="vdump-string">"$3"</span>\n');
				str = str.replace(/( *)int\(([0-9]*)\)\n/g, '$1<span class="vdump-keyword">int</span>(<span class="vdump-light">$2</span>)\n');
				str = str.replace(/( *)bool\((true|false)\)\n/g, '$1<span class="vdump-keyword">bool</span>(<span class="vdump-light"><b>$2</b></span>)\n');
				str = str.replace(/( *)NULL\n/g, '$1<span class="vdump-light"><i>NULL</i></span>\n');
				str = str.replace(/( *)}\n/g, '$1<b>}</b>\n');

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

