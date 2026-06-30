// 見本画像があればそれを表示し、無ければCSS疑似見本にフォールバック
function buildPreview(id) {
  const wrap = document.createElement("div");
  wrap.className = "preview preview--" + id;

  const img = document.createElement("img");
  img.className = "preview-img";
  img.loading = "lazy";
  img.alt = "";
  img.src = "見本画像/" + encodeURIComponent(id) + ".png";
  img.addEventListener("error", () => {
    img.remove();
    wrap.classList.add("preview--css");
    renderCssPreview(wrap, id);
  });
  wrap.appendChild(img);
  return wrap;
}

// 各スタイルのCSSプレビュー(疑似イラスト見本)を生成
function renderCssPreview(wrap, id) {
  switch (id) {
    case "notebook":
      wrap.innerHTML =
        '<div class="nb-margin"></div>' +
        '<div class="nb-title">会議メモ</div>' +
        '<div class="nb-line"><span class="nb-mark">決定</span>事項を整理</div>' +
        '<div class="nb-line">・次回までに資料作成</div>' +
        '<div class="nb-line">・<span class="nb-mark2">担当</span>を決める</div>' +
        '<div class="nb-doodle">★</div>';
      break;
    case "handwritten":
      wrap.innerHTML =
        '<div class="hw-title">MTG メモ ✎</div>' +
        '<div class="hw-bubble">よし!</div>' +
        '<div class="hw-line">→ アイデア出し</div>' +
        '<div class="hw-line">○ 来週レビュー</div>' +
        '<div class="hw-star">✦</div>';
      break;
    case "formal":
      wrap.innerHTML =
        '<div class="fm-title">議 事 録</div>' +
        '<div class="fm-table"><span>日時</span><span>6/30</span><span>出席</span><span>4名</span></div>' +
        '<div class="fm-sec">■ 決定事項</div>' +
        '<div class="fm-row">1. 予算を承認</div>' +
        '<div class="fm-sec">■ ToDo</div>' +
        '<div class="fm-row">2. 資料提出（〜7/5）</div>';
      break;
    case "whiteboard":
      wrap.innerHTML =
        '<div class="wb-title">📌 Meeting</div>' +
        '<div class="wb-note wb-y">タスクA</div>' +
        '<div class="wb-note wb-b">タスクB</div>' +
        '<div class="wb-arrow">↓</div>' +
        '<div class="wb-text">完了 ✓</div>';
      break;
    case "graphic-recording":
      wrap.innerHTML =
        '<div class="gr-ribbon">今日のゴール</div>' +
        '<div class="gr-icon">💡</div>' +
        '<div class="gr-bubble">いいね!</div>' +
        '<div class="gr-person">🧑</div>' +
        '<div class="gr-arrow">➜</div>' +
        '<div class="gr-icon2">🚀</div>';
      break;
    case "report":
      wrap.innerHTML =
        '<div class="ig-num">01</div>' +
        '<div class="ig-bar"><i style="height:60%"></i><i style="height:90%"></i><i style="height:40%"></i></div>' +
        '<div class="ig-stat">85%</div>' +
        '<div class="ig-label">達成</div>';
      break;
    case "grid-notebook":
      wrap.innerHTML =
        '<div class="gd-title">[ 議題まとめ ]</div>' +
        '<div class="gd-line">☑ 仕様を確定</div>' +
        '<div class="gd-line">☑ 担当を割り当て</div>' +
        '<div class="gd-line">→ 次回 7/5 レビュー</div>';
      break;
    case "sketchnote":
      wrap.innerHTML =
        '<div class="sk-banner">POINT</div>' +
        '<div class="sk-icon">✎</div>' +
        '<div class="sk-line">アイデア → 検証</div>' +
        '<div class="sk-box">決定!</div>' +
        '<div class="sk-arrow">➜</div>';
      break;
    case "blackboard":
      wrap.innerHTML =
        '<div class="bb-title">今日のまとめ</div>' +
        '<div class="bb-line">・決定事項を共有</div>' +
        '<div class="bb-line">・次回までに準備</div>' +
        '<div class="bb-doodle">☼</div>';
      break;
    case "newspaper":
      wrap.innerHTML =
        '<div class="np-masthead">社 内 報</div>' +
        '<div class="np-head">プロジェクト始動</div>' +
        '<div class="np-cols"><div class="np-col"></div><div class="np-col"></div></div>';
      break;
    case "slide":
      wrap.innerHTML =
        '<div class="sl-accent"></div>' +
        '<div class="sl-title">会議サマリー</div>' +
        '<div class="sl-bullet">● 決定事項</div>' +
        '<div class="sl-bullet">● 次のアクション</div>' +
        '<div class="sl-page">1</div>';
      break;
    case "magazine":
      wrap.innerHTML =
        '<div class="mg-photo"></div>' +
        '<div class="mg-kicker">FEATURE</div>' +
        '<div class="mg-title">議論の<br>ハイライト</div>' +
        '<div class="mg-cols"></div>';
      break;
    case "comic":
      wrap.innerHTML =
        '<div class="cm-panel"><span class="cm-bubble">始めよう</span></div>' +
        '<div class="cm-panel"><span class="cm-bubble">いいね!</span></div>' +
        '<div class="cm-panel"><span class="cm-bubble">担当は?</span></div>' +
        '<div class="cm-panel"><span class="cm-bubble">決定!</span></div>';
      break;
    case "sticky":
      wrap.innerHTML =
        '<div class="st-note st-y">案A</div>' +
        '<div class="st-note st-p">案B</div>' +
        '<div class="st-note st-b">案C</div>' +
        '<div class="st-note st-g">決定!</div>';
      break;
    case "minimal":
      wrap.innerHTML =
        '<div class="mn-title">SUMMARY</div>' +
        '<div class="mn-rule"></div>' +
        '<div class="mn-line"></div>' +
        '<div class="mn-line short"></div>' +
        '<div class="mn-line"></div>';
      break;
    case "mindmap":
      wrap.innerHTML =
        '<div class="mm-center">議題</div>' +
        '<div class="mm-node mm-1">企画</div>' +
        '<div class="mm-node mm-2">予算</div>' +
        '<div class="mm-node mm-3">日程</div>' +
        '<div class="mm-node mm-4">担当</div>';
      break;
    case "pop":
      wrap.innerHTML =
        '<div class="pp-title">かいぎメモ ♪</div>' +
        '<div class="pp-card pp-1">😊 アイデア</div>' +
        '<div class="pp-card pp-2">⭐ きまったこと</div>' +
        '<div class="pp-badge">NEW</div>';
      break;
    default:
      wrap.textContent = "preview";
  }
}

function buildCard(item) {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.dataset.tag = item.tag;
  card.title = "クリックでプロンプトをコピー";

  card.appendChild(buildPreview(item.id));

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML =
    '<div class="card-tag">' + item.tag + "</div>" +
    "<h2>" + item.title + "</h2>" +
    '<p class="card-desc">' + item.desc + "</p>" +
    '<span class="copy-hint">クリックしてコピー 📋</span>';
  card.appendChild(body);

  card.addEventListener("click", () => copyPrompt(item, card));
  return card;
}

async function copyPrompt(item, card) {
  try {
    await navigator.clipboard.writeText(item.prompt);
  } catch (e) {
    // クリップボードAPIが使えない環境向けのフォールバック
    const ta = document.createElement("textarea");
    ta.value = item.prompt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
  showToast("「" + item.title + "」のプロンプトをコピーしました ✓");
  card.classList.add("copied");
  setTimeout(() => card.classList.remove("copied"), 900);
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

function buildFilters() {
  const bar = document.getElementById("filterBar");
  const tags = ["すべて", ...new Set(PROMPTS.map((p) => p.tag))];
  tags.forEach((tag, i) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (i === 0 ? " active" : "");
    btn.textContent = tag;
    btn.addEventListener("click", () => applyFilter(tag, btn));
    bar.appendChild(btn);
  });
}

function applyFilter(tag, btn) {
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".card").forEach((c) => {
    c.style.display = tag === "すべて" || c.dataset.tag === tag ? "" : "none";
  });
}

function init() {
  const grid = document.getElementById("grid");
  PROMPTS.forEach((item) => grid.appendChild(buildCard(item)));
  buildFilters();
}

document.addEventListener("DOMContentLoaded", init);
