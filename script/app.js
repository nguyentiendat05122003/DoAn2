const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// ------ topic --------
const modal = $(".modal");
const avatarImg = $(".zing-body-avatar a");
const individual_ctn2 = $(".individual-ctn2");
const individual_ctn3 = $(".individual-ctn3");
const individual_ctn4 = $(".individual-ctn4");
const individual_ctn5 = $(".individual-ctn5");
const individual_ctn1 = $(".individual-ctn1");
const zingHeader = $(".zing-header");

// ------- music ---------------
const cdImg = $(".control-left-img img");
const cdTitle = $(".control-left-title h1");
const cdDes = $(".control-left-title small");
const audio = $(".audio audio");
const listMusic = $(".individual-ctn2-right");
const playListRight = $(".list-song-body");
const controlCd = $(".control-left-img ");
const playListSongRight = $(".playlist-song");

//--------- icon ---------------
const iconFavorite = $(".icon-favorite");
const iconPlay = $(".play");
const iconPauseMusic = $(".pause-music");
const iconPlayMusic = $(".play-music");
const iconLeft = $(".icon-control-left");
const iconRight = $(".icon-control-right");
const iconRepeat = $(".repeat");
const iconShuffle = $(".icon-shuffle");
// ---------------------------
// mobile
const iconPlay_mb = $(".play_mb");
const iconPauseMusic_mb = $(".pause-music-mb");
const iconPlayMusic_mb = $(".play-music-mb");
const iconLeft_mb = $(".icon-control-left-mb");
const iconRight_mb = $(".icon-control-right-mb");
const iconRepeat_mb = $(".repeat-mb");
const iconShuffle_mb = $(".icon-shuffle-mb");
const ZingControl_mb = $(".zing-controls-mb");
//-------------------------------

const iconSelectionAll = $(".addPlayList .checkbox-wrapper");
const btn_addPlayList = $(".addPlayList .btn");
// ------------------------------
const individualSongList = $(".individual-ctn2-song-list");

const zingMenu = $(".zing-navbar-menu");
const individual = $(".individual");
const discover = $(".discover");
const zingchart = $(".zingchartCtn");
const RadioCtn = $(".RadioCtn");
const navbarItem = $$(".zing-navbar-item");
const infoSearch = $(".info-search");
const ZingSearch = $(".zing-search");

var search = 0;
var isShuffle = false;
var isRepeat = false;

var currentIndex = 0;
const app = {
  songSelection: 0,
  playSong: false,
  isVolume: false,
  volumeNumber: 0,
  percent: 0,
  changerMusic: false,
  boolPlaylist: false,
  zingSearch: false,
  isMenu: 0, // tab index sideBar

  // ======================================
  indexDiscover: 0,
  // ---------------------------
  config: JSON.parse(localStorage.getItem("keys")) || {},

  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem("keys", JSON.stringify(this.config));
  },

  listSlide: [
    { img: "./img/slider/0.webp" },
    { img: "./img/slider/1.webp" },
    { img: "./img/slider/2.webp" },
    { img: "./img/slider/3.jpg" },
    { img: "./img/slider/4.webp" },
    { img: "./img/slider/5.webp" },
    { img: "./img/slider/6.webp" },
    { img: "./img/slider/7.webp" },
    { img: "./img/slider/8.webp" },
    { img: "./img/slider/9.webp" },
    { img: "./img/slider/11.webp" },
    { img: "./img/slider/12.webp" },
    { img: "./img/slider/13.webp" },
    { img: "./img/slider/14.webp" },
    { img: "./img/slider/15.webp" },
  ],
  listSinger: [
    {
      Singer: "Jack",
      Folower: "1 triệu quan tâm",
      img: "./img/listSinger/jack.png",
    },
    {
      Singer: "Hương Ly",
      Folower: "190k quan tâm",
      img: "./img/listSinger/huong-ly.png",
    },
    {
      Singer: "Karik",
      Folower: "600k quan tâm",
      img: "./img/listSinger/karik.png",
    },
    {
      Singer: "Onlyc",
      Folower: "120k quan tâm",
      img: "./img/listSinger/onlyc.png",
    },
    {
      Singer: "Mr-siro",
      Folower: "1 triệu quan tâm",
      img: "./img/listSinger/mr-siro.png",
    },
  ],
  handelEventTheme: () => {
    //   -------- khi lướt --------
    $(".zing-main").onscroll = function (e) {
      let target = e.target.scrollTop;
      if (target <= 0) {
        zingHeader.style.background = "none";
        zingHeader.style.boxShadow = "none";
      } else if (target >= 0) {
        zingHeader.style.background = `url("./background/backroundThemes/0.svg")no-repeat center/cover`;
        zingHeader.style.boxShadow = `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`;
      }
    };
  },
  songs: [
    {
      title: "CÓ CHƠI CÓ CHỊU",
      singer: "KARIK x ONLY C",
      pathSong:
        "./music/list-song/KARIK x ONLY C - CÓ CHƠI CÓ CHỊU (OFFICIAL MUSIC VIDEO).mp3",
      duration: "04:46",
      img: "https://vtv1.mediacdn.vn/thumb_w/640/2022/9/21/poster-karik-only-c-16637279213761078057270.jpeg",
    },
    {
      img: "./img/discover/ctn2/1.webp",
      title: "Waiting For You",
      singer: "MONO",
      pathSong: "./music/vip/WaitingForYou.mp3",
      duration: "04:25",
    },
    {
      title: "Cơn Mưa Băng Giá",
      singer: "Noo Phước Thịnh",
      pathSong: "./music/list-song/cmbg.mp3",
      duration: "04:41",
      img: "https://tse1.mm.bing.net/th?id=OIP.hSgGC0yJ6GeY8IE1GDTW6gHaFi&pid=Api&P=0",
    },
    {
      title: "Em Là Con Thuyền Cô Đơn",
      singer: "Thái Học",
      pathSong: "./music/list-song/elctcd.mp3",
      duration: "05:06",
      img: "https://i.ytimg.com/vi/orFNbppc6_0/maxresdefault.jpg",
    },

    {
      img: "./img/songs/0.webp",
      title: "Anh Đã Lạc Vào",
      singer: "Green, Đại Mèo Remix",
      pathSong: "./music/list-song/0.mp3",
      duration: "04:27",
    },
    {
      img: "./img/songs/1.webp",
      title: "Chạy Về Khóc Với Anh",
      singer: "Erik, Duzme Remix",
      pathSong: "./music/list-song/1.mp3",
      duration: "04:05",
    },
    {
      img: "./img/songs/2.jpeg",
      title: "Sẵn Sàng Yêu Em Đi Thôi",
      singer: "Woni, Minh Tú, Đại Mèo Remix",
      pathSong: "./music/list-song/2.mp3",
      duration: "03:51",
    },
    {
      title: "Ngôi Sao Cô Đơn",
      singer: "Jack - J97",
      pathSong: "./music/list-song/nscd.mp3",
      duration: "04:44",
      img: "https://image.voh.com.vn/voh/Image/2022/07/20/jack-mv-moi-dao-nhaiQMG-0771-Edit-008.jpg?t=o",
    },
    {
      title: "Đom Dóm",
      singer: "Jack - J97",
      pathSong: "./music/list-song/dd.mp3",
      duration: "06:21",
      img: "https://i.ytimg.com/vi/4CCGI83vOVo/maxresdefault.jpg",
    },
    {
      img: "./img/songs/3.webp",
      title: "Gieo Quẻ",
      singer: "Hoàng Thuỳ Linh, ĐEN, Orinn Remix",
      pathSong: "./music/list-song/3.mp3",
      duration: "04:27",
    },
    {
      img: "./img/songs/4.webp",
      title: "Vui Lắm Nha",
      singer: "Hương Ly, Jombie, RIN Music Remix",
      pathSong: "./music/list-song/4.m4a",
      duration: "05:16",
    },
    {
      img: "./img/songs/5.webp",
      title: "Lưu Số Em Đi",
      singer: "Huỳnh Văn, V.P. Tiên, Đại Mèo Remix",
      pathSong: "./music/list-song/5.m4a",
      duration: "04:10",
    },
    {
      img: "./img/songs/6.webp",
      title: "Như Một Người Dưng",
      singer: "Nguyễn Thạc Bảo Ngọc, Remix",
      pathSong: "./music/list-song/6.mp3",
      duration: "05:05",
    },
    {
      title: "Lặng Yên",
      singer: "Bùi Anh Tuấn ft. Ái Phương",
      pathSong: "./music/list-song/langyen.mp3",
      duration: "04:41",
      img: "https://icdn.dantri.com.vn/2021/05/29/2-mua-lua-chin-1622224483750.jpg",
    },
    {
      title: "Về Bên Anh",
      singer: "Jack - J97",
      pathSong: "./music/list-song/vba.mp3",
      duration: "04:21",
      img: "https://i.ytimg.com/vi/EjrIz5UX4Io/maxresdefault.jpg",
    },
    {
      img: "./img/songs/7.webp",
      title: "Ôm Nhiều Mộng Mơ",
      singer: "Phát Huy T4, Đại Mèo Remix",
      pathSong: "./music/list-song/7.m4a",
      duration: "03:16",
    },
    {
      img: "./img/songs/8.jpg",
      title: "Tình Yêu Ngủ Quên",
      singer: "Hoàng Tôn, LyHan, Orinn Remix",
      pathSong: "./music/list-song/8.mp3",
      duration: "04:27",
    },
    {
      img: "./img/songs/9.webp",
      title: "Không Bằng",
      singer: "Na, RIN Music Remix",
      pathSong: "./music/list-song/9.m4a",
      duration: "03:23",
    },
    {
      img: "./img/songs/10.webp",
      title: "Ai Chung Tình Được Mãi",
      singer: "Đinh Tùng Huy, ACV Remix",
      pathSong: "./music/list-song/10.m4a",
      duration: "03:55",
    },
    {
      img: "./img/songs/11.webp",
      title: "Cô Đơn Dành Cho Ai",
      singer: "NAL, LEE KEN, Orinn Remix",
      pathSong: "./music/list-song/11.m4a",
      duration: "04:45",
    },
    {
      img: "./img/songs/12.webp",
      title: "Ánh mắt ta chạm nhau",
      singer: "Ngô Lan Hương, Đại Mèo remix",
      pathSong: "./music/list-song/12.m4a",
      duration: "06:01",
    },
    {
      img: "./img/songs/13.webp",
      title: "2 Phút Hơn",
      singer: "Phao, KAIZ Remix",
      pathSong: "./music/list-song/13.m4a",
      duration: "05:02",
    },
    {
      img: "./img/songs/14.webp",
      title: "Là Ai Từ Bỏ Là Ai Vô Tình",
      singer: "Hương Ly, Jombie (G5R), RIN Music Remix",
      pathSong: "./music/list-song/14.m4a",
      duration: "03:25",
    },
    {
      img: "./img/songs/2.jpeg",
      title: "Yêu Đừng Sợ Đau",
      singer: "Ngô Lan Hương, Cukak Remix",
      pathSong: "./music/list-song/15.m4a",
      duration: "03:51",
      type: "vip",
    },

    // =======================================
    {
      img: "./img/discover/ctn2/0.webp",
      title: "Giữ Lại Được Chi",
      singer: "Renddy",
      time: "2 ngày trước",
      pathSong: "./music/list-song/15.m4a",
      type: "vip",
      duration: "04:06",
    },
    {
      title: "Lỡ Hẹn Với Dòng Lam",
      singer: "Thái Học",
      pathSong: "./music/list-song/lhdsl.mp3",
      duration: "05:43",
      type: "vip",
      img: "https://tse2.mm.bing.net/th?id=OIP.wQ8YaC8YRnibBMiypyK0XwEsEs&pid=Api&P=0",
    },
    {
      img: "./img/discover/ctn2/1.webp",
      title: "Waiting For You",
      singer: "MONO",
      time: "2 ngày trước",
      pathSong: "./music/vip/WaitingForYou.mp3",
      type: "free",
      duration: "04:25",
    },
    {
      img: "./img/discover/ctn2/2.webp",
      title: "Talking to Yourself",
      singer: "Carly Rae Jepsen",
      time: "2 ngày trước",
      pathSong: "./music/list-song/15.m4a",
      type: "vip",
      duration: "04:07",
    },
    {
      img: "./img/discover/ctn2/3.jpg",
      title: "Into Your Arms",
      singer: "Witt Lowry ft. Ava Max",
      time: "3 ngày trước",
      pathSong:
        "./music/vip/Into Your Arms - Witt Lowry ft. Ava Max (Lyrics + Vietsub) - TikTok ♫.mp3",
      type: "free",
      duration: "02:07",
    },
    {
      img: "./img/discover/ctn2/8.webp",
      title: "LUMINOUS",
      singer: "LOONA",
      time: "2 ngày trước",
      pathSong: "./music/list-song/15.m4a",
      type: "vip",
      duration: "03:06",
    },
    {
      img: "./img/discover/ctn2/4.webp",
      title: "Thế Giới Trong Em",
      singer: "Hương Ly,",
      time: "LY.M",
      pathSong: "./music/vip/thegioitrongem.mp3",
      type: "free",
      duration: "04:02",
    },
    {
      img: "./img/discover/ctn2/5.webp",
      title: "Wavin' Flag",
      singer: "K'NAAN",
      time: "2 ngày trước",
      pathSong:
        "./music/vip/K'NAAN - Wavin' Flag (Coca-Cola Celebration Mix).mp3",
      type: "free",
      duration: "03:44",
    },
    {
      img: "./img/discover/ctn2/6.webp",
      title: "I'm So Happy",
      singer: "Jeremy Zucker,BENEE",
      time: "3 ngày trước",
      pathSong:
        "./music/vip/Into Your Arms - Witt Lowry ft. Ava Max (Lyrics + Vietsub) - TikTok ♫.mp3",
      type: "free",
      duration: "06:03",
    },
    {
      img: "./img/discover/ctn2/7.jpg",
      title: "Để Rồi Tổn Thương",
      singer: "Sara Luu,JayKii",
      time: "2 ngày trước",
      pathSong: "./music/vip/deroitonthuong.mp3",
      type: "vip",
      duration: "05:17",
    },
    {
      img: "./img/discover/ctn2/9.webp",
      title: "Hay Là Trăng Nói",
      singer: "DatKaa,QT Beatz",
      time: "2 ngày trước",
      pathSong: "./music/vip/deroitonthuong.mp3",
      type: "vip",
      duration: "05:07",
    },
    {
      img: "./img/discover/ctn2/10.webp",
      title: "Forget Me",
      singer: "Lewis Capaldi",
      time: "3 ngày trước",
      pathSong: "./music/vip/deroitonthuong.mp3",
      type: "vip",
      duration: "04:08",
    },
    {
      img: "./img/discover/ctn2/11.jpg",
      title: "Em Lấy Chồng",
      singer: "Khắc Việt,ACV",
      time: "6 ngày trước",
      pathSong: "./music/vip/Emlaychong.mp3",
      type: "free",
      duration: "04:22",
    },

    // -------- play list   ------------
    {
      img: "./img/playListSongs/tshk.jfif",
      title: "Tây Sơn Hào Kiệt",
      singer: "JOMBIE X PHAN ANN",
      time: "6 ngày trước",
      pathSong:
        "./music/list-song/TÂY SƠN HÀO KIỆT (Remix) - JOMBIE X PHAN ANN (MV Hoạt Hình).mp3",
      type: "free",
      duration: "4:22",
    },
    {
      img: "./img/playListSongs/hlpb.png",
      title: "Hùng Long Phong Bá",
      singer: "Jombie, Danhka, Bean, Sakhar",
      time: "6 ngày trước",
      pathSong: "./music/list-song/Hùng Long Phong Bá.mp3",
      type: "free",
      duration: "4:22",
    },
    {
      img: "./img/playListSongs/ll.jpg",
      title: "Lưu Ly",
      singer: "D.T",
      time: "6 ngày trước",
      pathSong:
        "./music/list-song/LƯU LY (Rap Việt Mùa 2) - D.T - Lyrics - Tú Tú ✔.mp3",
      type: "free",
      duration: "4:22",
    },
    {
      img: "./img/playListSongs/ds.jfif",
      title: "Đất sóc",
      singer: "JOMBIE",
      time: "6 ngày trước",
      pathSong: "./music/list-song/JOMBIE - ĐẤT SÓC - OFFICIAL MV.mp3",
      type: "free",
      duration: "4:22",
    },
    // ------------- us -------------------
    {
      img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg",
      title: "Unstoppable",
      singer: "Sia",
      time: "6 ngày trước",
      pathSong: "./music/us/Sia - Unstoppable (Lyrics).mp3",
      type: "free",
      duration: "4:22",
    },
    {
      img: "./img/playListSongs/hlpb.png",
      title: "Sweet but Psycho",
      singer: "Ava Max ",
      time: "6 ngày trước",
      pathSong: "./music/us/Ava Max - Sweet but Psycho (Lyrics).mp3",
      type: "free",
      duration: "4:22",
    },
    {
      img: "./img/playListSongs/ll.jpg",
      title: "The Box",
      singer: "Roddy Ricch",
      time: "6 ngày trước",
      pathSong: "./music/us/Roddy Ricch - The Box [Official Audio].mp3",
      type: "free",
      duration: "4:22",
    },
    {
      img: "./img/playListSongs/ds.jfif",
      title: "Jaymes Young",
      singer: "Infinity",
      time: "6 ngày trước",
      pathSong:
        "./music/us/Vietsub - Infinity - Jaymes Young - Nhạc Hot TikTok - Lyrics Video.mp3",
      type: "free",
      duration: "4:22",
    },
  ],

  // -------------- xử lý tìm kiếm -----------------
  handleSeacrh: function () {
    const _this = this;
    let html = [];

    $("#app").onclick = function (e) {
      const targetInfoSearch = e.target.closest(".info-search");
      const targetZingSearch = e.target.closest(".zing-search");
      const targetItem = e.target.closest(".suggest-body .item");
      if (targetInfoSearch || targetZingSearch) {
        infoSearch.classList.remove("hide");
        ZingSearch.classList.add("action-search");
        $(
          ".action-search.zing-search"
        ).style.background = `url(./background/modalThemes/modalTheme3/theme${search}.jpg) center/cover no-repeat`;
      } else {
        infoSearch.classList.add("hide");
        ZingSearch.classList.remove("action-search");
        $(".zing-search").style.backgroundColor = `var(--background-while)`;
        $(".zing-search").style.backgroundImage = "none";
      }
      if (targetItem) {
        infoSearch.classList.add("hide");
        ZingSearch.classList.remove("action-search");
        $(".zing-search").style.backgroundImage = "none";
        $(".zing-search").style.backgroundColor = `var(--background-while)`;
        _this.songs.map(function (item, index) {
          if (targetItem.querySelector(".title").innerHTML == item.title) {
            $(".zing-result-list").innerHTML = `
                                <div class="l-6 m-12 c-12">
                                    <li class="song-item zingchart-body-item zing-result-list-item" data-index=${index}> 
                                        <div class="zingchart-body-ctn">
                                            <div class="zingchart-body-left zing-playList-body-left">
                                                <div class="individual-ctn2-song-item-img zing-result-body-left-img">
                                                    <img src="${item.img
              }" alt="" class="individual-ctn2-song-img">
                                                    <div class="individual-ctn2-song-item-icon"data-index=${index}>
                                                        <ion-icon name="play"></ion-icon>
                                                    </div>
                                                    <div class="icon-play-song icon-play-song-top ">
                                                        <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                                    </div>
                                                </div>
                                                <div class="individual-ctn2-song-title zingchart ">
                                                        <span class="color-title">${item.title
              }</span>
                                                        <small class="color-small">${item.singer
                .split(",")
                .map(
                  (i) =>
                    `<a class="singer color-small"href="">${i}</a>`
                )}</small>
                                                </div>
                                            </div>
                                        <div class="zingchart-body-main  color-small c-0 l-0">
                                            <span class="title">${item.title
              }</span>
                                            <span class="singer">(singer)</span>
                                        </div>
                                        <div class="zingchart-body-right">
                                            <div class="zingchart-body-right-icon">
                                                <div class="zingchart-icon icon-mic color-title">
                                                    <i class="fa-sharp fa-solid fa-microphone"></i>
                                                </div>
                                                <div class="icon-favorite color-small "data-index=${index}>
                                                    <div class="no-favorite zingchart-icon icon-tym action-hover">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </div>
                                                    <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                                        <ion-icon name="heart"></ion-icon>
                                                    </div>
                                                </div>
                                            
                                                <div class="zingchart-icon color-title c-0">
                                                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                                </div>
                                            </div>
                    
                                            <span class="zingchart-song-time color-small">${item.duration
              }</span>
                                        </div>
                                    </div>
                                    </li> 
                                </div>      
                                `;

            $(".zing-result").classList.remove("hide");
            individual.classList.add("hide");
            discover.classList.add("hide");
            zingchart.classList.add("hide");
            RadioCtn.classList.add("hide");
          }
        });
      }
      if (!e.target.closest(".zing-sidebar")) {
        $(".zing-sidebar").classList.remove("action-zing-sidebar");
      }
    };
    $(".zing-result-list").onclick = function (e) {
      const target = e.target.closest(".zing-result-list-item");
      if (target) {
        const index = target.getAttribute("data-index");
        currentIndex = index;
        _this.loadCurrentSong();
        const html = _this.songs.map((item, i) => {
          if (i == index) {
            return `
                                  <li class="song-item zingchart-body-item zing-playList-item" data-index=${i}> 
                                                 <div class="checkbox-wrapper color-main "data-index=${i}>
                                                       <ion-icon class="checkBox-icon-music"name="musical-notes-outline"></ion-icon>
                                                      <div class="checkbox">
                                                          <input type="checkbox">
                                                      </div>
                                                  </div>
                                      <div class="zingchart-body-ctn">
                                          <div class="zingchart-body-left zing-playList-body-left">
                                              <div class="individual-ctn2-song-item-img zing-playList-body-left-img">
                                                  <img src="${item.img}" alt="" class="individual-ctn2-song-img">
                                                  <div class="individual-ctn2-song-item-icon"data-index=${i}>
                                                      <ion-icon name="play"></ion-icon>
                                                  </div>
                                                  <div class="icon-play-song icon-play-song-top ">
                                                      <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                                  </div>
                                              </div>
                                              <div class="individual-ctn2-song-title zingchart ">
                                                      <span class="color-title">${item.title}</span>
                                                      <small class="color-small">${item.singer}</small>
                                              </div>
                                          </div>
                                          <div class="zingchart-body-main  color-small c-0">
                                                <span class="title">${item.title}</span>
                                                <span class="singer">(singer)</span>
                                          </div>
                                          <div class="zingchart-body-right">
                                              <div class="zingchart-body-right-icon">
                                                  <div class="zingchart-icon icon-mic color-title">
                                                      <i class="fa-sharp fa-solid fa-microphone"></i>
                                                  </div>
                                                  <div class="icon-favorite color-small "data-index=${index}>
                                                        <div class="no-favorite zingchart-icon icon-tym action-hover">
                                                            <ion-icon name="heart-outline"></ion-icon>
                                                        </div>
                                                        <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                                            <ion-icon name="heart"></ion-icon>
                                                        </div>
                                                    </div>

                                                  <div class="zingchart-icon color-title c-0">
                                                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                                  </div>
                                              </div>
                          
                                              <span class="zingchart-song-time color-small">${item.duration}</span>
                                          </div>
                                      </div>
                                  </li> 
                                  `;
          }
        });
        audio.play();
      }
    };
    let value = "";
    $(".zing-search input").onkeyup = function (e) {
      value = e.target.value;
      if (value === "") {
        infoSearch.classList.remove("show-Results");
      } else {
        infoSearch.classList.add("show-Results");
      }
      let dem = 0;
      const keywords = _this.songs.map((item, index) => {
        if (item.title.toUpperCase().includes(value.toUpperCase())) {
          dem++;
          return `
                        <li class="item">
                        <span class="color-small"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <span class="title color-main">${item.title}</span>
                        </li>
                    `;
        }
      });
      if (dem > 0) {
        $(".keywords .suggest-body").innerHTML = keywords.join("");
      } else {
        infoSearch.classList.remove("show-Results");
      }

    };
  },

  loadColorSearch: function (object) {
    object.forEach((item) => {
      const index = item.getAttribute("data-index");
      if (index == currentIndex) {
        item.classList.add("music-color");
        item.classList.add("action-play-music");
      } else {
        item.classList.remove("music-color");
        item.classList.remove("action-play-music");
        item.classList.remove("action-pause-music");
      }
    });
  },
  //----------------- cá nhân --------------------

  loadSong: function () {
    const html = this.songs.map(function (item, index) {
      if (index >= 0) {
        return ` <li class="song-item  individual-ctn2-song-item" data-index=${index}> 
                   
                            <div class="individual-ctn2-song-item-img">
                                <img src="${item.img
          }" alt="" class="individual-ctn2-song-img">
                                <div class="individual-ctn2-song-item-icon"data-index=${index}>
                                    <ion-icon name="play"></ion-icon>
                                </div>
                                <div class="icon-play-song ">
                                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                </div>
                            </div>
                            <div class="individual-ctn2-song-title">
                                    <span class="color-title">${item.title
          }</span>
                                    <small class="color-small">${item.singer
          }</small>
                            </div>
                            <div class="zingchart-body-main  color-small c-0">
                                    <span class="title">${item.title}</span>
                                    <span class="singer">(singer)</span>
                            </div>
                            <div class="individual-ctn2-song-right color-main">
                                <div class="individual-ctn2-song-right-icon">
                                    <div class="icon-video c-0 m-0">
                                        <ion-icon name="videocam"></ion-icon>
                                    </div>
                                    <div class="icon-favorite color-small "data-index=${index}>
                                        <div class="no-favorite icon action-hover">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </div>
                                        <div class="yes-favorite icon action-hover">
                                        <ion-icon name="heart"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <div class="time">
                                    <div class="song-time">
                                        ${item.duration}
                                    </div>
                                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                </div>
                            </div>
                        </li>            `;
      }
    });
    individualSongList.innerHTML = html.join(" ");
  },
  handleMusic: function () {
    const _this = this;
    const listSongs = $$(".individual-ctn2-song-item");
    const animationImg = cdImg.animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000, //thời gian chạy
        iterations: Infinity, //chạy không giới hạn
      }
    );
    animationImg.pause();
    const animationImg_mb = $(".control-left-img-mb").animate(
      { transform: "rotate(360deg)" },
      {
        duration: 10000, //thời gian chạy
        iterations: Infinity, //chạy không giới hạn
      }
    );
    animationImg_mb.pause();
    //-------- load Music khi click ---------
    listSongs.forEach((item, index) => {
      item.onclick = function () {
        item.classList.add("music-color");
        animationImg.play();
        currentIndex = index;
        _this.loadCurrentSong();
        audio.play();
        _this.deleteColorMusic = false;
        _this.songSelection = index;
        $(".zing-navar").style.height = 30 + "vh";
        $$(".the-song-include.free").forEach((item) => {
          item.classList.remove("music-color-selection");
          item
            .querySelector(".the-song-include-img.free ")
            .classList.remove("action-play-music");
        });
      };
    });

    listSongs.forEach((item, index) => {
      if (!index == currentIndex) {
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-play-music");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-pause-music");
      }
      _this.deleteColorMusic = false;
    });

    individualSongList.onclick = function (e) {
      let numberTarget = 0;
      const target = e.target.closest(".individual-ctn2-song-item-img");
      if (target) {
        if (e.target.closest(".icon-play-song")) {
          _this.changerMusic = true;
          audio.pause();
        }
        if (e.target.closest(".individual-ctn2-song-item-icon")) {
          let index = Number(
            e.target
              .closest(".individual-ctn2-song-item-icon")
              .getAttribute("data-index")
          );
          currentIndex = index;
          _this.loadCurrentSong();
          _this.changerMusic = true;
          audio.play();
          _this.deleteColorMusic = false;
        }
      }

    };

    // ----------  click icon control ------------
    iconPauseMusic.onclick = function () {
      audio.pause();
    };

    iconPlayMusic.onclick = function () {
      audio.play();
    };

    iconLeft.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = _this.songs.length - 1;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
    };
    iconRight.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex++;
        if (currentIndex > _this.songs.length - 1) {
          currentIndex = 0;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
      _this.deleteColorMusic = false;
    };
    iconRepeat.onclick = function () {
      isRepeat = !isRepeat;
      this.classList.toggle("action-controls", isRepeat);
      iconRepeat_mb.classList.toggle("action-controls", isRepeat);
      _this.setConfig("isRepeat", isRepeat);
      if (isRepeat) {
        iconRepeat.style.color = "var(--color-pink)";
      } else {
        iconRepeat.style.color = "white";
      }
    };

    iconShuffle.onclick = function () {
      isShuffle = !isShuffle;
      this.classList.toggle("action-controls", isShuffle);
      _this.setConfig("isShuffle", isShuffle);
      if (isShuffle) {
        iconShuffle.style.color = "var(--color-pink)";
      } else {
        iconShuffle.style.color = "white";
      }
    };
    // --------------------- mobile -----------------
    iconPauseMusic_mb.onclick = function () {
      audio.pause();
    };

    iconPlayMusic_mb.onclick = function () {
      audio.play();
    };

    iconLeft_mb.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = _this.songs.length - 1;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
    };
    iconRight_mb.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex++;
        if (currentIndex > _this.songs.length - 1) {
          currentIndex = 0;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
      _this.deleteColorMusic = false;
    };
    iconRepeat_mb.onclick = function () {
      isRepeat = !isRepeat;
      this.classList.toggle("action-controls", isRepeat);
      if (isRepeat) {
        iconRepeat.style.color = "var(--color-pink)";
      } else {
        iconRepeat.style.color = "white";
      }
    };

    iconShuffle_mb.onclick = function () {
      isShuffle = !isShuffle;
      this.classList.toggle("action-controls", isShuffle);
      if (isShuffle) {
        iconShuffle.style.color = "var(--color-pink)";
      } else {
        iconShuffle.style.color = "white";
      }
    };

    //--------------------------------------------------

    audio.onpause = function () {
      animationImg.pause();
      animationImg_mb.pause();
      $$(".zing-result-list-item").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item.classList.add("action-pause-music");
          item.classList.remove("action-play-music");
        }
      });
      controlCd.style.marginLeft = 0;
      iconPlay.classList.remove("action-play-icon");
      iconPlay_mb.classList.remove("action-play-icon");
      $$(".individual-ctn2-song-item").forEach((item, index) => {
        if (index != currentIndex) {
          item.classList.remove("action-play-music");
          item.classList.remove("action-pause-music");
        }
      });
      $$(".song-item-right").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.remove("action-play-music");
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.add("action-pause-music");
        }
      });
      $$(".zing-playList-item").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.remove("action-play-music");
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.add("action-pause-music");
        }
      });
      $$(".zingchart-body-list .zingchart-body-item").forEach((item, index) => {
        if (index == currentIndex) {
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-play-music"
          );
          $$(".zingchart-body-left-song-item-img")[index].classList.add(
            "action-pause-music"
          );
          console.log('run pause')
        }
      });
      $$(".the-song-include.free").forEach((item) => {
        let index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".the-song-include-img")
            .classList.remove("action-play-music");
          item
            .querySelector(".the-song-include-img")
            .classList.add("action-pause-music");
        }
      });
      //handle icon 
      listSongs[currentIndex]
        .querySelector(".individual-ctn2-song-item-img")
        .classList.add("action-pause-music");
      listSongs[currentIndex]
        .querySelector(".individual-ctn2-song-item-img")
        .classList.remove("action-play-music");
      _this.playSong = false;
    };
    audio.onplay = function () {
      animationImg.play();
      animationImg_mb.play();
      $(".zing-body").style.paddingBottom = "90px";
      $(".zing-controls").classList.remove("hide");
      $(".expanded").style.bottom = "90px";
      $(".zing-navar").style.height = 30 + "vh";
      controlCd.style.marginLeft = 10 + "px";
      iconPlay.classList.add("action-play-icon");
      iconPlay_mb.classList.add("action-play-icon");
      _this.colorMusic();
      $$(".song-item-right").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.add("action-play-music");
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.remove("action-pause-music");
        }
      });
      _this.loadColorMusicDiscover();
      _this.scrollToActiveSong($(".music-color"));
      //  ---- find song in Top 100 ----------
      $$(".zingchart-body-list .zingchart-body-item").forEach((item, index) => {
        if (index == currentIndex) {
          item.classList.add("music-color");
          $$(".zingchart-body-left-song-item-img")[index].classList.add(
            "action-play-music"
          );
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-pause-music"
          );
          console.log('run play')
        }
      });
      $$(".the-song-include.free").forEach((item) => {
        let index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".the-song-include-img")
            .classList.add("action-play-music");
          item
            .querySelector(".the-song-include-img")
            .classList.remove("action-pause-music");
        }
      });
      _this.loadColorZingchart();
      _this.loadColorSearch($$(".zing-result-list-item"));
      _this.playSong = true;
    };
    //  tua nhạcRadioCtn-ctn1-body
    $(".progress").onclick = function (e) {
      const progress = this.clientWidth;
      const currentTimeClick = e.offsetX;
      const newTime = (currentTimeClick / progress) * 100;
      $(".progressCurrent").style.width = newTime + "%";
      audio.play();
      // có phần trăm rồi thì tính ra thời gian
      audio.currentTime = (newTime * audio.duration) / 100;
    };
    //mobile
    $(".progress-mb").onclick = function (e) {
      const progress = this.clientWidth;
      const currentTimeClick = e.offsetX;
      const newTime = (currentTimeClick / progress) * 100;
      $(".progressCurrent-mb").style.width = newTime + "%";
      audio.play();
      // có phần trăm rồi thì tính ra thời gian
      audio.currentTime = (newTime * audio.duration) / 100;
    };
    // auto chạy nhạc
    audio.ontimeupdate = function () {
      if (audio.duration) {
        $(".progressCurrent").style.width =
          (audio.currentTime * 100) / audio.duration + "%";
        $(".progressCurrent-mb").style.width =
          (audio.currentTime * 100) / audio.duration + "%";
        let minute = Math.floor(audio.currentTime / 60);
        if (minute < 10) {
          $(".minute-mb").innerText = "0" + minute;
          $(".minute").innerText = "0" + minute;
        } else {
          $(".minute-mb").innerText = minute;
          $(".minute").innerText = minute;
        }
        let second = Math.floor(audio.currentTime - minute * 60);
        if (second < 10) {
          $(".second-mb").innerText = "0" + second;
          $(".second").innerText = "0" + second;
        } else {
          $(".second-mb").innerText = second;
          $(".second").innerText = second;
        }
      }
    };
    // khi kết thúc 1 bài hát
    audio.onended = function () {
      if (isRepeat == true) {
        audio.play();
      } else {
        if (_this.changerMusic == false) {
          currentIndex = 1;
        }
        iconRight.click();
      }
    };
    // ---------- phát tất cả -------------
    $(".individual-btn-all").onclick = () => {
      _this.changerMusic = true;
      audio.play();
    };
    //  ------ chỉnh âm thanh ------------

    const volumeControl = $(".volume-control");
    const volumePlay = $(".volume-play");
    const volumePause = $(".volume-pause");

    volumePlay.onclick = function () {
      $(".volume").classList.add("action-volume");
      audio.volume = 0;
      $(".volume-control-play").style.width = 0 + "%";
    };
    volumePause.onclick = function () {
      $(".volume").classList.remove("action-volume");
      $(".volume-control-play").style.width = _this.percent;
      audio.volume = _this.volumeNumber;
    };
    volumeControl.onclick = function (e) {
      _this.percent = (e.offsetX * 100) / this.clientWidth + "%";
      $(".volume-control-play").style.width = _this.percent;
      _this.volumeNumber = (e.offsetX * 100) / this.clientWidth / 100;
      audio.volume = _this.volumeNumber;
    };

    $(".control-left-title-mb .icon").onclick = function () {
      ZingControl_mb.classList.remove("zing-controls-mb-open");
      $(".zing-controls").classList.remove("hide");
    };
    $(".zing-controls").onclick = function (e) {
      if (
        !(
          e.target.closest(".repeat") || e.target.closest(".icon-control-right")
        )
      ) {
        ZingControl_mb.classList.add("zing-controls-mb-open");
      }
    };

  },
  scrollToActiveSong: function (element) {
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest", //phần tử trở nên gần với trung tâm 
      });
    }, 300);
  },
  //random song
  random: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length - 1);
    } while (newIndex === currentIndex);
    currentIndex = newIndex;
  },
  loadCurrentSong: function () {
    cdImg.src = this.songs[currentIndex].img;
    cdTitle.innerText = this.songs[currentIndex].title;
    cdDes.innerText = this.songs[currentIndex].singer;
    audio.src = this.songs[currentIndex].pathSong;
    $(".time-end").innerText = this.songs[currentIndex].duration;
    //mobile
    $(".control-left-title-mb .content h1").innerText =
      this.songs[currentIndex].title;
    $(".control-left-title-mb .content small").innerText =
      this.songs[currentIndex].singer;
    $(".control-left-img-mb img").src = this.songs[currentIndex].img;
    $(".time-end-mb").innerText = this.songs[currentIndex].duration;
  },
  // handle icon play or pause
  colorMusic: function () {
    $$(".individual-ctn2-song-item").forEach((item, index) => {
      if (index == currentIndex) {
        item.classList.add("music-color");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.add("action-play-music");
      } else {
        item.classList.remove("music-color");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-pause-music");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-play-music");
      }
    });
  },
  //handle background
  colorMusicSelection: function () {
    $$(".song-item.individual-ctn2-song-item").forEach((item) => {
      const index = item.getAttribute("data-index");
      if (index == this.songSelection) {
        item.classList.add("music-color-selection");
      } else {
        item.classList.remove("music-color-selection");
      }
    });
  },
  //   ================= cá nhân =================
  handelEvent: function () {
    //    ------------ lựa chọn tab ----------
    $$(".zing-body-selector .list .item").forEach((item, index) => {
      item.onclick = () => {
        if (index < 4) {
          $(".item.zing-body-selector-bgr").classList.remove(
            "zing-body-selector-bgr"
          );
          item.classList.add("zing-body-selector-bgr");
          $(".zing-body-selector-bgr").style.background = "var(--color-white);";

          if (index == 0) {
            individual_ctn2.classList.remove("hide");
            individual_ctn3.classList.remove("hide");
            individual_ctn4.classList.remove("hide");
            individual_ctn5.classList.remove("hide");
            individual_ctn1.classList.remove("hide");
            $(".individual-ctn2 .l-4").classList.remove("hide");
            $(".individual-ctn2 .l-8").classList.remove("l-12");
            $$(".individual-ctn2-song-item").forEach((item) => {
              item.classList.remove("action-hover");
            });
            $$(".individual-ctn2-song-item").forEach((item) => {
              item.classList.remove("music-color-selection-Checkbox");
            });
            $(".individual-ctn1-header-left").classList.remove(
              "action-add-playlist"
            );
            $(".individual-ctn2-right").style.height = "300px";
            $(".individual-ctn1-header-left").classList.remove(
              "action-add-playlist-mb"
            );
            $(".individual-btn").classList.remove("hide");
            $(".individual-btn-all").classList.remove("hide");
          }
          if (index == 1) {
            individual_ctn3.classList.add("hide");
            individual_ctn4.classList.add("hide");
            individual_ctn5.classList.add("hide");
            individual_ctn2.classList.remove("hide");
            individual_ctn1.classList.remove("hide");
            $(".individual-ctn2 .l-4").classList.add("hide");
            $(".individual-ctn2 .l-8").classList.add("l-12");
            $$(".individual-ctn2-song-item").forEach((item) => {
              item.classList.add("action-hover");
            });
            $(".individual-ctn2-right").style.height = "100%";

            $(".individual-btn").classList.add("hide");
            $(".individual-btn-all").classList.add("hide");
          }
          if (index == 2) {
            individual_ctn3.classList.remove("hide");
            individual_ctn2.classList.add("hide");
            individual_ctn4.classList.remove("hide");
            individual_ctn5.classList.add("hide");
            individual_ctn1.classList.add("hide");
          }
          if (index == 3) {
            individual_ctn4.classList.add("hide");
            individual_ctn2.classList.add("hide");
            individual_ctn3.classList.add("hide");
            individual_ctn5.classList.remove("hide");
            individual_ctn1.classList.add("hide");
          }
        }
        $(".zing-body").style.paddingBottom = "100px";
      };
    });
    $(".zing-header-settings").onclick = function () {
      $(".setting-list").classList.toggle("hide");
    };
  },

  renderSinger: function () {
    const individualctn5 = $(".individual-ctn5-body");
    const html = this.listSinger.map((item) => {
      return ` <div class="l-2-4 m-2-4 c-6">
         <div class="individual-ctn5-item">
             <div class="individual-ctn5-hover">
                 <div class="individual-ctn5-img">
                     <img src="${item.img}" alt="">
                     <div class="individual-ctn2-song-item-icon modal-icon-play">
                         <ion-icon name="play"></ion-icon>
                     </div>
                 </div>
             </div>
             <div class="individual-ctn5-info color-main">
                 <h1 >${item.Singer}</h1>
                 <span class="color-small">${item.Folower}</span>
                 <button class="btn color-small">
                     <ion-icon name="shuffle-outline"></ion-icon>
                     GÓC NHẠC
                 </button>
             </div>
         </div>
     </div>`;
    });
    individualctn5.innerHTML = html.join("");
  },
  renderslide: function () {
    const html = this.listSlide.map((item, index) => {
      return `<img src="${item.img}" alt="" class="individual-ctn2-img
                        ${index == 0
          ? "individual-ctn2-img-first"
          : index == 1
            ? "individual-ctn2-img-second"
            : index == 2
              ? "individual-ctn2-img-third"
              : index == 3
                ? "individual-ctn2-img-four"
                : "individual-ctn2-img-four"
        }">`;
    });
    $(".individual-ctn2-left").innerHTML = html.join(" ");
  },

  autoChangeImg: function () {
    let indexImgs = 1;
    const individualListImg = $$(".individual-ctn2-img");
    changeImg = function () {
      individualListImg.forEach((item, index) => {
        // individual-ctn2-img-second","individual-ctn2-img-first
        if (index == indexImgs) {
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-first"
          );
          item.classList.replace(
            "individual-ctn2-img-second",
            "individual-ctn2-img-first"
          );
          item.classList.replace(
            "individual-ctn2-img-third",
            "individual-ctn2-img-second"
          );
        } else if (index == indexImgs + 1) {
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-second"
          );
          item.classList.replace(
            "individual-ctn2-img-third",
            "individual-ctn2-img-second"
          );
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-first"
          );
        } else if (index == indexImgs + 2) {
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-third"
          );
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-first"
          );
        } else {
          item.classList.replace(
            "individual-ctn2-img-third",
            "individual-ctn2-img-second"
          );
          item.classList.replace(
            "individual-ctn2-img-second",
            "individual-ctn2-img-first"
          );
          item.classList.replace(
            "individual-ctn2-img-first",
            "individual-ctn2-img-four"
          );
        }
        if (index == individualListImg.length - 1) {
          individualListImg[0].classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-third"
          );
          individualListImg[0].classList.replace(
            "individual-ctn2-img-third",
            "individual-ctn2-img-second"
          );
          individualListImg[1].classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-third"
          );
        }
      });
      indexImgs++;
      if (indexImgs > individualListImg.length - 1) {
        indexImgs = 0;
      }
    };
    setInterval("changeImg()", 2000);
  },

  //handel menu tab (fake page) pc and mobile in sidebar
  handelMenu: function () {
    const _this = this;
    zingMenu.onclick = function (e) {
      $(".zing-result").classList.add("hide");
      $(".zing-search input").value = "";
      const target = e.target.closest(".zing-navbar-item");
      if (target) {
        const index = target.getAttribute("data-index");
        $$(".zing-navbar-item.action-song").forEach((item) => {
          item.classList.remove("action-song");
        });
        _this.isMenu = index;
        _this.eventMenu();
      }
    };
    $(".footer-mb").onclick = function (e) {
      $(".zing-result").classList.add("hide");
      $(".zing-search input").value = "";
      const target = e.target.closest(".zing-navbar-item-mb ");
      const index = target.getAttribute("data-index");
      $$(".zing-navbar-item-mb.action-song").forEach((item) => {
        item.classList.remove("action-song");
      });
      _this.isMenu = index;
      _this.eventMenu();
    };
  },

  eventMenu: function () {
    if (this.isMenu == 0) {
      individual.classList.remove("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      RadioCtn.classList.add("hide");
      $(".info-search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if (this.isMenu == 1) {
      individual.classList.add("hide");
      discover.classList.remove("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      RadioCtn.classList.add("hide");
      $(".info-search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if (this.isMenu == 2) {
      individual.classList.add("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.remove("hide");
      RadioCtn.classList.add("hide");
      $(".info-search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if (this.isMenu == 3) {
      individual.classList.add("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      RadioCtn.classList.remove("hide");
      $(".info-search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else {
      alert("Cái này chưa có :v");
    }
  },
  startPrivate: function () {
    this.renderSinger();
    this.renderslide();
    this.autoChangeImg();
    this.handelEvent();
  },
  // ================ Khám phá ====================
  discover1: [
    { img: "./img/discover/ctn1/0.jpg" },
    { img: "./img/discover/ctn1/1.jpg" },
    { img: "./img/discover/ctn1/2.jpg" },
    { img: "./img/discover/ctn1/3.jpg" },
    { img: "./img/discover/ctn1/4.jpg" },
    { img: "./img/discover/ctn1/5.jpg" },
    { img: "./img/discover/ctn1/6.jpg" },
    { img: "./img/discover/ctn1/7.jpg" },
    { img: "./img/discover/ctn1/8.jpg" },
  ],
  discover2: [],

  discover3: [
    {
      img: "./img/discover/ctn3/1.webp",
      title: "Trang's Love Again Story",
      content: "Cùng Trang nhìn lại những câu chuyện phía sau album",
    },
    {
      img: "./img/discover/ctn3/2.webp",
      title: "Sing Along US-UK",
      content: "Cùng hát theo những ca khúc Âu Mỹ dễ nhớ dễ thuộc này",
    },
    {
      img: "./img/discover/ctn3/3.webp",
      title: "Love In The Way",
      content: "Bleu,Nicki Minaj",
    },
    {
      img: "./img/discover/ctn3/4.webp",
      title: "Pop Ballad Việt Nổi Bật",
      content: "Hà Nhi và những bản Ballad Việt 'tốn nước mắt nhất'",
    },
  ],
  discover4: [
    {
      img: "./img/discover/ctn4/1.webp",
      title: "V-Pop Tháng 9/2022",
      content: "Vương Anh Tú,Sơn Tùng MTP",
    },
    {
      img: "./img/discover/ctn4/2.webp",
      title: "US-UK Tháng 9/2022",
      content: "Elton John,Britney Spears,Carly Rae Jepsen",
    },
    {
      img: "./img/discover/ctn4/3.webp",
      title: "K-Pop Tháng 9/2022",
      content: "BLACKPINK,IVE,ONEUS",
    },
    {
      img: "./img/discover/ctn4/4.webp",
      title: "C-Pop Tháng 9/2022",
      content: "Trần Lập Nông,周深 / Châu Thâm,Christopher Wu",
    },
  ],
  discover5: [
    {
      header: [
        { img: "./img/discover/ctn5/header/1.jpg" },
        { img: "./img/discover/ctn5/header/2.jpg" },
        { img: "./img/discover/ctn5/header/3.jpg" },
      ],
    },
    {
      body: [
        { img: "./img/discover/ctn5/body/0.png" },
        { img: "./img/discover/ctn5/body/1.png" },
        { img: "./img/discover/ctn5/body/2.png" },
        { img: "./img/discover/ctn5/body/3.png" },
        { img: "./img/discover/ctn5/body/4.png" },
        { img: "./img/discover/ctn5/body/5.png" },
        { img: "./img/discover/ctn5/body/6.png" },
      ],
    },
  ],
  ListLiveTream: [
    {
      img: "./img/discover/ctn6/0.webp",
      title: "XONE Radio",
      view: "210 đang nghe",
      img2: "./img/discover/ctn6/f0.webp",
    },
    {
      img: "./img/discover/ctn6/1.webp",
      title: "V-POP",
      view: "1k đang nghe",
      img2: "./img/discover/ctn6/f1.webp",
    },
    {
      img: "./img/discover/ctn6/2.webp",
      title: "Chạm",
      view: "2k đang nghe",
      img2: "./img/discover/ctn6/f2.webp",
    },
    {
      img: "./img/discover/ctn6/3.webp",
      title: "On Air",
      view: "320 đang nghe",
      img2: "./img/discover/ctn6/f3.webp",
    },
    {
      img: "./img/discover/ctn6/4.webp",
      title: "Bolero",
      view: "10k đang nghe",
      img2: "./img/discover/ctn6/f4.webp",
    },
    {
      img: "./img/discover/ctn6/5.webp",
      title: "US-UK",
      view: "120k đang nghe",
      img2: "./img/discover/ctn6/f5.webp",
    },
    {
      img: "./img/discover/ctn6/0.webp",
      title: "XONE Radio",
      view: "210 đang nghe",
      img2: "./img/discover/ctn6/f0.webp",
    },
    {
      img: "./img/discover/ctn6/1.webp",
      title: "V-POP",
      view: "1k đang nghe",
      img2: "./img/discover/ctn6/f1.webp",
    },
    {
      img: "./img/discover/ctn6/2.webp",
      title: "Chạm",
      view: "2k đang nghe",
      img2: "./img/discover/ctn6/f2.webp",
    },
    {
      img: "./img/discover/ctn6/3.webp",
      title: "On Air",
      view: "320 đang nghe",
      img2: "./img/discover/ctn6/f3.webp",
    },
    {
      img: "./img/discover/ctn6/4.webp",
      title: "Bolero",
      view: "10k đang nghe",
      img2: "./img/discover/ctn6/f4.webp",
    },
    {
      img: "./img/discover/ctn6/5.webp",
      title: "US-UK",
      view: "120k đang nghe",
      img2: "./img/discover/ctn6/f5.webp",
    },
  ],
  //render slider
  disCover1: function () {
    const html = this.discover1.map((item, index) => {
      return `
             <div class="discover-ctn1-img 
                ${index == 0
          ? "discover-ctn1-img-first"
          : index == 1
            ? "discover-ctn1-img-second"
            : index == 2
              ? "discover-ctn1-img-third "
              : "discover-ctn1-img-four"
        }">
                <img src="${item.img}" alt="">
            </div>
                
               `;
    });
    const html2 = this.discover1.map((item, index) => {
      return `
           <img class="img ${index == 0
          ? "discover-ctn1-mb-first"
          : index == 1
            ? "discover-ctn1-mb-second"
            : "discover-ctn1-mb-third "
        }"
           " src="${item.img}" alt="">
          `;
    });
    $(".discover-ctn1-mb-img").innerHTML = html2.join("");
    $(".discover-ctn1-list-img").innerHTML = html.join("");
  },

  //render songs and albums
  disCover2: function () {
    const _this = this;
    const html = _this.songs.map((item, index) => {
      if (index > 22 && index <= 34) {
        return `
                 <div class="l-4 m-6 c-12 m-pro-6">
                     <div class="the-song " >
                         <div class="the-song-include ${item.type}" data-index=${index}>
                             <div class="the-song-include-left">
                                     <div class="the-song-include-img  ${item.type}" data-index=${index}>
                                         <img src="${item.img}" class="the-song-img discover-ctn2-img" alt="">
                                         <div class="the-song-icon-play">
                                                 <ion-icon name="play"></ion-icon>
                                          </div>
                                         <div class="icon-play-song">
                                              <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                         </div>
                             
                                     </div>
                                     <div class="the-song-info discover-ctn2-info">
                                         <div class="song-name">
                                             <h1 class="songs color-main">${item.title}</h1>
                                             <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg" alt="">
                                         </div>
                                             <span class="singer color-small">${item.singer}</span>
                                             <span class="time color-small">${item.time}</span>
                                     </div>
                             </div>
                             <div class="item icon action-hover  color-main">
                                 <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                             </div>
                         </div>
                     </div>   
                 </div> 
            `;
      }
    });
    const album = _this.songs.map((item, index) => {
      if (index > 23 && index <= 32) {
        return `
                    <div class="l-4 m-6 c-12 m-pro-6">
                    <div class="the-song discover-ctn2-album-song">
                        <div class="the-song-include discover-ctn2-album-include" data-index="${index}">
                            <div class="the-song-include-left">
    
                                <div class="the-song-include-img discover-ctn2-album-include-img">
                                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png" alt="" class="discover-ctn2-cd">
                                    <div class="discover-ctn2-album-img">
                                        <img src="${item.img}" class="the-song-img" alt="">
                                        <div class="the-song-icon-play  discover-ctn2-album-icon ">
                                                <ion-icon name="play"></ion-icon>
                                            </div>
                                    </div>
                                </div>
    
                                <div class="the-song-info discover-ctn2-info discover-ctn2-album-info">
                                    <div class="song-name">
                                        <h1 class="songs color-main">${item.title}</h1>
                                    </div>
                                        <span class="singer color-small">${item.singer}</span>
                                        <span class="time color-small">${item.time}</span>
                                </div>
                            </div>
                            <div class="item icon action-hover  color-main">
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </div>
                        </div>
                    </div>   
                    </div> 
            `;
      }
    });

    $(".discover-ctn2-body").innerHTML = html.join("");
    $(".discover-ctn2-album").innerHTML = album.join("");

    //click tab song, album
    $(".discover-ctn2-btn").onclick = function (e) {
      const target = e.target;
      const album = $(".btn-discover2-album");
      const songs = $(".btn-discover2-songs");
      if (target.closest(".btn-discover2-songs")) {
        $(".discover-ctn2-body").classList.remove("hide");
        album.classList.remove("action-btn");
        $(".discover-ctn2-album").classList.add("hide");
        songs.classList.add("action-btn");
      } else if (target.closest(".btn-discover2-album")) {
        $(".discover-ctn2-body").classList.add("hide");
        album.classList.add("action-btn");
        $(".discover-ctn2-album").classList.remove("hide");
        songs.classList.remove("action-btn");
      }
    };
  },
  //render playList general
  disCover: function (songs, object) {
    const html = songs.map((item) => {
      return ` <li class="l-3 m-4 c-6">
            <div class="individual-ctn3-item discover-ctn3-item">
                <div class="individual-ctn3-consis">
                    <div class="individual-ctn3-hover">
                        <div class="individual-ctn3-item-img discover-ctn3-img">
                            <img src="${item.img}" alt="">
                            
                            <div class="individual-ctn3-modal">
                                <div class="individual-ctn3-favorite action-favorite">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div class="individual-ctn3-play">
                                    <i class="fa-solid fa-play"></i>
                                </div>
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </div>

                        </div>
                    </div>
                    <h1 class="individual-ctn3-item-title discover-ctn3-item-title color-main">
                            ${item.title}
                    </h1>
                    <div class="individual-ctn3-item-name discover-ctn3-item-des">
                        <small class="color-small">
                                ${item.content}
                        </small>
                    </div>
                </div>
            </div>
        </li> 
            `;
    });
    object.innerHTML = html.join("");
  },
  //render zing chart and singer
  disCover5: function () {
    const _this = this;
    const header = _this.discover5[0].header.map((item) => {
      return `
          <li class="l-4 m-4">
            <div class="discover-ctn5-img">
                <img src="${item.img}" alt="">
            </div>
          </li> 
          `;
    });
    const body = _this.discover5[1].body.map((item) => {
      return `
        <div class="discover-ctn5-singer-img l-2-4 m-3">
           <img src="${item.img}"alt="">
        </div>
        `;
    });
    $(".discover-ctn5-header").innerHTML = header.join("");
    $(".discover-ctn5-list-singer").innerHTML = body.join("");
  },
  //render radio
  livestream: function (list, object, number) {
    const html = list.map((item, index) => {
      if (index <= number) {
        return `
              <div class="l-2 m-3 c-4">
                  <div class="individual-ctn5-item discover-ctn6-item">
                      <div class="individual-ctn5-hover individual-ctn6-hover">
                          <div class="individual-ctn5-img discover-ctn6-img">
                              <img src="${item.img}" alt="">
                              <div class="individual-ctn2-song-item-icon modal-icon-play">
                                  <ion-icon name="play"></ion-icon>
                              </div>
                          </div>
                          <div class="discover-ctn6-img-small">
                                  <img src="${item.img2}" alt="">
                          </div>
                      </div>
                      <div class="individual-ctn5-info discover-ctn6-info color-main">
                          <h1>${item.title}</h1>
                          <span class="color-small">${item.view}</span>
                      </div>
                  </div>
              </div>
            `;
      }
    });
    object.innerHTML = html.join("");
  },
  //handle event
  handelDiscover: function () {
    const _this = this;
    //logic slider
    const listImg_disCover = $$(".discover-ctn1-img");
    changeDiscover = function () {
      listImg_disCover.forEach((item, index) => {
        if (index == _this.indexDiscover) {
          item.classList.replace(
            "discover-ctn1-img-second",
            "discover-ctn1-img-first"
          );
        } else if (index == _this.indexDiscover + 1) {
          item.classList.replace(
            "discover-ctn1-img-third",
            "discover-ctn1-img-second"
          );
        } else if (index == _this.indexDiscover + 2) {
          item.classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-third"
          );
        } else {
          item.classList.replace(
            "discover-ctn1-img-first",
            "discover-ctn1-img-four"
          );
        }
        if (_this.indexDiscover == listImg_disCover.length - 1) {
          listImg_disCover[0].classList.replace(
            "discover-ctn1-img-third",
            "discover-ctn1-img-second"
          );
          listImg_disCover[1].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-third"
          );
        } else if (_this.indexDiscover == listImg_disCover.length - 2) {
          listImg_disCover[0].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-third"
          );
        }
        if (_this.indexDiscover == listImg_disCover.length) {
          listImg_disCover[0].classList.replace(
            "discover-ctn1-img-second",
            "discover-ctn1-img-first"
          );
          listImg_disCover[0].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-first"
          );
          listImg_disCover[1].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-second"
          );
          listImg_disCover[1].classList.replace(
            "discover-ctn1-img-third",
            "discover-ctn1-img-second"
          );
          listImg_disCover[2].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-third"
          );
        }
      });

      const listImg_disCover_mb = $$(".discover-ctn1-mb-img .img");
      changeDiscover_mb = function () {
        listImg_disCover_mb.forEach((item, index) => {
          if (index == _this.indexDiscover - 1) {
            item.classList.replace(
              "discover-ctn1-mb-second",
              "discover-ctn1-mb-first"
            );
          } else if (index == _this.indexDiscover) {
            item.classList.replace(
              "discover-ctn1-mb-third",
              "discover-ctn1-mb-second"
            );
          } else {
            item.classList.replace(
              "discover-ctn1-mb-first",
              "discover-ctn1-mb-third"
            );
          }
        });
        if (_this.indexDiscover == listImg_disCover.length) {
          listImg_disCover_mb[0].classList.replace(
            "discover-ctn1-mb-third",
            "discover-ctn1-mb-second"
          );
        } else if (_this.indexDiscover == listImg_disCover_mb.length + 1) {
          listImg_disCover_mb[0].classList.replace(
            "discover-ctn1-mb-second",
            "discover-ctn1-img-first"
          );
          listImg_disCover_mb[1].classList.replace(
            "discover-ctn1-mb-third",
            "discover-ctn1-mb-second"
          );
        }
        if (_this.indexDiscover >= listImg_disCover.length) {
          _this.indexDiscover = 0;
        }
      };
    };
    $(".discover-ctn1-left").onclick = function () {
      _this.indexDiscover++;
      changeDiscover();
    };
    $(".discover-ctn1-right").onclick = function () {
      _this.indexDiscover++;
      changeDiscover();
    };

    autoChangeDiscover = function () {
      _this.indexDiscover++;
      changeDiscover();
      changeDiscover_mb();
      setTimeout("autoChangeDiscover()", 4000);
    };
    autoChangeDiscover();

    //click image song and handle icon in image
    $(".discover-ctn2-body").onclick = function (e) {
      const target = e.target.closest(".the-song-include-img.free");
      if (target) {
        let index = target.getAttribute("data-index");
        if (e.target.closest(".the-song-icon-play")) {
          currentIndex = index;
          _this.loadColorMusicDiscover();
          _this.loadCurrentSong();
          audio.play();
          target.classList.add("action-play-music");
          target.classList.remove("action-pause-music");
        } else if (e.target.closest(".icon-play-song")) {
          audio.pause();
          target.classList.remove("action-play-music");
          target.classList.add("action-pause-music");
        }
      } else if (e.target.closest(".the-song-include-img.vip")) {
        if (e.target.closest(".the-song-icon-play")) {
          $(".modal-vip").classList.remove("hide");
          modal.classList.remove("hide");
        }
      }
    };
    // // ----------  click vào songs Vip full----------
    $$(".the-song-include.vip").forEach((item) => {
      item.onclick = function () {
        $(".modal-vip").classList.remove("hide");
        modal.classList.remove("hide");
      };
    });
    // // ------------ click bài hát free full---------
    $$(".the-song-include.free").forEach((item) => {
      item.onclick = function () {
        currentIndex = item.getAttribute("data-index");
        _this.loadCurrentSong();
        _this.loadColorMusicDiscover();
        audio.play();
        _this.changerMusic = false;
        _this.boolPlaylist = false;
      };
    });
    // ------ exit modal vip --------
    $(".modal-vip").onclick = function (e) {
      if (e.target.closest(".vip-ctn")) {
        if (e.target.closest(".vip-ctn-icon")) {
          $(".modal-vip").classList.add("hide");
          modal.classList.add("hide");
        }
      } else {
        $(".modal-vip").classList.add("hide");
        modal.classList.add("hide");
      }
    };
  },

  //handle backgound and icon in song
  loadColorMusicDiscover: function () {
    $$(".the-song-include.free").forEach((item) => {
      const index = item.getAttribute("data-index");
      if (index == currentIndex) {
        item
          .querySelector(".the-song-include-img")
          .classList.add("action-play-music");
        item.classList.add("music-color-selection");
      } else {
        item.classList.remove("music-color-selection");
        item
          .querySelector(".the-song-include-img")
          .classList.remove("action-play-music");
        item
          .querySelector(".the-song-include-img")
          .classList.remove("action-pause-music");
      }
    });
  },
  startDiscoverCtn: function () {
    this.disCover1();
    this.disCover2();
    this.disCover(this.discover3, $(".discover-ctn3-body"));
    this.disCover(this.discover4, $(".discover-ctn4-body"));
    this.disCover5();
    this.livestream(this.ListLiveTream, $(".discover-ctn6-body"), 5);
    this.handelDiscover();
  },

  // ====================  zingchart ====================

  //render zingChart100
  zingChartTop100: function () {
    const _this = this;
    const html = this.songs.map((item, index) => {
      return `
                <li class="song-item zingchart-body-item" data-index=${index}> 
                <h1 class="zingchart-number
                         ${index == 0
          ? "zingchart-body-no1"
          : index == 1
            ? "zingchart-body-no2"
            : index == 2
              ? "zingchart-body-no3"
              : ""
        }">${index + 1}
                 </h1>
                <h1 class="zingchart-body-icon color-small"><i class="fa-solid fa-minus"></i></h1>
                <div class="zingchart-body-ctn">
                    <div class="zingchart-body-left">
                        <div class="individual-ctn2-song-item-img zingchart-body-left-song-item-img">
                            <img src="${item.img
        }" alt="" class="individual-ctn2-song-img">
                            <div class="individual-ctn2-song-item-icon"data-index=${index}>
                                <ion-icon name="play"></ion-icon>
                            </div>
                            <div class="icon-play-song icon-play-song-top ">
                                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                            </div>
                        </div>
                        <div class="individual-ctn2-song-title zingchart ">
                                <span class="color-title">${item.title}</span>
                                <small class="color-small">${item.singer
          .split(",")
          .map(
            (i) =>
              `<a class="singer color-small"href="">${i}</a>`
          )}</small>
                        </div>
                    </div>
                    <div class="zingchart-body-main  color-small c-0">
                            <span class="title">${item.title}</span>
                            <span class="singer">(${item.singer})</span>
                    </div>
                    <div class="zingchart-body-right">
                        <div class="zingchart-body-right-icon">
                            <div class="zingchart-icon icon-mic color-title">
                                <i class="fa-sharp fa-solid fa-microphone"></i>
                            </div>
                            <div class="icon-favorite color-small "data-index=${index}>
                                        <div class="no-favorite zingchart-icon icon-tym action-hover">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </div>
                                        <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                             <ion-icon name="heart"></ion-icon>
                                        </div>
                             </div>
                            <div class="zingchart-icon color-title c-0">
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </div>
                        </div>
 
                        <span class="zingchart-song-time color-small">${item.duration
        }</span>
                    </div>
                </div>
            </li>  
                `;
    });
    $(".zingchart-body-list").innerHTML = html.join("");
  },
  zingchartHeight: true,

  //function render chart child general
  loadZingchartFooter: function (objects, start, end) {
    let i = 1;
    const html = this.songs.map((item, index) => {
      if (index >= start && index <= end) {
        return `
                <li class="song-item zingchart-body-item zingchart-footer-item" data-index=${index}> 
                <h1 class="zingchart-number 
                    ${index == start
            ? "zingchart-body-no1"
            : index == start + 1
              ? "zingchart-body-no2"
              : index == start + 2
                ? "zingchart-body-no3"
                : ""
          }">${i++}
                </h1>
                <h1 class="zingchart-body-icon color-small"><i class="fa-solid fa-minus"></i></h1>
                <div class="zingchart-body-ctn">
                    <div class="zingchart-body-left zingchart-footer--body-left">
                        <div class="individual-ctn2-song-item-img">
                            <img src="${item.img
          }" alt="" class="individual-ctn2-song-img">
                            <div class="individual-ctn2-song-item-icon"data-index=${index}>
                                <ion-icon name="play"></ion-icon>
                            </div>
                            <div class="icon-play-song ">
                                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                            </div>
                        </div>
                        <div class="individual-ctn2-song-title zingchart-footer-title ">
                                <span class="color-title">${item.title}</span>
                                <small class="color-small">${item.singer
            .split(",")
            .map(
              (i) =>
                `<a class="singer color-small"href="">${i}</a>`
            )}</small>
                        </div>
                    </div>
                    <div class="zingchart-body-right">

                        <div class="zingchart-body-right-icon">
                            <div class="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                <i class="fa-sharp fa-solid fa-microphone"></i>
                            </div>
                            <div class="zingchart-icon  zingchart-footer-icon color-title ">
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </div>
                        </div>

                        <span class="zingchart-song-time color-small">${item.duration
          }</span>
                           
                    </div>

                </div>
            </li>
                
                `;
      }
    });
    objects.innerHTML = html.join("");
  },

  handleEventZingchart: function () {
    const zingcharBody = $(".zingchart-body-list");
    const zingcharBodyList = $$(".zingchart-body-list .zingchart-body-item");
    const _this = this;
    // --- show more top 100 ----
    $(".btn-top-100").onclick = function () {
      _this.zingchartHeight = !_this.zingchartHeight;
      $(".zingchart-body-list-height").classList.toggle(
        "zingchart-height",
        _this.zingchartHeight
      );
      if (_this.zingchartHeight) {
        this.innerText = "Xem Top 100";
      } else {
        this.innerText = "Rút Gọn";
      }
    };
    // handle click song in top100
    zingcharBodyList.forEach((item, index) => {
      item.onclick = function () {
        currentIndex = index;
        _this.loadCurrentSong();
        _this.loadColorZingchart();
        _this.deleteColorMusic = false;
        _this.boolPlaylist = false;
        audio.play();
      };
    });
    //handle icon 
    zingcharBody.onclick = function (e) {
      const iconPlay = e.target.closest(".icon-play-song");
      const iconPause = e.target.closest(".individual-ctn2-song-item-icon");
      if (iconPlay) {
        audio.pause();
      } else if (iconPause) {
        let index = Number(
          e.target
            .closest(".individual-ctn2-song-item-icon")
            .getAttribute("data-index")
        );
        currentIndex = index;
        _this.loadCurrentSong();
        _this.loadColorZingchart();
        audio.play();
        _this.deleteColorMusic = false;
      } else if (e.target.closest(".icon-favorite")) {
        let isBool = true;
        e.target.closest(".icon-favorite").classList.toggle("action-favorite");
        let index = Number(
          e.target.closest(".icon-favorite").getAttribute("data-index")
        );
      }
      zingcharBodyList.forEach((item, index) => {
        if (index != currentIndex) {
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-play-music"
          );
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-pause-music"
          );
        }
      });
    };
  },
  //handle backgound and icon in song
  loadColorZingchart: function () {
    const _this = this;
    $$(".zingchart-body-list .zingchart-body-item").forEach((item, index) => {
      if (index == currentIndex) {
        item.classList.add("music-color");
        $$(".zingchart-body-left-song-item-img")[index].classList.add(
          "action-play-music"
        );
      } else {
        item.classList.remove("music-color");
        $$(".zingchart-body-left-song-item-img")[index].classList.remove(
          "action-play-music"
        );
      }
    });
  },
  startZingchart: function () {
    this.zingChartTop100();
    this.handleEventZingchart();
    this.loadZingchartFooter(
      $(".zingchart-footer-ctn1 .zingchart-footer-list"),
      10,
      14
    );
    this.loadZingchartFooter(
      $(".zingchart-footer-ctn2 .zingchart-footer-list"),
      20,
      24
    );
    this.loadZingchartFooter(
      $(".zingchart-footer-ctn3 .zingchart-footer-list"),
      30,
      34
    );
  },
  //  ------------- radio ---------------

  scChedule: [
    {
      img: "./img/scChedule/f3.webp",
      content: `Quẩy "cháy phố" cùng EDM`,
      time: "09:00 - 10:00",
    },
    {
      img: "./img/scChedule/f4.webp",
      content: `Empowered Muse Podcast`,
      time: "10:00 - 11:00",
    },
    {
      img: "./img/scChedule/f5.webp",
      content: `Đắp chăn nằm nghe Tun kể`,
      time: "11:00 - 12:00",
    },
    {
      img: "./img/scChedule/1.webp",
      content: `Âm nhạc 24 giờ`,
      time: "12:00 - 13:00",
    },
    {
      img: "./img/scChedule/2.webp",
      content: `Nite XONE - Healing with music`,
      time: "13:00 - 14:00",
    },
    {
      img: "./img/scChedule/3.webp",
      content: `Nhạc Việt nổi bật`,
      time: "15:00 - 16:00",
    },
    {
      img: "./img/scChedule/4.webp",
      content: `BREAKFAST XONE`,
      time: "17:00 - 18:00",
    },
    {
      img: "./img/scChedule/5.webp",
      content: `You call, XONE Play`,
      time: "19:00 - 20:00",
    },
    {
      img: "./img/scChedule/f1.webp",
      content: `Âm nhạc hot hit thế hệ 8X 9X`,
      time: "21:00 - 22:00",
    },
    {
      img: "./img/scChedule/f2.webp",
      content: `DIY MUSIC STATION`,
      time: "23:00 - 24:00",
    },
  ],

  loadscChedule: function (object, list, start, end) {
    const html = list.map(function (item, index) {
      if (index >= start && index <= end) {
        return `
            <div class="item">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h1 class="title color-title">${item.content}</h1>
                    <span class="time color-small">${item.time}</span>
                </div>
                </div>
            `;
      }
    });
    const time = list.map((item, index) => {
      return `
        <div class="point color-main">${index == 0 ? "" : index + 12 + ":00"
        }</div>
        `;
    });
    $(".time-line").innerHTML = time.join("");
    object.innerHTML = html.join("");
  },

  radioImg: [
    {
      img: ".//img/radio/1.webp",
      title: "How2Money x Doctor",
    },
    {
      img: ".//img/radio/2.webp",
      title: "Hustle Muscle",
    },
    {
      img: ".//img/radio/3.webp",
      title: "The Garage ",
    },
    {
      img: ".//img/radio/4.webp",
      title: "The Jobs",
    },
  ],
  renderRadio: function (object, list) {
    const html = list.map((item) => {
      return `
        <li class="l-3 c-6">
            <div class="individual-ctn3-item discover-ctn3-item">
                <div class="individual-ctn3-consis RadioCtn-title">
                    <div class="individual-ctn3-hover">
                        <div class="individual-ctn3-item-img discover-ctn3-img">
                            <img src="${item.img}" alt="">
                        </div>
                    </div>
                    <h1 class="individual-ctn3-item-title  color-main">
                            ${item.title}
                    </h1>
                </div>
            </div>
        </li> 
        `;
    });

    object.innerHTML = html.join("");
  },
  numberRadioCtn: 0,
  handleRadio: function () {
    const _this = this;
    $(".RadioCtn-ctn1-right").onclick = () => {
      $(".RadioCtn-ctn1").classList.add("action-change");
    };
    $(".RadioCtn-ctn1-left").onclick = () => {
      $(".RadioCtn-ctn1").classList.remove("action-change");
    };

    const iconRight = $(".RadioCtn-ctn2-right .icon.icon-right");
    const iconLeft = $(".RadioCtn-ctn2-right .icon.icon-left");
    iconRight.onclick = () => {
      this.numberRadioCtn++;
      if (this.numberRadioCtn >= this.scChedule.length / 5) {
        iconRight.classList.add("hide");
      }
      if (this.numberRadioCtn >= 1) {
        iconLeft.classList.remove("hide");
      }
      $(".RadioCtn-ctn2-right .total").style.transform = `translateX(-${_this.numberRadioCtn * 100
        }%)`;
    };
    iconLeft.onclick = () => {
      this.numberRadioCtn--;
      if (this.numberRadioCtn <= 0) {
        iconLeft.classList.add("hide");
      }
      if (this.numberRadioCtn < this.scChedule.length / 5) {
        iconRight.classList.remove("hide");
      }
      $(".RadioCtn-ctn2-right .total").style.transform = `translateX(-${_this.numberRadioCtn * 100
        }%)`;
    };
  },
  startRadio: function () {
    this.livestream(
      this.ListLiveTream,
      $(".RadioCtn-ctn1-body"),
      this.ListLiveTream.length
    );
    this.loadscChedule($(".programs"), this.scChedule, 0, 5);
    this.loadscChedule($(".programs-bottom"), this.scChedule, 5, 10);
    this.renderRadio($(".RadioCtn-ctn4 .body .list"), this.radioImg);
    this.handleRadio();
  },

  handleTheme: function () {
    // -------------- theme ---------
    this.renderslide();
    this.handelEventTheme();
    //------------- menu -----------
    this.handelMenu();
  },
  //    ===================
  loadConfig: function () {
    isShuffle = this.config.isShuffle;
    isRepeat = this.config.isRepeat;
    iconShuffle.classList.toggle("action-controls", isShuffle);
    iconRepeat.classList.toggle("action-controls", isRepeat);
    iconShuffle_mb.classList.toggle("action-controls", isShuffle);
    iconRepeat_mb.classList.toggle("action-controls", isRepeat);
  },

  start: function () {
    this.loadConfig();
    this.loadSong();
    this.loadCurrentSong();
    this.handleMusic();
    this.handleTheme();
    // --------- cá nhân -----------
    this.startPrivate();
    //---------- khám phá ----------
    this.startDiscoverCtn();
    //---------- zingChart ---------
    this.startZingchart();
    // --------- radio -------------
    this.startRadio();
    this.handleSeacrh();
  },
};
app.start();
