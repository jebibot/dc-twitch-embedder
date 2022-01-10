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
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/reset.css?v=2\\"/>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/common.css?v=2\\"/>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"https://nstatic.dcinside.com/dc/w/css/popup.css?12\\"/>
	<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"//nstatic.dcinside.com/dc/w/css/editor.css?v=2\\"/>
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
	<script type=\\"text/javascript\\" src=\\"/_js/jquery/jquery.tmpl.min.js\\"></script>
	<script type=\\"text/javascript\\" src=\\"/_js/ctr_cookie.min.js\\"></script>
	<script type=\\"text/javascript\\">
		document.domain=\\"dcinside.com\\";
		var _opener = PopupUtil.getOpener();
		var url_host = location.host;
		
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

		var result_data = [];
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

		    var movie_d_y  = get_cookie('movie_d_y');
        	if(movie_d_y != \\"\\") {
            	if(movie_d_y == '1') $(\\"input:radio[id='download_y']\\").prop(\\"checked\\", true);
            	else $(\\"input:radio[id='download_n']\\").prop(\\"checked\\", true);
        	} else {
				$(\\"input:radio[id='download_y']\\").prop(\\"checked\\", true);
        	}

		    //Sending it with ajax
		    $.ajax({
		        url : \\"https://m4up1.dcinside.com/movie_upload_v1.php\\",
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
			        	result_data = response;
						for(var i=0; i < 6; i++) {
							
							if(response.thum_url_arr[i] != '' &&  response.thum_url_arr[i] != undefined) {
								console.log($('.vdo_thumlist > ul').children().eq(0));
								console.log($('.vdo_thumlist > ul').children().eq(0).children('a'));
								$('.vdo_thumlist > ul').children().eq(i).children('a').html('<img src=\\"'+response.thum_url_arr[i]+'\\">');
							} else {
								$('.vdo_thumlist > ul').children().eq(i).children('a').html('<img src=\\"\\">');
							}
						}
		        		
		            	$('.vdo_thumlist ul').children().first().click();
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
		                };
		            }

		            return xhr;
		        }
		    });
		}

		function process_xhr() {
			//$('#movie_tmpl').tmpl().appendTo('body');
        	$('.moviecast').hide();
        	$('#movie_tmp').show();
        	popup_resize('#movie_tmp');	
		}

		function popup_resize(cl) {
			var cl = cl;
			$('#file_cnt').text(file_cnt);
			$('#file_size').text(file_size);
			file_chk();
			if(window.outerWidth && window.innerWidth ) {
				window.resizeTo( $(cl).width() + (window.outerWidth - window.innerWidth) + 2, $(cl).height() + (window.outerHeight - window.innerHeight) + 3);
			}
			autoResizeHeight($tx(cl));

			var _embeder = getEmbeder('media');
			window.execEmbed = _embeder.embedHandler;
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

		function regist_movie() {
			if (!_opener) {
		        alert('잘못된 경로로 접근하셨습니다.');
		        return;
		    }
			if(result_data.length <= 0) {
				alert('업로드 중입니다.');
				return false;
			}
			var thum_url = encodeURIComponent($('.vdo_thumsel img').attr('src'));
			var movie_comment = $.trim($('#movie_comment').val());
			var download_y = ($('input:radio[id=download_y]').is(':checked')) ? '1' : '0'
			var tags = []
			for(var i=0; i < 5; i++) {
				if($('#movie_tag_' + i).val() == '' || $('#movie_tag_' + i).val() == undefined) {
					continue;
				} else {
					console.log(tags);
					if (tags.indexOf($('#movie_tag_' + i).val()) != -1) {
						alert('이미 등록된 태그입니다.');
						$('#movie_tag_' + i).focus();
						return false;
					}

					if(!word_filter($('#movie_tag_' + i).val())) {
						alert('태그에 특수문자 및 공백은 사용 불가능합니다.');
						$('#movie_tag_' + i).focus();
						return false;
					}
					
					tags.push($('#movie_tag_' + i).val());
				}
			}
			console.log(tags);
			
			var gallery_id = _opener.document.getElementById(\\"id\\").value;
			var movie_data = { 'gallery_id': gallery_id
	  				  ,'thum_url': thum_url
	  				  ,'movie_comment': movie_comment
	  				  ,'download_y': download_y
	  				  ,'tags': tags
	  				  ,'file_no': result_data.file_no
	  				  ,'o_width': result_data.o_width
	  				  ,'o_height': result_data.o_height
	  				  ,'_GALLTYPE_' : _GALLTYPE_
		  	};
			$.ajax({
				type: \\"POST\\",
				url: \\"/ajax/movie_ajax/regist_movie\\",
				data: movie_data,
				dataType : 'json',
				cache : false,
				async : false,
				success: function(ajaxData) {
					if(ajaxData.result == \\"success\\") {
						if(typeof(ajaxData.msg) != 'undefined' && ajaxData.msg) {
							set_cookie('movie_d_y', download_y, 365, \\"dcinside.com\\");
							movieIdx_arr.push([result_data.file_no,ajaxData.no]);
							done(ajaxData);
						}
					} else {
						if(typeof(ajaxData.msg) != 'undefined' && ajaxData.msg) {
							alert(ajaxData.msg);
						}
					}
				}
			});
		}

		
		function done(data) {
			
			var url ='https://'+url_host+'/board/movie/movie?no='+data.no;
			var _data = { code: '<iframe src=\\"'+url+'\\" name=\\"movieIcon\\" id=\\"movieIcon'+data.no+'\\" frameborder=\\"0\\" style=\\"display:block; width:100vw; height: 100vh\\"></iframe>'
				};

			if (typeof(execEmbed) == 'undefined') { //Virtual Function
		        return;
		    }
			window.opener.movieIdx_arr = movieIdx_arr;
			execEmbed(_data);
			window.close();
		}

		// 한글, 영어, 숫자 제거 함수 - 제거후 남는 단어가 있으면 false, 없으면 true
		var word_filter = function (str) {
			//console.log(str);
			var k_pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
			var e_pattern = /[a-zA-Z]/;
			var n_pattern = /[0-9]/;
			var remain = \\"\\";

			var blank_pattern = /[\\\\s]/g;
			if( blank_pattern.test(str) == true){
			    return false;
			}
			
			for (var i=0; i<str.length; i++) {
				var temp = str[i];

				temp = $.trim(temp).replace(k_pattern, '');
				temp = temp.replace(e_pattern, '');
				temp = temp.replace(n_pattern, '');

				if (temp.length > 0) {
					remain += temp;
				}
			}
			//console.log(remain.length);
			if (remain.length > 0) {
				return false;
			} else {
				return true;
			}
		}

		$(document).on(\\"click\\", \\".vdo_thumlist ul li\\", function (e) { 
			var img_src = $(this).find('img').attr('src');
			$('.vdo_thumsel').html('<img src=\\"' + img_src + '\\">');
			//$('.vdo_thumsel img').attr('src',img_src);
			$('.vdo_thumlist ul li').removeClass('sel');
			$(this).addClass('sel');
		});

		$(document).on(\\"keyup\\", \\".tags\\", function (e) { 
			var input_el = $('.tags');
			input_el.val().replace(\\" \\",\\"\\");
			input_el.keyup(function(event) {
				if($(this).val() != '') {
					$(this).siblings().show();
				} else {
					$(this).siblings().hide();
				}
			});
		});

		$(document).on(\\"click\\", \\".tag_x > button\\", function (e) { 
			$(this).parents('.taginput').children('.tags').val('');
		});
		
	</script>	
</head>
<body onload = \\"popup_resize('.moviecast');\\" >
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
				<form id=\\"uploadForm\\">
					<input type=\\"file\\" id=\\"file\\" name=\\"avatar\\" onchange=\\"changeValue(this)\\" style=\\"display:none\\"  accept=\\".avi, .asf, .mov, .wmv, .mp4, .mpeg, .webm\\">
				</form>
				<button class=\\"btn_blue small\\" id=\\"btn_video_up\\" >동영상 파일 선택</button>
			</div>
		</div>
	</div>
    <div class=\\"file_txtinfo bg\\">
        <p>동영상은 MP4, AVI, MOV, WEBM 등의 형식으로 개당 <span id ='file_size'></span>MB, <span id ='file_cnt'></span>개까지 업로드 가능합니다.</p>
        <p class=\\"deco\\"><span class=\\"font_red\\">개인정보 침해, 저작권 침해, 명예훼손, 청소년 유해 매체, 불법 유해 정보 등을</span> 게시할 경우
          <a href=\\"https://nstatic.dcinside.com/dc/w/policy/policy_index.html\\" target=\\"_blank\\" class=\\"font_lightblue\\">[이용약관]</a> 및 관련 법률에 의해 제재를 받을 수 있습니다.
        </p>
        <p class=\\"deco\\"><span class=\\"font_red\\">불법촬영물 등을</span> 게시할 경우 <a href=\\"https://www.law.go.kr/법령/전기통신사업법/(20211019,18477,20211019)/제22조의5\\" target=\\"_blank\\" class=\\"font_lightblue\\">[전기통신사업법 제22조의5 제1항]</a>에 따라 게시물 삭제 등의 조치가 취해질 수 있으며, 관련 법률에 의거하여 처벌받을 수 있습니다.
        </p>
    </div>
  </div>
</div>
<div class=\\"pop_wrap file\\" id = \\"movie_tmp\\" style=\\"display:none;\\">
	<div class=\\"pop_content videoup\\">
		<div class=\\"pop_head\\">
		<h2>동영상 등록</h2>
		</div>
		<div class=\\"content_box\\">
			<div class=\\"vdo_thumbox clear\\">
				<div class=\\"vdo_thumsel\\">
					<div class=\\"loading-box\\">
		                <div class=\\"dc-spinner\\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
		            </div>
				</div>
				<div class=\\"vdo_thumlist\\">
					<ul class=\\"clear\\">
						<li><a href=\\"javascript:;\\"><div class=\\"loading-box\\"><div class=\\"dc-spinner\\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div></a></li>
						<li><a href=\\"javascript:;\\"><div class=\\"loading-box\\"><div class=\\"dc-spinner\\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div></a></li>
						<li><a href=\\"javascript:;\\"><div class=\\"loading-box\\"><div class=\\"dc-spinner\\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div></a></li>
						<li><a href=\\"javascript:;\\"><div class=\\"loading-box\\"><div class=\\"dc-spinner\\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div></a></li>
						<li><a href=\\"javascript:;\\"><div class=\\"loading-box\\"><div class=\\"dc-spinner\\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div></a></li>
						<li><a href=\\"javascript:;\\"><div class=\\"loading-box\\"><div class=\\"dc-spinner\\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div></a></li>					
					</ul>
				</div>
			</div>
			<div class=\\"vdo_formbox\\">
				<div class=\\"box txtin clear\\">
					<div class=\\"con_tit fl\\">설명</div>
					<div class=\\"fl con_inr\\">
						<textarea placeholder=\\"동영상에 대한 설명을 입력해 주세요.(최대 200자)\\" id = \\"movie_comment\\" maxlength=\\"200\\"></textarea>
					</div>
				</div>
				<div class=\\"box tag clear\\">
					<div class=\\"con_tit fl\\">태그</div>
					<div class=\\"fl con_inr clear\\">
						<div class=\\"taginput\\">
							<input type=\\"text\\" id = \\"movie_tag_0\\" class=\\"tags\\" maxlength=\\"10\\">
							<div class = \\"tag_x\\" style=\\"display:none;\\"><button class=\\"del sp_img\\" type=\\"button\\"><span class=\\"blind\\">닫기</span></button></div>
						</div>
						<div class=\\"taginput\\">
							<input type=\\"text\\" id = \\"movie_tag_1\\" class=\\"tags\\" maxlength=\\"10\\">
							<div class = \\"tag_x\\" style=\\"display:none;\\"><button class=\\"del sp_img\\" type=\\"button\\"><span class=\\"blind\\">닫기</span></button></div>	
						</div>
						<div class=\\"taginput\\">
							<input type=\\"text\\" id = \\"movie_tag_2\\" class=\\"tags\\" maxlength=\\"10\\">
							<div class = \\"tag_x\\" style=\\"display:none;\\"><button class=\\"del sp_img\\" type=\\"button\\"><span class=\\"blind\\">닫기</span></button></div>
						</div>
							<div class=\\"taginput\\">
							<input type=\\"text\\" id = \\"movie_tag_3\\" class=\\"tags\\" maxlength=\\"10\\">
							<div class = \\"tag_x\\" style=\\"display:none;\\"><button class=\\"del sp_img\\" type=\\"button\\"><span class=\\"blind\\">닫기</span></button></div>
						</div>
						<div class=\\"taginput\\">
							<input type=\\"text\\" id = \\"movie_tag_4\\" class=\\"tags\\" maxlength=\\"10\\">
							<div class = \\"tag_x\\" style=\\"display:none;\\"><button class=\\"del sp_img\\" type=\\"button\\"><span class=\\"blind\\">닫기</span></button></div>
						</div>
					</div>
				</div>
				<div class=\\"box downset clear\\">
					<div class=\\"con_tit fl\\">다운로드</div>
					<div class=\\"fl con_inr\\">
						<span class=\\"radiobox small\\">
							<input type=\\"radio\\" id=\\"download_y\\" name=\\"yn\\">
							<em class=\\"checkmark\\"></em>
							<label for=\\"t1\\">허용</label>
						</span>
						<span class=\\"radiobox small\\">
							<input type=\\"radio\\" id=\\"download_n\\" name=\\"yn\\">
							<em class=\\"checkmark\\"></em>
							<label for=\\"t2\\">불가</label>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class=\\"btn_box\\">
			<button type=\\"button\\" class=\\"btn_blue small\\"  onclick=\\"regist_movie();\\">등록</button>
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
