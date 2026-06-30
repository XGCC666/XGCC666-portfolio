import {
  BrainCircuit,
  Code2,
  FileCheck2,
  Gamepad2,
  GitBranch,
  Mail,
  MapPin,
  NotebookTabs,
  Shapes,
  Sparkles,
  Trophy,
} from '@lucide/vue';

export const profile = {
  name: '何星一',
  initials: 'HX',
  role: 'Mathematics Undergraduate / AI Agent & Game Tech Builder',
  location: '厦门 / 吉隆坡',
  education: '厦门大学马来西亚分校 · 数学与应用数学',
  email: '2954473911@qq.com',
  github: 'https://github.com/XGCC666',
  tagline: '把抽象推理落到可验证、可运行的系统里。',
  summary:
    '我关注数学建模、逻辑推理、Lean 4 形式化验证、AI Agent 与游戏工业化管线。相比单一技术栈，我更擅长在抽象问题、工程实现和产品协作之间切换，把复杂系统拆成能验证、能迭代、能交付的结构。',
  highlights: [
    { value: 'Lean 4', label: '形式化验证与定理证明' },
    { value: 'LLM Agent', label: '自我修正循环与模型路由' },
    { value: 'Game Tech', label: '动作捕捉、绑定与制作流程' },
  ],
};

export const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/XGCC666', href: profile.github, icon: GitBranch },
  { label: 'Location', value: profile.location, href: '/resume', icon: MapPin },
];

export const skills = [
  {
    title: '数学与形式化',
    icon: FileCheck2,
    items: ['数学分析', '高等代数', '博弈论', '随机过程', '回归分析', 'Formal Verification'],
  },
  {
    title: 'AI 与工程',
    icon: BrainCircuit,
    items: ['PyTorch', 'Hugging Face', 'Prompt Engineering', 'LLM Fine-tuning', 'OpenAI API', 'Git'],
  },
  {
    title: '编程与全栈',
    icon: Code2,
    items: ['Python', 'Lean 4', 'C/C++', 'R', 'LaTeX', 'HTML/CSS/JavaScript'],
  },
  {
    title: '游戏与多媒体',
    icon: Gamepad2,
    items: ['Maya', '动作捕捉', 'Rigging', 'Premiere', '虚幻引擎流程', 'Cinematic 协同'],
  },
];

export const projects = [
  {
    title: '基于 LLM 的 Lean 4 自动形式化智能体',
    meta: '独立开发 · Python / Lean 4 / Prompt Engineering / AST Parsing',
    icon: Sparkles,
    summary:
      '面向自然语言数学证明到 Lean 4 代码的自动转化，构建可验证、可反馈、可迭代的 Auto-Formalization Agent。',
    points: [
      '设计 Self-Correction Loop：生成 Lean 代码后调用编译器验证，并把错误信息回传给 LLM 二次修正。',
      '实现 Lean 4 语法的基础 AST 解析，用于拆分证明步骤并提升 Mathlib 调用准确度。',
      '通过 Few-shot Prompting 优化模型对形式化证明风格和库函数选择的适应能力。',
    ],
  },
  {
    title: '多角色智能交互系统',
    meta: '全栈开发 · Python / Flask / JavaScript / OpenAI API',
    icon: NotebookTabs,
    summary:
      '一套轻量级 Web AI 聚合平台，用多模型与多 Agent 路由缓解单一模型在编程、写作和推理场景中的局限。',
    points: [
      '使用 Python 搭建后端服务，集成多种 LLM，并支持 Streaming Response 降低等待延迟。',
      '设计多 Agent 路由机制，根据任务场景自动匹配 System Prompt 与模型策略。',
      '实现会话上下文的本地化存储，让高频工作流具备连续性。',
    ],
  },
  {
    title: '基于 Lean 4 的广义井字棋形式化验证',
    meta: '交互式定理证明 · Lean 4 / 组合博弈论',
    icon: Shapes,
    summary:
      '把经典井字棋扩展为广义 (m, n, k) 模型，用 Lean 4 类型系统表达规则并验证特定维度策略。',
    points: [
      '将棋盘、落子与胜负条件转化为形式化定义，降低规则歧义。',
      '编写 Tactic 脚本验证部分必胜或必平策略，连接组合博弈论与可执行证明。',
    ],
  },
];

export const experience = [
  {
    period: '2025.08 - 2025.09',
    title: '制片助理 / 技术支持',
    company: '厦门奇之旅数字科技有限公司',
    icon: Trophy,
    points: [
      '参与国产动作游戏《影之刃零》(Phantom Blade Zero) 的制作流程。',
      '使用 Maya 处理光学动作捕捉数据，负责人物骨骼绑定修正与动画帧优化。',
      '协同美术与程序部门优化资产导入流程，并参与 Cinematic 运镜辅助与后期配音剪辑。',
    ],
  },
];

export const education = [
  {
    period: '2023.09 - 2027.09 预计',
    title: '厦门大学马来西亚分校',
    detail: '数学与应用数学 · 本科',
  },
  {
    period: '2020.09 - 2023.06',
    title: '福建省厦门第一中学',
    detail: '高中阶段',
  },
];

export const extras = [
  '英语：IELTS 6.0 / Linguaskill 158，可流畅阅读英文技术文档与论文。',
  '长期追踪 LMSYS Chatbot Arena 与 Hugging Face 榜单，关注模型推理能力与业务场景适配。',
  '熟悉 Ollama/vLLM、本地部署、量化、微调流程与 Anaconda 深度学习环境管理。',
  '熟练使用 LaTeX 排版、Git 版本控制，并能用 Canva/PPT 制作清晰的技术演示。',
];
