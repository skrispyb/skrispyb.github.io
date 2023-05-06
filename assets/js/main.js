function rmvClass() {
    $("#about_section, #eduction_section, #employment_section, #skill_section, #project_section, #interest_section, #contact_section, #project_1, #project_2").removeClass("highlight");
}

$("#abt").click(function() {
    $("#about_section").addClass("highlight");
    setTimeout(() => {
        $("#about_section").removeClass("highlight");
    }, 2000);
});
$("#edu").click(function() {
    $("#eduction_section").addClass("highlight");
    setTimeout(() => {
        $("#eduction_section").removeClass("highlight");
    }, 2000);
});
$("#emp").click(function() {
    $("#employment_section").addClass("highlight");
    setTimeout(() => {
        $("#employment_section").removeClass("highlight");
    }, 2000);
});
$("#skl").click(function() {
    $("#skill_section").addClass("highlight");
    setTimeout(() => {
        $("#skill_section").removeClass("highlight");
    }, 2000);
});
$("#proj").click(function() {
    $("#project_section").addClass("highlight");
    setTimeout(() => {
        $("#project_section").removeClass("highlight");
    }, 2000);
});
$("#intr").click(function() {
    $("#interest_section").addClass("highlight");
    setTimeout(() => {
        $("#interest_section").removeClass("highlight");
    }, 2000);
});
$("#cont").click(function() {
    $("#contact_section").addClass("highlight");
    setTimeout(() => {
        $("#contact_section").removeClass("highlight");
    }, 2000);
});
$("#proj1").click(function() {
    $("#project_1").addClass("highlight");
    setTimeout(() => {
        $("#project_1").removeClass("highlight");
    }, 2000);
});
$("#proj2").click(function() {
    $("#project_2").addClass("highlight");
    setTimeout(() => {
        $("#project_2").removeClass("highlight");
    }, 2000);
});
$("#proj3").click(function() {
    $("#project_3").addClass("highlight");
    setTimeout(() => {
        $("#project_3").removeClass("highlight");
    }, 2000);
});
$("#proj4").click(function() {
    $("#project_4").addClass("highlight");
    setTimeout(() => {
        $("#project_4").removeClass("highlight");
    }, 2000);
});

// Scroll to top
const scrollToTop = () => {
    let progressPath = document.querySelector( '.rn-progress-parent path' );
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    const updateProgress = function () {
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    window.addEventListener( 'scroll', updateProgress );
    let progressWrap = document.querySelector( '.rn-progress-parent' );
    let offset = 150;
    window.addEventListener( 'scroll', function () {
      if (window.pageYOffset > offset) {
        progressWrap.classList.add( 'rn-backto-top-active' );
      } else {
        document
          .querySelector( '.rn-progress-parent' )
          .classList.remove( 'rn-backto-top-active' );
      }
    });
    progressWrap.addEventListener( 'click', function (e) {
        e.preventDefault();
        window.scrollTo(
            { 
                top: 0, 
                behavior: 'smooth' 
            }
        );
        return false;
    });
}
scrollToTop();