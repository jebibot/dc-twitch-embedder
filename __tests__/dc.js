const axios = require('axios').default;

test("upload/movie", async () => {
  const { data } = await axios.get("https://gall.dcinside.com/upload/movie", {
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
  });
  expect(data).toMatchInlineSnapshot(`
"<!DOCTYPE html>
<html lang=\\"ko\\" >
<head>
	<meta charset=\\"UTF-8\\">
	<meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\">
	<meta name=\\"content-language\\" content=\\"kr\\">
	<meta name=\\"google-site-verification\\" content=\\"8_SyZg2Wg3LNnCmFXzETp7ld4yjZB8ny17m8QsYsLwk\\">
	<meta name=\\"author\\" content=\\"디시인사이드\\">
	<meta name=\\"title\\" content=\\"##We are with you all the way! IT is Life! 디시인사이드 입니다.##\\">
	<meta name=\\"description\\" content=\\"동영상 업로드\\">
	<meta property=\\"og:type\\" content=\\"website\\">
	<meta property=\\"og:title\\" content=\\"동영상 업로드\\">
	<meta property=\\"og:description\\" content=\\"동영상 업로드\\">
	<meta property=\\"og:image\\" content=\\"https://nstatic.dcinside.com/dc/w/images/descrip_img.png\\">
	<meta property=\\"og:url\\" content=\\"https://www.dcinside.com/\\">
	<title>동영상 등록</title>
	<link rel=\\"shortcut icon\\" href=\\"https://nstatic.dcinside.com/dc/w/images/logo_icon.ico\\" />
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/reset.css\\"/>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/common.css?10\\"/>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/popup.css?11\\"/>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"//nstatic.dcinside.com/dc/w/css/editor.css\\"/>
	<script type=\\"text/javascript\\" src=\\"https://nstatic.dcinside.com/dc/w/js/html5shiv.min.js\\"></script>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/dark.css\\"/>
		<!--[if IE 7]>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/ie7.css\\"/>
	<![endif]-->
	<!--[if lt IE 9]>
	<script src=\\"https://nstatic.dcinside.com/dgn/gallery/js/jquery-1.7.2.min.js\\"></script>
	<![endif]-->
	
	<!--[if gte IE 9]>
	<script src=\\"https://nstatic.dcinside.com/dgn/gallery/js/jquery-3.2.1.min.js\\"></script>
	<![endif]-->
	<!--[if !IE]> -->
	<script src=\\"https://nstatic.dcinside.com/dgn/gallery/js/jquery-3.2.1.min.js\\"></script>
	<!-- <![endif]-->
	<script type=\\"text/javascript\\" src=\\"/_editor/js/popup.js\\"></script>
	
		<script type=\\"text/javascript\\">
		document.domain=\\"dcinside.com\\";
		var _opener = PopupUtil.getOpener();
		
		const file_cnt = window.opener.m_file_cnt;
		const file_size = window.opener.m_file_size;
		var upload_stop = false;
		var upload_ing = false;
		var id = _opener.document.getElementById(\\"id\\").value;
		var _GALLTYPE_ = _opener.document.getElementById(\\"_GALLTYPE_\\").value;
		
		if(_GALLTYPE_ == 'MI') id = 'mi$' + id;

		var r_key = _opener.document.getElementById(\\"r_key\\").value;
		var movieIdx_arr = window.opener.movieIdx_arr;
		
		$(function(){
			$(\\"#btn_video_up , .mvcast_upbg\\").click(function(e){
				e.preventDefault();
				file_chk();
				$(\\"#file\\").click();
			});

			$(\\"#btn_video_up_cancel\\").click(function(e){
				upload_stop = true;
			});
			
		});

		
		function changeValue(obj) {		
			var data = new FormData();
			var objFile = null;
			var fileValue = '';
			var fileName = '';
			const allow_ext = ['avi','asf','mov','wmv','mp4','mpeg','webm']; 

			objFile = document.getElementById(\\"file\\").files[0];
			data.append('avatar', objFile);
			data.append('id', id);
			data.append('r_key', r_key);
			

			fileValue = $(\\"#file\\").val().split(\\"\\\\\\\\\\");
			fileName = fileValue[fileValue.length-1];
			
			var fileNameArr = fileName.split(\\"\\\\.\\");
			var ext = fileNameArr[fileNameArr.length - 1];
			var fileSize = objFile.size / 1024 / 1024;
			
			if($.inArray(ext.toLowerCase(), allow_ext) == -1){				
		        // 확장자 체크
		        alert(\\"지원하는 파일이 아닙니다\\");
		        location.reload();	
		        return false;
			}
			
		    if(Math.floor(fileSize) > file_size){
		        // 파일 사이즈 체크
		        alert( file_size + \\"MB 이하로 등록해 주시기 바랍니다.\\");
		        location.reload();	
		        return false;
		    }
		    
		    upload_ing = true;
		    process_xhr();

		    //Sending it with ajax
		    $.ajax({
		        url : \\"https://m4up1.dcinside.com/movie_upload.php\\",
		        data: data,
		        cache: false,
		        contentType: false,
		        processData: false,
		        type: 'POST',
				enctype:'multipart/form-data',
				dataType: \\"json\\",
		        success: function(response) {	
			        if(response.msg != '') {
				        alert(response.msg);
				        location.reload();				        
			        } else {
				        var style_html='';
				        if(response.thumbox == ''){
				        	if(response.height >= '640') {
					        	style_html = 'style = \\"height:'+response.height+'px;\\"';
				        	}
				        }
		        		_opener.insert_movie('<div class=\\"dc_movie_thumbox'+response.thumbox+'\\" ' + style_html + '><img class=\\"dc_mv\\" src=\\"'+response.thum_url+'\\" id=\\"tx_movie_'+ response.file_no +'\\"/></div>' , response.file_no);
		            	closeWindow();
			        }
					
		        },
		        xhr: function() {
		            var xhr = $.ajaxSettings.xhr();

		            if ( xhr.upload ) {
		                xhr.upload.onprogress = function(e) {
							if(upload_stop) {
								if(confirm(\\"동영상 업로드를 취소하시겠습니까?\\")) {									
									xhr.abort();
									location.reload();
								}
							}
							
		                    file.progressDone = e.position || e.loaded;
		                    file.progressTotal = e.totalSize || e.total;
							var per = (file.progressDone / file.progressTotal) * 100;
							$(\\"#progress_bar_cur_per\\").css(\\"width\\",per+\\"%\\");
							$(\\"#progress_bar_cur_per_txt\\").text(Math.round(per)+\\"%\\");
		                };
		            }

		            return xhr;
		        }
		    });
		}

		function process_xhr() {
			$(\\"#btn_video_up\\").hide();
			$(\\"#div_basicbox\\").hide();
			$('.file_txtinfo').hide();
			$(\\"#btn_video_up_cancel\\").show();
			$(\\"#div_statusbox\\").show();
			popup_resize();
		}

		function popup_resize() {
			$('#file_cnt').text(file_cnt);
			$('#file_size').text(file_size);
			file_chk();
			if(window.outerWidth && window.innerWidth ) {
				window.resizeTo( $('.pop_wrap').width() + (window.outerWidth - window.innerWidth) + 2, $('.pop_wrap').height() + (window.outerHeight - window.innerHeight) + 3);
			}
			autoResizeHeight($tx(\\"pop_wrap\\"));
		}

		function file_chk() {
			var movie_cnt = 0;
			movie_file_exist_arr = window.opener.movie_file_exist_arr;	// 남은 동영상
			movie_file = window.opener.movie_file;		// 기존 첨부동영상
			
			if(typeof(movie_file) != 'undefined' && movie_file.length > 0) {
				movie_cnt = movie_file_exist_arr.length + movieIdx_arr.length;
			} else {
				movie_cnt = movieIdx_arr.length;
			}
			
			if(movie_cnt >= file_cnt) {
				alert('동영상은 최대 ' + file_cnt + '개까지만 첨부 가능합니다.');
				closeWindow();
				return false;
			}
		}
		
	</script>	
</head>
<body onload = \\"popup_resize();\\" >
<div class=\\"pop_wrap file moviecast\\" >
	<div class=\\"pop_content \\">
		<div class=\\"pop_head\\">
		<h2>동영상 등록</h2>
	</div>
	<div class=\\"content_box\\">
		<div class=\\"inner\\">
			<div class=\\"inr\\">
				<!-- basicbox -->
				<div class=\\"basicbox\\"  id = \\"div_basicbox\\">
					<div class=\\"sp_bgimg mvcast_upbg\\" style =\\"cursor: pointer;\\"></div>
					<p class=\\"basicstxt\\">업로드할 파일을 선택해주세요.(최대 50MB)</p>
				</div>
				<!-- //basicbox -->
				<!-- statusbox -->
				<div class=\\"statusbox\\" id = \\"div_statusbox\\" style=\\"display:none\\">
					<p class=\\"statustxt\\">동영상 업로드 중</p>
					<div class=\\"loding_box clear\\">
						<div class=\\"loding_progress\\">
							<div class=\\"loding_bar\\" id =\\"progress_bar_cur_per\\" style=\\"width:0%\\"></div>
						</div>
						<span class=\\"loding_caunt fr\\" id = \\"progress_bar_cur_per_txt\\">0%</span>
					</div>
				</div>
          		<!-- //statusbox -->
				<form id=\\"uploadForm\\">
					<input type=\\"file\\" id=\\"file\\" name=\\"avatar\\" onchange=\\"changeValue(this)\\" style=\\"display:none\\"  accept=\\".avi, .asf, .mov, .wmv, .mp4, .mpeg, .webm\\">
				</form>
				<button class=\\"btn_blue small\\" id=\\"btn_video_up\\" >동영상 파일 선택</button>
				<button class=\\"btn_blue small\\" id=\\"btn_video_up_cancel\\" style=\\"display:none\\">업로드 취소</button>
			</div>
		</div>
	</div>
    <div class=\\"file_txtinfo bg\\">
        <p>동영상은 MP4, AVI, MOV, WEBM 등의 형식으로 개당 <span id ='file_size'></span>MB, <span id ='file_cnt'></span>개까지 업로드 가능합니다.</p>
        <p class=\\"font_red\\">개인정보침해, 저작권 침해, 명예훼손, 청소년 유해매체, 불법 유해정보 등을<br>
          <em></em>게시할 경우 <a href=\\"https://nstatic.dcinside.com/dc/w/policy/policy_index.html\\" target=\\"_blank\\" class=\\"font_lightblue\\">[이용약관]</a> 및 관련 법률에 의해 제재를 받을 수 있습니다.
        </p>
    </div>
  </div>
</div>
</body>
</html>
"
`);
})

test("multimedia", async () => {
  const { data } = await axios.get("https://gall.dcinside.com/_editor/pages/trex/multimedia.html", {
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
  });
  expect(data).toMatchInlineSnapshot(`
"<!DOCTYPE html>
<html lang=\\"ko\\">
<head>
	<meta charset=\\"UTF-8\\">
	<meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\">
	<meta name=\\"content-language\\" content=\\"kr\\">
	<meta name=\\"google-site-verification\\" content=\\"8_SyZg2Wg3LNnCmFXzETp7ld4yjZB8ny17m8QsYsLwk\\">
	<meta name=\\"author\\" content=\\"디시인사이드\\">
	<meta name=\\"title\\" content=\\"외부컨텐츠 삽입\\">
	<meta name=\\"description\\" content=\\"야옹이 갤러리\\">
	<meta property=\\"og:type\\" content=\\"website\\">
	<meta property=\\"og:title\\" content=\\"외부컨텐츠 삽입\\">
	<meta property=\\"og:description\\" content=\\"외부컨텐츠 삽입\\">
	<meta property=\\"og:image\\" content=\\"https://nstatic.dcinside.com/dc/w/images/descrip_img.png\\">
	<meta property=\\"og:url\\" content=\\"https://www.dcinside.com/\\">
	<title>외부컨텐츠 삽입</title>
	<link rel=\\"shortcut icon\\" href=\\"https://nstatic.dcinside.com/dc/w/images/logo_icon.ico\\" />
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/reset.css\\"/>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/common.css\\"/>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/popup.css?ver6\\"/>
		<link rel=\\"stylesheet\\" href=\\"../../css/popup.css\\" type=\\"text/css\\"  charset=\\"utf-8\\"/>
	<script src=\\"../../js/popup.js\\" type=\\"text/javascript\\" charset=\\"utf-8\\"></script>
	<script type=\\"text/javascript\\" src=\\"https://nstatic.dcinside.com/dc/w/js/html5shiv.min.js\\"></script>
	<!--[if IE 7]>
		<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"http://nstatic.dcinside.com/dc/w/css/ie7.css\\"/>
	<![endif]-->
	<script type=\\"text/javascript\\">
	// <![CDATA[
		document.domain = \\"dcinside.com\\";
		function initEmbeder() {
			var _opener = PopupUtil.getOpener();
			if(!_opener) {
				alert('잘못된 경로로 접근하셨습니다.');
				return;
			}
	
			var _embeder = getEmbeder('media');
			window.execEmbed = _embeder.embedHandler;
			autoResizeHeight($tx(\\"pop_content\\"));
		}
	
		// 코드 삽입 완료 후
		function done() {
			var _data = {};
			var types = document.getElementsByName(\\"codeType\\");
	
			if (types[2].checked) {
				_data.url = document.getElementsByName(\\"url\\")[0].value.trim();
			} else if (types[0].checked) {
				_data.code = document.getElementsByName(\\"source\\")[0].value.trim();
			} else if (types[1].checked) {
				var temp = document.getElementsByName(\\"source\\")[0].value.trim();
				var width = temp.match(/width\\\\=\\"([0-9]+)\\"/);
				var height = temp.match(/height\\\\=\\"([0-9]+)\\"/);
				//var src = temp.match(/src\\\\=\\"([:\\\\/.\\\\-0-9a-zA-Z]+)\\"/);
				var src = temp.match(/src\\\\=\\"([:\\\\/.?=&_;\\\\-0-9a-zA-Z]+)\\"/);
	
	
				if (src) {
					src = src[1].replace('embed','v');
					var new_code = \\"<embed src=\\\\\\"\\"+src+\\"?version=3\\\\\\" type=\\\\\\"application/x-shockwave-flash\\\\\\" width=\\\\\\"\\"+width[1]+\\"\\\\\\" height=\\\\\\"\\"+height[1]+\\"\\\\\\" allowfullscreen=\\\\\\"true\\\\\\"></embed>\\";
					_data.code = new_code;
				} else {
					alert('유튜브 iframe이 아닙니다.');
					return false;
				}
			}
	
			if (typeof(execEmbed) == 'undefined') { //Virtual Function
		        return;
		    }
			executeAfterDataCheck(_data, function(){
				execEmbed(_data);
				closeWindow();
		    });
		}
	
		function executeAfterDataCheck(data, successHandler) {
			if (data.url || data.code) {
				successHandler();
			} else {
				alert(\\"첨부할 멀티미디어 주소를 바르게 입력해주세요.\\");
			}
		}
	
		function selectType(id){
			var textArea = document.getElementsByName(\\"source\\")[0];
			var input = document.getElementsByName(\\"url\\")[0];
			var n_p = document.getElementById('normal_text');
			var y_p = document.getElementById('youtube_text');
	
			if (id == \\"youtube\\") {
				$tx.addClassName($tx('codeUrl'), \\"unselected\\")
				$tx.removeClassName($tx('codeSource'), \\"unselected\\")
				textArea.disabled = false;
				input.value = \\"\\";
				input.disabled=true;
				n_p.style.display = \\"none\\";
				y_p.style.display = \\"\\";
	
	//			textArea.focus();
	
			} else if ( id == 'codeUrl' ){
				$tx.addClassName($tx('codeSource'), \\"unselected\\")
				$tx.removeClassName($tx('codeUrl'), \\"unselected\\")
				textArea.value = \\"\\";
				textArea.disabled = true;
				input.disabled=false;
				n_p.style.display = \\"\\";
				y_p.style.display = \\"none\\";
	
				//input.focus();
			}else{
				$tx.addClassName($tx('codeUrl'), \\"unselected\\")
				$tx.removeClassName($tx('codeSource'), \\"unselected\\")
				textArea.disabled = false;
				input.value = \\"\\";
				input.disabled=true;
				n_p.style.display = \\"\\";
				y_p.style.display = \\"none\\";
	
				//textArea.focus();
			}
			autoResizeHeight($tx(\\"pop_content\\"));
		}
	
	// ]]>
	</script>
</head>
<body onload=\\"initEmbeder()\\">
	<!-- 외부컨텐츠 팝업 - embed,object -->
	<div class=\\"pop_wrap file ext_upload\\" id =\\"pop_content\\">
		<div class=\\"pop_content\\">
			<div class=\\"pop_head\\">
				<h2>외부컨텐츠 삽입</h2>
			</div>
			<div class=\\"file_txtinfo bg\\">
				<p>아래 멀티미디어 등의 삽입 방식을 선택한 후, 주소를 입력하세요.</p>
			</div>
			<div class=\\"inner\\">
				<!-- upload_selbox 삽입 방식 선택 -->
				<div class=\\"upload_selbox\\">
					<span class=\\"radiobox small\\">
						<input type=\\"radio\\" id=\\"type_source\\" name=\\"codeType\\" value=\\"source\\" onclick=\\"selectType('codeSource');\\" checked=\\"checked\\">
						<em class=\\"checkmark\\"></em>
						<label for=\\"type_source\\">embed,object</label>
					</span>
					<span class=\\"radiobox small\\">
						<input type=\\"radio\\" id=\\"type_youtube\\" name=\\"codeType\\" onclick=\\"selectType('youtube');\\" value=\\"url\\">
						<em class=\\"checkmark\\"></em>
						<label for=\\"type_youtube\\">유튜브</label>
					</span>
					<span class=\\"radiobox small\\">
						<input type=\\"radio\\" id=\\"type_url\\" name=\\"codeType\\" onclick=\\"selectType('codeUrl');\\" value=\\"url\\">
						<em class=\\"checkmark\\"></em>
						<label for=\\"type_url\\">멀티미디어 링크</label>
					</span>
				</div>
				<!-- //upload_selbox 삽입 방식 선택	-->

				<div id=\\"codeSource\\"><!-- 비활성화시 클래스 unselected 삽입-->
					<!-- 외부컨텐츠 소스 입력 -->
					<div class=\\"sauce_inbox\\">
						<textarea placeholder=\\"소스입력\\" name =\\"source\\"></textarea>
					</div>
					<!-- //외부컨텐츠 소스 입력 -->

					<!-- 삽입 방식 선택 안내 문구 -->
					<div class=\\"file_txtinfo\\">
						<p id=\\"normal_text\\">유튜브 동영상은 상단의 유튜브를 선택해 주세요(iframe 불가)</p><!-- embed,object 선택시 안내문구 -->
						<p id=\\"youtube_text\\" style=\\"display:none\\">유튜브 iframe 소스 코드는 embed 소스 코드로 자동 변환됩니다.</p><!-- 유투브 선택시 안내문구 -->
					</div>
					<!-- //삽입 방식 선택 안내 문구 -->
				</div>

				<!-- 링크 입력 -->
				<div id=\\"codeUrl\\"  class=\\"uplink_inbox unselected\\"><!-- 비활성화시 클래스 unselected 삽입-->
					<input type=\\"text\\" title=\\"컨텐츠 링크입력\\" placeholder=\\"링크입력\\" name =\\"url\\"  disabled=\\"true\\">
				</div>
				<!-- //링크 입력 -->
			</div>
			<div class=\\"btn_box\\">
				<button type=\\"submit\\" class=\\"btn_cancle\\" onclick=\\"closeWindow();\\">취소</button>
				<button type=\\"submit\\" class=\\"btn_apply\\" onclick=\\"done();\\">적용</button>
			</div>
		</div>
	</div>
	<!-- //외부컨텐츠 팝업 - embed,object -->
</html>
"
`);
});
