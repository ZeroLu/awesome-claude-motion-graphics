const fs = require("fs"),
  path = require("path");
const root = path.join(__dirname, "..");
const cases = JSON.parse(fs.readFileSync(path.join(root, "data/cases.json"))),
  media = JSON.parse(fs.readFileSync(path.join(root, "data/media.json")));
const sections = [
  ["Product Launch Videos", "产品发布视频"],
  ["Showreels & Motion Design Portfolios", "动效作品集"],
  ["Explainers & Knowledge Videos", "科普与知识讲解"],
  ["Technical Demos & Visualizations", "技术演示与可视化"],
  ["Ads & Marketing", "广告与营销"],
  ["Fun & Creative Experiments", "趣味创意实验"],
  ["Storytelling & Narrative Animation", "故事与叙事动画"],
  ["Game Effects & Cinematics", "游戏特效与过场"],
  ["Music Videos & Visualizers", "音乐 MV 与视听可视化"],
  ["Branding & Logo Animation", "品牌与标志动画"],
  ["Social Media Content", "社交媒体内容"],
  ["Tutorials & How-To", "教程与操作指南"],
  ["Data Visualization", "数据可视化"],
  ["Event Intros & Stings", "活动开场与短片"],
  ["Other", "其他"],
  ["Visual Styles & Illustration", "风格动画与插画"],
  ["Motion Principles & UI Handoffs", "动效原理与 UI 交接"],
];
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
function promptBox(label, p) {
  let fence = "`".repeat(
    Math.max(3, ...[...p.matchAll(/`+/g)].map((m) => m[0].length + 1)),
  );
  return `<details>\n<summary>${label}</summary>\n\n${fence}text\n${p.trim().replace(/[ \t]+$/gm, "")}\n${fence}\n\n</details>`;
}
function build(zh) {
  const l = zh ? 1 : 0;
  const playable = cases.filter(
    (e) => media[e.media_key]?.url || media[e.feishu?.media_key]?.url,
  ).length;
  let out = [
    "# Awesome Claude Motion Graphics 🎬",
    zh
      ? "[English](./README.md) | **简体中文**"
      : "**English** | [简体中文](./README.zh-CN.md)",
    "[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) [![GitHub stars](https://img.shields.io/github/stars/ZeroLu/awesome-claude-motion-graphics?style=social)](https://github.com/ZeroLu/awesome-claude-motion-graphics/stargazers)",
    zh
      ? "> Claude 动态图形与代码动画案例集：视频、原始提示词与创作者出处。涵盖产品发布、动效作品集、科普、3D、音乐 MV 等。"
      : "> A curated collection of Claude motion graphics and code animation: videos, original prompts, and creator credits. Explore product launches, showreels, explainers, 3D, music videos, and more.",
    zh
      ? "案例来自 X 与[卡尔的 AI 沃茨飞书文档](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)。保留原始提示词语言；飞书提供的中文版本标注在对应案例下。部分条目是交互演示或游戏，部分提示词依赖作者的参考文件、音乐或工具。"
      : "Cases come from X and [Karl’s AIwarts Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb). Prompts retain their source language; Chinese versions from Feishu appear alongside matching cases. Some entries are interactive demos or games, and some prompts require the creator’s reference files, music, or tools.",
    zh
      ? `**收录 ${cases.length} 个案例 · ${playable} 个可播放视频 · 17 个分类 · 飞书 37 条记录（22 条新增、15 条合并）**`
      : `**${cases.length} cases · ${playable} playable videos · 17 categories · 37 Feishu records (22 added, 15 merged)**`,
    zh
      ? "浏览与点赞数沿用原仓库采集快照，并非实时数据；没有公开数据的新案例不补造指标。视频优先使用 GitHub 原生附件播放器，暂未取得视频的案例保留原预览或来源链接。"
      : "View and like counts are snapshots inherited from the original collection, not live metrics. New cases without public metrics omit them. Videos use native GitHub attachment players where available; remaining cases retain their original preview or source link.",
    zh ? "## 目录" : "## Contents",
  ];
  out.push(
    sections
      .map((x, i) => `${i + 1}. [${x[l]}](#category-${i + 1})`)
      .join("\n"),
  );
  out.push(
    zh
      ? "[数据与维护](#data) · [来源与许可](#credits)"
      : "[Data & maintenance](#data) · [Credits & license](#credits)",
  );
  for (let [si, sec] of sections.entries()) {
    out.push(`<a id="category-${si + 1}"></a>\n\n## ${si + 1}. ${sec[l]}`);
    for (let e of cases.filter((x) => x.section === si + 1)) {
      let metric = e.metrics
        ? zh
          ? e.metrics
              .replace(" views, ", " 次浏览，")
              .replace(" likes", " 次点赞")
          : e.metrics
        : "";
      out.push(
        `<a id="case-${e.id}"></a>\n\n### ${e.id}. ${zh ? e.title_zh : e.title}${metric ? " (" + metric + ")" : ""}`,
      );
      if (e.tags.length)
        out.push(
          zh
            ? `*用途：${tag(e.tags[0])} · 风格：${e.tags[1].split(", ").map(tag).join("、")}*`
            : `*Use case: ${e.tags[0]} · Style: ${e.tags[1]}*`,
        );
      let asset = media[e.media_key]?.url || media[e.feishu?.media_key]?.url;
      if (asset) out.push(asset);
      else if (e.poster)
        out.push(
          `<a href="${esc(e.source)}"><img src="${esc(e.poster)}" width="480" alt="${esc(zh ? e.title_zh : e.title)}"></a>`,
        );
      else
        out.push(
          zh
            ? "[在飞书查看原视频](" + e.source + ")"
            : "[Watch the original video on Feishu](" + e.source + ")",
        );
      if (e.id === 239 && !asset)
        out.push(
          zh
            ? "*视频暂缺：原帖已设为私密，保留原预览与提示词。*"
            : "*Video unavailable: the source post is private. The original preview and prompt are retained.*",
        );
      if (e.prompt_en && !zh)
        out.push(promptBox("Prompt · English translation", e.prompt_en));
      out.push(
        promptBox(
          e.prompt_language === "zh"
            ? zh
              ? "提示词 · 飞书中文版本"
              : "Prompt · Chinese version from Feishu"
            : zh
              ? "提示词 · 原文"
              : "Prompt · original",
          e.prompt,
        ),
      );
      if (e.feishu && e.media_key.startsWith("x"))
        out.push(
          promptBox(
            zh
              ? "提示词 · 飞书中文版本"
              : "Prompt · Chinese version from Feishu",
            e.feishu.prompt,
          ),
        );
      let author = e.source.match(/x.com\/([^/]+)/)?.[1];
      out.push(
        zh
          ? `*来源：${author ? "@" + author + " · [X 原帖](" + e.source + ")" : "[飞书案例文档](" + e.source + ")"}${e.feishu ? " · [飞书 " + e.feishu.id + "](" + e.feishu.source + ")" : ""}*`
          : `*Source: ${author ? "@" + author + " · [X post](" + e.source + ")" : "[Feishu collection](" + e.source + ")"}${e.feishu ? " · [Feishu " + e.feishu.id + "](" + e.feishu.source + ")" : ""}*`,
      );
      out.push("---");
    }
  }
  out.push(
    '<a id="data"></a>',
    zh ? "## 数据与维护" : "## Data & maintenance",
    zh
      ? "完整案例在 [`data/cases.json`](./data/cases.json)，飞书导入与去重对应关系在 [`data/feishu-import.json`](./data/feishu-import.json)，视频附件与获取状态在 [`data/media.json`](./data/media.json)。"
      : "Browse [`data/cases.json`](./data/cases.json) for cases, [`data/feishu-import.json`](./data/feishu-import.json) for import and deduplication mappings, and [`data/media.json`](./data/media.json) for video attachments and availability.",
    zh
      ? "修改数据后运行 `node scripts/build-readme.cjs`，同时生成中英文 README。新增案例请保留原作者与原帖，提供完整提示词，并按现有分类收录。"
      : "After editing the data, run `node scripts/build-readme.cjs` to regenerate both languages. Contributions should include creator credit, the original source, a complete prompt, and a suitable category.",
    zh
      ? "视频上传方式与维护说明见 [CONTRIBUTING.md](./CONTRIBUTING.md)。"
      : "See [CONTRIBUTING.md](./CONTRIBUTING.md) for the video upload workflow.",
    '<a id="credits"></a>',
    zh ? "## 来源与许可" : "## Credits & license",
    zh
      ? "感谢所有原作者与卡尔的 AI 沃茨的案例整理。仓库代码与整理内容沿用 [MIT](./LICENSE) 许可；引用的提示词、视频、品牌和第三方素材，其权利归各自权利人，仓库许可不授予这些素材的额外使用权。"
      : "Thanks to the original creators and Karl’s AIwarts for the case collection. Repository code and editorial material use the [MIT license](./LICENSE). Referenced prompts, videos, brands, and third-party assets remain subject to their respective owners’ rights; the repository license does not grant additional rights to those materials.",
  );
  return out.join("\n\n") + "\n";
}
function tag(t) {
  return (
    {
      launch: "产品发布",
      showreel: "作品集",
      explainer: "科普讲解",
      demo: "演示",
      ad: "广告",
      fun: "趣味",
      story: "故事",
      "game-fx": "游戏特效",
      music: "音乐",
      branding: "品牌",
      social: "社交",
      tutorial: "教程",
      "data-viz": "数据可视化",
      event: "活动",
      None: "未分类",
      "2d": "二维",
      "3d": "三维",
      "hand-drawn": "手绘",
      "pixel-art": "像素",
      "kinetic-type": "动态字体",
      particle: "粒子",
      realistic: "写实",
      cartoon: "卡通",
      minimal: "极简",
      retro: "复古",
      abstract: "抽象",
      "photo-based": "照片素材",
      infographic: "信息图",
      glitch: "故障",
      "paper-cut": "剪纸",
      risograph: "孔版印刷",
      clay: "黏土",
      "N/A": "未标注",
    }[t] || t
  );
}
if (
  cases.length !== 304 ||
  new Set(cases.map((x) => x.id)).size !== cases.length
)
  throw Error("Invalid case count or duplicate IDs");
for (let e of cases) {
  if (!e.prompt || !e.source || !e.title_zh)
    throw Error("Incomplete case " + e.id);
}
fs.writeFileSync(path.join(root, "README.md"), build(false));
fs.writeFileSync(path.join(root, "README.zh-CN.md"), build(true));
console.log("Generated English and Chinese READMEs for", cases.length, "cases");
