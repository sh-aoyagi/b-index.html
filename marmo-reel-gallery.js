{
  const renderDesk = render;
  render = function () {
    renderDesk();
    const instagram = [...document.querySelectorAll('#social article')]
      .find(card => card.querySelector('h2')?.textContent === 'Instagram');
    if (!instagram) return;
    const oldFrames = instagram.querySelector('.frames');
    if (oldFrames) {
      const caption = oldFrames.nextElementSibling;
      if (caption?.matches('p.small')) caption.remove();
      for (const button of instagram.querySelectorAll('button')) {
        if (button.textContent === '5枚をダウンロード') button.remove();
      }
    }
    const gallery = document.createElement('section');
    gallery.setAttribute('aria-label', 'Instagramリール完成素材');
    const titles = ['麦茶がこぼれる', '夫婦でおしり拭きを出す', 'ママがもう拭いている', 'パパがママのバッグに補充', 'パパ、心の俳句'];
    const list = document.createElement('div');
    list.style.cssText = 'display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;margin:10px 0';
    titles.forEach((title, index) => {
      const file = 'marmo-reel-0' + (index + 1) + '.png';
      const link = document.createElement('a');
      link.href = file;
      link.download = file;
      link.title = title + 'を保存';
      const image = document.createElement('img');
      image.src = file;
      image.width = 1080;
      image.height = 1920;
      image.alt = (index + 1) + '：' + title;
      image.style.cssText = 'display:block;width:100%;height:auto;border-radius:8px';
      link.append(image);
      list.append(link);
    });
    const download = document.createElement('a');
    download.className = 'button';
    download.href = 'marmo-reel-five.zip';
    download.download = 'marmo-reel-five.zip';
    download.textContent = '完成PNG 5枚を一括保存';
    gallery.append(h('p','small muted','リール完成素材 · 1080 × 1920。画像を押すと1枚ずつ保存できます。'),list,download);
    if (oldFrames) oldFrames.replaceWith(gallery);
    else instagram.append(gallery);
  };
  render();
}
