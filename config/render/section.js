/**
 * 对文段的一个简单封装
 */
const p = (left = '', right = '') => {
  return { left, right }
}

/**
 * 正文部分
 */
export default [
  {
    title: '实践经历',
    content: [
      p(
        `**重庆邮电大学 · 红岩网校工作站**`,
        `2025.9 - 至今`
      ),
      p(
        `<small>隶属校团委的学生互联网组织，成立于2000年，成员70余人，具备 PRD-UI-前后端开发-运营-迭代完整开发流程。</small>`
      ),
      p(`目前担任Web研发部24级负责人`),
      p(),
      p(
        `**苏州语灵人工智能科技有限公司 · Dify 前端部门**`,
        `2026.1.27 - 至今`
      ),
      p(
        `<small>参与 Dify Enterprise 企业级 LLMOps 平台前端开发，重点涉及 Agent 应用、权限管理、工作空间管理和用量管控等模块。</small>`
      ),
      p(
        `<small>技术栈：Next.js、React、TypeScript、Radix UI、Tailwind CSS、TanStack Query、React Hook Form、Zod、Zustand、i18next。</small>`
      ),
      p(
        `<small>- 独立开发 RBAC 权限体系，实现树形权限配置界面与通用组件，支持多资源的差异化权限控制。</small>`
      ),
      p(
        `<small>- 独立开发用量管控中的资源组管理功能，实现配额、限速等可视化配置；参与工作空间管理相关功能开发。</small>`
      ),
      p(
        `<small>- 参与组件与工程化治理，包括组件维护、国际化规范、ESLint 与 Husky 配置、Context 拆分、类型治理和模块边界整理。</small>`
      ),
      p(
        `<small>- 参与 Agent 应用前端开发，参与 Human Input、RAG 等模块的交互与功能落地，熟悉 Agent 工作流中输入处理、知识检索和结果展示等前端场景。</small>`
      ),
      p(
        `<small>- 参与 Console 首屏性能优化，将 LCP 从约 1300ms 优化至 500ms 左右。</small>`
      ),
      p(
        `<small>- 积极认领社区 Issue，完成 Bug 修复与功能优化</small>`
      ),
      p(`<small>开源地址：https://github.com/langgenius/dify</small>`),
      p(
        `<small></small>`
      ),
    ],
  },
  {
    title: '个人作品',
    content: [
      p(
        `<small>**个人主页**（www.smob.cc）| Next.js + TS + Tailwind CSS + Sass，rem 多端适配，丰富交互设计。</small>`
      ),
      p(
        `<small>**个人博客**（blog.smob.cc）| Next.js + TS + Tailwind CSS，多端适配，日常随笔记录。</small>`
      ),
      p(
        `<small>**掌上重邮课程表 Demo** | React + Sass + Zustand，数据 Mock，良好的移动端适配，功能完善。</small>`
      ),
    ],
  },
  {
    title: '项目经历',
    content: [
      p(
        `**重邮帮（校团委官方微信小程序）**`,
        `2025.7 - 2026.7`
      ),
      p(
        `<small>- 负责抢票、身份管理、场地申请等模块的功能迭代与问题修复。</small>`
      ),
      p(
        `<small>- 使用 Recoil 构建跨分包全局状态管理，处理状态共享与双角色权限切换场景。</small>`
      ),
      p(
        `<small>- 通过分包加载和组件按需加载控制主包体积在 2MB 以内，并改善首屏加载体验。</small>`
      ),
      p(
        `<small>- 建立 TypeScript 类型约束和代码规范，重构复杂业务逻辑，提升模块可维护性。</small>`
      ),
      p(),
      p(
        `**数据中台（红岩网校数据分析可视化平台）**`,
        `2025.7 - 2026.7`
      ),
      p(
        `<small>技术栈：React + vite + TypeScript + tailwindcss + SWR + ECharts</small>`
      ),
      p(
        `<small>- 开发项目指标追踪、多维度数据对比和可视化看板功能。</small>`
      ),
      p(
        `<small>- 基于 Ant Design Form 实现多条件、级联和时间范围筛选，通过状态管理支持时间与数据双对比模式。</small>`
      ),
      p(
        `<small>- 使用 SWR 管理数据请求与缓存，封装支持交互和窗口自适应的 ECharts 图表组件，并通过 Ref 优化图表渲染。</small>`
      ),
      p(
        `<small>- 使用 Tailwind CSS 原子化样式与自定义工具类，保持页面样式一致性。</small>`
      ),
    ],
  },
  {
    title: '个人能力',
    content: [
      p(
        `- *技术栈：* HTML5、CSS3、JavaScript（ES6+）、React、Vue、TypeScript、Next.js。`
      ),
      p(
        `<small>- *工程化：* 使用 Webpack、Vite、ESLint、Prettier、Husky、lint-staged、Git、Docker 和 CI/CD 工具，具备代码规范、版本管理和基础部署实践。</small>`
      ),
      p(
        `<small>- *业务开发：* 具备组件抽象、复杂表单、状态管理、权限控制、国际化和数据可视化开发经验。</small>`
      ),
      p(
        `<small>- *调试与基础知识：* 熟悉 Chrome DevTools 基本调试流程，了解 HTTP(S)、DNS、常见前端安全风险及基础性能优化方法。</small>`
      ),
      p(
        `<small>- *服务端协作：* 了解 Node.js、Go 和 Nginx 的基础使用，可配合完成接口联调与基础部署配置。</small>`
      ),
      p(
        `<small>- *AI 辅助开发：* 使用 Claude、Codex 等工具辅助代码检索、问题定位和文档整理，并对输出结果进行验证。</small>`
      ),
      p(
        `<small>- *协作能力：* 具备需求理解、问题排查和团队协作经验，注重代码规范与可维护性。</small>`
      ),
    ],
  },
]
