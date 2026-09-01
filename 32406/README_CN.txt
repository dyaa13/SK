DYAA NCEA Numeracy 32406 — Mock Exam 1 (2025-style)
=====================================================

本版本根据用户提供的完整 2025 32406 Online Assessment Q1–Q5 结构重新设计。

结构
----
Question One: Theme Park        — 6 questions
Question Two: Wellbeing         — 6 questions
Question Three: Recycling       — 6 questions
Question Four: E-bikes          — 6 questions
Question Five: Outdoor Adventure— 6 questions

Total: 30 questions
Time: 60 minutes

设计原则
--------
- 一个大题使用一个生活情境，连续考不同 numeracy skills。
- 多使用 table / simple graph / simple functional diagram。
- 不使用复杂或纯装饰性图片。
- 保留 written explanation / justify 类型题目。
- Written response 使用关键数字与证据做自动 practice checking，完整回答仍会保存到 Google Sheet 供老师复核。

Online Exam
-----------
- 学生输入姓名后开始。
- 一次显示一道小题。
- 左侧按 1a–5f 导航。
- 60 分钟总倒计时。
- 考试中不显示答案。
- Submit Test 只在最后一题出现。
- 时间到自动提交。
- 提交显示 practice score / wrong / unanswered / time used。

Google Sheet
------------
沿用 DYAA ICAS 当前 Google Apps Script Web App endpoint。
config.js:
    resultSheetName: "NCEA32406"

因此成绩写入同一个 Google Sheet 中的 NCEA32406 tab。
现有 ICAS tab 不受影响。

GitHub
------
把整个文件夹上传到 GitHub repository 的同一目录即可。
入口文件是 index.html。

以后加 Mock 2
-------------
新增：
questions/mock2_questions.js
answers/mock2_answers.js
并在 catalog.js 增加 Mock 2 配置。

Mock 1 与 2025 正式卷的关系
---------------------------
本 Mock 仅模仿结构、技能组合和在线作答方式。
场景、数据、题目内容均重新设计，不照抄 2025 正式题。


Mock 2（综合 2023 paper sample + 2025 online sample）
--------------------------------------------------
Question One: Coastal Journey
Question Two: Food Festival
Question Three: Wildlife Reserve
Question Four: Home Renovation
Question Five: School Sports Day

Mock 2 继续使用：
- 5 个大情境
- 每个大情境 6 个小题
- 共 30 小题
- 60 分钟
- table / simple graph / functional diagram 为主
- 包含 numeric、MCQ、written explanation
- Google Sheet 继续写入 NCEA32406 tab

Mock 2 重点把两套 sample 的题型混合：
- 2023 paper 风格：方向、比例尺、估算、面积、概率、排序/数据读取、实际生活计算
- 2025 online 风格：同一情境连续考多技能、折扣/费用、rate、scatter/line/histogram、角度估算、written justification


v4.0 复核与 Mock 3
------------------
复核 Mock 1 / Mock 2 后修正：
1. Mock 1 的量角器刻度方向，使图上 70° 与答案一致。
2. Mock 2 的 symmetry 图四个方向改成完全相同，使 4 条对称轴与答案一致。
3. Mock 2 一处 written explanation 的关键词判分放宽，减少正确答案被误判。

新增 Mock 3：
Question One — Public Transport
Question Two — Community Cafe
Question Three — Conservation Project
Question Four — Home Energy
Question Five — Community Tournament

Mock 3 同样为：
- 5 个大情境
- 每题 6 个小题
- 共 30 小题
- 60 分钟
- 数字题 / 选择题 / written explanation 混合
- 表格、简单图表、必要的功能性示意图
- 继续提交到 Google Sheet 的 NCEA32406 tab


v5.0 — Final Recheck + Mock 4
-----------------------------
重新复核 Mock 1–3：
- 90 道题的题目数据、图表数据与数值答案重新计算。
- JS syntax / 题目数量 / 答案数量重新检查。
- 没有发现新的数学答案错误。
- Mock 1 Q4f written explanation 自动判分条件放宽，允许学生引用不同年份的下降数据。

新增 Mock 4：
Question One — Weekend Market
Question Two — Healthy Living
Question Three — School Camp
Question Four — Electric Cars
Question Five — Community Sports

Mock 4:
- 5 个大情境
- 每个 6 小题
- 30 小题
- 60 分钟
- 综合 2023 paper sample + 2025 online sample
- 表格 / histogram / line graph / scatter graph / protractor / simple diagrams
- MCQ + numeric + written explanation
- Google Sheet 继续写入 NCEA32406


v6.0 — Recheck + Mock 5
-----------------------
再次复核 Mock 1–4：
- 共 120 道题。
- 重新核对题目、图表数值、数值答案和 written-answer 逻辑。
- 没有发现新的数学答案错误。
- 题库数量和 JS syntax 全部通过。

新增 Mock 5：
Question One — Airport Travel
Question Two — Pet Care
Question Three — Farming
Question Four — Mobile Phones
Question Five — Community Event

仍为：
- 5 个大情境
- 每个 6 小题
- 30 小题
- 60 分钟
- MCQ / numeric / written explanation 混合
- table + simple histogram / graph / protractor / functional diagrams
- Google Sheet 写入 NCEA32406 tab
