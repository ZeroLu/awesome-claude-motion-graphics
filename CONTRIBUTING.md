# Contributing / 参与维护

[English README](./README.md) · [中文 README](./README.zh-CN.md)

## Update a case / 更新案例

1. Edit `data/cases.json`. Keep stable numeric IDs, both titles, the full prompt, creator/source credits, and the category number.
2. Add or update the matching attachment in `data/media.json`.
3. Run `node scripts/build-readme.cjs` to generate both READMEs.
4. Check both language links, category links, prompt disclosure blocks, and video playback in GitHub.

原提示词保留原文。翻译请单独标注，不能把作者的发布说明、案例描述或自己补写的内容冒充原提示词。浏览和点赞数是采集快照；缺失时省略。相同原视频不要重复收录，飞书与 X 的对应关系记录在 `data/feishu-import.json`。

## Upload playable videos / 上传可播放视频

Use a native GitHub attachment URL on its own paragraph. Do not use an image tag for an MP4 or assume a repository file link will become a player.

使用 GitHub 原生附件地址，并让地址单独占一个段落。网页中可把 MP4 拖到 Markdown 编辑框，或点击附件按钮选择文件；等待上传完成后，把生成的 `https://github.com/user-attachments/assets/...` 地址保存到数据文件。

The GitHub CLI also supports the same attachment mechanism:

```sh
gh issue comment 1 --repo ZeroLu/awesome-claude-motion-graphics \
  --body-file video-body.md --attach ./example.mp4
```

Example `video-body.md`:

```md
### Case 123

![](./example.mp4)
```

The CLI replaces the local reference with the uploaded attachment URL. Copy that URL from the posted comment into `data/media.json`. See [GitHub’s attachment documentation](https://docs.github.com/en/github-cli/github-cli/attaching-files-with-github-cli).

Keep the full duration. Prefer H.264 video and AAC audio in an MP4 container with fast-start metadata. This collection targets files below 10 MB for compatibility with GitHub’s free-plan upload limit. Re-encode large files rather than trimming them. Verify that the file decodes and the published attachment plays before replacing a preview.

保留完整时长，优先使用 H.264/AAC MP4。大文件压缩后再上传，避免裁剪原片。原视频无法取得时，保留预览与来源，并在 `data/media.json` 如实记录状态。第三方视频与素材的使用仍需遵守其权利与授权条件。
