const staticImg="https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220706_263%2F1657071698045SKrKH_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2";
    const gifImg ="https://blog.kakaocdn.net/dn/c6pAkf/btrn4rgw5la/7m06GPUMq1155ou7EEYo21/img.gif";

    const img1 = document.querySelector('.img1');
    img1.src = staticImg;

    img1.addEventListener("mouseenter", function() {
        img1.src = gifImg;
    });
    img1.addEventListener("mouseleave", function() {
        img1.src = staticImg;
    });

    const staticImg1="https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220706_263%2F1657071698045SKrKH_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2";
    const gifImg1 ="https://youtu.be/51Pq9mTdOUw";

    const img2 = document.querySelector('.img2');
    img2.src = staticImg;

    img2.addEventListener("mouseenter", function() {
        img2.src = gifImg;
    });
    img2.addEventListener("mouseleave", function() {
        img2.src = staticImg;
    });



   
  function zoomIn(event) {
    event.target.style.transform = "scale(1.6)";
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";
  }

  function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
  }
