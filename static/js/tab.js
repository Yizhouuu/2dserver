function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  var body = document.getElementById('body');
  if (tabName === 'workbench') {
    body.className = 'bg1';
  } else if (tabName === 'guide') {
    body.className = 'bg2';
  } else if (tabName === 'reserved') {
    body.className = 'bg3';
  }
}

document.getElementById("defaultOpen").click();

if (localStorage.getItem('visited') === null) {
  document.getElementById('newbie').click();
  alert("这是您的第一次访问，我们为您自动打开了【引导】标签页，您以后也可以通过该标签页查找帮助");
  localStorage.setItem('visited', 'true');
}

document.getElementById('cpbtn-ip').addEventListener('click', function() {
  var textToCopy = document.getElementById('cptext-ip').innerText;

  navigator.clipboard.writeText(textToCopy).then(function() {
    var copyBtn = document.getElementById('cpbtn-ip');
    copyBtn.innerText = '点击复制 IP：2d.lian.moe✅';
    copyBtn.style.backgroundColor = 'rgba(40, 167, 69, 0.5)';

    setTimeout(function() {
      copyBtn.innerText = '点击复制 IP：2d.lian.moe';
      copyBtn.style.backgroundColor = 'rgba(220, 220, 220, 0.5)';
    }, 2000);
  });
});

document.getElementById('cpbtn-update').addEventListener('click', function() {
  // 获取要复制的文本
  var textToCopy = document.getElementById('cptext-update').innerText;

  navigator.clipboard.writeText(textToCopy).then(function() {
    var copyBtn = document.getElementById('cpbtn-update');
    copyBtn.innerText = '点击复制整合包链接✅';
    copyBtn.style.backgroundColor = 'rgba(40, 167, 69, 0.5)';

    setTimeout(function() {
      copyBtn.innerText = '点击复制整合包链接';
      copyBtn.style.backgroundColor = 'rgba(220, 220, 220, 0.5)';
    }, 2000);
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}