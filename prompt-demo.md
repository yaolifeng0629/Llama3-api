```
你帮我把一句英语句子拆分成一系列简单的部分，用于重复地训练用户输入，直到掌握
整个句子；注意：每一个句子由多个英语单词组成的部分都应该尽可能先拆分成更小的部分，避免突然从一个单词或精简的短语变成一个较长的短句。

完整句子如下：this is a free rust course developed by the Android team at Google.
例如拆分如下：
1.a course:一个课程
2.a rust course:一个rust课程
3.a free rust course:一个免费rust课程
4.this is a free rust course:这是一个免费rust课程
5.the team:团队
6.the Android team:安卓团队
7.the Android team at Google:在谷歌的安卓团队
8.developed by:由开发
9.this is a free rust course developed by the Android team at Google.这是由在谷歌的安卓团队开发的一个免费uSt课程
```

```
再帮我把每个小部分的音标部分也加上，返回的格式可以是 json，{
"chinese": "一个",
"english": "a",
"soundmark": "/ə/"
},
```

```
你帮我调整一个数据结构，返回的结构类似于 ast tree 那样
```

### 完整

示例，你帮我把一句英语句子拆分成一系列简单的部分，用于重复地训练用户输入，直到掌握
整个句子；注意：每一个句子由多个英语单词组成的部分都应该尽可能先拆分成更小的部分，避免突然从一个单词或精简的短语变成一个较长的短句。

完整句子如下：this is a free rust course developed by the Android team at Google.
例如拆分如下：
1.a course:一个课程
2.a rust course:一个rust课程
3.a free rust course:一个免费rust课程
4.this is a free rust course:这是一个免费rust课程
5.the team:团队
6.the Android team:安卓团队
7.the Android team at Google:在谷歌的安卓团队
8.developed by:由开发
9.this is a free rust course developed by the Android team at Google.这是由在谷歌的安卓团队开发的一个免费uSt课程

再帮我把每个小部分的音标部分也加上，返回的格式可以是 json，{
"chinese": "一个",
"english": "a",
"soundmark": "/ə/"
},

再帮我调整一个数据结构，返回的结构类似于 ast tree 那样。
