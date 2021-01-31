document.addEventListener("DOMContentLoaded", function() {
    const portfolioModal = document.getElementById('portfolioModal');
    portfolioModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget
        // Extract info from data-bs-* attributes
        var recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.

        // console.log(recipient);
        var portfolioInfo = portfolios[recipient];
        
        var portfolioImgs = portfolioModal.querySelector('.portfolio-modal__imgs');
        setPortfolioImgs(portfolioImgs, portfolioInfo.imgs);

        var portfolioTitle = portfolioModal.querySelector('.portfolio-modal__title');
        portfolioTitle.innerText = portfolioInfo.title;
        
        var portfolioSummary = portfolioModal.querySelector('.portfolio-modal__summary');
        portfolioSummary.innerText = portfolioInfo.summary;
        
        var portfolioRole = portfolioModal.querySelector('.portfolio-modal__role');
        setPortfolioRole(portfolioRole, portfolioInfo.role);

        var portfolioSkill = portfolioModal.querySelector('.portfolio-modal__skill');
        portfolioSkill.innerText = portfolioInfo.skill;
        
        var portfolioGitRepo = portfolioModal.querySelector('.portfolio-modal__git-repo');
        setPortfolioGitRepo(portfolioGitRepo, portfolioInfo.gitRepo);
        
    })
    function setPortfolioImgs(target, imgs) {
        target.innerHTML = "";
        for (i in imgs) {
            var figure = document.createElement('figure');
            if (i == 0) {
                figure.classList.add('active');
            }
            figure.classList.add('carousel-item');
            figure.classList.add('portfoilo-modal__figure');
            
            var img = document.createElement('img');
            img.classList.add('d-block');
            img.classList.add('w-100');
            img.classList.add('portfolio-modal__img');
            img.src = imgs[i];

            figure.appendChild(img);
            target.appendChild(figure);
        }
    }

    function setPortfolioRole(target, roles) {
        target.innerHTML = "";
        for (i in roles) {
            var liElement = document.createElement('li');
            liElement.innerText = roles[i];
            console.log(liElement);
            target.appendChild(liElement);
        }
    }

    function setPortfolioGitRepo(target, gitRepo) {
        target.innerHTML = "";
        var a = document.createElement('a');
        a.href = gitRepo;
        a.innerText = gitRepo;
        target.appendChild(a);
    }
});
const portfolios = {
    portfolio1 : {
        title : "사진 관리 어플리케이션",
        imgs : [
            './assets/images/portfolio1_1.png',
            './assets/images/portfolio1_2.png',
            './assets/images/portfolio1_3.png',
        ],
        summary : '사진을 모아주고 정리하는 것을 도와주는 어플리케이션',
        role : [
            'RemoteURL로 영상을 받을 때 로컬 URL을 UserDefaults에 저장해 다시 다운로드 받지 않도록 구현',
            'Player를 보여주는 부분과 제어하는 부분을 나눔',
            '각각의 뷰를 관리하는 Manager 클래스를 두어 컨트롤러가 Manager와 소통',
            '제스처를 이용한 플레이어 제어'
        ],
        skill : 'Swift 3, Xcode 8',
        gitRepo : 'https://github.com/jhwlim',
    },
    portfolio2 : {
        title : "Vlogr",
        imgs : [
            './assets/images/portfolio1_4.png',
            './assets/images/portfolio1_5.png',
        ],
        summary : '일상을 전달하는 Vlog 소셜 네트워크',
        role : [
            '재사용되는 코드를 묶어서 관리',
            '동영상 전체화면으로 전환시 UIModalPresentationStyle의 overFullScreen을 적용해 아래의 뷰가 자연스럽게 흐려지도록 구현.',
        ],
        skill : 'Objective-C, Swift, Xcode 9',
        gitRepo : 'https://github.com'
    },
      
}