// 팝업 설정
//<strong> 굵기 : <br> 줄바꾸기 <span style="font-size: 20px; color: blue;"> 폰트크기 및 색상 바구기
const appData = [
    {
        id: 1,
        title: "Remove BG",
        image: "img/1.png",
        features: ["1. 인공지능 모델 사용", "2. 요금 : 무료", "3. 사용이 빠르고 편리"],
        description: `이미지 배경 없애기. 
                      <br><br> 
                      <!-- <span style="font-size: 20px; color: blue;">이 부분은 더 큰 글씨로 강조된 파란색 텍스트입니다.</span> -->
                      <span style="font-size: 14px;">포토샵이나 이미지 편집 툴을 사용하지 않고 빠르게 이미지 배경을 간단히 없애기 위한 좋은 곳을 소개합니다.</span> 
                      <br><br>
                      <!-- <strong>이 부분은 굵은 텍스트입니다.</strong>-->
                      <span style="font-size: 14px;">인공지능 모델을 사용하여 깔끔하게 배경을 없앨 수 있습니다. 무료이며 사용이 간편하고 속도가 빨르며, 배경 이미지를 흐리게하거나 배경을 변경도 가능하여 쉽게 이용할 수 있습니다.</span> 
                      <br><br>
                      <div style="text-align: center;">
                        <img src="imgp/p1.png" alt="Feature Image" width="300" height="200">
                      </div>
                      <br><br>
                      <span style="font-size: 12px;">고급 사용자가 아니면 무료로 사용 가능하고, 해상도가 큰 이미지는 유료 요금제를 사용하여야 합니다.<span>`,
        downloadLink: "https://www.remove.bg",
    },
    {
        id: 2,
        title: "Upscayl",
        image: "img/2.png",
        features: ["Work on Linux🐧, MacOS 🍏 and Windows 🐌" , "Upscale Images 🖼", "Upscayl is a free"],
        description: `이미지 업스케일링 프로그램. 
                      <br><br> 
                      <!-- <span style="font-size: 20px; color: blue;">이 부분은 더 큰 글씨로 강조된 파란색 텍스트입니다.</span> -->
                      <span style="font-size: 14px;">포토샵이나 이미지 편집 툴을 사용하지 않고 빠르게 이미지 엡스테일링에 좋은 프로그램을 소개합니다.</span> 
                      <br><br>
                       <div style="text-align: center;">
                        <img src="imgp/p2.png" alt="Feature Image" width="300" height="200">
                      </div>
                      <br><br>
                      <!-- <strong>이 부분은 굵은 텍스트입니다.</strong>-->
                      <span style="font-size: 14px;">다운로드하여 평생 무료로 사용할 수 있는 업스케일링 프로그램입니다. 무료이며 사용이 간편하고 속도가 빨르고, 4배까지 이미지를 확대하여도 깨짐도 없이 업스케일링이 가능합니다.</span> 
                      <br><br>
                      <span style="font-size: 12px;">다운로드 버전으로 평생 사용할 수 있다는 장점을 갖고 있습니다.<span>`,
        downloadLink: "https://upscayl.org/#desktop",
    },
    {   
        id: 3,
        title: "LivePortrait",
        image: "img/5.png",
        features: ["무료 Live Portrait", "다양한 에제", "이미지 애니매이션"],
        description: `다양한 이미지와 영상으로 학습된 이미지 무료 애니매이션' . 
                    <br><br> 
                    <span style="font-size: 14px;">각종 이미지를 학습된 모델로 애니매이션할 수 있는 web을 소개합니다.</span> 
                    <br><br>
                    <span style="font-size: 14px;">인공지능 모델, 이미지를 Live Portrait하여 다양한 곳에 사용.</span> 
                    <br><br>
                    <div style="text-align: center;">
                        <img src="imgp/p3.png" alt="Feature Image" width="300" height="200">
                    </div>
                    <br><br>
                    <span style="font-size: 12px;">저작권 걱정없이 다운로드하여 영상의 품질을 극대화 시킬 수 있습니다.<span>`,
        downloadLink: "https://huggingface.co/spaces/KwaiVGI/LivePortrait",
    },
    {   
        id: 4,
        title: "pixabay",
        image: "img/3.png",
        features: ["무료 저작권 다운로드", "동영상, 이미지, 벡터, gif등 다양", "음악, 음향효과 다운로드"],
        description: `저작권 free 다운로드. 
                    <br><br> 
                    <span style="font-size: 14px;">각종 이미지, 비디오, 벡터, gif 등 저작권이 걱정 없이 다운로드 할 수 있는곳을 소개합니다.</span> 
                    <br><br>
                    <span style="font-size: 14px;">품질이 좋은 영상, 이미지등 수많은 것들을 저작권 걱정없이 다운로드하여 사용할 수 있는 곳입니다.</span> 
                    <br><br>
                    <div style="text-align: center;">
                        <img src="imgp/p4.png" alt="Feature Image" width="300" height="200">
                    </div>
                    <br><br>
                    <span style="font-size: 12px;">저작권 걱정없이 다운로드하여 영상의 품질을 극대화 시킬 수 있습니다.<span>`,
        downloadLink: "https://www.remove.bg",
    },
    {   
        id: 5,
        title: "Forensic Wortermark",
        image: "img/4.jpg",
        features: ["이미지 포렌식 워터마크", "영상 포렌식 워터마크", "포렌식 워터마크 생성"],
        description: `SNS 인플루언서에게 가장 필수적인 웹 어플리케이션. 
                    <br><br> 
                    <span style="font-size: 14px;">Mark AI에서 무료 생성 포렌식 워터마크를 경험하세요.</span> 
                    <br><br>
                    <span style="font-size: 14px;">제한 없는 이미지 영상의 포렌식 워터마크를 통해 고퀄리티 영상의 저작권을 보호하세요.</span> 
                    <br><br>
                    <div style="text-align: center;">
                        <img src="imgp/p5.png" alt="Feature Image" width="300" height="200">
                        <br><br>
                        <img src="imgp/p5-1.png" alt="Feature Image" width="300" height="200">
                    </div>
                    <br><br>
                    <span style="font-size: 12px;">저작권 걱정없는 무료 다운로드하여 영상의 품질을 극대화 시킬 수 있습니다.<span>`,
        downloadLink: "https://huggingface.co/spaces/KwaiVGI/LivePortrait",
    },
    {   
        id: 6,
        title: "Motion array",
        image: "img/4.png",
        features: ["100개 이상의 free video templates", "100개 이상의 free songs & SFX", "하루 10개 무료 다운로드 템플릿 제공"],
        description: `무료 템플릿도 쓸만한게 많습니다. 처음 영상 공부하시는 분들께 추천. 
                    <br><br> 
                    <span style="font-size: 14px;">모션 어레이에서 무료 템플릿 받아보아요.</span> 
                    <br><br>
                    <span style="font-size: 14px;">품질이 좋은 영상, 이미지등 수많은 것들을 하루 10개까지 무료 다운로드하여 사용할 수 있는 곳입니다.</span> 
                    <br><br>
                    <div style="text-align: center;">
                        <img src="imgp/p6.png" alt="Feature Image" width="300" height="200">
                        <br><br>
                        <img src="imgp/p6-1.png" alt="Feature Image" width="300" height="200">
                    </div>
                    <br><br>
                    <span style="font-size: 12px;">저작권 걱정없는 무료 다운로드하여 영상의 품질을 극대화 시킬 수 있습니다.<span>`,
        downloadLink: "https://motionarray.com",
    },
    {
        id: 30,
        title: "Remove BG",
        image: "img/1.png",
        features: ["인공지능 모델 사용", "무료", "사용이 편리"],
        description: `이미지 배경 없애기. 
                      <br><br> 
                      <span style="font-size: 20px; color: blue;">이 부분은 더 큰 글씨로 강조된 파란색 텍스트입니다.</span>
                      <br><br>
                      <strong>이 부분은 굵은 텍스트입니다.</strong>
                      <br><br>
                      <div style="text-align: center;">
                        <img src="imgp/p1.png" alt="Feature Image" width="300" height="200">
                      </div>
                      <br><br>
                      추가 설명을 여기에 작성하세요.`,
       // downloadLink: "다운로드 링크 2",
        link: "https://www.remove.bg"
    },
];

