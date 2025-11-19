import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mini Pi Textbook",
  description: "ROS부터 강화학습까지",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { 
      href: 'https://fonts.googleapis.com/css2?family=Chiron+GoRound+TC:wght@200..900&display=swap',
      rel: 'stylesheet' 
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'WeGo', link: 'https://wego-robotics.com/' }
    ],

    sidebar: {
      '/hardware/': [
        {
          text: 'Mini Pi 로봇의 하드웨어',
          items: [
            { text: '개요',           link: '/hardware/' },
            { text: '사양 읽는 방법',   link: '/hardware/spec' },
            { text: '기계 기구부',      link: '/hardware/mech' },
            { text: '구동계(엑추에이터)', link: '/hardware/power' },
            { text: '제어 시스템',      link: '/hardware/control' },
            { text: '통신 시스템',      link: '/hardware/comm' },
            { text: '입력 장치(센서)',  link: '/hardware/input' },
            { text: '출력 장치',       link: '/hardware/output' },
          ]
        }
      ],
      '/robot-app/': [
        {
          text: 'Mini Pi 로봇의 응용',
          items: [
            { text: '개요',         link: '/robot-app/' },
            { text: '기본 사용법',   link: '/robot-app/basic' },
            { text: '노드 매니저',   link: '/robot-app/node' },
            { text: '로봇의 이동',   link: '/robot-app/move' },
            { text: '원격 제어',    link: '/robot-app/remote' },
            { text: '물체 추적',    link: '/robot-app/opencv' },
            { text: '마커 인식',    link: '/robot-app/qrcode' },
          ]
        }
      ],
      '/ai-app/': [
        {
          text: 'Mini Pi 로봇과 AI 기본',
          items: [
            { text: '개요',          link: '/ai-app/' },
            { text: 'NPU 사용법',    link: '/ai-app/basic' },
            { text: '보행 AI 사용법', link: '/ai-app/walk' },
            { text: 'AI 물체 인식',   link: '/ai-app/yolo' },
            { text: '음성인식 & TTS', link: '/ai-app/voice' },
            { text: 'LLM과 MCP',     link: '/ai-app/llm' },
          ]
        }
      ],
      '/rl-adv/': [
        {
          text: 'Mini Pi 로봇과 AI 심화',
          items: [
            { text: '개요',          link: '/rl-adv/' },
            { text: '보행 강화 학습',    link: '/rl-adv/walk' },
            { text: '영상 모방 학습',    link: '/rl-adv/imtation' },
          ]
        }
      ],
      '/repair/': [
        {
          text: 'Mini Pi 로봇의 고장수리',
          items: [
            { text: '개요',          link: '/repair/' },
            { text: '오동작 관찰과 원인 분석 방법',    link: '/repair/method' },
            { text: '오동작 사례 및 해결방법',    link: '/repair/list' },
          ]
        }
      ],
      '/soccer-manual/': [
        {
          text: 'Mini Pi 데모 매뉴얼',
          items: [
            { text: '개요', link: '/soccer-manual/'},
            { text: '공 추적', link: '/soccer-manual/ball_tracking'},
            { text: '공 골대 넣기', link: '/soccer-manual/ball_goal'},
            { text: 'LLM 사용', link: '/soccer-manual/using_llm'},
            { text: '웹 GUI 사용', link: 'soccer-manual/web_gui'},
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WeGo-Robotics' }
    ]
  },
  markdown: {
    math: true
  }
})
